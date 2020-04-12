from flask import Blueprint
from flask import jsonify
from flask import request


from app.Models.user_schema import UserAccount, UserPersonalInfo

from flask_jwt_extended import ( jwt_required, create_access_token, get_jwt_identity)

from app import bcrypt

user_flow = Blueprint('user_flow',__name__,)


@user_flow.route('/', methods=['GET'])
def hello():
    return jsonify({"hola":"mundo"})

@user_flow.route('/login', methods = ['POST'])
def login():

    username = request.json.get('username', None)
    password = request.json.get('password', None)
    if username is not None and password is not None:
        query_user  = UserAccount.objects(username = username)
        if query_user:
            pwd_is_true = bcrypt.check_password_hash(query_user.password, password)
            if pwd_is_true:
                jwt_token = create_access_token(identity = username+password)  
    return jsonify(jwt_token=jwt_token),200


@user_flow.route('/register', methods = ['POST'])
def register():
    status = None
    req = request.get_json()
    user =  UserAccount(username = req['username'], password =  bcrypt.generate_password_has(req['password']).decode('utf-8'), email = req['email'])
    try:
        user.save()
        status = "created",201
    except:
        status = "not created"  
    return jsonify(status = status)

@user_flow.route('/personal_information', methods = ['POST'])
@jwt_required
def personal_info():
    
    status = None
    user_info = UserPersonalInfo(first_name = request.json.get('first_name'),
        last_name = request.json.get('last_name'),
        age = request.json.get('age'),
        street = request.json.get('street',None),
        location = request.json.get('location',None),
        city = request.json.get('city',None),
        zipcode  = request.json.get('zipcode',None),
        occupation = request.json.get('occupation',None),
        workplace = request.json.get('workplace',None),
        username = request.json.get('username',None)
    )
    try:
        user_info.save()
        status = "created", 201
    except:
        status = "not created"

    return jsonify(status=status)



