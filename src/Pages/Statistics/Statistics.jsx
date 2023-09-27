import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const Statistics = () => {
  // const [pieData,setPieData]=useState();
  const [count , setCount] = useState([]);
  let total = 12;
  let donatedJson = JSON.parse(localStorage.getItem("donationDetails"));
  let donated = donatedJson ||  [];

  useEffect(()=>{
    setCount(donated.length);
  },[donated.length])
  
  // total=total-count;
  // Calculation
  let countPercent = parseFloat(((100 * count) / total).toFixed(1));
  console.log(countPercent);
  let totalPercent = 100 - countPercent;


  // PIE CHART ESSENTIALS
  const COLORS = ["#FF444A", "#00C49F"];

  const data = [
    { name: "Total Donation", value: totalPercent },
    { name: "Your Donation", value: countPercent },
  ];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="flex h-[80vh] items-center justify-center">
      <div style={{ width: "100%", height: "100%" }}>
        
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={800}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={'80vw'}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend iconType="plainline" iconSize={100} />
        </PieChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;




{/* <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={data} fill="#8884d8" label>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Pie>
            <Tooltip></Tooltip>
            
          </PieChart>
        </ResponsiveContainer> */}