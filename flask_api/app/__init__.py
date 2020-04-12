from flask import Flask
from flask_bcrypt import Bcrypt 
from flask_mail import Mail
from flask_jwt_extended import JWTManager

from flask_mongoengine import MongoEngine

app = Flask(__name__)

jwt = JWTManager()
bcrypt = Bcrypt()
db = MongoEngine()

def create_app(config):

	app.config.from_object(config)
	bcrypt.init_app(app)
	#mail.init_app(app)
	jwt.init_app(app)
	db.init_app(app)

	from  app.Views.user_session_flow  import user_flow
	app.register_blueprint(user_flow)
	return app