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

const webShare=()=>{
  if (navigator.share) {
    navigator.share({
      title: 'power overwhelming',
      text: 'operation cwal',
      url: 'https://www.naver.com',
    });
  }else{
    alert("왜 안됨?.")
  }
}

const shareData = {
  title: 'MDN',
  text: 'Learn web development on MDN!',
  url: 'https://developer.mozilla.org'
}

const shareTest=()=>{
  if(typeof navigator.share !== 'undefined'){
    window.navigator.share({
      title: 'power overwhelming',
      text: 'operation cwal',
      url: 'https://www.naver.com',
    }).then(()=>alert('됨')).catch(()=>alert('안됨'));
  }
}

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
      <StyledButtonShare aria-label="공유가기" onClick={async ()=>{
          try {
            await navigator.share(shareData);
            console.log(shareData);
          } catch (err) {
            console.log(err)
          }
          if (typeof navigator.share === "undefined") {
            // 공유하기 버튼을 지원하지 않는 경우에 대한 폴백 처리
            alert('공유안됨')
          }
        }}>
        <BtnIconShare />
      </StyledButtonShare>
    </HeaderContainer>
);
}

export default Header;