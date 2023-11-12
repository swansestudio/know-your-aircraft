import { useState } from "react";
import { Header } from "./Header";




export const UserInput = ({ handleRequest }) => {

  const [userInput, setUserInput] = useState("boeing");
  const [limit, setLimit] = useState(3);

  const handleInput = (e) => {
    const userInput = e.target.value;
    setUserInput(userInput);
  };

  const submit = (e) => {
    e.preventDefault();
    handleRequest(userInput, limit);
  };

  const handlePredef = (e) => {
    setUserInput(e.currentTarget.id);
    handleRequest(e.currentTarget.id, limit);
  };

  const handleLimit = (e) => {
    const limit = e.target.value || 3;
    setLimit(parseInt(limit));
  };

  return (
    <div className="user-input">
      <form onSubmit={submit}>
        <input
          type="text"
          id="aircraftSelection"
          onChange={handleInput}
          value={userInput}
        />
        <input
          type="number"
          min="1"
          max="10"
          required
          value={limit}
          onChange={handleLimit}
        />
        <input type="submit" value="Submit" />
      </form>
      <div className="predef">
        <Header level={3} className="header">
          Select Predefined
        </Header>

        <div className="buttons">
          <div id="airbus" onClick={handlePredef}>
            <img src={require("../img/airbus.png")} alt="airbus" />
          </div>
          <div id="embraer" onClick={handlePredef}>
            <img src={require("../img/embraer.png")} alt="embraer" />
          </div>
          <div id="dassault" onClick={handlePredef}>
            <img src={require("../img/dassault.png")} alt="dassault" />
          </div>
          <div id="bombardier" onClick={handlePredef}>
            <img src={require("../img/bombardier.png")} alt="bombardier" />
          </div>
          <div id="gulfstream" onClick={handlePredef}>
            <img src={require("../img/golfstream.png")} alt="gulfstream" />
          </div>
          <div id="lockheed" onClick={handlePredef}>
            <img src={require("../img/lockhid.png")} alt="lockheed" />
          </div>
          <div id="beechcraft" onClick={handlePredef}>
            <img src={require("../img/beechcraft.png")} alt="beechcraft" />
          </div>
          <div id="piper" onClick={handlePredef}>
            <img src={require("../img/piper.png")} alt="piper" />
          </div>
          <div id="cessna" onClick={handlePredef}>
            <img src={require("../img/cessna.png")} alt="cessna" />
          </div>
        </div>
      </div>
    </div>
  );
};