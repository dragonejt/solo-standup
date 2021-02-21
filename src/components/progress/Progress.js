import React, { useState, useEffect } from 'react';
import { Container, Button, Jumbotron } from 'react-bootstrap';
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
          <h1 className="title">What have you accomplished between the last standup meeting and now?</h1>
          <br className="my-3"/>
          <p className="lead subtitle">Like having a standup meeting, but just with yourself</p>
          <br className="my-3"/>
          <p>
            <Button variant="primary" size="lg" href="/progress" id="submit">Next -></Button>
          </p>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default Progress;