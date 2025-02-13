import Header from "./components/Header";
import WelcomeImage from "./assets/WelocmeCoctail.jpg"
import WineSearch from "./components/WineSearch";
import SliderContainer from "./components/SliderContainer";

export default function App() {
  return <>
    <Header />
    <div className=" w-full h-[88vh] relative ">
      <img src={WelcomeImage} alt="Welcome image" className=" object-cover w-full h-full opacity-90" />
      <h1 className=" absolute satisfy-regular text-5xl top-[25%] flex items-center justify-center w-full text-white">Welkom to Coctail</h1>

        <WineSearch />
      <SliderContainer />
    </div>
  </>
    
  
}

