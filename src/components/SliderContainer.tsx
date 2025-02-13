import Slider from "./Slider";

export default function SliderContainer() {
  
  

  return (
    <div className=" mt-24 h-[40rem] bg-gradient-to-r from-[#e4dca4] via-[#f4f4d4] to-[#e4dca4] relative overflow-hidden">
      <div className=" absolute bg-[#dee6ac] w-2xl h-40 rotate-[60deg] top-0 left-[6%] lg:left-[15%] xl:left-[30%] z-10"></div>
      <div className=" absolute triangle rotate-[30deg] -right-[20%] -top-12 lg:-right-[15%] xl:-right-[10%] z-10"></div>
      <div className=" flex items-center justify-between p-14">
        <div className="sancreek-regular text-2xl z-40 ">Our Products</div>
        <div className="text-sm z-40">Make every party a cocktail party. <span className=" underline underline-offset-8">Explore our vodkas</span></div>
      </div>
      <Slider />
      
    </div>

  )
}
