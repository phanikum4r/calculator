import {
  useState,
  useRef
} from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);
  function handlechange(e) {
    inputRef.current = e.target
  }
  function plus(e) {
    if (resultRef == null) {
      resultRef.current = result
    }
    else {
      e.preventDefault();
      setResult((result) => result + Number(inputRef.current.value));
      resultRef.current = result
    }
  };

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
    resultRef.current = result
  };

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
    resultRef.current = result
  };

  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
    resultRef.current = result
  };

  function resetInput(e) {
    inputRef.current.value=0
  };

  function resetResult(e) {
    e.preventDefault();
    setResult((result) => result * 0);
    resultRef.current = 0
  };

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>
          {result}
        </p>
        <input
          onChange={handlechange}
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>add</button>
        <button onClick={minus}>minus</button>
        <button onClick={times}>times</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>

      </form>
    </div>
  );
}

export default App;
