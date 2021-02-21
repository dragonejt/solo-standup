import React, { useState, useEffect } from 'react';
import { Container, Button, Jumbotron } from 'react-bootstrap';


function Landing({ updateStep }) {

  useEffect(() => {
    updateStep(0);
  }

  )
  return (
    <div className="Landing">
      <Container>
        <Jumbotron>
          <h1>Solo Standup</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default Landing;