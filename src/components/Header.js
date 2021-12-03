import { useState } from "react";
import {
  StyledHeader,
  Logo,
  Icon,
  SearchNav,
  GenreNav,
} from "../styles/Header.styled";
import { FaList, FaSearch, FaTimes } from "react-icons/fa";
import Search from "./Search";
import GenreList from "./GenreList";

const Header = () => {
  const [search, showSearch] = useState(false);
  const [list, showList] = useState(false);

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
      <Icon onClick={handleList}>{list ? <FaTimes /> : <FaList />}</Icon>
      {list && (
        <GenreNav>
          <GenreList />
        </GenreNav>
      )}
    </StyledHeader>
  );
};

export default Header;
