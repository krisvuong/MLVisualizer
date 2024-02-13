from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # not great to enable cors on all routes; fix this soon

# members API route
@app.route("/members")
def members():
    return {"members": ["member 1", "member 2", "member3"]}

if __name__ == "__main__":
    app.run(debug=True)