from .db import db


class Shop(db.Model):
    __tablename__ = "shops"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False, unique=True)
    owner_id = db.Column(db.Integer, db.ForeignKey(
                         "users.id"), nullable=False, unique=True)
    description = db.Column(db.String, nullable=False)

    user = db.relationship("User", back_populates="shops")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "ownerId": self.owner_id,
            "description": self.description,
            "user": self.user.to_simple_dict()
        }

    def to_simple_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "ownerId": self.owner_id,
            "description": self.description
        }
