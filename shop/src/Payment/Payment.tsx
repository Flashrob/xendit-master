import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 50px;
  gap: 20px;
`;

const Headline = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.h1`
  color: #ffffff;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #ffffff;
  text-align: center;
`;

export const Payment = () => {
  const location = useLocation();
  const { orderId, total } = location.state as {
    orderId: string;
    total: number;
  };
  return (
    <Container>
      <Headline>
        <Title>Payment</Title>
        <Paragraph>Your order Id: #{orderId}</Paragraph>
        <Paragraph>Your Total: SGD ${total}</Paragraph>
        <Paragraph>
          <button>Click here to pay</button>
        </Paragraph>
      </Headline>
    </Container>
  );
};
