from flask import Flask
from flask import render_template
from flask import request
import json
from flask import jsonify
import requests

oxd_base_url = "https://od-api.oxforddictionaries.com/api/v2"
with open("credentials.json", "r") as credentials_file:
    credentials_json = json.load(credentials_file)

app = Flask(__name__)


@app.route('/')
def home():
    return render_template("index.html")


@app.route("/search", methods=["GET"])
def search():
    search_text = request.args.get("text")
    # Use a variable at the moment to potentially allow for multi-language support later
    source_language = "en"
    params = {
        "q": search_text,
        "prefix": True,
        "limit": 30
    }
    search_request = requests.get(oxd_base_url + "/search/thesaurus/" + source_language,
                                  params=params, headers=credentials_json)
    search_json = search_request.json()
    words_list = []
    for word_data in search_json["results"]:
        words_list.append(str.title(word_data["word"]))
    return_dict = {
        "original": search_text,
        "words": words_list
    }
    return jsonify(return_dict)


if __name__ == '__main__':
    app.run()
