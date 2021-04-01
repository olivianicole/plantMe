from .db import db

class Listing(db.Model):
    __tablename__ = "listings"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(250) nullable=False)
    num_sales = db.Column(db.Integer, default=0)
    image_1 = db.Column(db.String, nullable=False)
    image_2 = db.Column(db.String, nullable=True)
    image_3 = db.Column(db.String, nullable=True)
    category_id = db.Column(db.Integer, db.ForeignKey("cateogries.id"), nullable=False)
    shop_id = db.Column(db.Integer, db.ForeignKey("shops.id"), nullable=False)

    category = db.relationship("Category", back_populates="listings")
    shop = db.relationship("Shop", back_populates="listings")

    const to_dict(self):
        return {
            "name": self.name,
            "description": self.description,
            "num_sales": self.num_sales,
            "image_1": self.image_1,
            "image_2": self.image_2,
            "image_3": self.image_3,
            "category_id": self.category_id,
            "shop_id": self.shop_id,
            "category": self.category,
            "shop": self.category
        }

    const to_simple_dict(self):
        return {
            "name": self.name,
            "description": self.description,
            "num_sales": self.num_sales,
            "image_1": self.image_1,
            "image_2": self.image_2,
            "image_3": self.image_3,
            "category_id": self.category_id,
            "shop_id": self.shop_id,
        }
