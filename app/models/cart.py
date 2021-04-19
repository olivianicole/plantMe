from .db import db


class Cart(db.Model):
    __tablename__ = "carts"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    shop_id = db.Column(db.Integer, db.ForeignKey("shops.id"))

    user = db.relationship("User", back_populates="carts")
    shop = db.relationship("Shop", back_populates="carts")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "shop_id": self.shop_id,
            "user": self.user.to_simple_dict(),
            "shop": self.shop.to_simple_dict(),
        }

    def to_simple_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "shop_id": self.shop_id,
        }
