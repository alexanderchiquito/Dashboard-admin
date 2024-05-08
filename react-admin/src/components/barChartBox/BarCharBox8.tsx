import { ResponsiveContainer, BarChart, Bar, Tooltip } from "recharts";
import "./barCharBox.scss";

type Props = {
  title: string;
  nivel: string,
  color: string;
  dataKey: string;
  chartData: object[];
};

const BarCharBox8 = (props: Props) => {
  return (
    <div className="barCharBox">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
            <Bar dataKey={props.nivel} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarCharBox8;
