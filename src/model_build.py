import data_operations

import random_forest
import warnings

from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import cross_val_score, GridSearchCV  # , cross_val_predict  # Can also be used for scores
# from sklearn.model_selection import train_test_split

import pickle


# Trains (max_depth * n_estimators) models and returns the best one  //  (9, 20) is shown as the best
def rfr_model(X, y):
    # Perform grid search
    gsc = GridSearchCV(
        estimator=RandomForestRegressor(),
        param_grid={
            'max_depth': range(4, 10),  # Tree max depth
            'n_estimators': (10, 15, 20, 25, 30, 35, 40, 50, 100),  # Number of trees
        },
        cv=10, scoring='neg_mean_squared_error', verbose=3, n_jobs=5
    )

    grid_result = gsc.fit(X, y)
    best_params = grid_result.best_params_
    rfr = RandomForestRegressor(max_depth=best_params['max_depth'],
                                n_estimators=best_params['n_estimators'],
                                random_state=False, verbose=True)

    # K-Fold CV
    scores = cross_val_score(rfr, X, y, cv=10, scoring='neg_mean_absolute_error')
    print(f'Best params: {best_params}')
    print(f'Scores: {scores}')

    return rfr


def from_scratch_model(X, y, max_depth=9, num_trees=20, min_samples_split=2):
    model = random_forest.RandomForestRegressor(
        max_depth=max_depth,
        num_trees=num_trees,
        min_samples_split=min_samples_split)

    with warnings.catch_warnings():
        warnings.simplefilter("ignore", category=RuntimeWarning)
        model.fit(X, y)

    return model


def sklearn_model(X, y, max_depth=9, num_trees=20):
    model = RandomForestRegressor(max_depth=max_depth, n_estimators=num_trees)
    model.fit(X, y)

    return model


if __name__ == '__main__':
    X, y = data_operations.get_data()

    # # Training and testing from one DB
    # X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
    # # MODEL.FIT()
    # print(model.score(X_test, y_test))

    model = from_scratch_model(X, y, max_depth=9, num_trees=20, min_samples_split=2)

    with open(f'./models/depth9_trees20-SCRATCH.pkl', 'wb') as pkl:
        pickle.dump(model, pkl)
