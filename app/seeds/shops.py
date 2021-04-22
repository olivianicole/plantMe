from app.models import db, Shop


def seed_shops():

    shop1 = Shop(name="EucalyptusBlooms",
                 owner_id=1,
                 description="Eucalyptus & Lavender Shower, Bath and Boutquets",
                 city="Charlotte",
                 state="North Carolina",
                 country="United States",
                 num_sales=20836,
                 store_link="https://www.etsy.com/shop/EucalyptusBlooms")
    shop2 = Shop(name="thenewplantco",
                 owner_id=2,
                 description="We specialize in affordable and hard to find plants.",
                 city="",
                 state="",
                 country="United States",
                 num_sales=36416,
                 store_link="https://www.etsy.com/shop/thenewplantco")
    shop3 = Shop(name="TropicalTouchPlants",
                 owner_id=3,
                 description="Specializing in quality Tillandsias for over 30 years.", 
                 city="Clermont",
                 state="Florida",
                 country="United States",
                 num_sales=3520,
                 store_link="https://www.etsy.com/shop/TropicalTouchPlants")
    shop4 = Shop(name="ElementalBonsaiGardn",
                 owner_id=4,
                 description="Live bonsai, bamboo, small foliage, pottery, and more!",
                 city="Kissimmee",
                 state="Florida",
                 country="United States",
                 num_sales=13500,
                 store_link="https://www.etsy.com/shop/ElementalBonsaiGardn")
    shop5 = Shop(name="IntoThePot",
                 owner_id=5,
                 description="Houseplants and accessories",
                 city="Tampa",
                 state="Florida",
                 country="United States",
                 num_sales=2012,
                 store_link="https://www.etsy.com/shop/IntoThePot")
    shop6 = Shop(name="TwistedAcres",
                 owner_id=6,
                 description="AIR PLANTS TILLANDSIA TOP QUALITY",
                 city="Fort Myers",
                 state="Florida",
                 country="United States",
                 num_sales=107815,
                 store_link="https://www.etsy.com/shop/TwistedAcres")
    shop7 = Shop(name="9Tree7",
                 owner_id=7,
                 description="We sell cool plants",
                 city="Columbus",
                 state="Ohio",
                 country="United States",
                 num_sales=83,
                 store_link="https://www.etsy.com/shop/9Tree7")
    shop8 = Shop(name="SnakeRiverGarden",
                 owner_id=8,
                 description="Snake River Gardens",
                 city="Filer",
                 state="Idaho",
                 country="United States",
                 num_sales=7340,
                 store_link="https://www.etsy.com/shop/SnakeRiverGarden")
    shop9 = Shop(name="Dorology",
                 owner_id=9,
                 description="House Plants, Succulents and Cactus",
                 city="Hickory",
                 state="North Carolina",
                 country="United States",
                 num_sales=1928,
                 store_link="https://www.etsy.com/shop/Dorology")
    shop10 = Shop(name="GreenGardenFinds",
                  owner_id=10,
                  description="Plant Seeds and Live Plants",
                  city="",
                  state="",
                  country="",
                  num_sales=267,
                  store_link="https://www.etsy.com/shop/GreenGardenFinds")

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
