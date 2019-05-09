import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import MovieList from "./components/MovieList";

function reducer() {
  return {
    user: { name: "Fernando" },
    movies: ["GoldenEye", "Harry Potter", "Lord of the Rings"],
    todoList: [
      { task: "Learn Redux", id: 0, completed: false },
      {
        task: "Apply for jobs",
        id: 1,
        completed: false
      }
    ],
    moviesToWatch: 13
  };
}

const store = createStore(reducer);

function App() {
  return (
    <div>
      <hi>Reudx Movies:</hi>
      <h2>Starting with Redux</h2>
      <MovieList />
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
