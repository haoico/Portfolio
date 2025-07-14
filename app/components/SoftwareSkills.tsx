import { Crown } from "./Crown"
import {
  Shield,
  Gem,
  Sparkles,
  CrownIcon as Scepter,
  Award,
  Zap,
  BarChart3,
  Cloud,
  Smartphone,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const skills = [
  {
    name: "Software Architecture",
    icon: Shield,
    description: "Designing scalable and maintainable software systems",
    skillIcon: "🏗️",
  },
  { name: "Product Design", icon: Gem, description: "Creating user-centered digital experiences", skillIcon: "🎨" },
  { name: "API Design", icon: Scepter, description: "Building robust and efficient APIs", skillIcon: "🔗" },
  {
    name: "Web Design",
    icon: Sparkles,
    description: "Crafting beautiful and functional web interfaces",
    skillIcon: "💻",
  },
  {
    name: "Process Automation",
    icon: Zap,
    description: "Optimizing workflows with intelligent automation",
    skillIcon: "⚙️",
  },
  { name: "Data Analysis", icon: BarChart3, description: "Extracting meaningful insights from data", skillIcon: "📊" },
  {
    name: "Data Insights Generation",
    icon: Award,
    description: "Transforming data into actionable intelligence",
    skillIcon: "💡",
  },
  {
    name: "Cloud Infrastructure",
    icon: Cloud,
    description: "Building scalable cloud-native solutions",
    skillIcon: "☁️",
  },
  {
    name: "App Development",
    icon: Smartphone,
    description: "Creating native and cross-platform applications",
    skillIcon: "📱",
  },
]

export default function Letter () {

  return (
        <div className="py-20 grid grid-cols-1">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold font-dancing-script h-24"
                style={{
                  fontFamily: "var(--font-dancing-script)",
                  background: "linear-gradient(to right, #02c809, #B8860B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"}}>
                Skills & Mastery
              </h2>
              <div className="flex justify-center mb-4 space-x-2">
                <Crown size={50} />
                <Crown size={50} />
                <Crown size={50} />
              </div>
              <p className="text-xl font-dancing-script" style={{ fontFamily: "var(--font-sans-serif)", color: "#B8860B" }}>
                Dominance across the Digital Realm
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-4xl">
              {skills.map((skill, index) => (
                  <Card key={index} className="bg-white/10 backdrop-blur-md border border-white/20 hover:border-yellow-400/50 hover:bg-white/15 transition-all duration-700 h-80 w-full max-w-sm shadow-xl shadow-black/20 hover:scale-105">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        <div className="p-3 rounded-full bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 mr-4 group-hover:from-yellow-400/40 group-hover:to-yellow-600/40 transition-all duration-300">
                          <skill.icon className="w-6 h-6 text-[#02c809]" />
                        </div>
                        <h3
                          className="text-2xl font-semibold group-hover:transition-colors duration-300 font-dancing-script"
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
                        <p className="group-hover:transition-colors duration-300 font-san-serif mb-4"
                          style={{
                            background: "#B8860B",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",}}>
                          {skill.description}
                        </p>
                        <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300 bg-[#02c809">
                          {skill.skillIcon}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
              ))}
            </div>
        </div>
  )
}