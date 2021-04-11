from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from app.models import db, Purchase, Shop, User


cart_routes = Blueprint('cart', __name__)

@cart_routes.route('/', methods=['POST'])
@login_required
def checkout():
    form = PurchaseForm()
    print(request.get_json())
    # Get the csrf_token from the request cookie and put it into the
    # form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # Add the user to the session, we are logged in!
        purchase = Purchase(
            user_id: form.user_id.data,
            shop_id: form.shop_id.data,
            quantity: form.quantity.data,
        )
        db.session.add(purchase)
        db.session.commit()
        return purchase.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
