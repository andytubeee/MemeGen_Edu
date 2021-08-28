from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
import os
from api_calls import wolfram_api, imgflip_api

# TODO:
# spam protection


load_dotenv()

app = Flask(__name__)
CORS(app, resources=r'/*', supports_credentials=True)


@app.route('/', methods=["POST"])
def generate_meme():
    request_data = request.json
    question = request_data["question"]

    if request_data["answered"] == True:
        answer = request_data["answer"]
    else:
        # Get answer from Wolfram API
        response = wolfram_api.wolfram_api.ask_short_answer(
            os.getenv("APPID"), question)
        if response.status_code == 200:
            answer = response.text
        else:
            # TODO: Handle error in request
            return "Bad request", 400

    # Call imgflip API to create meme
    url = imgflip_api.imgflip_api.generate_meme_url(
        question, answer, os.getenv("IMGFLIP_UNAME"), os.getenv("IMGFLIP_PWORD"))

    return jsonify({"unanswered_url": url[0], "answered_url": url[1]})


if __name__ == "__main__":
    app.run()
