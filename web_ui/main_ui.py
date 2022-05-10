from scripts.RunBundler import bundle

from flask import Flask, render_template

bundle(full_log=True)

app = Flask(__name__)


@app.route('/')
def hello(name=None):
    return render_template('index.html', name=name)
