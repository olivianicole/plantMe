from .db import db


class Cart(db.Model):
    __tablename__ = "carts"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    listing_id = db.Column(db.Integer, db.ForeignKey("listings.id"))
    quantity = db.Column(db.Integer)

    user = db.relationship("User", back_populates="carts")
    listing = db.relationship("Listing", back_populates="carts")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "listing_id": self.listing_id,
            "quantity": self.quantity,
            "user": self.user.to_simple_dict(),
            "listing": self.listing.to_dict(),
        }

    def to_simple_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "listing_id": self.listing_id,
        }
