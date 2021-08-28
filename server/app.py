from flask import Flask, jsonify
from flask_cors import CORS

# TODO:
# spam protection


app = Flask(__name__)
CORS(app, resources=r'/*', supports_credentials=True)


@app.route('/', methods=["POST"])
def generate_meme():
    url = "get the url here"
    return jsonify({"url": url})


if __name__ == "__main__":
    app.run()
