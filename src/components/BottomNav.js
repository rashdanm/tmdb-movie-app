import { StyledBottomNav, Icon } from "../styles/BottomNav.styled";
import { FaScroll, FaSearch, FaHome, FaUser } from "react-icons/fa";
const BottomNav = () => {
  return (
    <StyledBottomNav>
      <Icon>
        <FaScroll />
      </Icon>

      <Icon>
        <FaSearch />
      </Icon>

      <Icon>
        <FaHome />
      </Icon>

      <Icon>
        <FaUser />
      </Icon>
    </StyledBottomNav>
  );
};

export default BottomNav;
