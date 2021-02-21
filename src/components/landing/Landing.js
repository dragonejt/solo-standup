import React, { useState, useEffect } from 'react';
import { Container, Button, Jumbotron } from 'react-bootstrap';
import './landing.css'


function Landing({ updateStep }) {

  useEffect(() => {
    updateStep(0);
  }

  )
  return (
    <div className="Landing">
      <Container>
        <Jumbotron>
          <h1 className="title">Solo Standup</h1>
          <br className="my-3"/>
          <p className="lead subtitle">Like having a standup meeting, but just with yourself</p>
          <br className="my-3"/>
          <p>
            <Button variant="primary" size="lg" href="/progress" id="start">Start Your Standup</Button>
          </p>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default Landing;