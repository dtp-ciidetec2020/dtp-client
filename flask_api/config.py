import os
import urllib.parse

from mongoengine import connect

class Config:
	
	JWT_SECRET_KEY = 'pixelmarco'
	
	#username = urllib.parse.quote_plus('marco')
	#password = urllib.parse.quote_plus('metallica1')

class DevelopmentConfig(Config):
	
	DEBUG = True

	MONGODB_SETTINGS =  {'host' : "mongodb+srv://marco:metallica1@uas-6xetc.mongodb.net/test?retryWrites=true"}
	
	MAIL_SERVER = "smtp.gmail.com"
	MAIL_PORT = 587
	MAIL_USE_TLS = True
	MAIL_USERNAME = "ciidetec.robot@gmail.com"
	MAIL_PASSWORD= "metallica_1_h94"


	UPLOAD_FORLDER = '/files/'


	
config = {
	
		  'development':DevelopmentConfig,
		  'default':DevelopmentConfig,

	}