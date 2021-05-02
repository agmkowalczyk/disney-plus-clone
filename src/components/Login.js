import React from 'react';
import styled from 'styled-components';

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogo1 src="/images/cta-logo-one.svg" alt="" />
        <SignUp>
          GET ALL THERE
        </SignUp>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </Description>
        <CTALogo2 src="/images/cta-logo-two.png" alt="" />
      </CTA>
    </Container>
  )
}

export default Login;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  //padding: 0 calc(3.5vw + 5px);
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  
  &:before {
    background: url("/images/login-background.jpg") center center/cover no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.7;
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 60%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
`;

const CTALogo1 = styled.img`

`;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;
  
  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

const CTALogo2 = styled.img`
  width: 90%;
`;
