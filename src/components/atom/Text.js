import styled from "styled-components";

const TextStyle = styled.span`
  position: relative;
  display: inline-block;
`;

const Button = ({ children, ...props }) => {
  return (
    <TextStyle {...props}>{children}</TextStyle>
  )
}

export default Button;