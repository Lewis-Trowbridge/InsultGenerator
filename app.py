from flask import Flask
from flask import render_template
from flask import request
from flask import jsonify

app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template("index.html")


@app.route("/", methods=["POST"])
def search():
    return jsonify(text=request.form.get("text"))


if __name__ == '__main__':
    app.run()
