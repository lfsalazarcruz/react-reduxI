import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";

function reducer() {
  return {
    title: "Hi from redux"
  };
}

const store = createStore(reducer);

function App() {
  return (
    <div>
      <hi>hello from React</hi>
      <h2>Starting with Redux</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
