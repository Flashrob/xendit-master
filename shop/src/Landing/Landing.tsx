import { Container, Headline, Title, Content, Button, Hero } from './Landing.sc';

export const Landing = () => {
  return (
    <Container>
      <Headline>
        <Title>Welcome to our Shop!</Title>
      </Headline>
      <Content>
        <Hero src='https://www.xendit.co/wp-content/uploads/2021/04/new-header-image.png' alt='xendit logo' />
        <Button href='/shop'>Go to shop</Button>
      </Content>
    </Container>
  );
};
