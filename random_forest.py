import pandas as pd
import numpy as np


class NodeRegression:
    def __init__(
            self,
            Y: list,
            X: pd.DataFrame,
            min_samples_split=None,
            max_depth=None,
            depth=None,
            node_type=None,
            rule=None
    ):
        # Saving the data to the node
        self.Y = Y
        self.X = X

        # Saving the hyper parameters
        self.min_samples_split = min_samples_split if min_samples_split else 20
        self.max_depth = max_depth if max_depth else 5

        # Default current depth of node
        self.depth = depth if depth else 0

        # Extracting all the features
        self.features = list(self.X.columns)

        # Type of node
        self.node_type = node_type if node_type else 'root'

        # Rule for splitting
        self.rule = rule if rule else ""

        # Getting the mean of Y
        self.ymean = np.mean(Y)

        # Getting the residuals
        self.residuals = self.Y - self.ymean

        # Calculating the mse of the node
        self.mse = self.get_mse(Y, self.ymean)

        # Saving the number of observations in the node
        self.n = len(Y)

        # Initiating the left and right nodes as empty nodes
        self.left = None
        self.right = None

        # Default values for splits
        self.best_feature = None
        self.best_value = None

    @staticmethod  # Mean squared error
    def get_mse(ytrue, yhat) -> float:
        # Getting the total number of samples
        n = len(ytrue)

        # Getting the residuals
        r = ytrue - yhat
        r = r ** 2
        r = np.sum(r)

        return r / n

    @staticmethod  # Moving average
    def ma(x: np.array, window: int) -> np.array:
        return np.convolve(x, np.ones(window), 'valid') / window

    def best_split(self) -> tuple:
        df = self.X.copy()
        df['Y'] = self.Y

        mse_base = self.mse

        # Default best feature and split
        best_feature = None
        best_value = None

        for feature in self.features:
            Xdf = df.dropna().sort_values(feature)
            xmeans = self.ma(Xdf[feature].unique(), 2)

            for value in xmeans:
                # Getting the left and right ys
                left_y = Xdf[Xdf[feature] < value]['Y'].values
                right_y = Xdf[Xdf[feature] >= value]['Y'].values

                # Getting the means
                left_mean = np.mean(left_y)
                right_mean = np.mean(right_y)

                res_left = left_y - left_mean
                res_right = right_y - right_mean

                r = np.concatenate((res_left, res_right), axis=None)

                # Calculating the mse
                n = len(r)
                r = r ** 2
                r = np.sum(r)
                mse_split = r / n

                # Checking if this is the best split so far
                if mse_split < mse_base:
                    best_feature = feature
                    best_value = value

                    # Setting the best gain to the current one
                    mse_base = mse_split

        return best_feature, best_value

    def grow_tree(self):
        """
        Recursive method to create the decision tree
        """
        # Making a df from the data
        df = self.X.copy()
        df['Y'] = self.Y

        # If there is GINI to be gained, we split further
        if (self.depth < self.max_depth) and (self.n >= self.min_samples_split):

            # Getting the best split
            best_feature, best_value = self.best_split()

            if best_feature is not None:
                # Saving the best split to the current node
                self.best_feature = best_feature
                self.best_value = best_value

                # Getting the left and right nodes
                left_df, right_df = df[df[best_feature] <= best_value].copy(), df[df[best_feature] > best_value].copy()

                # Creating the left and right nodes
                left = NodeRegression(
                    left_df['Y'].values.tolist(),
                    left_df[self.features],
                    depth=self.depth + 1,
                    max_depth=self.max_depth,
                    min_samples_split=self.min_samples_split,
                    node_type='left_node',
                    rule=f"{best_feature} <= {round(best_value, 3)}"
                )

                self.left = left
                self.left.grow_tree()

                right = NodeRegression(
                    right_df['Y'].values.tolist(),
                    right_df[self.features],
                    depth=self.depth + 1,
                    max_depth=self.max_depth,
                    min_samples_split=self.min_samples_split,
                    node_type='right_node',
                    rule=f"{best_feature} > {round(best_value, 3)}"
                )

                self.right = right
                self.right.grow_tree()

    def predict(self, X: pd.DataFrame):
        predictions = []
        for _, x in X.iterrows():
            values = {}
            for feature in self.features:
                values.update({feature: x[feature]})

            predictions.append(self.predict_obs(values))
        return predictions

    def predict_obs(self, values: dict):
        cur_node = self
        while cur_node.left is not None or cur_node.right is not None:
            # Traversing the nodes all the way to the bottom
            best_feature = cur_node.best_feature
            best_value = cur_node.best_value

            if cur_node.n < cur_node.min_samples_split:
                break

            if values.get(best_feature) < best_value:
                cur_node = cur_node.left
            else:
                cur_node = cur_node.right
        return cur_node.ymean


class RandomForestRegressor:
    def __init__(self, num_trees=25, min_samples_split=2, max_depth=5):
        self.num_trees = num_trees
        self.min_samples_split = min_samples_split
        self.max_depth = max_depth
        # Will store individually trained decision trees
        self.decision_trees = []

    @staticmethod
    def _sample(X, y):
        n_rows, n_cols = X.shape
        # Sample with replacement
        samples = np.random.choice(a=n_rows, size=n_rows, replace=True)
        return X.iloc[samples], y.iloc[samples]

    def fit(self, X, y):
        # Reset
        if len(self.decision_trees) > 0:
            self.decision_trees = []

        # Build each tree of the forest
        num_built = 0
        while num_built < self.num_trees:
            # Obtain data sample
            print(f'Building: {num_built / self.num_trees * 100}%')
            _X, _y = self._sample(X, y)
            clf = NodeRegression(
                X=_X,
                Y=_y,
                min_samples_split=self.min_samples_split,
                max_depth=self.max_depth
            )
            # Train
            clf.grow_tree()
            # Save
            self.decision_trees.append(clf)
            num_built += 1

    def predict(self, X):
        # Make predictions with every tree in the forest
        y = []
        for tree in self.decision_trees:
            y.append(np.array(tree.predict(X)))

        # Return np.array of predictions
        return np.array([sum(elts)/self.num_trees for elts in zip(*y)])
