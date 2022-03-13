import styled from 'styled-components';

const Headline = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.h1`
  color: #ffffff;
`;
const Container = styled.div`
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 50px;
  gap: 20px;
`;
const Paragraph = styled.p`
  font-size: 16px;
  color: #ffffff;
  text-align: center;
`;

const Total = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  font-size: 25px;
  font-weight: 700;
  margin-right: 10%;
  float: right;
`;

const Content = styled.div`
  width: 100%;
`;

const NoItems = styled.div`
  text-align: center;
  color: #ffffff;
`;

const CheckoutButton = styled.button`
  background-color: #00D098;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  padding: 18px 25px;
  font-size: 16px;

  &:hover {
    transform: scale(0.97);
    box-shadow: 0 3px 6px 0 rgb(26 51 130 / 20%);
  }

  display: block;
  float: right;
  margin-right: 10%;
`;

export { Container, Headline, Title, Paragraph, Total, Content, NoItems, CheckoutButton };
