import React, { useState, useEffect } from 'react';
import { Container, Button, Jumbotron, Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import './progress.css'


function Progress({ updateStep, one, updateOne}) {

    useEffect(() => {
        updateStep(1);
    })

    function changeOne(newOne) {
        var str = newOne.toString();
        window.localStorage.setItem("one", str);
        updateOne(str);
    }
    return (
        <div className="Progress">
            <Container>
                <Jumbotron>
                    <h1 className="question">What have you accomplished since the last standup?</h1>
                    <br className="my-3" />
                    <form>
                        <Form.Control size="lg" type="text" placeholder={one} onChange={(e) => changeOne(e.target.value)}/>
                    </form>
                    <br className="my-3" />

                    <a href="/whatsnext"><div className="button_1 button_2">Next </div></a>
                    

                </Jumbotron>
            </Container>
        </div>
    );
}

export default Progress;