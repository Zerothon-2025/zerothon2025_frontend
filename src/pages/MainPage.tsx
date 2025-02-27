import Banner from "../components/Banner";
import About from "../components/About";


function MainPage() {
    return (
      <div className="flex-column justify-center h-screen pt-5 px-20 bg-[rgba(45, 170, 219, .3]">
        <Banner/>
        <About/>
      </div>
    );
  }
  
  export default MainPage;
  