import { StyledMovie, Text } from "../styles/Movie.styled";

const Movie = ({ image, rating, title, release_date }) => {
  const IMG_URL = "https://image.tmdb.org/t/p/w185";
  return (
    <StyledMovie>
      <div>
        <img src={`${IMG_URL}${image}`} />
        <div>
          <div>{title}</div>
          <h4>{rating}</h4>
          {/* <div>{release_date}</div> */}
        </div>
      </div>
    </StyledMovie>
  );
};

export default Movie;
