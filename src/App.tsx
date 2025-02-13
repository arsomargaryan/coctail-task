import Header from "./components/Header";
import WelcomeImage from "./assets/WelocmeCoctail.jpg"

export default function App() {
  return <>
    <Header />
    <div className=" w-full h-[85vh] relative">
      <img src={WelcomeImage} alt="Welcome image" className=" object-cover w-full h-full opacity-90" />
        <h1 className=" absolute satisfy-regular text-5xl top-[30%] left-[33%] lg:left-[37%] xl:left-[40%] text-white">Welkom to Coctail</h1>
    </div>
  </>
    
  
}

