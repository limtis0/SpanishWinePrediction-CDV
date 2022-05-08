import pandas as pd
import numpy as np
import pickle

from sklearn.ensemble import RandomForestRegressor


# Replaces values that are not common (<thresh)
def column_replace_uncommon(col_name, val_thresh, replace_name):
    df.loc[df[col_name].value_counts()[df[col_name]].values < val_thresh, col_name] = replace_name


if __name__ == '__main__':
    # DATA OPERATIONS
    pd.set_option('display.max_columns', None)

    df = pd.read_csv('./wines_SPA.csv')

    df.drop(['num_reviews', 'wine', 'country'], axis=1, inplace=True)  # Remove not-usable info

    df['year'] = df['year'].replace('N.V.', np.nan)  # Remove Non-Vintage wines and Na's
    df = df.dropna()
    df['year'] = df['year'].astype(np.int64)

    # Replace uncommon values with 'other'
    column_replace_uncommon('winery', 20, 'other')
    column_replace_uncommon('region', 10, 'other')

    # MODEL TRAINING
    X = df.drop(columns=['rating'])
    y = df['rating']
