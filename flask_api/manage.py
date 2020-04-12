from app import create_app
from flask_script import Manager, Server
from config import config

from app.views import email_survey_notification

import time

import datetime



config_class = config['development']
app = create_app(config_class)


def send_emails():
	with app.app_context():
		email_survey_notification()



if __name__ == '__main__':
	manager = Manager(app)
	#manager.add_command("createsuperuser", createsuperuser)
	manager.add_command("runserver", Server('192.168.31.162') )
	manager.run()
