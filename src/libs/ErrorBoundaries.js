import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  //에러 발생 시 ErrorBoundary Status 변경
  static getDerivedStateFromError(error) {
    console.log("ErrorBoundary::getDerivedStateFromError", error);
    // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
    return { hasError: true };
  }

  // ErrorBoundary Component 렌더링 이후 호출 (그대로 Child를 리턴하면 호출 안됨)
  componentDidCatch(error, errorInfo) {
    // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
    // logErrorToMyService(error, errorInfo); // 임시 주석 처리
  }

  render() {
    if (this.state.hasError) {
      // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export { ErrorBoundary };

