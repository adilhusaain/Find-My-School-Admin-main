import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';


// Generate Sales Data
function createData(time, user) {
  return { time, user };
}

const data = [
  createData('00:00', 0),
  createData('03:00', 1),
  createData('06:00', 5),
  createData('09:00', 10),
  createData('12:00', 15),
  createData('15:00', 20),
  createData('18:00', 24),
  createData('21:00', 30),
  createData('24:00', undefined),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
     
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Number of Users
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="user" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}