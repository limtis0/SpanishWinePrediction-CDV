import data_operations

import pickle
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import cross_val_score, GridSearchCV  # , cross_val_predict  # Can also be used for scores
# from sklearn.model_selection import train_test_split


# Trains max_depth*n_estimators models and returns the best one
def rfr_model(X, y):
    # Perform grid search
    gsc = GridSearchCV(
        estimator=RandomForestRegressor(),
        param_grid={
            'max_depth': range(4, 10),  # Tree max depth
            'n_estimators': (10, 15, 20, 25, 30, 35, 40, 50),  # Number of trees
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


if __name__ == '__main__':
    # DATA OPERATIONS
    X, y = data_operations.get_data()

    # # Finds model with the best options // Options below are found by using this
    # model = rfr_model(X, y)

    max_depth = 9
    num_trees = 20
    model = RandomForestRegressor(max_depth=max_depth, n_estimators=num_trees)

    # # Training and testing from one DB
    # X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
    # model.fit(X_train, y_train)
    # print(model.score(X_test, y_test))

    model.fit(X, y)
    with open(f'./models/depth{max_depth}_trees{num_trees}.pkl', 'wb') as pkl:
        pickle.dump(model, pkl)
