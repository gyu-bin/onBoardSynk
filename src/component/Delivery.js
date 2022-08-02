import styled from 'styled-components';
import Section from '../component/Section';
import OrderImg from '../images/order.png';

const DeliveryContainer = styled.div`
  position: relative;
  vertical-align: top;
  font-size: 0;
  img {
    width: 100%;
  }
`;

const Delivery = () => {
  return (
    <Section style={{ padding: "0" }}>
      <DeliveryContainer>
        <img src={OrderImg} alt={`TBD`}/>
      </DeliveryContainer>
    </Section>
  );
}

export default Delivery;