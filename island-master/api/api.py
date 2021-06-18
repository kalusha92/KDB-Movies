import os
from flask import Flask, request, jsonify, session, Response
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine    
from config import Config

app = Flask(__name__)
app.config.from_object(Config)
app.config['SECRET_KEY'] = 'random-secret-key'
# app.register_blueprint
# api = Api(app)

db = SQLAlchemy(app)

from routes import api
app.register_blueprint(api)

