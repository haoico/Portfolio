import { Crown } from "./Crown"
import Image from "next/image";

export const Hero = () => (
        <div className="grid items-center justify-center pt-2">
          <div className="relative">
          <div className="absolute -inset-12 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full blur opacity-75 animate-pulse h-[350px]" />

            <div className="grid grid-cols-3 w-[777px]">
              <Image src="/HAOCrown.jpeg" alt="Crown" width={250} height={250} className="rounded-full border-2 border-yellow-400 shadow-2xl shadow-yellow-400/50 ml-3"/>
              <Image src="/ICO.jpg" alt="Profile Picture" width={220} height={250} className="rounded-full border border-[#523d07] ml-5 z-99 mb-18"/>
              <Image src="/CityMask.jpeg" alt="City Mask" width={250} height={250} className="rounded-full border-2 border-yellow-400 shadow-yellow-400/50"/>
            </div>

            <div className="text-center pr-8 w-[800px] absolute z-99 grid grid-cols-2">
              <p className="text-2xl font-bold font-dancing-script" style={{
                fontFamily: "var(--font-dancing-script)",
                background: "#523d07",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                HAO ICO ANTHONY <br></br>Ryū-竜
              </p>
              <p className="text-2xl font-bold font-dancing-script" style={{
                fontFamily: "var(--font-dancing-script)",
                background: "#523d07",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Chinese American Japanese Netherlands
              </p>
            </div>
            
          </div>

        </div>
)