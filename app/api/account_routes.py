from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from app.models import db, User, Shop
from app.forms import ShopForm
from app.forms import ListingForm

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


@account_routes.route('/new', methods=["GET", "POST"])
def new_listing():
    form = ListingForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_listing = Listing(
                                name=form.name.data,
                                description=form.description.data,
                                image_1=form.image_1.data,
                                image_2=form.image_2.data,
                                image_3=form.image_3.data,
                                category_id=form.category_id.data,
                                shop_id=form.shop_id.data,
                                price=form.price.data,
        )
        db.session.add(new_listing)
        db.session.commit()
        return new_listing.to_dict()
    else:
        return {"errors": "invalid submission"}
