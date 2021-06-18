from re import M, U, fullmatch
# from typing_extensions import Required
from flask import Blueprint, Flask, jsonify, request, make_response
from models import *
import random
from api import app
import jwt
import datetime
from functools import wraps
from flask_cors import CORS, cross_origin
from werkzeug.security import generate_password_hash, check_password_hash
from api import db
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
api = Blueprint('api', __name__, url_prefix='/api')

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.args.get('token')
        if not token:
            return jsonify({'message' : 'Token is missing'}), 403
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms="HS256")
        except:
            return jsonify({'message' : 'Token is Invalid'}), 403
        return f(*args, **kwargs)

    return decorated

@api.route('/authenticate')
@cross_origin()
def authenticate():
    email = request.args.get('email')
    password = request.args.get('password')
    user = Users.query.filter_by(email=email).first()

    if not user or not check_password_hash(user.password, password):
        return jsonify({'message': "Incorrect credentials"})
    
    expiration = datetime.datetime.utcnow() + datetime.timedelta(minutes=30)
    token = jwt.encode({'user':user.email, 'expiration':str(expiration)}, app.config['SECRET_KEY'])
    return jsonify({'token': token, 'message':'validated', 'user_id':user.id})


@api.route('/signup', methods=['GET','POST'])
@cross_origin()
def CreateAccount():
    data = request.get_json()
    fullname = data['fullname']
    email = data['email']
    password = data['password']
    passwordsalt = str(generate_salt())
    user = Users.query.filter_by(email=email).first()

    if user:
        return jsonify({'message': "Email Already Exists"})

    user = Users(fullname=fullname, email=email, password=generate_password_hash(password), passwordsalt=passwordsalt)
    db.session.add(user)
    db.session.commit()

    return jsonify({'message':'Account Created'})

@api.route('/favorite', methods=['GET','POST'])
@cross_origin()
@token_required
def favorite():
    if request.method == 'GET':
        User_id = request.args.get('user_id')
        fav = Favorite.query.filter_by(user_id=User_id).all()
        favorites = []
        for mov in fav:
            Movie_id = mov.movie_id
            movie = Movie.query.filter_by(id=Movie_id).first()
            if movie:
                favorites.append(movie)
        movies = [favorites[i].as_dict() for i in range(len(favorites))]
        return jsonify(movies)
    if request.method == 'POST':
        User_id = request.args.get('user_id')
        Movie_id = request.args.get('movie_id') 
        fav = Favorite.query.filter_by(user_id=User_id, movie_id=Movie_id).first()
        if fav:
            return {"Already Liked":"Favorite another one"} 
        fav = Favorite(user_id=User_id, movie_id=Movie_id)
        db.session.add(fav)
        db.session.commit()  
        return {"Success":""}

#is a protected route 
@api.route('/movies', methods=['GET','POST'])
@token_required
def movies():
    if request.method == 'POST':
        data = request.get_json()   
        genres = data['genres']
        movie = Movie(title=data['title'], Date=data['year'],Description=data['plot'], ratingcount=8.6,duration=data['runtime'])
        db.session.add(movie)
        movie = Movie.query.filter_by(title=data['title']).first()
        for genre in genres:
            movieGenre = moviegenre(movie_id=movie.id, genre_id=int(genre))
            db.session.add(movieGenre)
            db.session.commit()
        return jsonify({"message":"success"})
    elif request.method == 'GET':
        movieList = Movie.query.all()
        movies = [movieList[i].as_dict() for i in range(len(movieList))]
        return jsonify(movies)

@api.route('/movies/genre/<g_id>')
@token_required
def moviesByGenre(g_id):
    genre = moviegenre.query.filter_by(genre_id=g_id).all()
    # print (genre)
    movies = []
    for item in genre:
        movie_id = item.movie_id
        movie = Movie.query.filter_by(id=movie_id).first()
        movies.append(movie)
    movies = [movies[i].as_dict() for i in range(len(movies))]
    return jsonify(movies) 


def generate_salt():
    choices = random.choices("abcdefghijklmnopqrstuvwxyz1234567890", k=10)
    return "".join(str(e) for e in choices)
