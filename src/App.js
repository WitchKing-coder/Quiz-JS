import './App.css';
import Counter from "./components/UI/counter/counter";
import {useState} from "react";

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Counter
      count={count}
      setCount={setCount}
      />
    </div>
  );
}

export default App;
