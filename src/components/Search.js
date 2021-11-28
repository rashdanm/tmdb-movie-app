import { useState } from "react";
import { StyledSearch, Top, Input, Form } from "../styles/Search.styled";
import Movie from "./Movie";
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const SEARCH = `${BASE_URL}search/movie?&api_key=${process.env.REACT_APP_API_KEY}&query=`;

const Search = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");

  function handleOnChange(e) {
    setSearch(e.target.value);
    console.log(search);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    setSearchText(search);

    const fetchData = async () => {
      const response = await axios.get(`${SEARCH}${search}`);
      setMovies(response.data.results);
      console.log(response);

      return response;
    };
    fetchData();

    setSearch("");
  }
  return (
    <StyledSearch>
      <Top>
        <Form onSubmit={handleOnSubmit}>
          <Input
            className="search"
            type="search"
            onChange={handleOnChange}
            value={search}
          />
        </Form>
      </Top>
      <div>
        {/* <div>{searchText}</div> */}
        {movies.map((movie) => (
          <Movie
            heading="Featured"
            key={movie.id}
            title={movie.title}
            rating={movie.vote_average}
            image={movie.poster_path}
            overview={movie.overview}
          />
        ))}
      </div>
    </StyledSearch>
  );
};

export default Search;
