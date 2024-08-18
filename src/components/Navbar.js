import {useEffect, useState } from "react";
import {Navbar , Container , Nav} from "react-bootstrap";

import logo from '../images/logo1.png';
import navIcon1 from '../images/nav-icon1.svg';
import navIcon2 from '../images/nav-icon2.svg';
import navIcon3 from '../images/nav-icon3.svg';
import navIcon4 from '../images/insta.svg';

export const NavBar = () => {
    const[activeLink , setActiveLink] = useState('home');
    const [scrolled , seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
               seScrolled(true); 
            }else{
                seScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll)

        return () => window.removeEventListener("scroll" , onScroll);
    }, [])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }

    return(
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="Logo"/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"> 
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"className={activeLink === 'home'? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills"className={activeLink === 'skills'? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects"className={activeLink === 'projects'? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#about"className={activeLink === 'about'? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About Me</Nav.Link>

          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                
                <a href="https://www.linkedin.com/in/rajeshwari-mahadik/"><img src={navIcon1} alt=""/></a>
                <a href="https://github.com/rajeshwarimahadik"><img src={navIcon2} alt=""/></a>
                <a href="mailto:rajeshwarimahadik36@gmail.com"><img src={navIcon3} alt="Email Icon"/></a>
                <a href="https://www.instagram.com/rajeshwari_mahadik/?next=%2F"><img src={navIcon4} alt=""/></a>
            </div>
            <Nav.Link href="#connect">
  <button className="vvd">
    <span>Let's Connect</span>
  </button>
</Nav.Link>

            {/* <button href="#connect"className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    );
}