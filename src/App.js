import "App.css";
import Banner from "components/Banner";
import Delivery from "components/Delivery";
import Exp from "components/Experience";
import Header from "components/Header";
import ProductInfo from "components/ProductInfo";
import Review from "components/Review";
import Story from "components/Story";
import { defaultTheme } from "components/theme/default";
import iosTheme from "components/theme/iosTheme";
import Tip from "components/Tip";
import { ErrorBoundary } from "libs/ErrorBoundaries";
import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import Modal from "components/Modal";
import Portal from "components/Portal";

const ViewWrap = styled.div`
  position: relative;
  padding-bottom: 40px;
  border-top: 56px solid transparent;
`;
const checkMobile = () => {
  //device 체크
  const varUA = navigator.userAgent.toLowerCase();
  if (varUA.indexOf("android") > -1) {
    return "android";
  } else if (
    varUA.indexOf("iphone") > -1 ||
    varUA.indexOf("ipad") > -1 ||
    varUA.indexOf("ipod") > -1
  ) {
    return "ios";
  } else {
    return "other";
  }
}

const getAuthInfo = () => {
  //headers 정보
  return new Promise((resolve) => {
    let result = "";
    if (checkMobile() === "ios") {
      window.setApiAuthInfo = function (info) {
        result = JSON.parse(info);
        console.log("test", "[ios] getApiAuthInfo", result);
        resolve(result);
      };
      window.NativeInterface.getApiAuthInfo("setApiAuthInfo");
    } else {
      result = JSON.parse(window.NativeInterface.getApiAuthInfo());
      console.log("test", "[aos] getApiAuthInfo", result);
      resolve(result);
    }
  }).then((result) => {
    const url = result.config.cssUri;
    const apiUrl = new URL(window.location.href);
    const modelName = apiUrl.searchParams.get("salesModelName"); //modelName
    return {
      url: url,
      headers: result.headers,
      modelName: modelName,
      firebaseApiKey: result.config.FIREBASE_WEB_API_KEY,
    };
  });
};
const set10DayBefore = () => {
  const nowDate = new Date();
  const year = nowDate.getFullYear(),
    month = nowDate.getMonth() + 1,
    day = nowDate.getDate() - 10,
    hours = nowDate.getHours(),
    minutes = nowDate.getMinutes(),
    seconds = nowDate.getSeconds();
  const month_ = day < 1 ? month - 1 : month,
    year_ = month_ < 1 ? year - 1 : year;
  return `${year_}-${month_ < 10 ? '0' + month_ : month_}-${day < 10 ? '0' + day : day}T${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}Z`;
}

const App = () => {
  const [data, setData] = useState([]);
  const [delivery, setDelivery] = useState();
  const [shareUrl, setShareUrl] = useState('');
  const [deliveryShow, setDeliverShow] = useState(true);
  const [estimatiedDate, setEstimatiedDate] = useState('');
  const [netErrOn, setNetErrOn] = useState(false);
  const [deliveryError, setDeliveryError] = useState(false);

  useEffect(() => {
    getAuthInfo().then((authInfo) => {
      const windowURL = new URL(window.location.href),
        orderNo = windowURL.searchParams.get("orderNo");//주문번호
      //console.log(orderNo, orderNo !== 'null' && orderNo !== 'undefined');
      setDeliverShow(orderNo !== 'null' && orderNo !== 'undefined');
      const mbrNo = authInfo.headers['x-user-no'];//주문자
      const linkUrl = `https://lgthinq.lge.com/thinqapp/onboard?salesModelName=${authInfo.modelName}`;
      setShareUrl(`https://lgthinq.page.link/?link=${encodeURIComponent(linkUrl)}&apn=com.lgeha.nuts&isi=993504342&ibi=com.lgeha.nuts&efr=1`);
      fetch(
        `${authInfo.url}/css/contents/content?type=onboard&keyword=${authInfo.modelName}&searchOption=tag`,
        {
          method: 'GET',
          headers: authInfo.headers,
          mode: 'cors',
          credentials: 'same-origin',
          cache: "force-cache",
        }
      )
      .then(res => res.json())
      .then(data => { //promise 객체 변환
        fetch('https://'+ (data && data.result.items[0].items[0].url))
          .then((response) => {return response.json()})
          .then((data) => (data))
          .then((data) => {
            setData(data);
            console.log(data); //json 데이터들
          }).catch((error) => console.log("error:", error));
      }).catch(() => {
        setNetErrOn(true);
      });

      fetch(
        `${authInfo.url}/css/delivery/?from=${set10DayBefore()}&mbrNo=${mbrNo}`,
        {
          method: 'GET',
          headers: authInfo.headers,
          mode: 'cors',
          creadentials: 'same-origin',
          cache: "force-cache",
        }
      )
      .then(res => res.json())
      .then((data) => (data))
      .then((data) => {
        let orderData = [];
        console.log(data);
        data.result.messages.forEach((data) => {
          data.orders.forEach((dataProduct, idx) => {
            if (dataProduct.salesModelName === authInfo.modelName && dataProduct.orderNo === orderNo) {
              orderData.push(data);
              setEstimatiedDate(dataProduct.estimatedDeliveryDate);
            }
          });
        });
        //console.log(orderData);
        const orderList = ['canceledOrder','completeDelivery','deliverying','prepareDelivery','postponedAcquisition','postponedProduction','postponedDelivery','ordered'];
        let firstOrder = null;
        if (orderData.length > 1) {
          let orders = [];
          orderList.forEach((order) => {//주문 우선순위로 sorting
            orderData.forEach((data) => {
              if (data.status === order) {
                orders.push(data);
              }
            });
          });
          //console.log(orders);
          const order = orders.filter((data) => {
            return data.status === orders[0].status;
          })
          order.sort((a,b) => {
            if (new Date(a.createAt) < new Date(b.createAt)){
              return 1;
            } else if (new Date(a.createAt) > new Date(b.createAt)){
              return -1;
            } else if (new Date(a.createAt) === new Date(b.createAt)){
              return 0;
            }
          });
          firstOrder = order[0];
        } else {
          firstOrder = orderData[0];
        }
        if (firstOrder === undefined) {
          setDeliverShow(false);
        }
        setDelivery(firstOrder);
        console.log(firstOrder);
      }).catch(() => {
        setDeliveryError(true);
      });
    });
  }, []);


  // device theme fontSize
  let theme = defaultTheme;
  if (checkMobile() === "ios") {
    theme = { ...theme, ...iosTheme };
  }

  return (
    <ThemeProvider theme={theme}>
      <ViewWrap className="App">
        <ErrorBoundary>
          {/* <ErrorPage /> */}
          <Header headerData={!netErrOn ? data.title : undefined} productName={data.productCategoryName} shareUrl={shareUrl}/>
          <Banner bannerData={!netErrOn ? data.banner : undefined} productName={data.productCategoryName} />
          {!deliveryError && deliveryShow && (
            <Delivery deliveryData={!netErrOn ? delivery : undefined} estimatiedDate={estimatiedDate}/>
          )}
          <ProductInfo productData={!netErrOn ? data.modelInfo : undefined} productName={data.productCategoryName} />
          <Review reviewData={!netErrOn ? data.productReview : undefined} />
          <Story storyData={!netErrOn ? data.LGcontent : undefined} productName={data.productCategoryName} />
          <Tip tipData={!netErrOn ? data.instaContent : undefined} />
          <Exp expData={!netErrOn ? data.youtube : undefined} />
        </ErrorBoundary>
      </ViewWrap>
      <Portal>
        {netErrOn && (
          <Modal content={"네트워크 연결이 원활하지 않습니다.<br/>잠시 후 다시 시도해주세요."} closeAction={() => {
            window.NativeInterface.closeView();
          }}/>
        )}
      </Portal>
    </ThemeProvider>
  );
}

export default App;
