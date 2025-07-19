import { Crown } from "./Crown"
import Image from "next/image";

export const Hero = () => (
        <div className="grid items-center justify-center pt-2">
          <div className="relative">
          <div className="absolute -inset-12 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full blur opacity-75 animate-pulse" />

            <div className="grid mr-96">
              <Image src="/HAOCrown.jpeg" alt="Crown" width={250} height={250} className="rounded-full border-2 border-yellow-400 shadow-2xl shadow-yellow-400/50"/>
              <Image src="/ICO.jpg" alt="Profile Picture" width={220} height={250} className="rounded-full border border-[#523d07] absolute z-99 ml-70 mb-18"/>
              <div className="text-center ml-130 mt-20 absolute z-99">
                <p className="text-2xl font-bold font-dancing-script" style={{
                  fontFamily: "var(--font-dancing-script)",
                  background: "#523d07",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                HAO ICO ANTHONY Ryū-竜
              </p>
            </div>
            </div>

            <div className="text-center mt-18 ml-24 absolute z-99">
              <p className="text-2xl font-bold font-dancing-script" style={{
                fontFamily: "var(--font-dancing-script)",
                background: "#523d07",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Chinese Mexican Japanese American
              </p>
            </div>
            
          </div>
        </div>
)