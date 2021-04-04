from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Listing

listing_routes = Blueprint('listing', __name__)


@listing_routes.route('/')
@login_required
def listings():
    listings = Listing.query.all()
    return {"all_listings": [listing.to_simple_dict() for listing in listings]}
