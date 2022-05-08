import pandas as pd
import pickle
import numpy as np

from sklearn.ensemble import RandomForestClassifier


# Replaces values that are not common (<thresh)
def column_replace_uncommon(col_name, val_thresh, replace_name):
    df.loc[df[col_name].value_counts()[df[col_name]].values < val_thresh, col_name] = replace_name


if __name__ == '__main__':
    pd.set_option('display.max_columns', None)

    df = pd.read_csv('./wines_SPA.csv')
    # Remove unused info
    df.drop(['num_reviews', 'country'], axis=1, inplace=True)
    df = df.dropna()

    # Replace uncommon values with 'other'
    column_replace_uncommon('winery', 30, 'other')
    column_replace_uncommon('wine', 20, 'other')
    column_replace_uncommon('region', 10, 'other')

    print(df.head(5))
