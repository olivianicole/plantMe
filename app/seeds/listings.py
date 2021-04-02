from app.models import db, Listing


def seed_listings():

    # EucalyptusBlooms

    listing1 = Listing(name="Petite 15 Stem Eucalyptus Bouquet | Short Stems | Aromatic Scent | Therapeutic | Relaxation | Floral Bouquet | Decongest",
                       description="Fresh petite short stemmed eucalyptus great for a short, wide vase or bowl. This 12 stem bunch is great for display in your kitchen, bathroom or end table.",
                       image_1="https://i.etsystatic.com/22078381/r/il/fd7b85/2196412465/il_1588xN.2196412465_1w9e.jpg",
                       image_2="https://i.etsystatic.com/22078381/r/il/f9e3f2/2424632030/il_794xN.2424632030_ff4v.jpg",
                       image_3="https://i.etsystatic.com/22078381/r/il/5375a4/2424591528/il_794xN.2424591528_bsu1.jpg",
                       shop_id=1,
                       price=10.00)
    listing2 = Listing(name="Large Fresh Eucalyptus Bunch | Huge 20 Stems | Aromatic Scent | Therapeutic | Relaxation | Decongestant | Eucalyptus Bouquet | Fresh Flowers",
                       description="Stunning large bunch of fresh eucalyptus with 20 stems. Fresh bouquets straight from the farm. Perfect home accent to place in your favorite large opening vase.",
                       image_1="https://i.etsystatic.com/22078381/r/il/08a28a/2309671307/il_1588xN.2309671307_i4vf.jpg",
                       image_2="https://i.etsystatic.com/22078381/r/il/3e3940/2148757282/il_794xN.2148757282_650v.jpg",
                       image_3="https://i.etsystatic.com/22078381/r/il/1859ee/2197085491/il_794xN.2197085491_rxz6.jpg",
                       shop_id=1,
                       price=20.00)
    listing3 = Listing(name="Large Fresh Shower Eucalyptus & Lavender Bundle | Aromatherapy | Cold, Sinuses and Congestion Relief | Relax and Refresh | House Plants",
                       description="If you've tried and enjoyed a fresh eucalyptus bunch in the shower, the aromatic addition of dried lavender will take your shower to the next level! Each bundle is tightly wrapped with ivory twine, leaving a loop for product hanging. A sleek stainless steel self adhesive hook is included for easy application and display.",
                       image_1="https://i.etsystatic.com/22078381/r/il/194e65/2714402477/il_1588xN.2714402477_nbrr.jpg",
                       image_2="https://i.etsystatic.com/22078381/r/il/dbba07/2698336805/il_794xN.2698336805_boh0.jpg",
                       image_3="https://i.etsystatic.com/22078381/r/il/2b67e8/2698336653/il_794xN.2698336653_aevz.jpg",
                       shop_id=1,
                       price=24.00)
    listing4 = Listing(name="Lavender Loofah Soap | Fresh Lavender | Lavender & Tea Tree Oils | Built In Loofah | Exfoliation | Extreme Hydration | Shave Legs",
                       description="Fresh lavender soap bar with a “built in” loofah. The perfect combo! Handmade using: Fresh lavender, Goats milk, Lavender essential oil, Tea tree essential oil, Homegrown exfoliating loofah",
                       image_1="https://i.etsystatic.com/22078381/r/il/741a47/2585030975/il_794xN.2585030975_21jv.jpg",
                       image_2="https://i.etsystatic.com/22078381/r/il/d10624/2537383618/il_794xN.2537383618_v4hy.jpg",
                       image_3="https://i.etsystatic.com/22078381/r/il/ec0e7c/2585030921/il_794xN.2585030921_5p3q.jpg",
                       shop_id=1,
                       price=12.00)
    listing5 = Listing(name="Dried Lavender Stems | Fresh Flowers | Lavender Bunch | English Lavender |Table Decor | Fresh Lavender | Lavender Plant | Boho Decor",
                       description="Beautiful Lavender bunch with approximately 100 stems of dried english lavender that are around 14 inches in length. It is grown right here at home in North Carolina giving it a beautiful purple hue and a smell that will truly make you happy. Our stems are dried for maximum aroma released and it also helps keep them lasting for months!",
                       image_1="https://i.etsystatic.com/22078381/r/il/620f7e/2436253723/il_1588xN.2436253723_1k4s.jpg",
                       image_2="https://i.etsystatic.com/22078381/r/il/8df223/2388636090/il_794xN.2388636090_3pt0.jpg",
                       image_3="https://i.etsystatic.com/22078381/r/il/1f62c9/2378227828/il_794xN.2378227828_n0ws.jpg",
                       shop_id=1,
                       price=16.00)

    # thenewplantco

    listing6 = Listing(name="Alocasia zebrina",
                       description="In time, plants can grow to just over 5 feet tall and equally as wide. Their creamy petioles are covered with brownish bands before ending in a triangular, spade shaped leaf. Being native to a rainforest in the Philippines, they do appreciate high relative humidity with an ideal range of ~70%, or more. High humidity is not a must for this species. But, as with most Alocasia, this species does enjoy being watered regularly and does not tolerate drying out too much. If plants do dry out, dried and yellowing leaf tips will develop.",
                       image_1="https://i.etsystatic.com/21880724/r/il/e2067a/2978070410/il_1588xN.2978070410_f7ft.jpg",
                       image_2="https://i.etsystatic.com/21880724/r/il/6b61e4/2978071966/il_794xN.2978071966_iszb.jpg",
                       image_3="",
                       shop_id=2,
                       price=27.00)
    listing7 = Listing(name="Sansevieria cylindrica - 5 Pack",
                       description="Sansevieria cylindrica is one of the more elegant species due to how “clean” the foliage lines are. It’s ideal for a great many situations, but lends itself perfectly to creating a mini screen of sorts. While this species isn’t commonly seen in the US, especially at this size, it certainly doesn’t mean it’s not as easy to care for as most Sansevieria species.",
                       image_1="https://i.etsystatic.com/21880724/r/il/2ed2a1/3012618977/il_1588xN.3012618977_ek5h.jpg",
                       image_2="https://i.etsystatic.com/21880724/r/il/b80fcb/2964915186/il_794xN.2964915186_5q26.jpg",
                       image_3="https://i.etsystatic.com/21880724/r/il/d93646/2964916034/il_794xN.2964916034_1biy.jpg",
                       shop_id=2,
                       price=18.00)
    listing8 = Listing(name="Polyscias fruiticosa ‘Aurea Variegata’ - Golden Ming Aralia",
                       description="If your plant collection isn’t dripping in gold, you need to add a Golden Ming! Quite seriously one of our favorite plants to use in interiorscapes due to how well they thrive in low light levels, but also tolerate fairly high levels. We grow ours under higher light so the golden variegation really comes through at its finest.",
                       image_1="https://i.etsystatic.com/21880724/r/il/93d5fd/2961363944/il_1588xN.2961363944_1h2b.jpg",
                       image_2="https://i.etsystatic.com/21880724/r/il/ff4164/3009070975/il_794xN.3009070975_phmy.jpg",
                       image_3="",
                       shop_id=2,
                       price=36.00)
    listing9 = Listing(name="Calathea ‘Fusion White’ - Cosmetically Damaged",
                       description="Where do we even begin with those one?! It has ALL the colors and patterns you could want: white, purple, and green streaked on every leaf with no two being the same. Calathea, in general and this is no exception, require consistently moist media without sitting in water. We recommend watering 2-3 times a week and providing dappled or morning sunlight only. If you’re worried about overwatering, check out our Aroid Pro Mix. It drains really well, yet holds plenty of moisture for the plants. We grow 90 % of our plants in that mix!",
                       image_1="https://i.etsystatic.com/21880724/r/il/3b9f17/2334624323/il_1588xN.2334624323_cwf4.jpg",
                       image_2="",
                       image_3="",
                       shop_id=2,
                       price=20.00)
    listing10 = Listing(name="Macodes petola / Single Plug",
                        description="This Jewel Orchid is so called because of the metallic gold veins running throughout the vibrant green foliage. Contrary to popular belief, these orchids are relatively easy to grow! If you're an experienced plant grower, you should give yourself a bit of a challenge and try growing these. Just keep in mind that they are relatively slow growing so don't expect them to take off. Slow and steady is their motto.",
                        image_1="https://i.etsystatic.com/21880724/r/il/d4fc5e/2243106369/il_1588xN.2243106369_2yb2.jpg",
                        image_2="",
                        image_3="",
                        shop_id=2,
                        price=16.00)

    # TropicalTouchPlants

    listing11 = Listing(name="Air Plant Xerographica Medium",
                        description='Medium Xerographica are approximately 5"-7" inches wide.Xerographica are known as the "Queen of Air Plants". They are the quintessential air plant due to their beautiful curly leaf structure and amazing bloom spike.',
                        image_1="https://i.etsystatic.com/23670694/r/il/289e82/2355122334/il_1588xN.2355122334_nffe.jpg",
                        image_2="",
                        image_3="",
                        shop_id=3,
                        price=14.95)
    listing12 = Listing(name="Air Plant 3 pc. Abdita / Juncifolia pack",
                        description="This 3 plant variety pack comes with one green Abdita, One red Abdita(enchanced with floral tint) and one Juncifolia. This unique combination allows for the perfect contrast in color and texture that will allow you to create your own unique designs or just add variety to your collection.  The two rosette shaped Abditas are approximately 3 inches wide and the grass like foliage of the Juncifolia stands approximately 4 to 5 inches tall.",
                        image_1="https://i.etsystatic.com/23670694/r/il/c8ac5f/2647949081/il_1588xN.2647949081_4fa7.jpg",
                        image_2="",
                        image_3="",
                        shop_id=3,
                        price=8.95)
    listing13 = Listing(name="Air Plant Tectorum Medium",
                        description="Tectorum medium size ranges from 2-3 inches wide. Although small it will be the talk of your arrangement or collection. These fuzzy and silver in color plants will make their presence known. The Tectorum from Ecuador grows high in the mountains of Ecuador and Peru. Its appearance is fuzzy and silver, due to its abundance of trichomes, which help protect it from the sun as well as gather moisture and nutrients from the air. This xeric Tillandsia like lots of air movement, bright sun-light, and low humidity. These fuzzy snow-ball looking plants should not be soaked, but rather just misted from time to time with water.",
                        image_1="https://i.etsystatic.com/23670694/r/il/b911ee/2594482708/il_1588xN.2594482708_azeg.jpg",
                        image_2="https://i.etsystatic.com/23670694/r/il/7f6d5e/2594483234/il_794xN.2594483234_8dgp.jpg",
                        image_3="",
                        shop_id=3,
                        price=7.95)
    listing14 = Listing(name="Xerographica With Metal Air Plant Holder",
                        description="The Xerographica with its curly unique shape is the perfect plant for this modern planter. The metal planter stands 12 inches tall and is made specifically to display air plants.",
                        image_1="https://i.etsystatic.com/23670694/r/il/9553fd/2553488879/il_1588xN.2553488879_dgxv.jpg",
                        image_2="",
                        image_3="",
                        shop_id=3,
                        price=19.95)
    listing15 = Listing(name="Air Plant Capitata Maroon Jumbo",
                        description="Jumbo Capitata Maroon is a mature specimen ranging from 14” - 16” wide. Also availble in small size at about 8 inches tall. This colorful species of Tillandsia has thick green leaves that blush maroon towards the center. These large growing plants will keep their maroon color if displayed in an area of bright light.",
                        image_1="https://i.etsystatic.com/23670694/r/il/cf0194/2402807291/il_1588xN.2402807291_1ba7.jpg",
                        image_2="https://i.etsystatic.com/23670694/r/il/740c0d/2535981947/il_794xN.2535981947_hhqt.jpg",
                        image_3="",
                        shop_id=3,
                        price=9.95)

    # ElementalBonsaiGardn

    listing16 = Listing(name="Small Giraffe Planter with mini palm or Hypoestes, ferns, animal pottery, wedding favor, baby shower, House warming,holiday, birthday gift",
                        description="Small Giraffe Planter with mini palm, animal pottery, wedding favor, baby shower, House warming,holiday, birthday gift.",
                        image_1="https://i.etsystatic.com/18504939/r/il/8a7299/1776946693/il_1588xN.1776946693_1l3q.jpg",
                        image_2="",
                        image_3="",
                        shop_id=4,
                        price=16.00)
    listing17 = Listing(name="Juniper live Bonsai Tree in a 7 inch Bonsai pot, outdoor plant, informal upright style, Housewarming and Unique birthday gift.",
                        description="Juniper live Bonsai Tree in a 7 inch Bonsai pot, outdoor plant, informal upright style, Housewarming and Unique birthday gift.",
                        image_1="https://i.etsystatic.com/18504939/r/il/7e1d08/2982812714/il_1588xN.2982812714_qrvk.jpg",
                        image_2="https://i.etsystatic.com/18504939/r/il/833dc7/3030528659/il_794xN.3030528659_jp0g.jpg",
                        image_3="",
                        shop_id=4,
                        price=59.00)
    listing18 = Listing(name="Begonia 'Harmony's Red Robin' (Begonia rex hybrid) Indoor or outdoor plants 4 inch pot, dish garden, Fairy Garden, bright rich color",
                        description="'Red Robin'It's colors are very rich with black, gray, red and chocolate brown. Begonias favor bright filtered light with no exposure to harsh midday sun. They need good ventilation to help prevent fungal diseases.",
                        image_1="https://i.etsystatic.com/18504939/r/il/139973/2571788175/il_1588xN.2571788175_de88.jpg",
                        image_2="https://i.etsystatic.com/18504939/r/il/bf4204/2571788541/il_794xN.2571788541_1efd.jpg",
                        image_3="https://i.etsystatic.com/18504939/r/il/e28300/2571788583/il_794xN.2571788583_8q1g.jpg",
                        shop_id=4,
                        price=9.00)
    listing19 = Listing(name="Patio fruit tree, banana, pineapple, figs,passion fruit, mulberry, black berry. indoor outdoor plant, unique gift",
                        description="Patio fruit tree, banana, pineapple, figs, passion fruit, mulberry, black berry. indoor outdoor plant, unique gift. limited quantity, unique gift. Come with instruction care tag specific to each plant! Most of them can produce fruit in 1 or 2 years. You can plant these trees in a container and just have them on your patio. These are all self-fertile, meaning there is no need for cross-pollination to produce fruits. Late Spring and Early Summer is a great time to start!",
                        image_1="https://i.etsystatic.com/18504939/r/il/71a9ec/1932957183/il_1588xN.1932957183_a4x4.jpg",
                        image_2="https://i.etsystatic.com/18504939/r/il/22ce9a/1885421000/il_794xN.1885421000_gqxu.jpg",
                        image_3="https://i.etsystatic.com/18504939/r/il/ca99d3/2979044765/il_794xN.2979044765_svda.jpg",
                        shop_id=4,
                        price=14.99)
    listing20 = Listing(name="Bonsai live tree Green Island Ficus in a 4 inch grow pot, indoor or outdoor tree, Housewarming and Unique birthday, Holiday Gift",
                        description="Bonsai live tree Green Island Ficus, indoor or outdoor tree, Housewarming and Unique birthday, Holiday Gift.",
                        image_1="https://i.etsystatic.com/18504939/r/il/190786/2828612283/il_1588xN.2828612283_d6dp.jpg",
                        image_2="https://i.etsystatic.com/18504939/r/il/6ee289/2828612085/il_794xN.2828612085_99u5.jpg",
                        image_3="",
                        shop_id=4,
                        price=16.00)

    # IntoThePot

    listing21 = Listing(name="Escargot Rex Begonia starter plant in 4” pot",
                        description="Begonia Rex escargot plants have striking swirls of colors through their foliage. These were fully rooted 2” plugs recently uppotted into 4” pots. This listing is for one plant in a 4” pot.",
                        image_1="https://i.etsystatic.com/23984094/r/il/85516c/2962916013/il_1588xN.2962916013_iv79.jpg",
                        image_2="https://i.etsystatic.com/23984094/r/il/4312c5/2915229032/il_794xN.2915229032_chcm.jpg",
                        image_3="https://i.etsystatic.com/23984094/r/il/754fff/2962916011/il_794xN.2962916011_m9ni.jpg",
                        shop_id=5,
                        price=15.00)
    listing22 = Listing(name="Variegated Hoya carnosa compacta Hoya hindu rope 4”",
                        description="Hoya carnosa compacta Variegata, or variegated Hoya hindu rope plant. This listing is for one plant in a 4” pot.",
                        image_1="https://i.etsystatic.com/23984094/r/il/07ae6c/2810994669/il_794xN.2810994669_1nta.jpg",
                        image_2="https://i.etsystatic.com/23984094/r/il/546832/2709993112/il_794xN.2709993112_4bjn.jpg",
                        image_3="https://i.etsystatic.com/23984094/r/il/bf462d/2763306542/il_794xN.2763306542_8pdv.jpg",
                        shop_id=5,
                        price=50.00)
    listing23 = Listing(name="String of pearls in 4” pot",
                        description="String of pearls in 4” pot",
                        image_1="https://i.etsystatic.com/23984094/r/il/8c939e/2865578626/il_1588xN.2865578626_bjh4.jpg",
                        image_2="https://i.etsystatic.com/23984094/r/il/00665c/2913258945/il_794xN.2913258945_obvm.jpg",
                        image_3="https://i.etsystatic.com/23984094/r/il/c50876/2865578870/il_794xN.2865578870_lu9q.jpg",
                        shop_id=5,
                        price=13.00)
    listing24 = Listing(name="White butterfly syngonium 4” pot",
                        description="Syngonium white butterfly starter plant in 4” pot",
                        image_1="https://i.etsystatic.com/23984094/r/il/650950/2763437364/il_1588xN.2763437364_cxsi.jpg",
                        image_2="https://i.etsystatic.com/23984094/r/il/ea282d/2763437246/il_794xN.2763437246_by0m.jpg",
                        image_3="https://i.etsystatic.com/23984094/r/il/1a1daa/2811125871/il_794xN.2811125871_9hpy.jpg",
                        shop_id=5,
                        price=6.00)
    listing25 = Listing(name="African violet with blue purple flowers in 4” pot",
                        description="",
                        image_1="https://i.etsystatic.com/23984094/r/il/172db3/2954072178/il_794xN.2954072178_om1n.jpg",
                        image_2="https://i.etsystatic.com/23984094/r/il/6f813f/3001778855/il_1588xN.3001778855_qzuz.jpg",
                        image_3="",
                        shop_id=5,
                        price=14.00)

    # TwistedAcres

    listing26 = Listing(name="Air Plant Iona 3 for 1 Deal Airplant, Tillandsia, wholesale, Bulk, Sale, Wedding Favors, Terrariums",
                        description="You order one you get a total of three iona plants you can't go wrong. We will pick you out three of our very best Iona air plants for you.",
                        image_1="https://i.etsystatic.com/6434562/r/il/f67754/324649642/il_1588xN.324649642.jpg",
                        image_2="https://i.etsystatic.com/6434562/r/il/34c5b2/324649994/il_794xN.324649994.jpg",
                        image_3="",
                        shop_id=6,
                        price=4.15)
    listing27 = Listing(name="Hot Pink Capitata Airplant, Tillandsia, wholesale, Bulk, Sale, Wedding Favors, Terrariums",
                        description="Color is an organic enhancement. Color will last as long as an average color change of an air plant 1-2 months minimum if not longer.",
                        image_1="https://i.etsystatic.com/6434562/r/il/9f4408/747783562/il_1588xN.747783562_604d.jpg",
                        image_2="",
                        image_3="",
                        shop_id=6,
                        price=5.99)
    listing28 = Listing(name="Air Plant WHOLESALE Mix quantity of your choice Airplant, Tillandsia, wholesale, Bulk, Sale, Wedding Favors, Terrariums",
                        description="Easy care!!! Do not put in soil. Can put in any container glass, wire, plate, metal, stone, wood, the ideas are endless as long as it is waterproof and not made of copper Can be grown outside in warmer temperatures, partial shade or bright indirect light. Place in your favorite tree next to your hammock. Water weekly.",
                        image_1="https://i.etsystatic.com/6434562/r/il/ead643/1664098565/il_1588xN.1664098565_qsz8.jpg",
                        image_2="https://i.etsystatic.com/6434562/r/il/d94006/1647559340/il_794xN.1647559340_kptm.jpg",
                        image_3="https://i.etsystatic.com/6434562/r/il/07f027/1647560464/il_794xN.1647560464_1ub5.jpg",
                        shop_id=6,
                        price=6.00)
    listing29 = Listing(name="Air Plant Small medusa Airplant, Tillandsia, wholesale, Bulk, Sale, Wedding Favors, Terrariums",
                        description="Small medusa. Wonderfully fun, whimsical and fascinating plant. Will eventually bloom red and purple.",
                        image_1="https://i.etsystatic.com/6434562/r/il/c21431/762336863/il_1588xN.762336863_eewh.jpg",
                        image_2="https://i.etsystatic.com/6434562/r/il/e24958/762215560/il_794xN.762215560_n4vo.jpg",
                        image_3="",
                        shop_id=6,
                        price=2.85)
    listing30 = Listing(name="Air Plant large stricta hybrid",
                        description="Large stricta hybrid. Beautiful plant with large bloom and velvet soft leaves.",
                        image_1="https://i.etsystatic.com/6434562/r/il/95be63/1587497839/il_1588xN.1587497839_8p0d.jpg",
                        image_2="https://i.etsystatic.com/6434562/r/il/ad0b1e/649290028/il_794xN.649290028_1kod.jpg",
                        image_3="https://i.etsystatic.com/6434562/r/il/fef43a/1540032696/il_794xN.1540032696_hibz.jpg",
                        shop_id=6,
                        price=9.00)

    # 9Tree7

    listing31 = Listing(name="Mini Potted Red Prayer Plant in Terra-Cotta - Maranta Leuconeura",
                        description="Looking for a plant to go with the flow? Look no further than the prayer plant! Prayer plants move their leaves in accordance to the time of day and light available, similar to praying hands!",
                        image_1="https://i.etsystatic.com/12134093/r/il/02953c/2923249270/il_1588xN.2923249270_cs6o.jpg",
                        image_2="https://i.etsystatic.com/12134093/r/il/198d8f/2923249608/il_794xN.2923249608_8i0t.jpg",
                        image_3="",
                        shop_id=7,
                        price=6.00)
    listing32 = Listing(name="Coffee Plant - Coffee Arabica Plant in Terra-cotta Pot Mini Plant",
                        description="Love coffee? Love plants? This is a must-have! This coffee plant is fully rooted and planted in a 2.5 inch terra-cotta pot! The plant will arrive packaged with care instructions to allow it to grow into a large, happy plant.",
                        image_1="https://i.etsystatic.com/12134093/r/il/d673e9/2903337026/il_1588xN.2903337026_jbi6.jpg",
                        image_2="https://i.etsystatic.com/12134093/r/il/139e9d/2951021377/il_794xN.2951021377_179r.jpg",
                        image_3="",
                        shop_id=7,
                        price=6.50)
    listing33 = Listing(name="Monstera Adansonii Narrow Form RARE - Little Swiss Cheese Plant Fully Rooted",
                        description="This monstera adansonii is fully rooted and planted in a 2.5 inch terra-cotta pot! The plant will arrive packaged with care instructions to allow it to grow into a large, happy plant.",
                        image_1="https://i.etsystatic.com/12134093/r/il/654688/2951087133/il_1588xN.2951087133_rw6v.jpg",
                        image_2="",
                        image_3="",
                        shop_id=7,
                        price=7.00)
    listing34 = Listing(name="Mini Potted Marble Queen Pothos in Terra-Cotta - Epipremnum Aureum Devil's Ivy",
                        description="This pothos is fully rooted and planted in a 2.5 inch grey clay pot! The plant will arrive packaged with care instructions to allow it to grow into a large, happy plant.",
                        image_1="https://i.etsystatic.com/12134093/r/il/bd89db/2970898695/il_1588xN.2970898695_18uw.jpg",
                        image_2="https://i.etsystatic.com/12134093/r/il/7c8563/2970899227/il_794xN.2970899227_6xvl.jpg",
                        image_3="",
                        shop_id=7,
                        price=8.00)
    listing35 = Listing(name="Golden Pothos in Glazed Hanging Pot - Epipremnum Aureum Golden Pothos Devil's Ivy Macrame",
                        description="This pothos is fully rooted and planted in a white and blue glazed, 5 inch clay pot! It also has a macrame braided hanger. The plant will arrive packaged with care instructions to allow it to grow into a large, happy plant. These plants are very easy to grow, as they only need watered ~once per week, and are happy to live in low light conditions. However, the more light it has, the more variegation the leaves will produce! Pothos grow quickly, and they love to trail and climb, so this pot would be very happy placed on a shelf to allow the vines to cascade.",
                        image_1="https://i.etsystatic.com/12134093/r/il/2008fd/2799787400/il_1588xN.2799787400_ddhx.jpg",
                        image_2="https://i.etsystatic.com/12134093/r/il/4bc400/2799410986/il_794xN.2799410986_mpcp.jpg",
                        image_3="https://i.etsystatic.com/12134093/r/il/8e689c/2847082841/il_794xN.2847082841_e6zw.jpg",
                        shop_id=7,
                        price=30.00)

    # SnakeRiverGarden

    listing36 = Listing(name="Kalanchoe luciae ‘Flapjack’ (Paddle Plant) - 3.5” Growers Pot",
                        description="The Flapjack features thick, rounded, paddle-shaped leaves that are pale-aqua and blush red on the edges. It produces small pale yellow flowers on stalks.",
                        image_1="https://i.etsystatic.com/22605970/r/il/64ea7a/2943429793/il_1588xN.2943429793_jvge.jpg",
                        image_2="",
                        image_3="",
                        shop_id=8,
                        price=13.99)
    listing37 = Listing(name="Lavandula angustifolia 'Hidcote' (English Lavender) - 4 inch Growers Pot",
                        description="Hidcote Lavender features subtle gray-green leaves and a sweet fragrance. Purple stalks rose above the foliage.",
                        image_1="https://i.etsystatic.com/22605970/r/il/bd27d7/2890331799/il_1588xN.2890331799_f0p8.jpg",
                        image_2="https://i.etsystatic.com/22605970/r/il/c25ebb/2820613861/il_794xN.2820613861_cp0j.jpg",
                        image_3="",
                        shop_id=8,
                        price=8.99)
    listing38 = Listing(name="Euphorbia milii 'Zephyr’ (Crown of Thorns) - 2.5 inch Growers Pot",
                        description="Crown of Thorns is recognized for its eye-catching blooms, which are not real flowers in the real sense, but spathaceous red bracts conveniently situated at the shoot tips. These conspicuous, saucer-shaped bracts surround the real flowers. The narrow, obovate, smooth-edged leaves that are spirally arranged on the stem naturally drop off as the plant gets older. This gives a scrawny appearance in older plants – an awesome vintage aesthetic for your living room or office.",
                        image_1="https://i.etsystatic.com/22605970/r/il/5283dc/2857932464/il_1588xN.2857932464_nt4y.jpg",
                        image_2="https://i.etsystatic.com/22605970/r/il/788a6a/2905602883/il_794xN.2905602883_ozbf.jpg",
                        image_3="https://i.etsystatic.com/22605970/r/il/fbde70/2905602977/il_794xN.2905602977_tli8.jpg",
                        shop_id=8,
                        price=10.99)
    listing39 = Listing(name="Hordeum vulgare (Cat Grass) - 4 inch Growers Pot",
                        description="Variegated Cat Grass is a healthy treat for your favorite felines. This attractive barley grass is solid green green. Why do cats eat grass? It helps them toss up hairballs and many have a natural taste for greens.",
                        image_1="https://i.etsystatic.com/22605970/r/il/086097/2924870731/il_1588xN.2924870731_m5ge.jpg",
                        image_2="https://i.etsystatic.com/22605970/r/il/fa308d/2877186696/il_794xN.2877186696_cn6y.jpg",
                        image_3="https://i.etsystatic.com/22605970/r/il/2ea9df/2924870737/il_794xN.2924870737_iw9p.jpg",
                        shop_id=8,
                        price=8.99)
    listing40 = Listing(name="Hypoestes phyllostachya 'Splash Red' (Polka Dot Plant) - 4 inch Growers Pot",
                        description="ka dot plant is one of the cheeriest foliage plants around -- and most colorful. This beauty shows off red, pink, or white leaves marked with splashes of dark green. Polka dot plant forms a relatively low mound of foliage that looks good by itself or outstanding when mixed with other plants such as calathea that have fun foliage.",
                        image_1="https://i.etsystatic.com/22605970/r/il/fcd73f/2974983033/il_794xN.2974983033_e1iw.jpg",
                        image_2="https://i.etsystatic.com/22605970/r/il/635aab/2927284360/il_1588xN.2927284360_de7d.jpg",
                        image_3="",
                        shop_id=8,
                        price=12.99)

    # Dorology

    listing41 = Listing(name="Raven ZZ (Zamioculas Zamiifolia) Plant - Rare",
                        description="You will receive a small live plant. It will be shipped bare root, no soil, no pot.",
                        image_1="https://i.etsystatic.com/17074812/r/il/43cf0e/2800576490/il_794xN.2800576490_tvyw.jpg",
                        image_2="https://i.etsystatic.com/17074812/r/il/a3d958/2862757814/il_794xN.2862757814_ofjg.jpg",
                        image_3="",
                        shop_id=9,
                        price=9.99)
    listing42 = Listing(name="Begonia Maculata - Polkadot Begonia Rooted Cutting",
                        description="It will be shipped bare root, no soil, no pot.",
                        image_1="https://i.etsystatic.com/17074812/r/il/f8c793/2989777445/il_1588xN.2989777445_f9ji.jpg",
                        image_2="https://i.etsystatic.com/17074812/r/il/448993/2989777585/il_794xN.2989777585_qut0.jpg",
                        image_3="https://i.etsystatic.com/17074812/r/il/30a417/3012377389/il_794xN.3012377389_7l3w.jpg",
                        shop_id=9,
                        price=19.99)
    listing43 = Listing(name="Gymnocalycium horstii Sider Cactus 2”",
                        description="Gymnocalycium horstii is a globular cactus resembling a loaf of bread from a bakery. Plants have a squat appearance and spines that are curved back towards the body. Plants usually offset over time, creating interesting specimens. The body of this species is glossy and the flower is always white. Its close relative Gymnocalycium buenekeri which occurs 200 km westward has a very similar but dull body with always pink flowers. Gymnocalycium horstii is a very rare and threatened South American species and occurs only in the southern Brazilian province of Rio Grande do Sul.",
                        image_1="https://i.etsystatic.com/17074812/r/il/dc1ae5/2989758617/il_1588xN.2989758617_nd1r.jpg",
                        image_2="https://i.etsystatic.com/17074812/r/il/ff2dd9/2942062412/il_794xN.2942062412_h6ko.jpg",
                        image_3="https://i.etsystatic.com/17074812/r/il/407420/2989758691/il_794xN.2989758691_9kcs.jpg",
                        shop_id=9,
                        price=9.99)
    listing44 = Listing(name="Gymnocalycium baldianum 2”",
                        description="Gymnocalycium baldianum, the spider-cactus or dwarf chin cactus, is a species of flowering plant in the cactus family Cactaceae, native to the Catamarca Province in Argentina.",
                        image_1="https://i.etsystatic.com/17074812/r/il/78017c/2946885166/il_1588xN.2946885166_exml.jpg",
                        image_2="https://i.etsystatic.com/17074812/r/il/76e2e7/2964690214/il_794xN.2964690214_oo8m.jpg",
                        image_3="",
                        shop_id=9,
                        price=5.99)
    listing45 = Listing(name="Echinopsis subdenudata Domino Cactus 2”",
                        description="Echinopsis subdenudata (commonly called domino cactus, night blooming hedgehog, Easter lily cactus) is a species of cactus. It has a globular shape, few spines, with large, white flowers attached to long, green tubes. It occurs in Bolivia, at altitudes of 600–1800 meters. Under its synonym Echinopsis ancistrophora it has gained the Royal Horticultural Society’s Award of Garden Merit.",
                        image_1="https://i.etsystatic.com/17074812/r/il/52dc31/2968420970/il_1588xN.2968420970_i91u.jpg",
                        image_2="https://i.etsystatic.com/17074812/r/il/71b942/3016128947/il_794xN.3016128947_kcb6.jpg",
                        image_3="https://i.etsystatic.com/17074812/r/il/29dca2/3016129341/il_794xN.3016129341_liyl.jpg",
                        shop_id=9,
                        price=8.99)

    # GreenGardenFinds

    listing46 = Listing(name="Mimosa Pudica - Sensitive Plant - Rare Live Plant",
                        description="You will receive 1 Mimosa Pudica Live plant, 3+ inches. Plants are shipped when younger (approximately 1-2 months old) so they will acclimate easier to new environments and conditions. Be aware that plants may take 24 hours to open up fully and begin to move to touch again due to shipping and acclimating to their new environment. A schedule of 12-16 hours of sunlight/artificial light a day is necessary for this process.",
                        image_1="https://i.etsystatic.com/28031017/r/il/2612a4/2924604686/il_1588xN.2924604686_krib.jpg",
                        image_2="https://i.etsystatic.com/28031017/r/il/308ccf/2924604672/il_794xN.2924604672_sxyx.jpg",
                        image_3="",
                        shop_id=1,
                        price=34.00)
    listing47 = Listing(name="Mortgage Lifter Tomato - 3 Live Plants Per Order - GMO Free",
                        description="You will receive 3 live Mortgage Lifter Tomato plants! 80 days to harvest",
                        image_1="https://i.etsystatic.com/28031017/r/il/79a352/2958033274/il_1588xN.2958033274_m67v.jpg",
                        image_2="https://i.etsystatic.com/28031017/r/il/6fd731/3005737955/il_794xN.3005737955_lhff.jpg",
                        image_3="",
                        shop_id=1,
                        price=25.00)
    listing48 = Listing(name="Straight Eight Cucumber - 5 Live Cucumber Plants Per Order - All Season Growers & Producers - Live Arrival Guaranteed!",
                        description="You will receive 5 live Straight Eight Cucumber plants.",
                        image_1="https://i.etsystatic.com/28031017/r/il/16aab2/3005715447/il_1588xN.3005715447_2jh8.jpg",
                        image_2="https://i.etsystatic.com/28031017/r/il/0bee87/2968610289/il_794xN.2968610289_2yc5.jpg",
                        image_3="",
                        shop_id=1,
                        price=30.00)
    listing49 = Listing(name="California Wonder Green Bell Pepper - 3 Live Plants Per Order - GMO Free",
                        description="You will receive 3 live California Wonder Green Bell Pepper plants! 75 days to harvest",
                        image_1="https://i.etsystatic.com/28031017/r/il/5e22cf/2971663152/il_1588xN.2971663152_5uqq.jpg",
                        image_2="https://i.etsystatic.com/28031017/r/il/b2d31b/2971662748/il_794xN.2971662748_cwm3.jpg",
                        image_3="https://i.etsystatic.com/28031017/r/il/a4944c/3019371321/il_794xN.3019371321_7grz.jpg",
                        shop_id=1,
                        price=20.00)
    listing50 = Listing(name="Supersweet 100 - 3 Live Plants Per Order - GMO Free",
                        description="You will receive 3 live Supersweet 100 Tomato plants! 70 days to harvest",
                        image_1="https://i.etsystatic.com/28031017/r/il/a4944c/3019371321/il_794xN.3019371321_7grz.jpg",
                        image_2="https://i.etsystatic.com/28031017/r/il/b2d31b/2971662748/il_794xN.2971662748_cwm3.jpg",
                        image_3="https://i.etsystatic.com/28031017/r/il/c0c546/2971662744/il_794xN.2971662744_o2nx.jpg",
                        shop_id=1,
                        price=25.00)

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
