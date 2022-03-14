import styled from 'styled-components';

const Container = styled.div`
  background-color: #4373fc;
  display: flex;
  justify-content: space-between;
`;

const CompanyName = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-left: 10px;
  color: #ffffff;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

const CompanyWrapper = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  margin-left: 10px;
  @media (min-width: 768px) {
    margin-left: 50px;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 375px) {
    flex-direction: row;
    align-items: center;
    justify-content: start;
  }

  @media (min-width: 768px) {
    width: 100%;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    justify-content: end;
    margin-right: 100px;
  }
`;

const Link = styled.a`
  margin-right: 20px;
  color: #ffffff;
  text-decoration-color: #ff9900;

  @media (max-width: 374px) {
    margin-bottom: 10px;
  }

  @media (min-width: 768px) {
    font-size: 25px;
  }
`;

export const Navbar = () => {
  return (
    <Container>
      <CompanyWrapper>
        <a href='/'>
          <img
            src='https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/90fafdac9efd568e8b3029d1c052b856.jpg'
            alt='xendit logo'
            height='100px'
            width='100px'
            style={{ borderRadius: '50%' }}
          />
        </a>
        <CompanyName>XenElectronic</CompanyName>
      </CompanyWrapper>
      <MenuWrapper>
        <Link href='/shop'>Shop</Link>
        <Link href='/cart'>
          <img
            src='https://cdn-icons-png.flaticon.com/512/263/263142.png'
            alt='shopping cart logo'
            height='50px'
            width='50px'
          />
        </Link>
      </MenuWrapper>
    </Container>
  );
};
