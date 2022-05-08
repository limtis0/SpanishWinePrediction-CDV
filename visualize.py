import data_operations

import pickle
from sklearn.tree import export_graphviz


def export_dot(model_path, output_path, tree_ind):
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


if __name__ == '__main__':
    export_dot('./models/depth9_trees20.pkl', 'images/tree.dot', 0)
