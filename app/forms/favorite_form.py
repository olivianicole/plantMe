from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired


class FavoriteForm(FlaskForm):
    user_id = IntegerField("user_id", validators=[DataRequired()])
    listing_id = IntegerField("listing_id", validators=[DataRequired()])
