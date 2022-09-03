import os
import click
from flask.cli import with_appcontext
from flask import Flask
from flask_migrate import Migrate
from flask_cors import CORS
from db import db
from todo_list import todo_list_api
from models.todos import Todo

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
migrate = Migrate(app, db)

CORS(app, support_credentials=True)

app.register_blueprint(todo_list_api)

if __name__ == '__main__':
	app.run()

@click.command(name='create_tables')
@with_appcontext
def create_tables():
	db.create_all()
