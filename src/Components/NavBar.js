import React from 'react'
import styled from 'styled-components';
import './fonts.css';
function NavBar() {
  return (
    <Nav>
      <LeftNav>
        <img src="./images/Logo.jpg" alt="img"/>
        <span>Uranus</span>
      </LeftNav>
      <RightNav>
        <Item><ul><li><a href='/'>About us</a></li></ul></Item>
        <Item><ul><li><a href='/'>Services</a></li></ul></Item>
        <Item><ul><li><a href='/'>Partners</a></li></ul></Item>
        <Item><ul><li><a href='/'>Contact us</a></li></ul></Item>
        
      </RightNav>
    </Nav>
  )
}

const Nav=styled.div`
font-family:'Montserrat';
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(42,9,121,1) 100%, rgba(0,212,255,1) 100%);
height:10vh;
width:100vw;
overflow:hidden;
display:flex;
flex-direction:row;
justify-content:space-between;
`
const LeftNav=styled.div`
font-family:'Montserrat';
height:10vh;
width:9vw;
display:flex;
justify-content:space-around;
flex-direction:row;
gap:1vw;
align-items:center;
padding-left:2vw;
img{
    width:3vw;
    height:6vh;
    border-radius:50%;
    object-fit:cover;
}
span{
  text-transform:uppercase;
    color:white;
}
`
const RightNav=styled.div`
font-family:'Montserrat';
height:5vh;
display:flex;
flex-direction:row;
padding-right:2vw;


`
const Item=styled.div`
li{
    list-style:none;
}
a{
    color:white;
    text-transform:uppercase;
    text-decoration:none;
}
&:hover{
    a{
        color:grey;
        cursor:pointer;
    }
}
`

export default NavBar
