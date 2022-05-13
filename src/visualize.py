import pandas as pd
import matplotlib.pyplot as plt
from sklearn.tree import export_graphviz
from os.path import getsize

import data_operations
import pickle


def export_tree(model_path, output_path, tree_ind):
    with open(model_path, 'rb') as f:
        model = pickle.load(f)

    X, y = data_operations.get_data()
    # Extract single tree
    estimator = model.estimators_[tree_ind]
    export_graphviz(estimator, out_file=output_path,
                    feature_names=X.columns,
                    rounded=True, proportion=False,
                    precision=2, filled=True)


def model_comparison(model_path, output_path):
    with open(model_path, 'rb') as f:
        model = pickle.load(f)

    X, y = data_operations.get_data()
    y = y.to_numpy()
    y_predictions = model.predict(X)

    predicts = pd.DataFrame({'ai': y_predictions, 'reviews': y})
    predicts = predicts.sort_values(by='reviews')
    predicts = predicts.reset_index()

    plt.figure(figsize=(15, 5))
    plt.plot(predicts['ai'], label='AI Prediction', linestyle='', marker='o', markersize=2.5)
    plt.plot(predicts['reviews'], label='Actual Reviews')
    plt.legend()
    plt.savefig(output_path)


# Takes dictionary of a format label:file_path
def file_size_comp(dict_files, output_path):
    sizes = [round(getsize(f)/1_048_576, 2) for f in dict_files.values()]
    labels = [f'{key} ({size}MB)' for key, size in zip(list(dict_files.keys()), sizes)]
    print(sizes)

    plt.figure(figsize=(10, 5))
    plt.title('Sizes of built models')
    plt.bar(labels, sizes, color='maroon', width=0.6)
    plt.savefig(output_path)


if __name__ == '__main__':
    pass
