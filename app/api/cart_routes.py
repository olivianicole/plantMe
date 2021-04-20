from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from app.models import db, Purchase, Shop, User, Cart
from app.forms import PurchaseForm
from app.forms import CartForm

cart_routes = Blueprint('cart', __name__)


@cart_routes.route('/')
@login_required
def cart():
    cart = Cart.query.all()
    return {"your_cart": [item.to_dict() for item in cart]}


@cart_routes.route('/add', methods=['GET', 'POST'])
@login_required
def add_to_cart():
    form = CartForm()
    print(request.get_json())
    # Get the csrf_token from the request cookie and put it into the
    # form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        cart = Cart(
            user_id=form.user_id.data,
            listing_id=form.listing_id.data,
            quantity=form.quantity.data,
        )
    db.session.add(cart)
    db.session.commit()
    return cart.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@cart_routes.route('/purchase', methods=['GET', 'POST'])
@login_required
def checkout():
    form = PurchaseForm()
    print(request.get_json())
    # Get the csrf_token from the request cookie and put it into the
    # form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        purchase = Purchase(
            user_id=form.user_id.data,
            listing_id=form.listing_id.data,
            quantity=form.quantity.data,
        )
    db.session.add(purchase)
    db.session.commit()
    return purchase.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
