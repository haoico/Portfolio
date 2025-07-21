import { Crown } from "./Crown"
import {
    Cigarette,
    Beer
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image";

const me = [
    {
        description: "Laser Focused",
        imgUrl: "/Me/HAOBusiness1.jpg",
    },
    {
        description: "Business First",
        imgUrl: "/Me/HAOBusiness2.jpg",
    },
    {
        description: "Agent Modus",
        imgUrl: "/Me/HAOBusiness4.jpg",
    },
    {
        description: "Flowers",
        imgUrl: "/Me/YAKUZA4.jpg",
    },
    {
        description: "Ghosts",
        imgUrl: "/Me/pinkAgent.jpg",
    },
    {
        description: "Dragon",
        imgUrl: "/Me/YAKUZA5.jpg",
    },
    {
        description: "Simple",
        imgUrl: "/Me/AvatarDeparture1.jpg",
    },
    {
        description: "Traditional",
        imgUrl: "/Me/BANDIDOS.jpg",
    },
    {
        description: "∞",
        imgUrl: "/Me/pink.jpg",
    },
]

export default function Me () {

  return (
        <div className="py-20 grid grid-cols-1">
            <div className="text-center mb-16">
                <div className="flex items-center justify-center">
                        <Image src="/Agent1.jpg" alt="DragonDeco4" width={223} height={315} className="border-2 border-yellow-400 shadow-2xl shadow-yellow-400/50 rounded-tl-2xl rounded-tr-2xl"/>
                </div>
                <div className="grid grid-cols-3">
                    <div className="flex items-center justify-center">
                        <Image src="/DragonImages/DragonDeco6.jpeg" alt="DragonDeco4" width={250} height={250} className="border-2 border-green-400 shadow-2xl shadow-green-400/50 rounded-tl-2xl rounded-bl-2xl"/>
                    </div>
                    <h2 className="text-5xl font-bold font-dancing-script h-24 mt-26"
                        style={{
                            fontFamily: "var(--font-dancing-script)",
                            background: "#523d07",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text"}}>
                        Me Myself & I <br></br>
                    </h2>
                    <div className="flex items-center justify-center">
                        <Image src="/PinkCat.jpeg" alt="DragonDeco4" width={250} height={250} className="border-2 border-pink-400 shadow-2xl shadow-pink-400/50 rounded-br-2xl rounded-tr-2xl"/>
                    </div>
                </div>

              <h2 className="text-2xl font-bold font-dancing-script h-18 mt-18"
                style={{
                    fontFamily: "var(--font-dancing-script)",
                    background: "#523d07",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"}}>
                https://github.com/haoico
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-4xl ml-10">
              {me.map((img, index) => (
                  <Card key={index} className="bg-white/10 backdrop-blur-md border border-white/20 hover:border-yellow-400/50 hover:bg-white/15 transition-all duration-700 h-80 w-full max-w-sm shadow-xl shadow-black/20 hover:scale-105">
                    <CardContent className="p-6 h-full flex flex-col">
                    <div className="grid grid-cols-1 place-items-center">
                        <div className="grid grid-cols-3 place-items-center">
                            <Cigarette className="mr-4" color="#02c809"/>
                            <h3 className="text-2xl font-semibold group-hover:transition-colors duration-300 font-dancing-script text-center"
                                style={{
                                    fontFamily: "var(--font-dancing-script)",
                                    background: "linear-gradient(to left, #e00a0a, #02c809, #FFD700, #B8860B)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}>
                                {img.description}
                            </h3>
                            <Beer className="ml-4" color="#faf8eb"/>
                        </div>
                        <div className="flex items-center my-4">
                          <img src={img.imgUrl} alt="alt" width={666} height={666} className="rounded-2xl" />
                        </div>
                    </div>
                    </CardContent>
                  </Card>
              ))}
            </div>
        </div>
  )
}