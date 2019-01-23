import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { LocalizeProvider } from "react-localize-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter as Router } from "react-router-dom";

// COMPONENTS
import App from "./components/App";
import middleware from "./middleware";
import reducer from "./reducers";

// STORE
const store = createStore(reducer, composeWithDevTools(middleware));

if (process.env.NODE_ENV === "production") {
  window.reactRoot = function(elementId) {
    ReactDOM.render(
      <Provider store={store}>
        <LocalizeProvider store={store}>
          <Router>
            <App />
          </Router>
        </LocalizeProvider>
      </Provider>,
      document.getElementById(elementId)
    );
  };
} else {
  ReactDOM.render(
    <Provider store={store}>
      <LocalizeProvider store={store}>
        <Router>
          <App />
        </Router>
      </LocalizeProvider>
    </Provider>,
    document.getElementById("react-root")
  );
}
