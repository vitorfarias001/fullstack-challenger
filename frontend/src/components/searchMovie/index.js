import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setSearchTerm, setMovie, resetSearch } from "../../store/actions/index";
import "../../styles/global.scss"
const Search = () => {
    const searchTerm = useSelector((state) => state.search.searchTerm);
    const movie = useSelector((state) => state.search.movie);
    const dispatch = useDispatch();

    const handleSearch = () => {
        axios
            .get("http://localhost:3000/movies", {
                params: {
                    title: searchTerm,
                },
            })
            .then((response) => {
                dispatch(setMovie(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleReset = () => {
        dispatch(resetSearch());
    };

    return (
        <section className="s-hero">
            <div className="upper-area">
                <div className="titles">
                    <h1>Movie Information Searcher</h1>
                    <p>
                        Here you can search for information about your favorites movies,
                        just type the movie name on the box bellow and wait for the magic to
                        happen
                    </p>
                </div>
                <div className="form">
                    <input
                        id="search-input"
                        type="text"
                        placeholder="Type the movie name here..."
                        value={searchTerm}
                        onChange={(event) => dispatch(setSearchTerm(event.target.value))}
                    />
                    <div className="btns">
                        <button onClick={handleSearch} className="btn-form">
                            Search
                        </button>
                        <button onClick={handleReset} className="btn-form">
                            Reset
                        </button>
                    </div>
                </div>
            </div>

            {movie && (
                <div className="info">
                    <div className="text-area">
                        <h2>{movie.title}</h2>
                        <span>
                            <strong>Actors: </strong>
                            {movie.actor}
                        </span>
                        <span>
                            <strong>Review: </strong>
                            {movie.Metascore}/100
                        </span>
                        <button className="btn-fav">Favorite &#9825;</button>
                    </div>

                    <div className="img-poster">
                        <img src={movie.poster} alt="Poster" />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Search;
