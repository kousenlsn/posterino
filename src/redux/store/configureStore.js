import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import rootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { composeWithDevTools as composeWithDevToolsLogOnly } from "redux-devtools-extension/logOnly";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["posts"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(initialState) {
  let store = createStore(
    persistedReducer,
    initialState,
    process.env.NODE_ENV === "production"
      ? composeWithDevToolsLogOnly(applyMiddleware(thunk))
      : composeWithDevTools(applyMiddleware(thunk))
  );

  let persistor = persistStore(store);

  return { store, persistor };
}
