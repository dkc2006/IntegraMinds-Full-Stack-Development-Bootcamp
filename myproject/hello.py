from flask import Flask, request

app = Flask(__name__)

@app.route("/")
def hello_world():
    return {
        "title": "Hello",
        "message": "Welcome to the API!",
        "payload": {}
    }

# Static path
@app.route("/about")
def about():
    return {
        "title": "About",
        "message": "This is a simple API built using Flask!"
    }

# Dynamic path for profile by ID

# http://127.0.0.1:5000/profile/1010101

@app.route("/profile/<profileId>")
def profile(profileId):
    return {
        "status": 1,
        "message": "profile!",
        "payload": {"profileId": profileId}
    }

# Dynamic path for profile with category

# http://127.0.0.1:5000/product/watch/101
# http://127.0.0.1:5000/product/mobile/105

@app.route("/product/<categoryId>/<profileId>")
def product(categoryId, profileId):
    return {
        "status": 1,
        "message": "profile with category!",
        "payload": {"categoryId": categoryId, "profileId": profileId}
    }

# Accessing query parameters

# http://127.0.0.1:5000/search?q1=something

@app.route("/search")
def search():
    q1 = request.args.get("q1")
    print("request.args :", request.args)
    
    return{
        "status": 1,
        "message": "Search results!",
        "payload": {"q1": q1}
    }

# Task 7: Extract query parameters

# http://127.0.0.1:5000/s?bbn=81107432031&rh=n%3A81107432031%2Cp_85%3A10440599031&_encoding=UTF8&content-id=amzn1.sym.58c90a12-100b-4a2f-8e15-7c06f1abe2be&pd_rd_r=09862cb8-4f91-424e-8c47-6eb24e7b88ed&pd_rd_w=tA3Ki&pd_rd_wg=1rowJ&pf_rd_p=58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_r=006N0JB0FZ5FXY25PJ0E&ref=pd_hp_d_atf_unk


# Task 9: Post Request with JSON data
# Task 8: Post Request with Form data
# Task 10: Post Request with JSON data and query parameters