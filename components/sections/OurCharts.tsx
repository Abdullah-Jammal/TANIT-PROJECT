import { Barchart } from "../charts/BarChart";
import { Piechart } from "../charts/PieCharts";
import Title from "../shared/Title";

const OurCharts = () => {
  return (
    <div className="container pt-8">
      <Title
        title="Our charts"
        style="text-left text-2xl font-medium max-sm:text-center"
      />
      <div className="flex justify-between items-center mt-6 max-lg:flex-col max-lg:gap-8 gap-12">
        <Barchart />
        <Piechart />
      </div>
    </div>
  );
};

export default OurCharts;
