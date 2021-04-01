from app.models import db, Listing


def seed_listings():

    # EucalyptusBlooms

    listing1 = Listing(name="Petite 15 Stem Eucalyptus Bouquet | Short Stems | Aromatic Scent | Therapeutic | Relaxation | Floral Bouquet | Decongest",
                       description="Fresh petite short stemmed eucalyptus great for a short, wide vase or bowl. This 12 stem bunch is great for display in your kitchen, bathroom or end table.",
                       image_1="https://i.etsystatic.com/22078381/r/il/fd7b85/2196412465/il_1588xN.2196412465_1w9e.jpg",
                       image_2="https://i.etsystatic.com/22078381/r/il/f9e3f2/2424632030/il_794xN.2424632030_ff4v.jpg",
                       image_3="https://i.etsystatic.com/22078381/r/il/5375a4/2424591528/il_794xN.2424591528_bsu1.jpg",
                       category_id=,
                       shop_id=1,
                       price=10.00)
    listing2 = Listing(name="Large Fresh Eucalyptus Bunch | Huge 20 Stems | Aromatic Scent | Therapeutic | Relaxation | Decongestant | Eucalyptus Bouquet | Fresh Flowers",
                       description="Stunning large bunch of fresh eucalyptus with 20 stems. Fresh bouquets straight from the farm. Perfect home accent to place in your favorite large opening vase.",
                       image_1="https://i.etsystatic.com/22078381/r/il/08a28a/2309671307/il_1588xN.2309671307_i4vf.jpg",
                       image_2="https://i.etsystatic.com/22078381/r/il/3e3940/2148757282/il_794xN.2148757282_650v.jpg",
                       image_3="https://i.etsystatic.com/22078381/r/il/1859ee/2197085491/il_794xN.2197085491_rxz6.jpg",
                       category_id=,
                       shop_id=1,
                       price=20.00)
    listing3 = Listing(name="Large Fresh Shower Eucalyptus & Lavender Bundle | Aromatherapy | Cold, Sinuses and Congestion Relief | Relax and Refresh | House Plants",
                       description="If you've tried and enjoyed a fresh eucalyptus bunch in the shower, the aromatic addition of dried lavender will take your shower to the next level! Each bundle is tightly wrapped with ivory twine, leaving a loop for product hanging. A sleek stainless steel self adhesive hook is included for easy application and display.",
                       image_1="https://i.etsystatic.com/22078381/r/il/194e65/2714402477/il_1588xN.2714402477_nbrr.jpg",
                       image_2="https://i.etsystatic.com/22078381/r/il/dbba07/2698336805/il_794xN.2698336805_boh0.jpg",
                       image_3="https://i.etsystatic.com/22078381/r/il/2b67e8/2698336653/il_794xN.2698336653_aevz.jpg",
                       category_id=,
                       shop_id=1,
                       price=24.00)
    listing4 = Listing(name="Lavender Loofah Soap | Fresh Lavender | Lavender & Tea Tree Oils | Built In Loofah | Exfoliation | Extreme Hydration | Shave Legs",
                       description="Fresh lavender soap bar with a “built in” loofah. The perfect combo! Handmade using: Fresh lavender, Goats milk, Lavender essential oil, Tea tree essential oil, Homegrown exfoliating loofah",
                       image_1="https://i.etsystatic.com/22078381/r/il/741a47/2585030975/il_794xN.2585030975_21jv.jpg",
                       image_2="https://i.etsystatic.com/22078381/r/il/d10624/2537383618/il_794xN.2537383618_v4hy.jpg",
                       image_3="https://i.etsystatic.com/22078381/r/il/ec0e7c/2585030921/il_794xN.2585030921_5p3q.jpg",
                       category_id=,
                       shop_id=1,
                       price=12.00)
    listing5 = Listing(name="Dried Lavender Stems | Fresh Flowers | Lavender Bunch | English Lavender |Table Decor | Fresh Lavender | Lavender Plant | Boho Decor",
                       description="Beautiful Lavender bunch with approximately 100 stems of dried english lavender that are around 14 inches in length. It is grown right here at home in North Carolina giving it a beautiful purple hue and a smell that will truly make you happy. Our stems are dried for maximum aroma released and it also helps keep them lasting for months!",
                       image_1="https://i.etsystatic.com/22078381/r/il/620f7e/2436253723/il_1588xN.2436253723_1k4s.jpg",
                       image_2="https://i.etsystatic.com/22078381/r/il/8df223/2388636090/il_794xN.2388636090_3pt0.jpg",
                       image_3="https://i.etsystatic.com/22078381/r/il/1f62c9/2378227828/il_794xN.2378227828_n0ws.jpg",
                       category_id=,
                       shop_id=1,
                       price=16.00)

    # thenewplantco

    listing6 = Listing(name="Alocasia zebrina",
                       description="In time, plants can grow to just over 5 feet tall and equally as wide. Their creamy petioles are covered with brownish bands before ending in a triangular, spade shaped leaf. Being native to a rainforest in the Philippines, they do appreciate high relative humidity with an ideal range of ~70%, or more. High humidity is not a must for this species. But, as with most Alocasia, this species does enjoy being watered regularly and does not tolerate drying out too much. If plants do dry out, dried and yellowing leaf tips will develop.",
                       image_1="https://i.etsystatic.com/21880724/r/il/e2067a/2978070410/il_1588xN.2978070410_f7ft.jpg",
                       image_2="https://i.etsystatic.com/21880724/r/il/6b61e4/2978071966/il_794xN.2978071966_iszb.jpg",
                       image_3="",
                       category_id=,
                       shop_id=2,
                       price=27.00)
    listing7 = Listing(name="Sansevieria cylindrica - 5 Pack",
                       description="Sansevieria cylindrica is one of the more elegant species due to how “clean” the foliage lines are. It’s ideal for a great many situations, but lends itself perfectly to creating a mini screen of sorts. While this species isn’t commonly seen in the US, especially at this size, it certainly doesn’t mean it’s not as easy to care for as most Sansevieria species.",
                       image_1="https://i.etsystatic.com/21880724/r/il/2ed2a1/3012618977/il_1588xN.3012618977_ek5h.jpg",
                       image_2="https://i.etsystatic.com/21880724/r/il/b80fcb/2964915186/il_794xN.2964915186_5q26.jpg",
                       image_3="https://i.etsystatic.com/21880724/r/il/d93646/2964916034/il_794xN.2964916034_1biy.jpg",
                       category_id=,
                       shop_id=2,
                       price=18.00)
    listing8 = Listing(name="Polyscias fruiticosa ‘Aurea Variegata’ - Golden Ming Aralia",
                       description="If your plant collection isn’t dripping in gold, you need to add a Golden Ming! Quite seriously one of our favorite plants to use in interiorscapes due to how well they thrive in low light levels, but also tolerate fairly high levels. We grow ours under higher light so the golden variegation really comes through at its finest.",
                       image_1="https://i.etsystatic.com/21880724/r/il/93d5fd/2961363944/il_1588xN.2961363944_1h2b.jpg",
                       image_2="https://i.etsystatic.com/21880724/r/il/ff4164/3009070975/il_794xN.3009070975_phmy.jpg",
                       image_3="",
                       category_id=,
                       shop_id=2,
                       price=36.00)
    listing9 = Listing(name="Calathea ‘Fusion White’ - Cosmetically Damaged",
                       description="Where do we even begin with those one?! It has ALL the colors and patterns you could want: white, purple, and green streaked on every leaf with no two being the same. Calathea, in general and this is no exception, require consistently moist media without sitting in water. We recommend watering 2-3 times a week and providing dappled or morning sunlight only. If you’re worried about overwatering, check out our Aroid Pro Mix. It drains really well, yet holds plenty of moisture for the plants. We grow 90 % of our plants in that mix!",
                       image_1="https://i.etsystatic.com/21880724/r/il/3b9f17/2334624323/il_1588xN.2334624323_cwf4.jpg",
                       image_2="",
                       image_3="",
                       category_id=,
                       shop_id=2,
                       price=20.00)
    listing10 = Listing(name="Macodes petola / Single Plug",
                        description="This Jewel Orchid is so called because of the metallic gold veins running throughout the vibrant green foliage. Contrary to popular belief, these orchids are relatively easy to grow! If you're an experienced plant grower, you should give yourself a bit of a challenge and try growing these. Just keep in mind that they are relatively slow growing so don't expect them to take off. Slow and steady is their motto.",
                        image_1="https://i.etsystatic.com/21880724/r/il/d4fc5e/2243106369/il_1588xN.2243106369_2yb2.jpg",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=2,
                        price=16.00)

    # TropicalTouchPlants

    listing11 = Listing(name="Air Plant Xerographica Medium",
                        description="Medium Xerographica are approximately 5"-7" inches wide.

                        Xerographica are known as the "Queen of Air Plants’. They are the quintessential air plant due to their beautiful curly leaf structure and amazing bloom spike.",
                        image_1="https://i.etsystatic.com/23670694/r/il/289e82/2355122334/il_1588xN.2355122334_nffe.jpg",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=3,
                        price=14.95)
    listing12 = Listing(name="Air Plant 3 pc. Abdita / Juncifolia pack",
                        description="This 3 plant variety pack comes with one green Abdita, One red Abdita(enchanced with floral tint) and one Juncifolia. This unique combination allows for the perfect contrast in color and texture that will allow you to create your own unique designs or just add variety to your collection.  The two rosette shaped Abditas are approximately 3 inches wide and the grass like foliage of the Juncifolia stands approximately 4 to 5 inches tall.",
                        image_1="https://i.etsystatic.com/23670694/r/il/c8ac5f/2647949081/il_1588xN.2647949081_4fa7.jpg",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=3,
                        price=8.95)
    listing13 = Listing(name="Air Plant Tectorum Medium",
                        description="Tectorum medium size ranges from 2-3 inches wide. Although small it will be the talk of your arrangement or collection. These fuzzy and silver in color plants will make their presence known. The Tectorum from Ecuador grows high in the mountains of Ecuador and Peru. Its appearance is fuzzy and silver, due to its abundance of trichomes, which help protect it from the sun as well as gather moisture and nutrients from the air. This xeric Tillandsia like lots of air movement, bright sun-light, and low humidity. These fuzzy snow-ball looking plants should not be soaked, but rather just misted from time to time with water.",
                        image_1="https://i.etsystatic.com/23670694/r/il/b911ee/2594482708/il_1588xN.2594482708_azeg.jpg",
                        image_2="https://i.etsystatic.com/23670694/r/il/7f6d5e/2594483234/il_794xN.2594483234_8dgp.jpg",
                        image_3="",
                        category_id=,
                        shop_id=3,
                        price=7.95)
    listing14 = Listing(name="Xerographica With Metal Air Plant Holder",
                        description="The Xerographica with its curly unique shape is the perfect plant for this modern planter. The metal planter stands 12" tall and is made specifically to display air plants.",
                        image_1="https://i.etsystatic.com/23670694/r/il/9553fd/2553488879/il_1588xN.2553488879_dgxv.jpg",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=3,
                        price=19.95)
    listing15 = Listing(name="Air Plant Capitata Maroon Jumbo",
                        description="Jumbo Capitata Maroon is a mature specimen ranging from 14” - 16” wide. Also availble in small size at about 8 inches tall. This colorful species of Tillandsia has thick green leaves that blush maroon towards the center. These large growing plants will keep their maroon color if displayed in an area of bright light.",
                        image_1="https://i.etsystatic.com/23670694/r/il/cf0194/2402807291/il_1588xN.2402807291_1ba7.jpg",
                        image_2="https://i.etsystatic.com/23670694/r/il/740c0d/2535981947/il_794xN.2535981947_hhqt.jpg",
                        image_3="",
                        category_id=,
                        shop_id=3,
                        price=9.95)

    # ElementalBonsaiGardn

    listing16 = Listing(name="",
                        description="",
                        image_1="",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=4,
                        price=10.00)
    listing17 = Listing(name="",
                        description="",
                        image_1="",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=4,
                        price=10.00)
    listing18 = Listing(name="",
                        description="",
                        image_1="",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=4,
                        price=10.00)
    listing19 = Listing(name="",
                        description="",
                        image_1="",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=4,
                        price=10.00)
    listing20 = Listing(name="",
                        description="",
                        image_1="",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=4,
                        price=10.00)

    # IntoThePot

    listing21 = Listing(name="",
                        description="",
                        image_1="",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=5,
                        price=10.00)
    listing22 = Listing(name="",
                        description="",
                        image_1="",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=5,
                        price=10.00)
    listing23 = Listing(name="",
                        description="",
                        image_1="",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=5,
                        price=10.00)
    listing24 = Listing(name="",
                        description="",
                        image_1="",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=5,
                        price=10.00)
    listing25 = Listing(name="",
                        description="",
                        image_1="",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=5,
                        price=10.00)

    # TwistedAcres

    listing26 = Listing(name="",
                        description="",
                        image_1="",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=6,
                        price=10.00)
    listing27 = Listing(name="",
                        description="",
                        image_1="",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=6,
                        price=10.00)
    listing28 = Listing(name="",
                        description="",
                        image_1="",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=6,
                        price=10.00)
    listing29 = Listing(name="",
                        description="",
                        image_1="",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=6,
                        price=10.00)
    listing30 = Listing(name="",
                        description="",
                        image_1="",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=6,
                        price=10.00)

    # 9Tree7

    listing31 = Listing(name="",
                        description="",
                        image_1="",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=7,
                        price=10.00)
    listing32 = Listing(name="",
                        description="",
                        image_1="",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=7,
                        price=10.00)
    listing33 = Listing(name="",
                        description="",
                        image_1="",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=7,
                        price=10.00)
    listing34 = Listing(name="",
                        description="",
                        image_1="",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=7,
                        price=10.00)
    listing35 = Listing(name="",
                        description="",
                        image_1="",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=7,
                        price=10.00)

    # SnakeRiverGarden

    listing36 = Listing(name="",
                        description="",
                        image_1="",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=8,
                        price=10.00)
    listing37 = Listing(name="",
                        description="",
                        image_1="",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=8,
                        price=10.00)
    listing38 = Listing(name="",
                        description="",
                        image_1="",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=8,
                        price=10.00)
    listing39 = Listing(name="",
                        description="",
                        image_1="",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=8,
                        price=10.00)
    listing40 = Listing(name="",
                        description="",
                        image_1="",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=8,
                        price=10.00)

    # Dorology

    listing41 = Listing(name="",
                        description="",
                        image_1="",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=9,
                        price=10.00)
    listing42 = Listing(name="",
                        description="",
                        image_1="",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=9,
                        price=10.00)
    listing43 = Listing(name="",
                        description="",
                        image_1="",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=9,
                        price=10.00)
    listing44 = Listing(name="",
                        description="",
                        image_1="",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=9,
                        price=10.00)
    listing45 = Listing(name="",
                        description="",
                        image_1="",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=9,
                        price=10.00)

    # GreenGardenFinds

    listing46 = Listing(name="",
                        description="",
                        image_1="",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=1,
                        price=10.000)
    listing47 = Listing(name="",
                        description="",
                        image_1="",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=1,
                        price=10.000)
    listing48 = Listing(name="",
                        description="",
                        image_1="",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=1,
                        price=10.000)
    listing49 = Listing(name="",
                        description="",
                        image_1="",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=1,
                        price=10.000)
    listing50 = Listing(name="",
                        description="",
                        image_1="",
                        image_2="",
                        image_3="",
                        category_id=,
                        shop_id=1,
                        price=10.000)

    db.session.add(listing1)
    db.session.add(listing2)
    db.session.add(listing3)
    db.session.add(listing4)
    db.session.add(listing5)
    db.session.add(listing6)
    db.session.add(listing7)
    db.session.add(listing8)
    db.session.add(listing9)
    db.session.add(listing10)
    db.session.add(listing11)
    db.session.add(listing12)
    db.session.add(listing13)
    db.session.add(listing14)
    db.session.add(listing15)
    db.session.add(listing16)
    db.session.add(listing17)
    db.session.add(listing18)
    db.session.add(listing19)
    db.session.add(listing20)
    db.session.add(listing21)
    db.session.add(listing22)
    db.session.add(listing23)
    db.session.add(listing24)
    db.session.add(listing25)
    db.session.add(listing26)
    db.session.add(listing27)
    db.session.add(listing28)
    db.session.add(listing29)
    db.session.add(listing30)
    db.session.add(listing31)
    db.session.add(listing32)
    db.session.add(listing33)
    db.session.add(listing34)
    db.session.add(listing35)
    db.session.add(listing36)
    db.session.add(listing37)
    db.session.add(listing38)
    db.session.add(listing39)
    db.session.add(listing40)
    db.session.add(listing41)
    db.session.add(listing42)
    db.session.add(listing43)
    db.session.add(listing44)
    db.session.add(listing45)
    db.session.add(listing46)
    db.session.add(listing47)
    db.session.add(listing48)
    db.session.add(listing49)
    db.session.add(listing50)

    db.session.commit()


def undo_listings():
    db.session.execute('TRUNCATE listings;')
    db.session.commit()
