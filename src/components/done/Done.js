import React, { useState, useEffect } from 'react';
import { Container, Button, Jumbotron, Form, FormGroup, FormControl, FormLabel, Table } from 'react-bootstrap';

function Done({ updateStep, one, two, three, updateOne, updateTwo, updateThree }) {

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
    const [email, setEmail] = useState("");
    const mailLink = () => {
        return  "mailto:" + email + "?subject=Your%20Solo%20Standup";
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

                <div className="Tablef" >

                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Question</th>
                                <th>Response</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>What have you accomplished since the last standup?</td>
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

                </div>
                <br></br><br></br><br></br><br></br>
                <Form.Control size="lg" type="text" placeholder={email} onChange={(e) => setEmail(e.target.value)} />
                <br></br>
                <a href={mailLink()} target="_blank"><div className="button_1 button_2" >Send E-mail </div></a>
                <br></br><br></br>
                {/* <Button variant="primary">Restart Standup</Button> */}
                <a href="/landing" onClick={() => reset()}><div className="button_1 button_2" >Restart </div></a>

            </Container>
        </div>
    );
}

export default Done;