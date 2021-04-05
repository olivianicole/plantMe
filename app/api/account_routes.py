from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from app.models import db, User, Shop
from app.forms import ShopForm

account_routes = Blueprint('account', __name__)

@account_routes.route('/open-shop', methods=["POST"])
def open_shop():
    form = ShopForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit(): 
        new_shop = Shop(
                        shop_logo=form.shop_logo.data,
                        name=form.name.data,
                        owner_id=form.owner_id.data,
                        description=form.description.data,
                        city=form.description.data,
                        state=form.state.data,
                        country=form.country.data,
        )
        db.session.add(new_shop)
        db.session.commit()
        return new_shop.to_dict()
    else:
        return {"errors": "invalid submission"}
