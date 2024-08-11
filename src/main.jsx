import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/React-pizza-app/">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
