from app.models import db, Shop


def seed_shops():

    shop1 = Shop(name="EucalyptusBlooms",
                 shop_logo="https://i.etsystatic.com/isla/4c301d/38481952/isla_500x500.38481952_saohan4m.jpg?version=0",
                 owner_id=1,
                 description="Eucalyptus & Lavender Shower, Bath and Boutquets",
                 city="Charlotte",
                 state="North Carolina",
                 country="United States",
                 num_sales=20836)
    shop2 = Shop(name="thenewplantco",
                 shop_logo="https://i.etsystatic.com/isla/067ac7/40353823/isla_500x500.40353823_7uavibj0.jpg?version=0",
                 owner_id=2,
                 description="We specialize in affordable and hard to find plants.",
                 city="",
                 state="",
                 country="United States",
                 num_sales=)
    shop3 = Shop(name="TropicalTouchPlants",
                 shop_logo="https://i.etsystatic.com/isla/049b31/41986207/isla_500x500.41986207_kt8arxu2.jpg?version=0",
                 owner_id=3,
                 description="Specializing in quality Tillandsias for over 30 years.", 
                 city="Clermont",
                 state="Florida",
                 country="United States",
                 num_sales=)
    shop4 = Shop(name="ElementalBonsaiGardn",
                 shop_logo="https://i.etsystatic.com/isla/6f11dc/32315682/isla_500x500.32315682_92u3kapf.jpg?version=0",
                 owner_id=4,
                 description="Live bonsai, bamboo, small foliage, pottery, and more!",
                 city="Kissimmee",
                 state="Florida",
                 country="United States",
                 num_sales=)
    shop5 = Shop(name="IntoThePot",
                 shop_logo="https://i.etsystatic.com/isla/ef7190/41467576/isla_500x500.41467576_5md37oju.jpg?version=0",
                 owner_id=5,
                 description="Houseplants and accessories",
                 city="Tampa",
                 state="Florida",
                 country="United States",
                 num_sales=)
    shop6 = Shop(name="TwistedAcres",
                 shop_logo="https://i.etsystatic.com/isla/2253a0/35944568/isla_500x500.35944568_kx9kenk3.jpg?version=0",
                 owner_id=6,
                 description="AIR PLANTS TILLANDSIA TOP QUALITY",
                 city="Fort Myers",
                 state="Florida",
                 country="United States",
                 num_sales=)
    shop7 = Shop(name="9Tree7",
                 shop_logo="https://i.etsystatic.com/isla/5db9d4/45647748/isla_500x500.45647748_kymzgfe0.jpg?version=0",
                 owner_id=7,
                 description="We sell cool plants",
                 city="Columbus",
                 state="Ohio",
                 country="United States",
                 num_sales=)
    shop8 = Shop(name="SnakeRiverGarden",
                 shop_logo="https://i.etsystatic.com/isla/3a907a/45128805/isla_500x500.45128805_i8tbmm3m.jpg?version=0",
                 owner_id=8,
                 description="Snake River Gardens",
                 city="Filer",
                 state="Idaho",
                 country="United States",
                 num_sales=)
    shop9 = Shop(name="Dorology",
                 shop_logo="https://i.etsystatic.com/isla/79f542/48490113/isla_500x500.48490113_k8ce3887.jpg?version=0",
                 owner_id=9,
                 description="House Plants, Succulents and Cactus",
                 city="Hickory",
                 state="North Carolina",
                 country="United States",
                 num_sales=)
    shop10 = Shop(name="GreenGardenFinds",
                  shop_logo="https://i.etsystatic.com/isla/e61f0e/47781475/isla_500x500.47781475_6wt65k2l.jpg?version=0",
                  owner_id=10,
                  description="Plant Seeds and Live Plants",
                  city="",
                  state="",
                  country="",
                  num_sales=)

    db.session.add(shop1)
    db.session.add(shop2)
    db.session.add(shop3)
    db.session.add(shop4)
    db.session.add(shop5)
    db.session.add(shop6)
    db.session.add(shop7)
    db.session.add(shop8)
    db.session.add(shop9)
    db.session.add(shop10)

    db.session.commit()


def undo_shops():
    db.session.execute('TRUNCATE shops;')
    db.session.commit()
