import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Headline = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;

  @media (min-width: 768px) {
    justify-content: start;
    margin-left: 20px;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    margin-left: 150px;
  }

  @media (min-width: 1440px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  color: #ffffff;
`;

const Content = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  justyfy-content: center;
  align-items: start;
  padding-bottom: 30%;
`;

const Button = styled.a`
  background-color: #ffffff;
  color: #4373fc;
  padding: 18px 25px;
  font-size: 20px;
  border-radius: 5px;
  box-shadow: 0 10px 12px 3px rgb(26 51 130 / 10%);
  box-sizing: border-box;
  font-family: Roboto;
  font-weight: 600;
  text-decoration: none;
  text-size-adjust: 100%;
  width: 160px;
  text-align: center;
  margin: 0 auto;

  &:hover {
    box-shadow: 0 3px 6px 0 rgb(26 51 130 / 20%);
    transform: scale(0.97);
  }

  @media (min-width: 768px) {
    margin-left: 75px;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    margin-left: 200px;
  }

  @media (min-width: 1440px) {
    margin: 0 auto;
  }
`;

const Hero = styled.img.attrs({
  src: 'https://www.xendit.co/wp-content/uploads/2021/04/new-header-image.png',
  height: '450px',
  width: '450px',
})`
  position: absolute;
  right: 1px;
  top: 100px;
  display: none;

  @media (min-width: 768px) and (max-width: 1900px) {
    display: inline-block;
  }
`;

export { Container, Headline, Title, Content, Button, Hero };
