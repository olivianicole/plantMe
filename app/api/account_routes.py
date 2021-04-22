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

@account_routes.route('/image1', methods=["POST"])
def image_1():
    if "image1" not in request.files:
        return {"errors": "image required"}, 400
    image1 = request.files["image1"]
    image1.name = get_unique_filename(image1.name)
    upload1 = upload_file_to_s3(image1)

    if "url" not in upload1: # if the dictionary doesn't have a url key it means that there was an error when we tried to upload so we send back that error message
        return upload, 400
    url1 = upload["url"] #


@account_routes.route('/image2', methods=["POST"])
def image_2():
    if "image2" in request.files:
        if not allowed_file(image2.name):
            return {"errors": "file type not permitted"}, 400
        image2.name = get_unique_filename(image2.name)
        upload2 = upload_file_to_s3(image2)
        if "url" not in upload2: 
            url2 = ""
        url2 = upload2["url"]
    
@account_routes.route('/image3', methods=["POST"])
    
def image_3():

    if "image3" in request.files:
        if not allowed_file(image3.name):
            return {"errors": "file type not permitted"}, 400
        image3.name = get_unique_filename(image3.name)
        upload3 = upload_file_to_s3(image3)
        if "url" not in upload3: 
            url3 = ""
        url3 = upload3["url"]

@account_routes.route('/new', methods=["POST"])
def new_listing():
    form = ListingForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_listing = Listing(
                                name=form.name.data,
                                description=form.description.data,
                                image_1=url1,
                                image_2=url2,
                                image_3=url3,
                                category_id=form.category_id.data,
                                shop_id=form.shop_id.data,
                                price=form.price.data,
        )
        db.session.add(new_listing)
        db.session.commit()
        return new_listing.to_dict()
    else:
        return {"errors": "invalid submission"}
