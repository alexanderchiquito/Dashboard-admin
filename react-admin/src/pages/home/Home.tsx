import BarCharBox from "../../components/barChartBox/BarCharBox";
import BarCharBox8 from "../../components/barChartBox/BarCharBox8";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import Chartbox2 from "../../components/charBox/charBox2";
import Chartbox5 from "../../components/charBox/charBox5";
import Chartbox from "../../components/charBox/Chartbox";
import Chartbox3 from "../../components/charBox/chartBox3";
import PieChartBox from "../../components/pieCardBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import {
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
  barChartBoxRevenue,
  barChartBoxVisit,
} from "../../data";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <Chartbox2 {...chartBoxUser} />
      </div>
      <div className="box box3">
        <Chartbox3 {...chartBoxProduct} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <Chartbox5 {...chartBoxConversion} />
      </div>
      <div className="box box6">
        <Chartbox {...chartBoxRevenue} />
      </div>
      <div className="box box7">
        <BigChartBox />
      </div>
      <div className="box box8">
        <BarCharBox8 {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarCharBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default Home;
