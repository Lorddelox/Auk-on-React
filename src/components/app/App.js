import React from 'react';
import './App.css';
import { Alert } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AukListItems from "../aukListItem/aukListItems";
function App() {
  console.log("hello");
  return (

    <div className="App  bg-info">
      <header className="header">
        <Alert color="dark">
          Помойный Аукцион
        </Alert>
      </header>
      <AukListItems />
    </div>
  );
}

export default App;
