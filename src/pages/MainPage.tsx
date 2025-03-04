import Banner from "../components/Banner";
import About from "../components/About";
import QandA from "../components/QandA";
import Footer from "../components/Footer";


function MainPage() {
    return (
      <div className="flex flex-col justify-center items-center pt-5 pb-5 px-20 bg-black">
        <Banner/>
        <About/>
        <QandA/>
        <Footer/>
      </div>
    );
  }
  
  export default MainPage;
  