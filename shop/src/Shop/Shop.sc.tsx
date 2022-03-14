import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
`;

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

const Paragraph = styled.p`
  font-size: 16px;
  color: #ffffff;
`;

const Select = styled.select`
  width: fit-content;
  margin: 0 auto;
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 10px;
`;

export { Container, Headline, Title, Paragraph, Select };
