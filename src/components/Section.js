import styled, { css } from "styled-components";

const SectionStyle = ({ space }) => css`
  ${space !== false && `
    padding-top: 18px;
  `};
`;

const SectionContainer = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colorSet.list_separator_background_color};
  ${SectionStyle}
`;

const SectionBox = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colorSet.popup_background_color};
`;

const Section = ({ children, space, ...props }) => {
  return (
    <SectionContainer space={space}>
      <SectionBox {...props}>
        {children}
      </SectionBox>
    </SectionContainer>
  );
}

export default Section;