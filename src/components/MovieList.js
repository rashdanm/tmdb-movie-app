import { useState, useEffect } from "react";
import Movie from "./Movie";
import axios from "axios";
import { StyledMovieList, Row } from "../styles/MovieList.styled";

const MovieList = ({ heading, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const BASE_URL = "https://api.themoviedb.org/3";
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${BASE_URL}${fetchUrl}`);
      setMovies(response.data.results);
      console.log(movies);
      return response;
    };
    fetchData();
  }, []);

  return (
    <StyledMovieList>
      <h2>{heading}</h2>
      <Row>
        {movies.map((movie) => (
          <Movie
            heading="Featured"
            key={movie.id}
            title={movie.title || movie.name}
            rating={movie.vote_average}
            image={movie.poster_path}
            alt={movie.title}
            overview={movie.overview}
            imageBg={movie.backdrop_path}
            release_date={movie.release_date}
          />
        ))}
      </Row>
    </StyledMovieList>
  );
};

export default MovieList;
