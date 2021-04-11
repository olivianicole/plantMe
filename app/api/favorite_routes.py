from app.models import db, Favorite
from flask_login import login_required
from flask import Blueprint, session, request
from app.forms import FavoriteForm

favorite_routes = Blueprint('favorite', __name__)


@favorite_routes.route('/', methods=["POST"])
@login_required
def add_favorite():
    form = FavoriteForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        fav = Favorite(
            user_id=form.user_id.data,
            listing_id=form.listing_id.data
        )
        db.session.add(fav)
        db.session.commit()
        return fav.to_dict()
    else:
        return {"errors": "invalid favorite submission"}


@favorite_routes.route("/<int:id>/", methods=["GET"])
@login_required
def user_favorites(id):
    favs = Favorite.query.filter(Favorite.user_id == id).all()
    print(favs)
    return {"user_favorites": [fav.to_dict() for fav in favs]}


@favorite_routes.route("/<int:id>/delete/", methods=["GET"])
@login_required
def delete_favorite(id):
    fav = Favorite.query.get(id)
    db.session.delete(fav)
    db.session.commit()
    return fav.to_dict()
