import { useState } from "react";
import {
  StyledHeader,
  Logo,
  Icon,
  SearchNav,
  GenreNav,
} from "../styles/Header.styled";
import { FaScroll, FaSearch, FaTimes } from "react-icons/fa";
import Search from "./Search";
import GenreList from "./GenreList";

const Header = () => {
  const [click, setClick] = useState(false);
  const [search, showSearch] = useState(false);
  const [list, showList] = useState(false);
  const handleClick = () => setClick(!click);
  const handleSearch = () => showSearch(!search);
  const handleList = () => showList(!list);

  return (
    <StyledHeader>
      <Icon onClick={handleSearch}>
        <FaSearch />
      </Icon>
      {search && (
        <SearchNav>
          <Search />
        </SearchNav>
      )}

      <Logo>SelektMovie</Logo>
      <Icon onClick={handleList}>
        <FaScroll />
      </Icon>
      {list && (
        <GenreNav>
          <GenreList />
        </GenreNav>
      )}
    </StyledHeader>
  );
};

export default Header;
