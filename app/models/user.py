from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    shop = db.relationship("Shop", uselist=False, back_populates="users")
    reviews = db.relationship("Review", back_populates="user")
    favorites = db.relationship("Favorite", back_populates="user")
    purchases = db.relationship("Purchase", back_populates="user")
    carts = db.relationship("Cart", back_populates="user")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):

        if self.shop:
            dict = {
                "id": self.id,
                "first_name": self.first_name,
                "email": self.email,
                "shop": self.shop.to_simple_dict(),
                "reviews": [review.to_simple_dict() for review in self.reviews],
                "favorites": [favorite.to_simple_dict()
                              for favorite in self.favorites],
            
                # "purchases": [purchase.to_simple_dict()
                #               for purchase in self.purchases]
            }
        else:
            dict = {
                "id": self.id,
                "first_name": self.first_name,
                "email": self.email,
                "reviews": [review.to_simple_dict() for review in self.reviews],
                "favorites": [favorite.to_simple_dict()
                              for favorite in self.favorites],
                # "purchases": [purchase.to_simple_dict()
                #               for purchase in self.purchases]
            }
        return dict

    def to_simple_dict(self):
        return {
          "id": self.id,
          "first_name": self.first_name,
          "email": self.email
        }
