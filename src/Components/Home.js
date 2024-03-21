import React from 'react'
import styled from 'styled-components'
import './fonts.css';
function Home() {
  return (
    
   <Container>
    <img src='./images/Header.jpeg'></img>
    <TextBox> <h1> WELCOME TO THE NEW AGE OF CRYPTOCURRENCY</h1>
    
    <h1>$URANUS WEB</h1>
      <p>Uranus, the ruler of Aquarius, starts 2024 in retrograde, going direct on <strong>Saturday, January 27</strong>, then retrogrades again on <strong>Sunday, September 1</strong>.This suggests ongoing evolution in your home life and personal growth. Uranus champions individuality, social justice, and authenticity. During its retrograde, focus on living by your values and perhaps engage more actively in humanitarian efforts.</p> 
    </TextBox>
    
   </Container>
   
 
  )
}
const Container=styled.div`
width:100vw;
height:80vh;
font-family:'Montserrat';
display:flex;
justify-content:center;
align-items:center;
z-index:-1;
overflow:hidden;
border-bottom: 0.2vw solid #0061ff;


img{
  object-position: center top;  
  width:100vw;
  height:100vh;
  object-fit:cover;
  overflow:hidden;
  display:inline;
}
h1{
  text-transform:uppercase;
  font-family:'Montserrat';
}
p{
  text-transform:uppercase;
  font-family:'Montserrat';

}
`
const TextBox=styled.div`
width:70vw;
height:50vh;
padding:3vw;
position:absolute;
overflow:hidden;

background: rgba(255, 255, 255, 0.2);
border-radius: 1.5vw; 
box-shadow: 0 1vw 7.5vw rgba(0, 0, 0, 0.1);
backdrop-filter: blur(0.625vw); 
-webkit-backdrop-filter: blur(0.625vw);
border: 0.15vw solid rgba(255, 255, 255, 0.09); 

h1{
  text-transform: uppercase;
  color:#f0f8ff ;
}
p{
  color:#f0f8ff ;
  width:50vw;
}
`


export default Home
