from web_ui.scripts.RunBundler import bundle
from src.data_operations import model_predict
from flask import Flask, render_template, request
import pandas as pd
import pickle

# Bundle using webpack
# bundle(full_log=True)

app = Flask(__name__)

form = [
    'winery',
    'region',
    'grape type',
    'base',
    'acidity',
    'year',
    'price'
]
# Load model and data
dataframe = pd.read_csv('csv/input_template.csv')
with open('models/depth9_trees20.pkl', 'rb') as f:
    model = pickle.load(f)


@app.route('/')
def start():
    return render_template('index.html')


@app.route('/', methods=['GET', 'POST'])
def get_result():
    data = {}
    for item in form:
        data[item] = request.form.get(item)
    print(str(data))
    result = model_predict(
        dataframe,
        model,
        data['year'],
        data['price'],
        data['base'],
        data['acidity'],
        data['grape type'],
        data['region'],
        data['winery']
    )
    return render_template('index.html', result=result[0])


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')


def run_app():
    app.run(debug=True, host='0.0.0.0')
