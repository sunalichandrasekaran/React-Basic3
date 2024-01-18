import { useState } from "react";
import Result from "./Result";

const numb = Math.floor(Math.random() * 10 + 1);

function App() {
  const [numbers, setNumbers] = useState("");
  return (
    <div>
      <p>Guess the number 1 to 10 , {numb}</p>
      <input
        id="number"
        name="number"
        onChange={(e) => {
          setNumbers(e.target.value);
        }}
      />
      <Result numb={numb} numbers={numbers} />
    </div>
  );
}

export default App;
