import { Chart } from "react-google-charts";
import './App.css';

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 9],
  ["Eat", 3],
  ["Commute", 3],
  ["Watch TV", 4],
  ["Sleep", 8],
];

export const options = {
  title: "My Daily Activities",
};

function App() {

  return (
    <div className="App">
      <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    </div>
  );
}

export default App;
