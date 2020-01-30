import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

function Barchart({ data }) {
  return (
    <BarChart
      width={700}
      height={500}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="apple" stackId="a" fill="#E32636" />
      <Bar dataKey="orange" stackId="a" fill="#FF7E00" />
    </BarChart>
  );
}

export default Barchart;
