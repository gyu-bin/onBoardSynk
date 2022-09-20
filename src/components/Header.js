import Button from "components/atom/Button";
import IconBack from "images/icon_back.png";
import IconShare from 'images/btn_action_share_material_nor.png';
import styled from "styled-components";

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex: 1;
  padding: 12px 10px;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  background: ${({ theme }) => theme.colorSet.background_material_light};
`;

const TitleBox = styled.h1`
  display: flex;
  flex: 1;
  margin-left: 5px;
  ${({ theme }) => theme.fontSet.Type_A12};
  font-weight: ${({ theme }) => theme.fontWeight.Bold};
`;

const StyledButtonBack = styled(Button)`
  display: inline-block;
  font-size: 0;
`;

const StyledButtonShare = styled(Button)`
  display: inline-block;
  font-size: 0;
`;

const BtnIconBack = styled.span`
  display: inline-block;
  width:32px;
  height:32px;
  vertical-align: top;
  background: url("${IconBack}") no-repeat center center;
  background-size: 100%;
`;

const BtnIconShare = styled.span`
  display: inline-block;
  width: 32px;
  height: 32px;
  margin-right: 2px;
  background-size: 100% !important;
  background: url(${IconShare}) no-repeat center center;
`;


const Header = ({ headerData }) => {

  return (
    <HeaderContainer>
      <StyledButtonBack aria-label="뒤로가기" className={headerData ? "" : "button-box"}
        onClick={() => {
          window.NativeInterface.closeView();
        }}>
        <BtnIconBack />
      </StyledButtonBack>
      <TitleBox className={headerData ? "" : "text-box"}>{headerData ? headerData : "xxxxxxxxxxx"}</TitleBox>
    </HeaderContainer>
);
}

export default Header;