from flask import Flask
from flask import render_template
from flask import request

app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template("index.html")


@app.route("/", methods=["POST"])
def search():
    pass


if __name__ == '__main__':
    app.run()
