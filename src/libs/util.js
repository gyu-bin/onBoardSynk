const common = {
  generator: (appUrl, fallbackUrl, desktopUrl) => {
    if (common.navigator.isDevice) {
      window.location.href = appUrl; // 인스타그램
      setTimeout(() => {
        window.location.href = fallbackUrl;
      }, 500);
    } else {
      window.location.href = desktopUrl;
    }
  },
  getParmam: (url, key) => new URL(url).searchParams.get(key),
  getPathNames: (url) => new URL(url).pathname.split("/"),
  navigator: {
    get isDevice() {
      return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    },
  },
  youtube: {
    url: "https://www.youtube.com/",
    scheme: "vnd.youtube",
    getId: (url) =>
      url.includes("https://youtu.be/")
        ? url.replace("https://youtu.be/", "")
        : new URL(url).searchParams.get("v"),
    getWatchUrl: (v) => encodeURI(`${common.youtube.url}watch?v=${v}`),
    getAppWatchUrl: (v) => encodeURI(`${common.youtube.scheme}://${v}`),
  },
  instagram: {
    url: "https://www.instagram.com/",
    scheme: "instagram",
    getAppUserUrl: (userName) =>
      encodeURI(`${common.instagram.scheme}://user?username=${userName}`),
    getUserUrl: (userName) => `${common.instagram.url}${userName}`,
    getAppMediaUrl: (id) =>
      encodeURI(`${common.instagram.scheme}://media?id=${id}?__a=1`),
    getMediaUrl: (id) => `${common.instagram.url}p/${id}`,
  },
  naver: {
    url: "https://naver.worksmobile.com/",
    searchUrl: "https://m.search.naver.com/search.naver",
    scheme: "naversearchapp",
    getQuery: (url) =>
      url.includes("https://search.naver.com/search.naver") ||
      url.includes(common.naver.searchUrl)
        ? new URL(url).searchParams.get("query")
        : "",
    getAppSearchUrl: (query) =>
      encodeURI(
        `${common.naver.scheme}://inappbrowser?url=${common.naver.searchUrl}?query=${query}&target=new&version=6`
      ),
    getAppUrl: (url) =>
      encodeURI(
        `${common.naver.scheme}://inappbrowser?url=${url}&target=new&version=6`
      ),
  },
};

const AppLink = {
  // TODO: 호환성 검토
  aLink: {
    linkToUrl: (url) => {
      const event = new MouseEvent("click");
      const aLink = document.createElement("a");
      aLink.href = url;
      aLink.dispatchEvent(event);
    },
  },
  youtube: {
    url: ({ url }) => {
      const yout = common.youtube;
      const v = yout.getId(url);
      common.generator(
        yout.getAppWatchUrl(v),
        yout.getWatchUrl(v),
        yout.getWatchUrl(v)
      );
    },
    watch: ({ v }) => {
      const yout = common.youtube;
      common.generator(
        yout.getAppWatchUrl(v),
        yout.getWatchUrl(v),
        yout.getWatchUrl(v)
      );
    },
  },
  instagram: {
    url: ({ url }) => {
      if (common.getPathNames(url)[1] === "p") {
        AppLink.instagram.media({ id: common.getPathNames(url)[2] });
      } else {
        AppLink.instagram.user({ userName: common.getPathNames(url)[1] });
      }
    },
    user: ({ userName }) => {
      const inst = common.instagram;
      common.generator(
        inst.getAppUserUrl(userName),
        inst.getUserUrl(userName),
        inst.getUserUrl(userName)
      );
    },
    media: ({ id }) => {
      const inst = common.instagram;
      common.generator(
        inst.getAppMediaUrl(id),
        inst.getMediaUrl(id),
        inst.getMediaUrl(id)
      );
    },
  },
  naver: {
    search: ({ query }) => {
      const nav = common.naver;
      common.generator(
        nav.getAppSearchUrl(query),
        `${nav.searchUrl}?query=${query}`,
        `${nav.searchUrl}?query=${query}`
      );
    },
    url: ({ url }) => {
      const nav = common.naver;
      const query = nav.getQuery(url);
      common.generator(nav.getAppSearchUrl(query), url, url);
    },
  },
};

export { AppLink };
