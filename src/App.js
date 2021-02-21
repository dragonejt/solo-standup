import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Navi from './components/navi/Navi';
import Landing from './components/landing/Landing';
import Progress from './components/progress/Progress';

function App() {
  const [step, setStep] = useState(2);
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState(0);
  const updateStep = (stepNumber) => {
    setStep(stepNumber);
  }
  return (
    <div className="App">
      <Navi step={step} updateStep={updateStep} />
      <Router>
        <Switch>
          <Route path="/progress">
            <Progress updateStep={updateStep} />
          </Route>
          <Route path="/">
            <Landing updateStep={updateStep} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
