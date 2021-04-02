from .db import db


class Category(db.Model):
    __tablename__ = "categories"

    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(100), nullable=False)

    listings = db.relationship("Listing", back_populates="category")

    def to_dict(self):
        return {
            "id": self.id,
            "category": self.category,
            "listings": [listing.to_simple_dict() for listing in self.listings]
        }

    def to_simple_dict(self):
        return {
            "id": self.id,
            "category": self.category,
        }
