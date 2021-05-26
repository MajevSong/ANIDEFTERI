import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import "./bootstrap.min.css";

import memoriesReducer from "./reducers/memoriesReducer";

// şuan tek bir state imiz var o da memories
// sonradan kullanıcılar state de ekleyeceğiz
const reducer = combineReducers({
  memories: memoriesReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* App.js de tüm html dosyalarımız saklandığı için burada çağırmamız gerekiyor */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
