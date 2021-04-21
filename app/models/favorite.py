from .db import db


class Favorite(db.Model):
    __tablename__ = "favorites"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    listing_id = db.Column(db.Integer, db.ForeignKey("listings.id"),
                           nullable=False)

    user = db.relationship("User", back_populates="favorites", lazy='subquery')
    listing = db.relationship("Listing", back_populates="favorites", lazy="subquery")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "listing_id": self.listing_id,
            "user": self.user.to_simple_dict(),
            "listing": self.listing.to_simple_dict()
        }

    def to_simple_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "listing_id": self.listing_id
        }
