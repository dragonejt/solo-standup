import React from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './help.css'


function Help({ updateStep, three, updateThree }) {


  function changeThree(newThree) {
    updateThree(newThree);
    window.localStorage.setItem("three", newThree);
  }

  return (
    <div className="Help">
      <br />
      <h1>Are you stuck? Do you need help?</h1>
      <br />
      <h2>Remember to ask for help from a mentor or a Senior Engineer if you are blocked.</h2>
      {/* <Button variant="primary" onClick={() => changeThree(1)}>Yes</Button> */}

      {/* <a href="()"><div className="button_yes1 button_yes2">Yes</div></a> */}

      {/* <Button variant="primary" onClick={() => changeThree(0)}>No</Button> */}
      {/* <a href="()"><div className="button_no1 button_no2">No</div></a> */}
      <br />
      <br />
      {/* <Button variant="primary" href="/done" >Next</Button> */}

      <a href="/done"><div className="button_1 button_2">Done </div></a>
    </div>
  );

}

export default Help;