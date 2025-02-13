import { wineData } from "../constant/WineData"
import { useState } from "react"
import Button from "./Button";

export default function Slider() {
    const [index, setIndex] = useState<number>(0)

    const switchFunc = (change:number):void => {
        console.log(change);
        
         if(index === 0 && change === -1) return
         if(index === wineData.length-1 && change === 1) return
    
          setIndex(prev=>prev + change)
      }
  return <>
     <div className="flex justify-between items-center gap-10 ">
            {index !== 0 ? <img src={wineData[index-1].image} alt={wineData[index].name} onClick={()=>switchFunc(-1)} className="z-40 h-80 w-72 object-contain opacity-25 cursor-pointer"/>: <div className="h-80 w-72"></div>}
        <div className="flex justify-center items-center gap-10 ">
            <i className={"fa-regular fa-circle-left z-40 text-5xl cursor-pointer" + (index === 0?" text-gray-600": "") } onClick={()=>switchFunc(-1)}></i>
            <img src={wineData[index].image} alt={wineData[index].name} className="z-40 h-80 w-72 object-contain image-transition"/>
            <i className={"fa-regular fa-circle-right fa-circle-arrow-right z-40 text-5xl cursor-pointer" + (index === wineData.length-1?" text-gray-600": "")} onClick={()=>switchFunc(1)}></i>
        </div>
        {index !== wineData.length-1 ? <img src={wineData[index+1].image} alt={wineData[index].name}  onClick={()=>switchFunc(1)}    className="z-40 h-80 w-72 object-contain opacity-25 cursor-pointer"/>: <div className="h-80 w-72"></div>}
        </div>
      <div className="flex justify-center items-center">
        <div className=" flex flex-col justify-center items-center gap-3">
          <div className=" font-semibold text-2xl">{wineData[index].name}</div>
          <div className=" text-sm  ">{wineData[index].description}</div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3 mt-5">
        <Button style="text-white bg-[#b02c24] p-3 text-sm" text="Where To Buy"/>
        <Button style="text-white bg-black p-3 text-sm" text="Learn More"/>

      </div>
  </>
 
  
}
