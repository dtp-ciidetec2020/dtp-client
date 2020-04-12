
from mongoengine import *
from flask import jsonify

class UserAccount(Document):    
    
    username = StringField(unique=True, required=True)
    password = StringField(required=True)
    email = EmailField(unique=True, required=True)


class UserPersonalInfo(Document):

    first_name = StringField(required=True)
    last_name = StringField(required=True)
    age = IntField(required= True)
    address = StringField()
    street = StringField()
    location  = StringField()
    city = StringField()
    zipcode = IntField()
    occupation = StringField()
    workplace = StringField()
    username = StringField(unique=True, required=True)

