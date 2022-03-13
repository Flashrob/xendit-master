import { Container, Headline, Title, Content, Button } from './Landing.sc';

export const Landing = () => {
  return (
    <Container>
      <Headline>
        <Title>Welcome to our Shop!</Title>
      </Headline>
      <Content>
        <Button href='/shop'>Go to shop</Button>
      </Content>
    </Container>
  );
};
