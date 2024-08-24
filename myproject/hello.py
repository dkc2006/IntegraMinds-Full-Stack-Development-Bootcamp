from flask import Flask, request, jsonify

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
@app.route("/s")
def extract_query_parameters():
    query_params = request.args.to_dict()
    print("request.args:", request.args)
    
    return {
        "status": 1,
        "message": "Extracted query parameters!",
        "payload": query_params
    }

# http://127.0.0.1:5000/s?bbn=81107432031&rh=n%3A81107432031%2Cp_85%3A10440599031&_encoding=UTF8&content-id=amzn1.sym.58c90a12-100b-4a2f-8e15-7c06f1abe2be&pd_rd_r=09862cb8-4f91-424e-8c47-6eb24e7b88ed&pd_rd_w=tA3Ki&pd_rd_wg=1rowJ&pf_rd_p=58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_r=006N0JB0FZ5FXY25PJ0E&ref=pd_hp_d_atf_unk



# Task 8: Post Request with JSON data

@app.route("/submit", methods=["POST"])
def submit():
    # Extract JSON data from the request
    data = request.get_json()
    print("Received JSON data:", data) 
    
    # Process the data (for example, you can validate or manipulate it here)
    
    # Respond with a JSON object
    response = {
        "status": 1,
        "message": "Data received successfully!",
        "received_data": data
    }
    
    return jsonify(response)


            # if __name__ == "__main__":
            #     app.run(debug=True)

# Task 9: Handle POST request with form data
@app.route("/submit_form", methods=["POST"])
def submit_form():
    name = request.form.get("name")
    email = request.form.get("email")
    
    return {
        "status": 1,
        "message": "Form data received successfully!",
        "received_data": {
            "name": name,
            "email": email
        }
    }


# Task 10: Handle POST request with JSON data and query parameters
@app.route("/submit_data", methods=["POST"])
def submit_data():
    # Get query parameters
    query_param = request.args.get("query_param")
    
    # Get JSON data
    json_data = request.get_json()
    name = json_data.get("name")
    email = json_data.get("email")
    
    # Prepare response
    response = {
        "status": 1,
        "message": "Data received successfully!",
        "received_query_param": query_param,
        "received_data": {
            "name": name,
            "email": email
        }
    }
    
    return jsonify(response)