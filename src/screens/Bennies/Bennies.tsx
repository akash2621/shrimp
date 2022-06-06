import "./Bennies.css";
import logo from "../../assets/logo.svg";
import { Container } from "react-bootstrap";

const Bennies = () =>{
    return(
        <>
            <div className="common-background" >
                <Container>
                    <div className="common-header" >
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="header-content">
                        <h5>BENNIES</h5>
                        <p>Get discounts & exclusive access to Shrimp partners.</p>
                        <iframe 
                            className="bennies-embed-link" 
                            src="https://v1.embednotion.com/embed/a33d61061a2e4f5791225f75c7fc9556">
                        </iframe>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Bennies;