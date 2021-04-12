from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField, FloatField
from wtforms.validators import DataRequired


class ListingForm(FlaskForm):
    name = StringField("name", validators=[DataRequired()])
    description = TextAreaField("description", validators=[DataRequired()])
    image_1 = StringField("image_1", validators=[DataRequired()])
    image_2 = StringField("image_2")
    image_3 = StringField("image_3")
    category_id = IntegerField("category_id")
    shop_id = IntegerField("shop_id")
    price = FloatField("price", validators=[DataRequired()])
