import MyHeader from "./MyHeader/MyHeader";
import AboutMe from "./AboutMe/AboutMe";
import Footer from "./Footer/Footer";
import Carousel from "./Carousel/Carousel";

export default function Home() {
  return (
        <div className="min-vh-100 d-flex flex-column bg-dark-subtle">
          <MyHeader />
          <Carousel/> 
             <AboutMe />  
          <Footer />
        </div>


  );
}
