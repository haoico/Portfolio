import { Card, CardContent } from "@/components/ui/card"
import {
  Book,
  SubscriptIcon
} from "lucide-react"
import Image from "next/image"
export default function BookSection () {

    return (
      <div className="py-20 px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 font-dancing-script"
              style={{
                fontFamily: "var(--font-dancing-script)",
                background: "linear-gradient(to right, #02c809, #B8860B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"}}>
              Favorite Software Book
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 justify-items-center">
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:border-yellow-400/50 hover:bg-white/15 transition-all duration-700 h-fit w-fit shadow-xl shadow-black/20 hover:scale-105">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-full bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 mr-4 group-hover:from-yellow-400/40 group-hover:to-yellow-600/40 transition-all duration-300">
                          <Book className="w-6 h-6 text-[#02c809]" />
                      </div>
                      <h3 className="text-2xl font-semibold group-hover:transition-colors duration-300 font-dancing-script"
                        style={{
                          fontFamily: "var(--font-dancing-script)",
                          background: "linear-gradient(to right, #02c809, #B8860B)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}>
                        Software Architecture and Decision Making
                      </h3>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center text-center">

                      <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        <Image src="/software-architecture-book.jpg" alt="alt" width={400} height={600} className="rounded-2xl" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
          </div>
      </div>
    )
}