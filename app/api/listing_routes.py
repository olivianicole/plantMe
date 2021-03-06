from flask import Blueprint, jsonify
# from flask_login import login_required
from app.models import Listing
# from sqlalchemy import desc

listing_routes = Blueprint('listing', __name__)


@listing_routes.route('/')
# @login_required
def listings():
    listings = Listing.query.limit(30)
    all_listings = Listing.query.all()
    print(all_listings)
    suggested_listings = Listing.query.order_by(Listing.price).limit(7)
    # print("LISTINGS", listings)
    return {"all_listings": [listing.to_simple_dict() for listing in listings],
            "suggested_listings": [listing.to_dict()
                                   for listing in suggested_listings],
            "total_listings": [listing.to_dict()
                                   for listing in all_listings]}


@listing_routes.route('/<int:id>')
def listing(id):
    listing = Listing.query.get(id)
    return {"current_listing": listing.to_dict()}
