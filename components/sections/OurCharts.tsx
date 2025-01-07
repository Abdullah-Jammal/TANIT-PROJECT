import { Barchart } from "../charts/BarChart";
import { Piechart } from "../charts/PieCharts";
import Title from "../shared/Title";

const OurCharts = () => {
  return (
    <div className="container">
      <Title title="Our charts" />
      <div className="flex justify-between items-center mt-20 max-lg:flex-col max-lg:gap-8 gap-12">
        <Barchart />
        <Piechart />
      </div>
    </div>
  );
};

export default OurCharts;
