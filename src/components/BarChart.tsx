import React from 'react';
import { BarChart as ReBarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface Props {
  data: { [key: string]: number };
}

const BarChart: React.FC<Props> = ({ data }) => {
  const chartData = Object.keys(data).map((key) => ({ category: key, count: data[key] }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <ReBarChart data={chartData}>
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </ReBarChart>
    </ResponsiveContainer>
  );
};

export default BarChart;
