import React, { useState, useEffect } from 'react';
import { Container, Button, Jumbotron, Form, FormGroup, FormControl, FormLabel, Table } from 'react-bootstrap';


function Done({updateStep , one, two, three}) {

    useEffect(() => {
        updateStep(4);
    })

    return (
        <div className="Done">
            <Container>
               
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Questions</th>
                    <th>Answers</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Question1</td>
                    <td>Answer</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Question2</td>
                    <td>Answer</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Question3</td>
                    <td>Answer</td>
                    </tr>
                </tbody>
                </Table>


            </Container>
        </div>
    );
}

export default Done;