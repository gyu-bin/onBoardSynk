import styled from "styled-components";

const TextStyle = styled.span`
  position: relative;
  display: inline-block;
  color: ${({ theme }) => theme.colorSet.primary_text_default_material_light};
`;

const Button = ({ children, ...props }) => {
  return (
    <TextStyle {...props}>{children}</TextStyle>
  )
}

export default Button;