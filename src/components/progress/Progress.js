import React, { useState, useEffect } from 'react';
import { Container, Button, Jumbotron, Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import './progress.css'


function Progress({ updateStep, one, updateOne }) {

    useEffect(() => {
        updateStep(1);
    })

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${one}`)
    }
    return (
        <div className="Progress">
            <Container>
                <Jumbotron>
                    <h1 className="question">What have you accomplished between the last standup meeting and now?</h1>
                    <br className="my-3" />
                    <form onSubmit={handleSubmit}>
                        <label>
                            Frirst Name:
                        <input
                                type="text"
                                value={one}
                                onChange={e => updateOne(e.target.value)}
                            />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    <br className="my-3" />
                    <p>
                        <Button variant="primary" size="lg" id="submit">Next -></Button>
                    </p>
                </Jumbotron>
            </Container>
        </div>
    );
}

export default Progress;