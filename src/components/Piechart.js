import React from "react";
import { Tooltip, PieChart, Pie, Label } from "recharts";

function Piechart({ data }) {
  return (
    <PieChart width={600} height={600}>
      <Pie
        data={data}
        dataKey="apple"
        cx={100}
        cy={200}
        outerRadius={60}
        fill="#E32636"
        label
      >
        <Label value="apple" position="outside" />
      </Pie>
      <Pie
        data={data}
        dataKey="orange"
        cx={400}
        cy={200}
        innerRadius={70}
        outerRadius={90}
        fill="#FF7E00"
        label
      >
        <Label value="orange" position="center" />
      </Pie>
      <Tooltip />
    </PieChart>
  );
}

export default Piechart;
