from app import create_app
from flask_script import Manager, Server
from config import config

import time

import datetime



config_class = config['development']
app = create_app(config_class)

if __name__ == '__main__':
	manager = Manager(app)
	manager.add_command("runserver", Server('0.0.0.0') )
	manager.run()
