import React, { useState, useEffect } from 'react';
import { Container, Button, Jumbotron } from 'react-bootstrap';
import './help.css'

function Help({ updateStep,three,updateThree}) {

    useEffect(() => {
        updateStep(3);
    }

    )

  return (
    <div className="Help">
      <Container>
       
          <h1 className="title">Help</h1>
          
        <Jumbotron>
          <h1 className="question">Would you like any help with anything?</h1>
          <br className="my-3" />

          
           <input type="radio" value="Yes" name="choice" /> Yes
           <input type="radio" value="No" name="choice" /> No
            <br className="my-3" />
          <br className="my-3" />
          <br className="my-3" />

           <Button variant="primary" size="md" href="/help" id="start">Submit</Button>
          </Jumbotron>
      </Container>
    </div>
  );
}

export default Help;