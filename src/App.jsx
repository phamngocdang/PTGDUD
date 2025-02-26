import { useState } from "react";
import "./App.css"; // File CSS

function App() {
  const [money, setMoney] = useState("");
  const [rate, setRate] = useState("");
  const [goal, setGoal] = useState("");

  return (
    <div className="container">
      <h2>Investment Calculator</h2>
      <input
        type="number"
        placeholder="Input Your Invest Money"
        value={money}
        onChange={(e) => setMoney(e.target.value)}
      />
      <input
        type="number"
        placeholder="Input Rate"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
      />
      <input
        type="number"
        placeholder="Input your Goal"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      <p>Invest Money: {money}</p>
      <p>Rate: {rate}%</p>
      <p>Goal: {goal}</p>
    </div>
  );
}

export default App;
