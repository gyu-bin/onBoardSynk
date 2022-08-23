import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import axios from "axios";
import "App.css";
import Banner from "components/Banner";
import Delivery from "components/Delivery";
import Exp from "components/Experience";
import Header from "components/Header";
import Review from "components/Review";
import Story from "components/Story";
import Tip from "components/Tip";
import ProductInfo from "components/ProductInfo";
import iosTheme from "components/theme/iosTheme";
import { ThemeProvider } from "styled-components";
import { ErrorBoundary } from "libs/ErrorBoundaries";
import { defaultTheme } from "components/theme/default";
import { productInfo } from "ProductInfoMock";

const ViewWrap = styled.div`
  position: relative;
  border-top: 56px solid transparent;
`;
const Share = styled.div`
  position:fixed;
  right:10px;
  bottom:10px;
  width:30px;
  height:30px;
  pointer-events:none;
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
const getLateTime = (t1, t2) => {
  const t1DateTime = new Date(t1),
    t2DateTime = new Date(t2);
  if (t1DateTime >= t2DateTime) {
    return true;
  }
}

const App = () => {
  const [data, setData] = useState([]);
  const [delivery, setDelivery] = useState();
  const [firebaseApiKey, setFirebaseApiKey] = useState('');
  const [productData, setProductData] = useState(productInfo);
  const share = useCallback(() => {
    // //deepLink
    // const baseUrl = `https://lgthinq.page.link/?link=https://lgthinq.lge.com/thinqapp/care?state=CDM_Detail`;
    // const params = `&params=${contentId}`;    
    // const property = `&apn=com.lgeha.nuts&isi=993504342&ibi=com.lgeha.nuts&amv=40000011&imv=4.0.1000`;  
    // const convertTitle = shareTitle.replace(/<br>/gi, " ");     
    // // si(image), st(title), sd(description) 
    // const socialMetaTag = `&si=${shareThumbnail}&st=${convertTitle}`;
    // const deepLinkUrl = baseUrl + encodeURIComponent(params) + property + socialMetaTag;
    return axios({
      method: "POST",
      url: `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${firebaseApiKey}`,
      headers: {
        "Content-type": "application/json", 
      }, 
      params: {
        longDynamicLink: '',//longLink,
      },
    })
    .then((res) => { 
      console.log(res);
      window.navigator.share({
        title: '', // 공유될 제목
        text: '', //`${t("@CP_CARE_SMARTLIFE_CONTENTS_SHARE_TITLE_S")}`, // 공유될 설명
        url: res.shortLink, // 공유될 URL
        //files: [], // 공유할 파일 배열
      });
      //resolve(res.data);   
    })
    .catch((error) => {  
      //reject(error);  
    });
  }, [firebaseApiKey]);

  useEffect(() => {
    getAuthInfo().then((authInfo) => {
      setFirebaseApiKey(authInfo.firebaseApiKey);
      const windowURL = new URL(window.location.href),
        orderNo = windowURL.searchParams.get("orderNo");//주문번호
      const mbrNo = authInfo.headers['x-user-no'];//주문자
  
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
            //console.log(data);
          }).catch((error) => console.log("error:", error));
      });
  
      // authInfo.url + `/css/deliverry/?from=${set10DayBefore()}&mbrNo=${mbrNo}&orderNo=${orderNo}`,
      fetch(
        `${authInfo.url}/css/delivery/?from=${set10DayBefore()}&mbrNo=${mbrNo}`,
        {
          method: 'GET',
          headers: authInfo.headers,
          mode: 'cors',
          creadentials: 'same-origin',
          cache: "force-cache",
        }
      ).then(res => res.json())
      .then((data) => (data))
      .then((data) => {
        //console.log(data);
        const orderData = data.result.messages.filter((data) => {
          if (data.orders[0].salesModelName === authInfo.modelName && data.orders[0].orderNo === orderNo) {
            return data;
          }
        });
        const orderList = ['completeDelivery','deliverying','prepareDeliver','ordered'];
        let firstOrder = null;
        if (orderData.length > 1) {
          let orders = [];
          orderList.forEach((order) => {//주문 우선순위로 sorting
            orderData.forEach((data) => {
              if (data.status === orderList[order]) {
                orders.push(data);
              }
            });
          });
          const order = orders.filter((data) => {
            return data.status === orders[0];
          })
          order.sort((a,b) => {
            if (new Date(a) < new Date(b)){
              return 1;
            } else if (new Date(a) > new Date(b)){
              return -1;
            } else if (new Date(a) === new Date(b)){
              return 0;
            }
          });
          firstOrder = order[0];
          // if (orders[0].status === orders[1].status) {//상태가 같은 주문이 있을 경우
          //   if (getLateTime(orders[0].createdAt, orders[1].createdAt)) {
          //     firstOrder = orders[0];
          //   } else {
          //     firstOrder = orders[1];
          //   }
          // }
        } else {
          firstOrder = orderData[0];
        }
        setDelivery(firstOrder);
        //console.log(firstOrder);
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
          <Header headerData={data.title} />
          <Banner bannerData={data.banner} />
          <Delivery deliveryData={delivery} />
          <ProductInfo productData={productData} />
          <Review reviewData={data.productReview} />
          <Story storyData={data.LGcontent} />
          <Tip tipData={data.instaContent} />
          <Exp expData={data.youtube} />
          <Share onClick={() => {
            share();
          }}/>
        </ErrorBoundary>
      </ViewWrap>
    </ThemeProvider>
  );
}

export default App;