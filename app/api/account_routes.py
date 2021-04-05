from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Shop

account_routes = Blueprint('account', __name__)
