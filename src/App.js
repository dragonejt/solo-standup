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
import Help from './components/help/Help';
import Done from './components/done/Done';

function App() {
  //0 is homepage
  //1 is progress (What have you accomplished?)
  //2 is whatsnext (What are you working on next?)
  //3 is help (Do you need any help?)
  //4 is done (Done! Send an email)
  const [step, setStep] = useState(0);
  const [one, setOne] = useState("Hello");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState(); //0 is no, 1 is yes
  const updateStep = (stepNumber) => {
    setStep(stepNumber);
  }
  const updateOne = (one) => {
    setOne(one);
  }
  const updateTwo = (two) => {
    setTwo(two);
  }
  const updateThree = (three) => {
    setThree(three)
  }
  return (
    <div className="App">
      <Navi step={step} updateStep={updateStep} />
      <Router>
        <Switch>
          <Route path="/done">
            <Done updateStep={updateStep} three={three} updateThree={updateThree} />
          </Route>
          <Route path="/progress">
            <Progress updateStep={updateStep} one={one} updateOne={updateOne} />
          </Route>
          <Route path="/help">
            <Help updateStep={updateStep} three={three} updateThree={updateThree} />
          </Route>
          <Route path="/">
            <Landing updateStep={updateStep}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
