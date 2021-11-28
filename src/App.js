import { StyledMainWrapper } from "./styles/MainWrapper.styled";
import GlobalStyles from "./styles/Global";
import Header from "./components/Header";

function App() {
  return (
    <StyledMainWrapper>
      <GlobalStyles />
      <Header />
    </StyledMainWrapper>
  );
}

export default App;
