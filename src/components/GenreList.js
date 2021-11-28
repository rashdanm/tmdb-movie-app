import movieRequests from "../utils/movieRequests";
import { Link } from "react-scroll";
import { StyledGenreList } from "../styles/GenreList.styled";

const GenreList = () => {
  return (
    <StyledGenreList>
      <section>
        <h2>Movies</h2>
        {movieRequests.map((item) => (
          <div key={item.id} id={item.navId}>
            <Link
              activeClass="active"
              to={item.linkId}
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
            >
              <p>{item.genre}</p>
            </Link>
          </div>
        ))}
      </section>
    </StyledGenreList>
  );
};

export default GenreList;
