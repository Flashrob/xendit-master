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
  float: right;
  justify-content: center;
  color: white;
  font-size: 25px;
  font-weight: 700;
  margin-right: 10%;
`;

const Content = styled.div`
  width: 100%;
`;

export { Container, Headline, Title, Paragraph, Total, Content };
