import { useState } from "react";
import "./Bai2.css"; // Import file CSS

const Bai2 = () => {
  const [money, setMoney] = useState("");
  const [rate, setRate] = useState("");
  const [goal, setGoal] = useState("");
  const [tableData, setTableData] = useState([]);

  const handleClick = () => {
    let year = new Date().getFullYear();
    let data = [];
    let currentMoney = parseFloat(money);

    while (currentMoney < parseFloat(goal)) {
      let newMoney = Math.floor(currentMoney * (1 + parseFloat(rate) / 100));
      data.push({ year: ++year, money: currentMoney, rate: rate, endYear: newMoney });
      currentMoney = newMoney;
    }

    setTableData(data);
  };

  return (
    <div className="container">
      <h2>Investment Calculator</h2>
      <img src="/anh'.jpg" alt="" />
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
      <button onClick={handleClick}>Click</button>

      {tableData.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Money</th>
              <th>Rate</th>
              <th>End Year</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.year}</td>
                <td>{row.money}</td>
                <td>{row.rate}</td>
                <td>{row.endYear}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Bai2;
