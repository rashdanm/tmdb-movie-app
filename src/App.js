import { StyledMainWrapper, Main } from "./styles/MainWrapper.styled";
import GlobalStyles from "./styles/Global";
import Header from "./components/Header";
import movieRequests from "./utils/movieRequests";
import MovieList from "./components/MovieList";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <StyledMainWrapper>
      <GlobalStyles />
      <Header />
      <Main>
        {movieRequests.map((item) => (
          <div id={item.linkId} key={item.id}>
            <MovieList heading={item.genre} fetchUrl={item.url} />
          </div>
        ))}
      </Main>
      <BottomNav />
    </StyledMainWrapper>
  );
}

export default App;
