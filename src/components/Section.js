import styled from "styled-components";

const SectionContainer = styled.div`
  position: relative;
  padding-top: 18px;
  background: ${({ theme }) => theme.colorSet.list_separator_background_color};
`;

const SectionBox = styled.div`
  position: relative;
  padding: 0 20px 18px;
  background: ${({ theme }) => theme.colorSet.popup_background_color};
`;

const Section = ({ children, ...props }) => {
  return (
    <SectionContainer>
      <SectionBox {...props}>
        {children}
      </SectionBox>
    </SectionContainer>
  );
}

export default Section;