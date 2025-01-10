import MainSectionTitle from "../header/mainSectionTitle";
import MainSectionImages from "../header/mainSectionImages";

const MainSection = () => {
  return (
    <main className="container flex items-center justify-between h-[100vh] max-lg:justify-center">
      <MainSectionTitle />
      <MainSectionImages />
    </main>
  );
};

export default MainSection;
