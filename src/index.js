import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import * as serviceWorker from "./serviceWorker";
import Main from "./Main";

// material-ui
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

// Reducers
import superAdminReducer from "./middleware/reducers/superAdminReducer";
import customerReducer from "./middleware/reducers/customerReducer";
import commonReducer from "./middleware/reducers/commonReducer";

// Sagas
import { completeSaga as superAdminSagas } from "./middleware/sagas/superAdminSaga";
import { completeSaga as customerSagas } from "./middleware/sagas/customerSaga";
import { completeSaga as commonSagas } from "./middleware/sagas/commonSaga";

import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { fork } from "redux-saga/effects";

// Root Reducer
const rootReducer = combineReducers({
  superAdminReducer: superAdminReducer,
  customerReducer: customerReducer,
  commonReducer: commonReducer,
});

// Creating Saga Middleware
const sagas = createSagaMiddleware();

// Root Saga
function* rootSaga() {
  yield fork(superAdminSagas);
  yield fork(customerSagas);
  yield fork(commonSagas);
}

// Creating Redux Store With Saga
const store = createStore(rootReducer, applyMiddleware(sagas));

sagas.run(rootSaga);

const theme = createMuiTheme({
  typography: {
    fontFamily: ["montserrat"].join(","),
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
