import styled from 'styled-components';
import IconBack from "../images/icon_back.png";

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  padding: 12px 24px 12px 10px;
  align-items: center;
`;

const TitleBox = styled.h1`
  margin-left: 5px;
  font-size: 20px;
  line-height: 26px;
  font-weight: 700;
`;

const Button = styled.button`
  display: inline-block;
`;

const Icon = styled.span`
  display: inline-block;
  width:32px;
  height:32px;
  vertical-align: top;
  background: url("${IconBack}") no-repeat center center;
  background-size: 100%;
`;

const Header = ({ children }) => {
  return (
    <HeaderContainer>
      <Button aria-label={`뒤로가기`}><Icon /></Button>
      <TitleBox>{children}</TitleBox>
    </HeaderContainer>
  );
}

export default Header;