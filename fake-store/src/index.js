import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./reducers/reducers";
import cartReducer from "./reducers/cartReducer";
// import logger from "redux-logger";

// const rootReducer = combineReducers({
//   reducers,
//   cartReducer,
// });
// const store = createStore(reducers, applyMiddleware(logger, thunk));
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,

  //  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
