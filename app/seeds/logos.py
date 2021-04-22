from app.models import db, Logo

def seed_logos():

    logo1 = Logo(shop_id=1,
                url="https://i.etsystatic.com/isla/4c301d/38481952/isla_500x500.38481952_saohan4m.jpg?version=0")
    logo2 = Logo(shop_id=2,
                url="https://i.etsystatic.com/isla/067ac7/40353823/isla_500x500.40353823_7uavibj0.jpg?version=0")
    logo3 = Logo(shop_id=3,
                url="https://i.etsystatic.com/isla/049b31/41986207/isla_500x500.41986207_kt8arxu2.jpg?version=0")
    logo4 = Logo(shop_id=4,
                url="https://i.etsystatic.com/isla/6f11dc/32315682/isla_500x500.32315682_92u3kapf.jpg?version=0")
    logo5 = Logo(shop_id=5,
                url="https://i.etsystatic.com/isla/ef7190/41467576/isla_500x500.41467576_5md37oju.jpg?version=0")
    logo6 = Logo(shop_id=6,
                url="https://i.etsystatic.com/isla/2253a0/35944568/isla_500x500.35944568_kx9kenk3.jpg?version=0")
    logo7 = Logo(shop_id=7,
                url="https://i.etsystatic.com/isla/5db9d4/45647748/isla_500x500.45647748_kymzgfe0.jpg?version=0")
    logo8 = Logo(shop_id=8,
                url="https://i.etsystatic.com/isla/3a907a/45128805/isla_500x500.45128805_i8tbmm3m.jpg?version=0")
    logo9 = Logo(shop_id=9,
                url="https://i.etsystatic.com/isla/79f542/48490113/isla_500x500.48490113_k8ce3887.jpg?version=0")
    logo10 = Logo(shop_id=10,
                url="https://i.etsystatic.com/isla/e61f0e/47781475/isla_500x500.47781475_6wt65k2l.jpg?version=0")

    db.session.add(logo1)
    db.session.add(logo2)
    db.session.add(logo3)
    db.session.add(logo4)
    db.session.add(logo5)
    db.session.add(logo6)
    db.session.add(logo7)
    db.session.add(logo8)
    db.session.add(logo9)
    db.session.add(logo10)

    db.session.commit()

def undo_logos():
    db.session.execute('TRUNCATE logos;')
    db.session.commit()