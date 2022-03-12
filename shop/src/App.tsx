import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #4373fc;
  flex-direction: column;
`;

const Headline = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;
`;

const Title = styled.h1`
  color: #ffffff;
`;

const Content = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  justyfy-content: center;
  align-items: center;
  padding-bottom: 30%;
`;

const Button = styled.a`
  background-color: #ffffff;
  color: #4373fc;
  padding: 18px 25px;
  font-size: 16px;
  border-radius: 5px;
  box-shadow: 0 10px 12px 3px rgb(26 51 130 / 10%);
  box-sizing: border-box;
  font-family: Montserrat;
  font-weight: 600;
  margin: 0 auto;
`;

function App() {
  return (
    <Container>
      <Headline>
        <Title>Welcome to the XenElectronics Shop!</Title>
      </Headline>
      <Content>
        <Button href="/shop">Go to shop</Button>
      </Content>
    </Container>
  );
}

export default App;
