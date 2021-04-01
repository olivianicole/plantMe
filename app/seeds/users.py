from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want


def seed_users():

    demo = User(first_name='Demo', email='demo@gmail.com',
                password='password')
    user2 = User(first_name='Hadley', email='hadleysage@gmail.com',
                 password='password')
    user3 = User(first_name='Kara', email='karaluvsdogs@gmail.com',
                 password='password')
    user4 = User(first_name='Mike', email='mike89@gmail.com',
                 password='password')
    user5 = User(first_name='Caleb', email='calebjay@gmail.com',
                 password='password')
    user6 = User(first_name='Olivia', email='livvy@gmail.com',
                 password='password')
    user7 = User(first_name='Hannah', email='hannahplants@gmail.com',
                 password='password')
    user8 = User(first_name='Michelle', email='ilovecoffee@gmail.com',
                 password='password')
    user9 = User(first_name='Gale', email='plantmom@gmail.com',
                 password='password')
    user10 = User(first_name='Liza', email='plantshop92@gmail.com',
                  password='password')
    user11 = User(first_name='Brad', email='bradslife@gmail.com',
                  password='password')
    user12 = User(first_name='Abraham', email='frenchfry@gmail.com',
                  password='password')
    user13 = User(first_name='Jennifer', email='jval@gmail.com',
                  password='password')
    user14 = User(first_name='Kirsten', email='kiki@gmail.com',
                  password='password')
    user15 = User(first_name='Gianna', email='giannav@gmail.com',
                  password='password')
    user16 = User(first_name='Christian', email='gamerboy@gmail.com',
                  password='password')
    user17 = User(first_name='Courtney', email='courtplants@gmail.com',
                  password='password')
    user18 = User(first_name='Ava', email='avagirl@gmail.com',
                  password='password')
    user19 = User(first_name='Lila', email='lilababy@gmail.com',
                  password='password')
    user20 = User(first_name='Sophie', email='sophiepup@gmail.com',
                  password='password')

    db.session.add(demo)
    db.session.add(user2)
    db.session.add(user3)
    db.session.add(user4)
    db.session.add(user5)
    db.session.add(user6)
    db.session.add(user7)
    db.session.add(user8)
    db.session.add(user9)
    db.session.add(user10)
    db.session.add(user11)
    db.session.add(user12)
    db.session.add(user13)
    db.session.add(user14)
    db.session.add(user15)
    db.session.add(user16)
    db.session.add(user17)
    db.session.add(user18)
    db.session.add(user19)
    db.session.add(user20)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
