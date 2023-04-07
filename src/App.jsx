import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./Button";

function App() {

    const [count1,setCount1] = useState(0);
    const handleClick1 = ()=>{ setCount1(count1 + 1)}
    const handleReset1 = ()=>{ setCount1(0) }

  return (
    <div className="content-principal">

      <div>
        <Button name="Apretame desde un modulo"></Button>
      </div>

      <div className="contador">
        <h1>{count1}</h1>
        <button className="bt-1" onClick={handleClick1}>
          Apretame desde la app principal
        </button>
        <button clasName="bt-1" onClick={handleReset1}>
          Reset
        </button>
      </div>

    </div>
  );
}

export default App;
