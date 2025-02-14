import { wineData } from "../constant/WineData";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import Arrow from "../assets/thin-arrow.png"

export default function Slider() {
    const [index, setIndex] = useState<number>(0);
    const [direction, setDirection] = useState<number>(1);

    const switchFunc = (change: number): void => {
        if ((index === 0 && change === -1) || (index === wineData.length - 1 && change === 1)) return;

        setDirection(change); 
        setIndex(prev => prev + change);
    };

    return (
        <>
            <div className="flex justify-between items-center gap-10">
                {index !== 0 ? (
                    <img
                        src={wineData[index - 1].image}
                        alt={wineData[index].name}
                        onClick={() => switchFunc(-1)}
                        className="z-40 h-80 w-72 object-contain opacity-25 cursor-pointer"
                    />
                ) : (
                    <div className="h-80 w-72"></div>
                )}

                <div className="flex justify-center items-center gap-3 md:gap-9 lg:gap-40 xl:gap-50">
                    {index !== 0 ?(
                        <div 
                            className={"border-2 w-20 h-20 rounded-full flex justify-center items-center rotate-180 cursor-pointer" + (index === 0 ? " text-gray-600" : "")}
                            onClick={() => switchFunc(-1)}>
                        <img src={Arrow} className="h-14 w-14"/>
                    </div>)
                    :<div className=" w-20 h-20"></div>}
            

                    <div className="relative w-72 h-80 overflow-hidden z-40 drop-shadow-2xl">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={index} 
                                src={wineData[index].image}
                                alt={wineData[index].name}
                                className="absolute w-full h-full object-contain z-40"
                                initial={{ x: direction * 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -direction * 100, opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            />
                        </AnimatePresence>
                    </div>
                    
                    {index !== wineData.length - 1 ?(
                        <div 
                            className={"border-2 w-20 h-20 rounded-full flex justify-center items-center cursor-pointer z-40" + (index === 0 ? " text-gray-600" : "")}
                            onClick={() => switchFunc(1)}>
                                <img src={Arrow} className="h-14 w-14 z-40"/>
                        </div>
                    ):<div className=" w-20 h-20"></div>}
                
                </div>

                {index !== wineData.length - 1 ? (
                    <img
                        src={wineData[index + 1].image}
                        alt={wineData[index].name}
                        onClick={() => switchFunc(1)}
                        className="z-40 h-80 w-72 object-contain opacity-25 cursor-pointer"
                    />
                ) : (
                    <div className="h-80 w-72"></div>
                )}
            </div>

            <div className="flex justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <motion.div key={index} className="text-3xl bebas-neue-regular mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                        {wineData[index].name}
                    </motion.div>
                    <motion.div key={index + "-desc"} className="text-sm text-center p-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                        {wineData[index].description}
                    </motion.div>
                </div>
            </div>

            <div className="flex justify-center items-center gap-3 mt-2">
                <Button style="text-white bg-[#b02c24] p-3 text-sm" text="Where To Buy" />
                <Button style="text-white bg-black p-3 text-sm" text="Learn More" />
            </div>
        </>
    );
}
    