import styled from 'styled-components';

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
`;

const CompanyName = styled.span`
  font-size: 20px;
  margin-left: 10px;
`;

const CompanyWrapper = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
`;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  @media (max-width: 374px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const Link = styled.a`
  margin-right: 20px;

  @media (max-width: 374px) {
    margin-bottom: 10px;
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
