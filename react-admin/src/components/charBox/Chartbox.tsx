import { Link } from "react-router-dom";
import "./chartBox.scss";
import { ResponsiveContainer, Bar, BarChart, Tooltip } from "recharts";

type Props = {
  color: string;
  // icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  genero: string;
  percentage: number;
  chartData: object[];  
};

const Chartbox = (props: Props) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <h1>{props.title}</h1>
        </div>
        <h1>{props.number}</h1>
        <Link to="/" style={{ color: props.color }}>
          Ver detalles
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
            <Bar dataKey={props.genero} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{ color: props.percentage < 60 ? "tomato" : "limegreen" }}
          >
            {props.percentage}%
          </span>
          <span className="duration">% desertores</span>
        </div>
      </div>
    </div>
  );
};

export default Chartbox;
