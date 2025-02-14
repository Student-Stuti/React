import { useState } from "react";

function App() {
  // let counter = 15;
  let [counter, setCounter] = useState(15);

  let addValue = () => {
    counter = counter + 1;
    //console.log(counter);
    setCounter(counter);
  };

  let removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Add and remove value </h1>
      <h2>Counter value :{counter} </h2>

      <button onClick={addValue}>Add Value{counter}</button>
      <br></br>
      <button onClick={removeValue}>Remove Value {counter} </button>
    </>
  );
}

export default App;
