import React, { useState, useEffect } from 'react';
import { Container, Button, Jumbotron, Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';


function WhatsNext({ updateStep, two, updateTwo}) {

    useEffect(() => {
        updateStep(2);
    })

    function changeTwo(newTwo) {
        var str = newTwo.toString();
        window.localStorage.setItem("two", str);
        updateTwo(str)
    }
    return (
        <div className="Progress">
            <Container>
                <Jumbotron>
                    <h1 className="question">What are you going to work on next?</h1>
                    <br className="my-3" />
                    <form>
                        <Form.Control size="lg" type="text" placeholder={two} onChange={(e) => changeTwo(e.target.value)}/>
                    </form>
                    <br className="my-3" />
                    <p>
                        {/* <Button variant="primary" size="lg" href="/help" id="submit">Next -></Button> */}
                        <a href="/help"><div className="button_1 button_2">Next</div></a>
                    </p>
                </Jumbotron>
            </Container>
        </div>
    );
}

export default WhatsNext;