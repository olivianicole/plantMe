from .db import db


class Shop(db.Model):
    __tablename__ = "shops"

    id = db.Column(db.Integer, primary_key=True)
    shop_logo = db.Column(db.String, nullable=False)
    name = db.Column(db.String, nullable=False, unique=True)
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"),
                         nullable=False, unique=True)
    description = db.Column(db.String, nullable=False)
    city = db.Column(db.String)
    state = db.Column(db.String)
    country = db.Column(db.String)
    num_sales = db.Column(db.Integer, default=0)
    store_link = db.Column(db.String)

    users = db.relationship("User", uselist=False, back_populates="shop")
    listings = db.relationship("Listing", back_populates="shop")
    purchases = db.relationship("Purchase", back_populates="shop")

    def to_dict(self):
        return {
            "id": self.id,
            "shop_logo": self.shop_logo,
            "name": self.name,
            "ownerId": self.owner_id,
            "description": self.description,
            "city": self.city,
            "state": self.state,
            "country": self.country,
            "num_sales": self.num_sales,
            "users": self.users.to_simple_dict(),
            "listings": [listing.to_simple_dict() for listing in self.listings]
        }

    def to_simple_dict(self):
        return {
            "id": self.id,
            "shop_logo": self.shop_logo,
            "name": self.name,
            "ownerId": self.owner_id,
            "description": self.description,
            "city": self.city,
            "state": self.state,
            "country": self.country,
            "num_sales": self.num_sales,
        }
