from flask import Flask, Response, request, jsonify
from flask_cors import CORS
import json
from src.handlers.dot_product_handler import dot_product_handler

app = Flask(__name__)
CORS(app)  # not great to enable cors on all routes; fix this soon

# members API route
# @app.route("/members")
# def members():
#     return {"members": ["member 1", "member 2", "member3"]}

# get path
@app.route('/getpath', methods=['POST', 'GET'])
def get_path():
    data = request.get_json()
    print("got result {}".format(data))
    return dot_product_handler(data['alpha'], data['maxIts'])
    # print(data['alpha'])
    # dot_product_handler(1, 2)
    # print("Received: {}".format(request.data))
    # jsdata = request.form['javascript_data']
    # print("received request from client:{}".format(request.data))
    # return json.loads(jsdata)

if __name__ == "__main__":
    app.run(debug=True)

