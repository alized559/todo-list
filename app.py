import os
from flask import Flask
from flask_migrate import Migrate
from flask_cors import CORS
from flask.helpers import send_from_directory
from db import db
from todo_list import todo_list_api
from models.todos import Todo

app = Flask(__name__, static_folder='build', static_url_path='')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
migrate = Migrate(app, db)

CORS(app, support_credentials=True)

def serve():
	return send_from_directory(app.static_folder, 'index.html')

app.register_blueprint(todo_list_api)

if __name__ == '__main__':
	app.run()
