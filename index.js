import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./configureStore";

import { App } from "./App";

const store = configureStore();

console.info("Initialising application");

const renderApp = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./App.jsx", renderApp);
}

renderApp();
