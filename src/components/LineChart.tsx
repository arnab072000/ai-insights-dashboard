import React from 'react';
import { LineChart as ReLineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface Props {
  data: { date: string; average_time: number }[];
}

const LineChart: React.FC<Props> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ReLineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="average_time" stroke="#8884d8" />
      </ReLineChart>
    </ResponsiveContainer>
  );
};

export default LineChart;
