from flask.cli import AppGroup
from .users import seed_users, undo_users
from .shops import seed_shops, undo_shops
from .listings import seed_listings, undo_listings
from .favorites import seed_favorites, undo_favorites

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_shops()
    seed_listings()
    seed_favorites()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_shops()
    undo_listings()
    undo_favorites()
    # Add other undo functions here
