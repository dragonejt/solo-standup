import React, { useState, useEffect } from 'react';
import { Container, Button, Jumbotron, Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import './progress.css'


function Progress({ updateStep }) {

    useEffect(() => {
        updateStep(1);
    }

    )
    return (
        <div className="Progress">
            <Container>
                <Jumbotron>
                    <h1 className="question">What have you accomplished between the last standup meeting and now?</h1>
                    <br className="my-3" />
                    <Form.Group controlId="ProgressCheck">
                        <Form.Control as="textarea" class="answer"/>
                    </Form.Group>
                    <br className="my-3" />
                    <p>
                        <Button variant="primary" size="lg" href="/progress" id="submit">Next -></Button>
                    </p>
                </Jumbotron>
            </Container>
        </div>
    );
}

export default Progress;