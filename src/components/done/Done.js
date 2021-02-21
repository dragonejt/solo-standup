import React, { useState, useEffect } from 'react';
import { Container, Button, Jumbotron, Form, FormGroup, FormControl, FormLabel, Table } from 'react-bootstrap';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey()


function Done({updateStep , one, two, three, updateOne, updateTwo, updateThree}) {

    useEffect(() => {
        updateStep(4);
    })
    function determineHelp() {
        var thr = window.localStorage.getItem("three");
        if (thr === "1") {
            return "Yes, I need help";
        }
        else if (thr === "0") {
            return "No, I don't need help";
        }
    }
    function changeEmail(newEmail) {
        var str = newEmail.toString();
        window.localStorage.setItem("email", str)
    }
    function sendEmail() {

    }
    function reset() {
        updateOne("");
        updateTwo("");
        updateThree(-1);
        window.localStorage.setItem("one", "");
        window.localStorage.setItem("two", "");
        window.localStorage.setItem("three", -1);
    }
    return (
        <div className="Done">
            <Container>
                <br className="my-3" />
                <br className="my-3" />

                <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Question</th>
                    <th>Response</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>What have you accomplished between the last standup meeting and now?</td>
                    <td>{window.localStorage.getItem("one")}</td>
                    </tr>
                    <tr>
                    <td>What are you going to work on next?</td>
                    <td>{window.localStorage.getItem("two")}</td>
                    </tr>
                    <tr>
                    <td>Are you stuck and need help?</td>
                    <td>{determineHelp()}</td>
                    </tr>
                </tbody>
                </Table>
                <br></br><br></br><br></br><br></br>
                <Form.Control size="lg" type="text" placeholder={window.localStorage.getItem("email")} onChange={(e) => changeEmail(e.target.value)}/>
                {/* <Button variant="primary">Send E-mail</Button> */}
                <br></br>
                <div className="button_1 button_2">Send E-mail </div>
                <br></br><br></br>
                {/* <Button variant="primary">Restart Standup</Button> */}
                <div className="button_1 button_2" onClick={() => reset()} href>Restart </div>

            </Container>
        </div>
    );
}

export default Done;