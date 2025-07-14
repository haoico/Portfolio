import { Crown } from "./Crown"
import {
    Flower
} from "lucide-react"

export const Header = () => (
    <div>
        <div className="grid grid-cols-3 gap-24 pt-12 pl-12">
          <Crown size={60} />        <Crown size={60} />        <Crown size={60} />
        </div>
        <div className="grid grid-cols-3 place-items-center justify-items-center gap-3 mt-12 mb-6">
          <div className="grid grid-cols-3 place-items-center gap-3">
          <Flower fill="#c44646" color="#9310cc"/>
          <Flower fill="#f8e344" color="#9310cc"/>
          <Flower fill="#389156" color="#9310cc"/>
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
          <div className="grid grid-cols-3 place-items-center gap-3">
            <Flower fill="#389156" color="#9310cc"/>
            <Flower fill="#f8e344" color="#9310cc"/>
            <Flower fill="#c44646" color="#9310cc"/>
          </div>
        </div>
    </div>
)