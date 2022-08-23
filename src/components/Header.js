import styled from "styled-components";
import Button from "components/atom/Button";
import IconBack from "images/icon_back.png";

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex: 1;
  padding: 12px 24px 12px 10px;
  align-items: center;
  z-index: 2;
  background: ${({ theme }) => theme.colorSet.background_material_light};
`;

const TitleBox = styled.h1`
  margin-left: 5px;
  ${({ theme }) => theme.fontSet.Type_A12};
  font-weight: ${({ theme }) => theme.fontWeight.Bold};
`;

const StyledButton = styled(Button)`
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

const Header = ({ headerData }) => {
  return (
    <HeaderContainer>
      <StyledButton aria-label="뒤로가기" className={headerData ? "" : "button-box"}><Icon /></StyledButton>
      <TitleBox className={headerData ? "" : "text-box"}>{headerData ? headerData : "xxxxxxxxxxx"}</TitleBox>
    </HeaderContainer>
  );
}

export default Header;