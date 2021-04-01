from datetime import datetime
from .db import db


class Review(db.Model):
    __tablename__ = "reviews"

    id = db.Column(db.Integer, primary_key=True)
    listing_id = db.Column(db.Integer, db.ForeignKey("listings.id")
                           nullable=False, unique=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id", nullable=False), 
                        unique=True)
    rating = db.Column(db.Integer, default=0)
    review = db.Column(db.String(250))
    created_at = db.Column(db.Date)

    listing = db.relationship("Listing", back_populates="reviews")
    user = db.relationship("User", back_populates="reviews")

    def to_dict(self):
        return {
            "id": self.id,
            "listingId": self.listing_id,
            "user_id": self.user_id,
            "rating", self.rating,
            "review", self.review
            "listing": self.listing.to_simple_dict(),
            "user": self.user.to_simple_dict()

        }

    def to_simple_dict(self):
        return {
            "id": self.id,
            "listingId": self.listing_id,
            "user_id": self.user_id,
            "rating", self.rating,
            "review", self.review
        }
