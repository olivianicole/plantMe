from .db import db


class Logo(db.Model):
    __tablename__ = "logos"

    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "url": self.url,
        }