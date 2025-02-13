"""Initial Migration

Revision ID: aa6ea29b7e09
Revises: 
Create Date: 2025-02-03 17:15:57.425294

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'aa6ea29b7e09'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('player', schema=None) as batch_op:
        batch_op.add_column(sa.Column('team', sa.String(length=50), nullable=True))
        batch_op.add_column(sa.Column('points_2024', sa.Float(), nullable=True))
        batch_op.add_column(sa.Column('points_2025', sa.Float(), nullable=True))
        batch_op.drop_column('salary')
        batch_op.drop_column('points')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('player', schema=None) as batch_op:
        batch_op.add_column(sa.Column('points', sa.FLOAT(), nullable=True))
        batch_op.add_column(sa.Column('salary', sa.FLOAT(), nullable=True))
        batch_op.drop_column('points_2025')
        batch_op.drop_column('points_2024')
        batch_op.drop_column('team')

    # ### end Alembic commands ###
