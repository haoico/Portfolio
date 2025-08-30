import { Crown } from "./Crown"
import {
  CrownIcon as Scepter,
  Network,
  Code,
  ChartArea
} from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function WorkInsights () {

    const workInsights = [
        {
            name: "Graph-Schema",
            icon: Network,
            description: "Drafted up a Graph, for LifeCycles in the Context of Enivronmental Product Declaration",
            imagePath: "/workInsights/EpdGraphSchema.jpg",
        },
        {
            name: "Graph-Implementation",
            icon: Code,
            description: "Implemented Data-Transformations into the Graph, following Clean-Code Practices",
            imagePath: "/workInsights/graphCode.jpg",
        },
        {
            name: "Graph-Visulization",
            icon: ChartArea,
            description: "Visualized Graph with G.V() Tool, to show off it's beauty",
            imagePath: "/workInsights/graphModified.jpg",
        },
    ]

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
              Work Insights - StartUp
            </h2>
            <div className="flex justify-center mb-4 space-x-2">
              <Crown size={50} />
              <Crown size={50} />
              <Crown size={50} />
            </div>
            <p className="text-xl font-dancing-script" style={{ fontFamily: "var(--font-sans-serif)", color: "#B8860B" }}>
              Mathematical foundations for digital innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {workInsights.map((skill, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-md border border-white/20 hover:border-yellow-400/50 hover:bg-white/15 transition-all duration-700 h-150 w-full max-w-sm shadow-xl shadow-black/20 hover:scale-105">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-full bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 mr-4 group-hover:from-yellow-400/40 group-hover:to-yellow-600/40 transition-all duration-300">
                          <skill.icon className="w-6 h-6 text-[#02c809]" />
                      </div>
                      <h3 className="text-2xl font-semibold group-hover:transition-colors duration-300 font-dancing-script"
                        style={{
                          fontFamily: "var(--font-dancing-script)",
                          background: "linear-gradient(to right, #02c809, #B8860B)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}>
                        {skill.name}
                      </h3>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center text-center">
                      <p
                        className="group-hover:transition-colors duration-300 font-san-serif mb-4"
                        style={{
                          background: "#B8860B",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {skill.description}
                      </p>
                      <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        <Image className="rounded-2xl" src={skill.imagePath} alt="image" width={500} height={500} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
            ))}
          </div>
      </div>
    )
}