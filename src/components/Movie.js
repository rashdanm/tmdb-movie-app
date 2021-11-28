import { StyledMovie } from "../styles/Movie.styled";

const Movie = ({ image, rating, title }) => {
  const IMG_URL = "https://image.tmdb.org/t/p/w185";
  return (
    <StyledMovie>
      <div className="movie">
        <img src={`${IMG_URL}${image}`} />
        <div>{title}</div>
        <div>{rating}</div>
      </div>
    </StyledMovie>
  );
};

export default Movie;
