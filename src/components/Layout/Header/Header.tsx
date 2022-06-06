import "./Header.css";
import { Navbar , Container , Nav} from "react-bootstrap";
import logo from "../../../assets/logo.svg";
import { useState } from 'react';
import Wallet from "../../Wallet/Wallet";
import menu from "../../../assets/menu.svg";

const Header = () =>{
    const [navbarMain, setNavbar] = useState(false);
    const changeBackground = () =>{
        if(window.scrollY >= 80){
            setNavbar(true)
        } else{
            setNavbar(false);
        }
    };
    window.addEventListener('scroll', changeBackground);
    return(
        <>
            <div className="navbar-main">
                <Navbar expand="lg" fixed="top" className={navbarMain ? 'navbarMain active' : 'navbarMain' } >
                    <Container>
                        <Navbar.Brand href="#"><img src={logo} alt="logo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" >
                            <img src={menu} alt="menu" />
                        </Navbar.Toggle>
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
                                <Nav.Link href="#action1"><Wallet /></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}

export default Header;