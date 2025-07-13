import { Crown } from "./Crown"
import Image from "next/image";

export const Hero = () => (
        <div className="grid items-center justify-center pt-12">
          <div className="relative">
          <div className="absolute -inset-12 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full blur opacity-75 animate-pulse" />

            <div className="grid mr-96">
              <Image src="/HAOCrown.jpeg" alt="Crown" width={250} height={250} className="rounded-full border-2 border-yellow-400 shadow-2xl shadow-yellow-400/50"/>
              <Image src="/ico.jpg" alt="Profile Picture" width={350} height={250} className="rounded-full border-2 border-green-200 absolute z-99 ml-72 mt-2"/>
            </div>

            <div className="text-center ml-96 absolute z-99">
              <p className="text-2xl font-bold font-dancing-script" style={{
                fontFamily: "var(--font-dancing-script)",
                background: "linear-gradient(to left, #50C878, #FFD700, #523d07)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                HAO ICO
              </p>
            </div>

            <div className="text-center mt-18 ml-6 absolute z-99">
              <p className="text-2xl font-bold font-dancing-script" style={{
                fontFamily: "var(--font-dancing-script)",
                background: "linear-gradient(to left, #50C878, #FFD700, #523d07)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Crafting Digital Excellence with Majestic Technologies
              </p>
            </div>
            
          </div>
        </div>
)