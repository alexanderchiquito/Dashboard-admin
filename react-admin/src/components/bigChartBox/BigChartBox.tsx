import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from "recharts";
import "./bigChartBox.scss";

const data = [
  {
    name: "2014",
    desertores: 3,
    periodo: 1,
    total: 8,
  },
  {
    name: "2015",
    desertores: 8,
    periodo: 1,
    total: 11,
  },
  {
    name: "2016",
    desertores: 10,
    periodo: 1,
    total: 22,
  },
  {
    name: "2017",
    desertores: 4,
    periodo: 2,
    total: 12,
  },
  {
    name: "2018",
    desertores: 7,
    periodo: 1,
    total: 12,
  },
  {
    name: "2019",
    desertores: 8,
    periodo: 1,
    total: 12,
  },
  {
    name: "2020",
    desertores: 2,
    periodo: 1,
    total: 2,
  },
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Deserción por año 2014-2020</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="total"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="periodo"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="desertores"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
