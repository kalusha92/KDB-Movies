from api import db
db.metadata.clear()
class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fullname = db.Column(db.String(50))
    email = db.Column(db.String(100))
    password = db.Column(db.String(100))
    passwordsalt = db.Column(db.String(50))

class moviegenre(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    movie_id = db.Column(db.Integer)
    genre_id = db.Column(db.Integer)

class Movie(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50))
    Date = db.Column(db.String(50))
    Description = db.Column(db.Text)
    ratingcount = db.Column(db.Integer)
    duration = db.Column(db.String)    


    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
    def as_dict(self):      
       return {c.name: getattr(self, c.name) for c in self.__table__.columns}

class Genre(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)
    
class Favorite(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    movie_id = db.Column(db.Integer)

db.create_all()









































class Review(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.Integer)
    review = db.Column(db.String(150))
    movie_id = db.Column(db.Integer)