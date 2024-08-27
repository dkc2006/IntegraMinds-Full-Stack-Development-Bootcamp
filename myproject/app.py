# from flask import Flask, request, jsonify
import json
from flask import Flask, request
from pymongo import MongoClient
from bson import ObjectId
from encode import CustomJSONEncoder
from flask_cors import CORS,cross_origin


# from json import JSONEncoder
client = MongoClient("mongodb://localhost:27017/")

# a1 is the database name
db = client.a1

app = Flask(__name__)

app.json_encoder = CustomJSONEncoder
CORS(app)

@app.route("/")
def home():
    

    # Random number between 1 and 100
    import random

    random_number = random.randint(1, 100)

    post = {
        "author": "Mike",
        "text": "My first blog post!",
        "random_number": random_number,
        "tags": ["mongodb", "python", "pymongo"],
    } 
    
    db.posts.insert_one(post)
    print("post:",post)    
 
    # json.encode(post, cls=JSONEncoder)
    # JSONEncode().encode(post)
    return {"status": 1, 
            "message": "Home 🏠!", 
            "payload": {}}    


# Render Templates in Flask

# Keep the templates in the templates folder

@app.route("/services")
def services():
    # Services html inside the templates folder
    return render_template("services.html",title="Services")
# update document using post id

@app.route("/post/add",methods=["POST"])
def PostAdd():
    form = request.form
    print("form:",form)
    
    args = request.args
    print("args:",args)
    
    data = request.data
    print("data:",data)
    
    
    # json_data = request.json
    # print("json_data:",json_data)    
    
    data_json = json.loads(data.decode("utf-8"))
    print(f"data.decode('utf-8'): {data_json}")
    
    print(f"data_json['author']: {data_json['author']}")
    
    json_data = request.json
    print("🚀 ~ json_data:", json_data)
    
    print(f"json_data['author']:{json_data['author']}")
    print(f"json_data['text']:{json_data['text']}")
    print(f"json_data['tags']:{json_data['tags']}")
    print(f"json_data['random_number']:{json_data['random_number']}")

    return {
        "status": 1,
        "message": "Post Updated!",
        "payload": {}
    }
    
@app.route("/contact/save",methods=["POST"])

def SaveContactUsForm():
    json_data = request.json
    print(" ~ json_data:", json_data)
    
    db.queries.insert_one(json_data)
    
    return {
        "status": 1,
        "message": "Contact Us Form Saved!",
        "payload": {}
    }

# @app.route("/")
# def hello_world():
#     return {
#         "title": "Hello",
#         "message": "Welcome to the API!",
#         "payload": {}
#     }

# # Static path
# @app.route("/about")
# def about():
#     return {
#         "title": "About",
#         "message": "This is a simple API built using Flask!"
#     }

# # Dynamic path for profile by ID

# # http://127.0.0.1:5000/profile/1010101

# @app.route("/profile/<profileId>")
# def profile(profileId):
#     return {
#         "status": 1,
#         "message": "profile!",
#         "payload": {"profileId": profileId}
#     }

# # Dynamic path for profile with category

# # http://127.0.0.1:5000/product/watch/101
# # http://127.0.0.1:5000/product/mobile/105

# @app.route("/product/<categoryId>/<profileId>")
# def product(categoryId, profileId):
#     return {
#         "status": 1,
#         "message": "profile with category!",
#         "payload": {"categoryId": categoryId, "profileId": profileId}
#     }

# # Accessing query parameters

# # http://127.0.0.1:5000/search?q1=something

# @app.route("/search")
# def search():
#     q1 = request.args.get("q1")
#     print("request.args :", request.args)
    
#     return{
#         "status": 1,
#         "message": "Search results!",
#         "payload": {"q1": q1}
#     }


# # Task 7: Extract query parameters
# @app.route("/s")
# def extract_query_parameters():
#     query_params = request.args.to_dict()
#     print("request.args:", request.args)
    
#     return {
#         "status": 1,
#         "message": "Extracted query parameters!",
#         "payload": query_params
#     }

# # http://127.0.0.1:5000/s?bbn=81107432031&rh=n%3A81107432031%2Cp_85%3A10440599031&_encoding=UTF8&content-id=amzn1.sym.58c90a12-100b-4a2f-8e15-7c06f1abe2be&pd_rd_r=09862cb8-4f91-424e-8c47-6eb24e7b88ed&pd_rd_w=tA3Ki&pd_rd_wg=1rowJ&pf_rd_p=58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_r=006N0JB0FZ5FXY25PJ0E&ref=pd_hp_d_atf_unk



# # Task 8: Post Request with JSON data

# @app.route("/submit", methods=["POST"])
# def submit():
#     # Extract JSON data from the request
#     data = request.get_json()
#     print("Received JSON data:", data) 
    
#     # Process the data (for example, you can validate or manipulate it here)
    
#     # Respond with a JSON object
#     response = {
#         "status": 1,
#         "message": "Data received successfully!",
#         "received_data": data
#     }
    
#     return jsonify(response)


#             # if __name__ == "__main__":
#             #     app.run(debug=True)

# # Task 9: Handle POST request with form data
# @app.route("/submit_form", methods=["POST"])
# def submit_form():
#     name = request.form.get("name")
#     email = request.form.get("email")
    
#     return {
#         "status": 1,
#         "message": "Form data received successfully!",
#         "received_data": {
#             "name": name,
#             "email": email
#         }
#     }


# # Task 10: Handle POST request with JSON data and query parameters
# @app.route("/submit_data", methods=["POST"])
# def submit_data():
#     # Get query parameters
#     query_param = request.args.get("query_param")
    
#     # Get JSON data
#     json_data = request.get_json()
#     name = json_data.get("name")
#     email = json_data.get("email")
    
#     # Prepare response
#     response = {
#         "status": 1,
#         "message": "Data received successfully!",
#         "received_query_param": query_param,
#         "received_data": {
#             "name": name,
#             "email": email
#         }
#     }
    
#     return jsonify(response)