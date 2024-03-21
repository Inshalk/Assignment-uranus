import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <FooterTitle>Partners:</FooterTitle>
        <FooterContent>
          <ul>
            <li>Decentralized Intelligence Agency</li>
            <li>World Vibe Web</li>
            <li>Purplerock</li>
          </ul>
        </FooterContent>
      </FooterSection>
      <FooterSection>
        <FooterTitle>Resources:</FooterTitle>
        <FooterContent>
          <ul>
            <li>Effective Vibes</li>
            <li>Golden Meme</li>
          </ul>
        </FooterContent>
      </FooterSection>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
background: linear-gradient(109.6deg, rgb(16, 37, 60) 51.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%);
  color: white;
  padding: 2vw;
  display: flex;
  justify-content: space-between;
`;

const FooterSection = styled.div`
  flex: 1;
  margin-right: 2vw;
`;

const FooterTitle = styled.h3`
  margin-bottom: 1vw;
`;

const FooterContent = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 1vw;
  }
`;

export default Footer;
