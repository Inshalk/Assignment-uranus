import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './fonts.css';
function Midsection() {
  const images = ['./images/img2.png', './images/img3.png', './images/img4.png', './images/img5.png', './images/img6.png', './images/img7.png', './images/img8.png', './images/img9.png', './images/img10.png', './images/img11.png', './images/img12.png'];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Container>
        <AlignLeft>
          <CardRight>
            <Card>
              <ImgBox>
                <img src='./images/img2.png' alt='img' />
              </ImgBox>
              <Text>
                <p><strong>Uranus</strong><br /> The ruler of Aquarius, starts 2024 in retrograde, going direct on Saturday, January 27, then retrogrades again on Sunday, September 1.This suggests ongoing evolution in your home life and personal growth. Uranus champions individuality, social justice, and authenticity. During its retrograde, focus on living by your values and perhaps engage more actively in humanitarian efforts.</p>
              </Text>
            </Card>
          </CardRight>
        </AlignLeft>
        <AlignRight>
          <CardLeft>
            <Card>
              <ImgBox>
                <img src='./images/img3.png' alt='img' />
              </ImgBox>
              <Text>
                <p><strong>The Uranus</strong><br />In 2024, the location of the Sun on the March equinox is in the constellation of Pisces but also on the border of Aquarius. So, we are slowly moving into a new age, from Pisces to Aquarius.<br />Aquarius is ruled by Uranus, the planet that governs innovation, technology, and surprising events. Uranus perfectly mirrors Aquarius' distinctive attitude, complementing the nontraditional nature of these visionary air signs.</p>
              </Text>
            </Card>
          </CardLeft>
        </AlignRight>
      </Container>
      <Container>
        <AlignLeft>
          <CardRight>
            <Card>
              <ImgBox>
                <img src='./images/img4.png' alt='img' />
              </ImgBox>
              <Text>
                <p><strong>In Crypto We Trust, But In Uranus,We Believe</strong><br />
                  <li>Everyone Loves to Pump Uranus more then they like when Uranus Dumps.</li>
                  <li> The liquidity injections just keep coming into Uranus.</li>
                  <li> Don’t pass gas (it’s gonna be giant)</li>
                  <li> Hold onto Uranus!</li>
                  <li> Disclaimer: This is all in good fun – a blend of memes, astrology, and crypto. We will not go moon, we going to Uranus.</li>

                </p>
              </Text>
            </Card>
          </CardRight>
        </AlignLeft>
        <AlignRight>
          <CardLeft>
            <Card>
              <ImgBox>
                <img src='./images/img5.png' alt='img' />
              </ImgBox>
              <Text>
                <p><strong>The Memeifesto</strong><br /><br /> Welcome to the wild side of crypto - where memes aren't just dreams, and astrology isn’t just your daily horoscope.</p>
              </Text>
            </Card>
          </CardLeft>
        </AlignRight>
      </Container>
      <Container>
        <AlignCenter>
          <CardCenter>
            <CardCenterText>
              <ImgBoxCenter>
                <img src={images[currentImageIndex]} alt='img' />
              </ImgBoxCenter>
              <Text>
                <h1>$URANUS Web</h1>
                <p>Uranus, the ruler of Aquarius, starts 2024 in retrograde, going direct on <strong> Saturday, January 27</strong>, then retrogrades again on <strong>Sunday, September 1</strong>.This suggests ongoing evolution in your home life and personal growth.<br />Uranus champions individuality, social justice, and authenticity. During its retrograde, focus on living by your values and perhaps engage more actively in humanitarian efforts.In 2024, the location of the Sun on the March equinox is in the constellation of Pisces but also on the border of Aquarius. So,**we are slowly moving into a new age, from Pisces to Aquarius. Aquarius is ruled by Uranus, the planet that governs innovation, technology, and surprising events**. Uranus perfectly mirrors Aquarius' distinctive attitude, complementing the nontraditional nature of these visionary air signs.</p>
              </Text>
            </CardCenterText>
          </CardCenter>
        </AlignCenter>
      </Container>
    </>
  );
}

const Container = styled.div`
  font-family: 'Montserrat';
  color:white;
  min-width: 100vw;
  height: 120vh;
  display: flex;
  flex-direction: column;
  gap: 2vw;
  background-image: url("./images/bgImg.jpg"); 
  background-size: cover;
    
`;

const CardRight = styled.div`
  margin-right: 2.5vw;
  margin-top: 2.5vw;
  width: 55vw;
  height: 50vh;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 1.5vw;
  box-shadow: 0 1vw 7.5vw rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0.625vw);
  -webkit-backdrop-filter: blur(0.625vw);
  border: 0.15vw solid rgba(255, 255, 255, 0.09);
`;

const Card = styled.div`
  p {
    text-transform: uppercase;
    font-family: 'Montserrat';
  }
  margin-top: 2vw;
  margin-left: 1.5vw;
  display: flex;
  justify-content: flex-start;
`;

const Text = styled.div`
  width: 50vw;
  h1{
    padding-left: 20.5vw;
  }
  p {
    padding-right: 0.5vw;
    padding-left: 0.5vw;
  }
`;

const CardLeft = styled.div`
  margin-left: 2.5vw;
  margin-top: 2.5vw;
  overflow: hidden;
  width: 55vw;
  height: 50vh;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 1.5vw;
  box-shadow: 0 1vw 7.5vw rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0.625vw);
  -webkit-backdrop-filter: blur(0.625vw);
  border: 0.15vw solid rgba(255, 255, 255, 0.09);
`;

const ImgBox = styled.div`
  width: 25vw;
  height: 36vh;
  img {
    object-fit: cover;
    width: 25vw;
    height: 43vh;
    border-radius: 1.5vw;
    object-position: center top;
  }
`;

const AlignLeft = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: flex-end;
`;

const AlignRight = styled(AlignLeft)`
justify-content: flex-start;
`;

const AlignCenter = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items:center;
  justify-content: center;
`;
const CardCenter = styled(CardLeft)`
width: 90vw;
  height: 100vh;
`;
const CardCenterText = styled(Card)`
p{
  padding-left:20vw;
}
`;
const ImgBoxCenter = styled(ImgBox)`
img{
  width:40vw;
  height:80vh;
}
`;



export default Midsection;
