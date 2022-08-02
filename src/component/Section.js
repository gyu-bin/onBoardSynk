import styled from 'styled-components';

const SectionContainer = styled.div`
  position: relative;
  padding-top: 10px;
  background: #ececec;
`;

const SectionBox = styled.div`
  position: relative;
  padding: 0 20px 20px;
  background: #fff;
`;

const Section = ({ children, spaceTop, useSpace, ...props }) => {
  return (
    <SectionContainer>
      <SectionBox useSpace={useSpace} {...props}>
        {children}
      </SectionBox>
    </SectionContainer>
  );
}

export default Section;