import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Jan", students: 30 },
  { name: "Feb", students: 45 },
  { name: "Mar", students: 60 },
  { name: "Apr", students: 40 },
];

const ChartsDemo = () => {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="students" fill="#8884d8" />
    </BarChart>
  );
};

export default ChartsDemo;
