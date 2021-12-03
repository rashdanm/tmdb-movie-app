import { useState } from "react";
import {
  StyledBottomNav,
  Icon,
  SearchNav,
  GenreNav,
} from "../styles/BottomNav.styled";
import { FaList, FaSearch, FaHome, FaUser } from "react-icons/fa";
import Search from "./Search";
import GenreList from "./GenreList";

const BottomNav = () => {
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

  const home = () => {
    showList(false);
    showSearch(false);
  };
  return (
    <div>
      <StyledBottomNav>
        <Icon onClick={handleList}>
          <FaList />
        </Icon>

        <Icon onClick={handleSearch}>
          <FaSearch />
        </Icon>

        <Icon>
          <FaHome onClick={home} />
        </Icon>

        <Icon>
          <FaUser />
        </Icon>
      </StyledBottomNav>
      {list && (
        <GenreNav>
          <GenreList />
        </GenreNav>
      )}
      {search && (
        <SearchNav>
          <Search />
        </SearchNav>
      )}
    </div>
  );
};

export default BottomNav;
