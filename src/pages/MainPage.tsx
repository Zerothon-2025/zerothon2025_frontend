import Banner from "../components/Banner";
import About from "../components/About";
import QandA from "../components/QandA";
import Support from "../components/Support";
import Footer from "../components/Footer";


function MainPage() {
    return (
      <div className="flex flex-col justify-center items-center pt-5 pb-5 px-20 bg-black">
        <Banner/>
        <About/>
        <QandA/>
        <Support/>
        <Footer/>
      </div>
    );
  }
  
  export default MainPage;
  