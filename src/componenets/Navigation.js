import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Logo from './Logo'
import { useHistory } from 'react-router-dom';

const Section = styled.section`
width:100vw;
background-color: ${props => props.theme.body};
`

const NavBar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;

width:85%;
height: ${props => props.theme.navHeight};
margin: 0 auto; 
`

const Menu = styled.ul`
display:flex;
justify-content: space-between;
align-item: center;
list-style:none;
`
const MenuItem = styled.li`
margin: 0 1rem;
width: fit-content;
color: ${props => props.theme.text};
// cursor: pointer;


&::after{
    content:' ';
    display: block;
    width: 0%;
    height: 2px;
    background: ${props => props.theme.text};
    transition: width 0.3s ease;
}

&:hover::after{
  width: 100%;
}

`
const Navigation = () => {
 
const scrollTo = (id) => {
  let element = document.getElementById(id);
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  })

}
 
const history = useHistory();
const navigateTo = () => history.push('/team');



  return (
    <>
    <Section>
        <NavBar>
            <Logo/>
           <Menu>
            <MenuItem onClick={()=> history.push("/")}>Home</MenuItem>
            <MenuItem onClick={() => scrollTo('about')}>About</MenuItem>
            <MenuItem onClick={() => scrollTo('roadmap')}>Roadmap</MenuItem>
            <MenuItem onClick={() => scrollTo('showcase')}>Showcase</MenuItem>
            <MenuItem ><a href="/team">Team</a></MenuItem>
            <MenuItem onClick={() => scrollTo('faq')}>Faq</MenuItem>
           </Menu>
            <Button text="Connect Wallet" link="https://google.com" />
        </NavBar>
    </Section>
    </>
  )
}

export default Navigation