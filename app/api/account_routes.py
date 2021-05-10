from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from app.models import db, User, Shop, Logo, Listing
from app.forms import ShopForm
from app.forms import ListingForm
from app.awsS3 import (
    upload_file_to_s3, allowed_file, get_unique_filename)

account_routes = Blueprint('account', __name__)

@account_routes.route("/logo", methods=["POST"])
@login_required
def logo():
    if "logo" not in request.files:
        return {"errors": "image required"}, 400
    logo = request.files["logo"]
   
    if not allowed_file(logo.filename):
        return {"errors": "file type not permitted"}, 400
    logo.filename = get_unique_filename(logo.filename)
    upload = upload_file_to_s3(logo)

    if "url" not in upload:             # if the dictionary doesn't have a url key it means that there was an error when we tried to upload so we send back that error message
        return upload, 400
    url = upload["url"]

    logo = Logo(url=url)

    db.session.add(logo)
    db.session.commit()
    return {"url": url}


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

@account_routes.route('/image', methods=["POST"])
@login_required
def upload_image():

    if "image" not in request.files:
        return {"errors": "image required"}, 400
    image = request.files["image"]
    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400
    image.filename = get_unique_filename(image.filename)
    upload = upload_file_to_s3(image)

    
    if "url" not in upload:     
        return upload, 400
    url = upload["url"]

    logo = Logo(url=url)

    db.session.add(logo)
    db.session.commit()
    return {"url": url}


@account_routes.route('/new', methods=["POST"])
def new_listing():
    form = ListingForm()
    print(form.name.data)
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
