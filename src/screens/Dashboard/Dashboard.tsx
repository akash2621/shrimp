import { Row, Col, Container } from "react-bootstrap";
import "./Dashboard.css";
import Header from "../../components/Layout/Header/Header";

const Dashboard = () => {
    return (
        <>
            <Header />
            <div className="dashboard-main" >
                {/* MENU BENNIES & DIRECTORY */}
                <Container fluid >
                    <Row>
                        <Col lg={6} md={6} >
                            <div className="menu-section menu-section-bennies" >
                                <div className="menu-content" >
                                    <div>
                                        <a href="/bennies" >BENNIES</a>
                                        <p>Get discounts & exclusive <br /> access to Shrimp partners.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} >
                            <div className="menu-section menu-section-bennies menu-section-directory" >
                                <div className="menu-content" >
                                    <div>
                                        <a href="/directory" >DIRECTORY</a>
                                        <p>Connect & build with your <br /> fellow Shrimp members.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                {/* MENU BENNIES & DIRECTORY */}
                <h5 className="dashboard-title" >MEMBERS HUB</h5>

                {/* EVENT CALEDER */}
                <div className="calender" >
                    <div className="ae-emd-cal" data-calendar="WD405936" data-configure="false"></div>
                </div>
                {/* EVENT CALEDER */}
            </div>
        </>
    );
}

export default Dashboard;