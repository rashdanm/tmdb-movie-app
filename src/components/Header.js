import { useState } from "react";
import { StyledHeader, Logo, Icon } from "../styles/Header.styled";
import { FaScroll, FaSearch, FaTimes } from "react-icons/fa";

const Header = () => {
  return (
    <StyledHeader>
      <Icon>
        <FaSearch />
      </Icon>
      <Logo>SelektMovie</Logo>
      <Icon>
        <FaScroll />
      </Icon>
    </StyledHeader>
  );
};

export default Header;
