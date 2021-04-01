"""empty message

Revision ID: 6b7030c9442c
Revises:
Create Date: 2021-04-01 13:16:32.601216

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6b7030c9442c'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('categories',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('category', sa.String(length=100),
                              nullable=False),
                    sa.PrimaryKeyConstraint('id')
                    )
    op.create_table('users',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('first_name', sa.String(length=40),
                              nullable=False),
                    sa.Column('email', sa.String(length=255), nullable=False),
                    sa.Column('hashed_password', sa.String(length=255),
                              nullable=False),
                    sa.PrimaryKeyConstraint('id'),
                    sa.UniqueConstraint('email'),
                    sa.UniqueConstraint('first_name')
                    )
    op.create_table('shops',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('name', sa.String(), nullable=False),
                    sa.Column('owner_id', sa.Integer(), nullable=False),
                    sa.Column('description', sa.String(), nullable=False),
                    sa.ForeignKeyConstraint(['owner_id'], ['users.id'], ),
                    sa.PrimaryKeyConstraint('id'),
                    sa.UniqueConstraint('name'),
                    sa.UniqueConstraint('owner_id')
                    )
    op.create_table('listings',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('name', sa.String(length=100), nullable=False),
                    sa.Column('description', sa.String(length=250),
                              nullable=False),
                    sa.Column('num_sales', sa.Integer(), nullable=True),
                    sa.Column('image_1', sa.String(), nullable=False),
                    sa.Column('image_2', sa.String(), nullable=True),
                    sa.Column('image_3', sa.String(), nullable=True),
                    sa.Column('category_id', sa.Integer(), nullable=True),
                    sa.Column('shop_id', sa.Integer(), nullable=False),
                    sa.ForeignKeyConstraint(['category_id'],
                                            ['categories.id'], ),
                    sa.ForeignKeyConstraint(['shop_id'], ['shops.id'], ),
                    sa.PrimaryKeyConstraint('id')
                    )
    op.create_table('favorites',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('user_id', sa.Integer(), nullable=False),
                    sa.Column('listing_id', sa.Integer(), nullable=False),
                    sa.ForeignKeyConstraint(['listing_id'], ['listings.id'], ),
                    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
                    sa.PrimaryKeyConstraint('id')
                    )
    op.create_table('reviews',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('listing_id', sa.Integer(), nullable=False),
                    sa.Column('user_id', sa.Integer(), nullable=False),
                    sa.Column('rating', sa.Integer(), nullable=True),
                    sa.Column('review', sa.String(length=250), nullable=True),
                    sa.Column('created_at', sa.Date(), nullable=True),
                    sa.ForeignKeyConstraint(['listing_id'], ['listings.id'], ),
                    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
                    sa.PrimaryKeyConstraint('id'),
                    sa.UniqueConstraint('listing_id'),
                    sa.UniqueConstraint('user_id')
                    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('reviews')
    op.drop_table('favorites')
    op.drop_table('listings')
    op.drop_table('shops')
    op.drop_table('users')
    op.drop_table('categories')
    # ### end Alembic commands ###