import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { propTypes } from 'react-bootstrap/esm/Image';


function Navi({ step }) {
    const isActive = (currStep) => {
        if (step === currStep) {
            return "active";
        }
        return ""
    }
    return (
        <div className="Navbar">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Solo Standup</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/progress" className={isActive(1)}>What have you completed?</Nav.Link>
                        <Nav.Link href="/whatsnext" className={isActive(2)}>What are you going to work on next?</Nav.Link>
                        <Nav.Link href="/help" className={isActive(3)}>Do you need any help?</Nav.Link>
                        <Nav.Link href="/done" className={isActive(4)}>Done!</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navi;