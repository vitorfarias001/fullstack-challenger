import React from "react";
import SearchForm from "./components/searchMovie/index";
import Footer from "./components/Footer/index";
import "../src/global.scss"
function App() {
  return (
    <>
      <div className="title-area">
        <h1>Movie Information Searcher</h1>
        <p>
          Here you'll search for the movies that you want to learn more about,
          if the movie exists on our databases, the information will appear
          bellow
        </p>
      </div>
      <SearchForm />
      <Footer />
    </>
  );
}

export default App;
