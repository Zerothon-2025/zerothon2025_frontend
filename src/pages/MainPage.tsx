import Banner from "../components/Banner";
import About from "../components/About";
import QandA from "../components/QandA";
import Support from "../components/Support";
import Footer from "../components/Footer";
import TimeTable from "../components/TimeTable";
import Info from "../components/Info";
import Reward from "../components/Reward";
import Howto from "../components/Howto";
import ApplyButton from "../components/ApplyButton.tsx";

function MainPage() {
  return (
    <div className="relative justify-center">
      <div className="flex flex-col justify-center items-center pt-5 pb-20 px-10 bg-[#050A1F] sm:px-20 sm:pt-5 sm:pb-20">
        <Banner />
        <About />
        <Howto />
        <Info />
        <TimeTable />
        <Reward />
        <QandA />
        <Support />
        <Footer />
      </div>
      <div className="fixed flex items-center justify-center w-full bottom-10 px-10 sm:px-20">
        <ApplyButton />
      </div>
    </div>
  );
}

export default MainPage;
