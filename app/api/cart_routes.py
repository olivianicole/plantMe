from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from app.models import db, Purchase, Shop, User


cart_routes = Blueprint('cart', __name__)

@cart_routes.route('/', methods=['POST'])
@login_required
def add_to_cart()
