import Banner from "../components/Banner";
import About from "../components/About";
import QandA from "../components/QandA";
import Support from "../components/Support";
import Footer from "../components/Footer";
import TimeTable from "../components/TimeTable";
import Info from "../components/Info";


function MainPage() {
    return (
      <div className="flex flex-col justify-center items-center pt-5 pb-5 px-20 bg-black">
        <Banner/>
        <About/>
        <Info/>
        <TimeTable/>
        <QandA/>
        <Support/>
        <Footer/>
      </div>
    );
  }
  
  export default MainPage;
  