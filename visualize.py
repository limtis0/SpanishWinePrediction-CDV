import data_operations
import numpy as np

import pickle
import matplotlib.pyplot as plt
from sklearn.tree import export_graphviz


def export_tree(model_path, output_path, tree_ind):
    # Model (can also use single decision tree)
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
    y = sorted(y.to_numpy())
    y_predictions = np.flip(model.predict(X))

    plt.figure(figsize=(15, 5))
    plt.plot(y_predictions, label='AI Prediction')
    plt.plot(y, label='Actual Reviews')
    plt.legend()
    plt.savefig(output_path)


if __name__ == '__main__':
    pass
