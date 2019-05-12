import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./redux/store/configureStore";

import App from "./app";
import "./style/index.css";

const storeConfig = configureStore();

ReactDOM.render(
  <Provider store={storeConfig.store}>
    <PersistGate loading={<div>loading</div>} persistor={storeConfig.persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
