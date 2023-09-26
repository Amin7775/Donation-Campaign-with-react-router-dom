import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const Statistics = () => {
  // const [pieData,setPieData]=useState();
  let total = 12;
  let donated = JSON.parse(localStorage.getItem("donationDetails"));
  let count = donated.length;
  // total=total-count;

  let countPercent = parseFloat(((100 * count) / total).toFixed(1));
  console.log(countPercent);
  let totalPercent = 100 - countPercent;

  const colors = ["#FF444A", "#00C49F"];

  const data = [
    { name: "Total Donation", value: totalPercent },
    { name: "Your Donation", value: countPercent },
  ];
  
  return (
    <div className="flex h-[80vh] items-center justify-center">
      <div style={{ width: "100%", height: 700 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={data} fill="#8884d8" label>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Pie>
            <Tooltip></Tooltip>
            <Legend iconType="plainline" iconSize={100} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
