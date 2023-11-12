import React from "react";
import { useState } from "react";

import "./App.css";

import { Aircrafts } from "./components/Aircrafts";
import { NoSearchResults } from "./components/NoSearchResults";
import { LetsSearch } from "./components/LetsSearch";
import { ErrorGettingData } from "./components/ErrorGettingData";
import { Header } from "./components/Header";
import { UserInput } from "./components/UserInput";

const REQ = process.env.REACT_APP_REQ;

function App() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(200);
  const [isVirgin, setIsVirgin] = useState(true);

  /* Fetch serverless */
  const handleRequest = async (searchString, limit) => {
    const url = REQ + `manufacturer=${searchString}&limit=${limit}`;

    try {
      const resp = await fetch(url);

      setStatus(resp.status);
      const data = await resp.json();
      setData(data);
      setIsVirgin(false);
      
      
    } catch (error) {
      const message = {
        message: "Frontend error.",
        error: error.message,
      };

      setIsVirgin(false);
      setData(message);
      setStatus(500);
    }
  };
  
  


  let content = <LetsSearch />;

  if (!isVirgin && status === 200) {
    content = <Aircrafts aircrafts={data} />;
  }

  if (!isVirgin && status === 200 && !data.length) {
    content = <NoSearchResults />;
  }

  if (!isVirgin && status !== 200) {
    content = <ErrorGettingData status={status} error={data} />;
  }

  return (
    <div>
      <div className="App">
        <Header className="header">Know Your Aircraft Technical</Header>

        <UserInput handleRequest={handleRequest} />

        <div className="data">{content}</div>
      </div>
    </div>
  );
}

export default App;
