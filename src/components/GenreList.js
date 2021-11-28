import movieRequests from "../utils/movieRequests";
import { Link } from "react-scroll";

const GenreList = () => {
  return (
    <div>
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
    </div>
  );
};

export default GenreList;
