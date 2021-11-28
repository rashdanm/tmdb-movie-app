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

  const handleSearch = () => {
    showSearch(!search);
    showList(false);
  };

  const handleList = () => {
    showList(!list);
    showSearch(false);
  };
  return (
    <StyledHeader>
      <Icon onClick={handleSearch}>{search ? <FaTimes /> : <FaSearch />}</Icon>
      {search && (
        <SearchNav>
          <Search />
        </SearchNav>
      )}

      <Logo>selektMovie</Logo>
      <Icon onClick={handleList}>{list ? <FaTimes /> : <FaScroll />}</Icon>
      {list && (
        <GenreNav>
          <GenreList />
        </GenreNav>
      )}
    </StyledHeader>
  );
};

export default Header;
