import pickle

import pandas as pd
import numpy as np


# Replaces values that are not common (<thresh)
def column_replace_uncommon(df, col_name, val_thresh, replace_name):
    df.loc[df[col_name].value_counts()[df[col_name]].values < val_thresh, col_name] = replace_name


def get_data():
    df = pd.read_csv('csv/wines_SPA.csv')

    df.drop(['num_reviews', 'wine', 'country'], axis=1, inplace=True)  # Remove not-usable info

    df['year'] = df['year'].replace('N.V.', np.nan)  # Remove Non-Vintage wines and Na's
    df = df.dropna()
    df['year'] = df['year'].astype(np.int64)

    # Replace uncommon values with 'other'
    column_replace_uncommon(df, 'winery', 20, 'other')
    column_replace_uncommon(df, 'region', 10, 'other')

    # MODEL TRAINING
    X = df.drop(columns=['rating'])
    X = pd.get_dummies(X)
    y = df['rating']
    return X, y


def model_predict(dataframe, model, year, price, body, acidity, wine_type, region, winery):
    """
    Dataframe parameter should be just a pd.read_csv('csv/input_template.csv') stored globally,
    so it wouldn't be read more than once

    Same with model
    """
    df = dataframe.copy()

    df['year'][0] = year
    df['price'][0] = price
    df['body'][0] = body
    df['acidity'][0] = acidity
    df[f'region_{region}'][0] = 1
    df[f'winery_{winery}'][0] = 1
    df[f'type_{wine_type}'][0] = 1

    return model.predict(df)


if __name__ == '__main__':
    df = pd.read_csv('csv/input_template.csv')
    with open('models/depth9_trees20.pkl', 'rb') as f:
        model = pickle.load(f)

    print(model_predict(df, model, year=2018, price=6, body=4, acidity=3, wine_type='Red', region='Emporda', winery='other'))

    pass
