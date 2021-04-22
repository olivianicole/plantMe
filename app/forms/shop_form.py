from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, DateTimeField
from wtforms.validators import DataRequired


class ShopForm(FlaskForm):
    name = StringField("name", validators=[DataRequired()])
    shop_logo = StringField("shop_logo", validators=[DataRequired()])
    owner_id = IntegerField("owner_id", validators=[DataRequired()])
    description = TextAreaField("description")
    city = StringField("city")
    state = StringField("state")
    country = StringField("country")
