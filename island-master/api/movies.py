from flask import Blueprint

movies = Blueprint('api', __name__, url_prefix='/movies')

@movies.route('/data')
def index():
    return {'movies':'value'}