const Movie = ({ image, rating, title }) => {
  const IMG_URL = "https://image.tmdb.org/t/p/w185";
  return (
    <div className="movie-container">
      <div className="movie">
        <img src={`${IMG_URL}${image}`} />
        <div>{title}</div>
        <div>{rating}</div>
      </div>
    </div>
  );
};

export default Movie;
