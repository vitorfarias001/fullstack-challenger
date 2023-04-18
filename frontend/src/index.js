import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store";
import SearchForm from "./components/searchMovie/index";
import Footer from "./components/Footer";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <SearchForm />
    <Footer />
  </Provider>
); 
