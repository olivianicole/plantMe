from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired


class PurchaseForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    shop_id = IntegerField('shop_id', validators=[DataRequired()])
    quantity = IntegerField('quantity', validators=[DataRequired()])
