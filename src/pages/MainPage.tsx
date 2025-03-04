import Banner from "../components/Banner";
import About from "../components/About";
import QandA from "../components/QandA";


function MainPage() {
    return (
      <div className="flex-column justify-center pt-5 pb-5 px-20 bg-black">
        <Banner/>
        <About/>
        <QandA/>
      </div>
    );
  }
  
  export default MainPage;
  