import { Crown } from "./Crown"
import {
    Flower
} from "lucide-react"

export const Header = () => (
    <div>
        <div className="grid grid-cols-3 place-items-center justify-items-center gap-3 mt-12 mb-6">
          <div className="flex justify-center mr-28">
            <Crown size={60} /> 
          </div>
              <h2 className="text-5xl font-bold font-dancing-script h-24 text-center mt-12"
                style={{
                  fontFamily: "var(--font-dancing-script)",
                  background: "linear-gradient(to right, #02c809, #FFD700, #e00a0a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"}}>
                Portfolio
              </h2>
          <div className="flex justify-center ml-28">
            <Crown size={60} />  
          </div>
        </div>
    </div>
)