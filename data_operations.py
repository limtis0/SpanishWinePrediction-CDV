import pandas as pd
import numpy as np


# Replaces values that are not common (<thresh)
def column_replace_uncommon(df, col_name, val_thresh, replace_name):
    df.loc[df[col_name].value_counts()[df[col_name]].values < val_thresh, col_name] = replace_name


def get_data():
    df = pd.read_csv('./wines_SPA.csv')

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


if __name__ == '__main__':
    pass
