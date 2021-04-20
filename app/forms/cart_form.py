from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired


class CartForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    listing_id = IntegerField('listing_id', validators=[DataRequired()])
    quantity = IntegerField('quantity', validators=[DataRequired()])
