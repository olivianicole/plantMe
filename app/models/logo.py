from .db import db


class Logo(db.Model):
    __tablename__ = "logos"

    id = db.Column(db.Integer, primary_key=True)
    shop_id = db.Column(db.Integer, db.ForeignKey("shops.id"))
    url = db.Column(db.String, nullable=False)
    
    shop = db.relationship("Shop", back_populates="logo")

    def to_dict(self):
        return {
            "id": self.id,
            "shop_id": self.shop_id,
            "url": self.url,
        }