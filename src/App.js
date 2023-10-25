import React from "react";
import data from "./data";
import { useState } from "react";
import Tours from "./Components/Tours";
const App = () => {
  const [tours, setTours] = useState(data);

  function RemoveTour(id){
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }
  if(tours.length === 0){
    return(
      <div className="Refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>Refresh</button>
      </div>
    );
  }
  return (
    <div className="App">
      <Tours tours = {tours} RemoveTour = {RemoveTour}></Tours>
    </div>
  );
}

export default App;
