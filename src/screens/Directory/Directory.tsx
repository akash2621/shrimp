import "./DirectoryStyle.css";
import logo from "../../assets/logo.svg";
import { Container } from "react-bootstrap";

const Directory = () =>{
    return(
        <>
            <div className="common-background" >
                <Container>
                    <div className="common-header" >
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="header-content">
                        <h5>DIRECTORY</h5>
                        <p>Connect & build with your fellow Shrimp members.</p>
                        <iframe className="bennies-embed-link" src="https://v1.embednotion.com/embed/80dea92d686b498188ac65f0402804d8"></iframe>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Directory;