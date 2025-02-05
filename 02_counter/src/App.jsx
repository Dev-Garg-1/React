import { useState } from "react";
import "./App.css";

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 0

  const addValue = () => {
    console.log("clicked", counter);
    counter = counter + 1;

    setCounter(counter);
  }

  const decValue = () => {

    counter = counter - 1;
    if(counter < 0) {
      {counter};
      counter = 0;
    }else {
      setCounter(counter)
    }

  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value : {counter}</h2>

      <button 
      onClick={addValue}
      >Add value : {counter}</button>
      <br />
      <br />
      <button
      onClick={decValue}
      >dec value: {counter}</button>

      <p>value : {counter}</p>
    </>
  );
}

export default App;
