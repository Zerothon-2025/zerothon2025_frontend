import Banner from "../components/Banner";
import About from "../components/About";
import QandA from "../components/QandA";
import Support from "../components/Support";
import Footer from "../components/Footer";
import TimeTable from "../components/TimeTable";
import Info from "../components/Info";
import Reward from "../components/Reward";
import ApplyButton from "../components/ApplyButton";
import Howto from "../components/Howto";

function MainPage() {
    return (
      <div className="flex flex-col justify-center items-center pt-5 pb-5 px-20 bg-[#050A1F]">
        <Banner/>
        <ApplyButton/>
        <About/>
        <Howto/>
        <Info/>
        <TimeTable/>
        <Reward/>
        <QandA/>
        <Support/>
        <Footer/>
      </div>
    );
  }
  
  export default MainPage;
  