import React from "react";
import { Tooltip, PieChart, Pie, Label } from "recharts";

function Piechart({ data }) {
  return (
    <PieChart width={800} height={600}>
      <Pie
        data={data}
        dataKey="apple"
        cx={200}
        cy={200}
        outerRadius={60}
        fill="#E32636"
        label={({
          cx,
          cy,
          midAngle,
          innerRadius,
          outerRadius,
          value,
          index
        }) => {
          const RADIAN = Math.PI / 180;
          const radius = 25 + innerRadius + (outerRadius - innerRadius);
          const x = cx + radius * Math.cos(-midAngle * RADIAN);
          const y = cy + radius * Math.sin(-midAngle * RADIAN);

          return (
            <text
              x={x}
              y={y}
              fill="#E32636"
              textAnchor={x > cx ? "start" : "end"}
              dominantBaseline="central"
            >
              {data[index].name} ({value})
            </text>
          );
        }}
      >
        <Label value="APPLE" position="center" />
      </Pie>
      <Pie
        data={data}
        dataKey="orange"
        cx={600}
        cy={200}
        innerRadius={70}
        outerRadius={90}
        fill="#FF7E00"
        label={({
          cx,
          cy,
          midAngle,
          innerRadius,
          outerRadius,
          value,
          index
        }) => {
          const RADIAN = Math.PI / 180;
          const radius = 25 + innerRadius + (outerRadius - innerRadius);
          const x = cx + radius * Math.cos(-midAngle * RADIAN);
          const y = cy + radius * Math.sin(-midAngle * RADIAN);

          return (
            <text
              x={x}
              y={y}
              fill="#FF7E00"
              textAnchor={x > cx ? "start" : "end"}
              dominantBaseline="central"
            >
              {data[index].name} ({value})
            </text>
          );
        }}
      >
        <Label value="ORANGE" position="center" />
      </Pie>
      <Tooltip />
    </PieChart>
  );
}

export default Piechart;
