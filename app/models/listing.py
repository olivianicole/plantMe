from .db import db


class Listing(db.Model):
    __tablename__ = "listings"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    image_1 = db.Column(db.String, nullable=False)
    image_2 = db.Column(db.String, nullable=True)
    image_3 = db.Column(db.String, nullable=True)
    category_id = db.Column(db.Integer, db.ForeignKey("categories.id"))
    shop_id = db.Column(db.Integer, db.ForeignKey("shops.id"),
                        nullable=False)
    price = db.Column(db.Numeric, nullable=False)
    category = db.relationship("Category", back_populates="listings")
    shop = db.relationship("Shop", back_populates="listings")
    favorites = db.relationship("Favorite", back_populates="listing",
                                cascade="all, delete-orphan")

    def to_dict(self):
        return {
            "name": self.name,
            "description": self.description,
            "image_1": self.image_1,
            "image_2": self.image_2,
            "image_3": self.image_3,
            "category_id": self.category_id,
            "shop_id": self.shop_id,
            "category": self.category.to_simple_dict(),
            "shop": self.category.to_simple_dict(),
            "favorites": [favorite.to_simple_dict() for favorite in favorites]
        }

    def to_simple_dict(self):
        return {
            "name": self.name,
            "description": self.description,
            "image_1": self.image_1,
            "image_2": self.image_2,
            "image_3": self.image_3,
            "category_id": self.category_id,
            "shop_id": self.shop_id,
        }
