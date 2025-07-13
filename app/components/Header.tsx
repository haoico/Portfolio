import { Crown } from "./Crown"

export const Header = () => (
    <div>
        <div className="grid grid-cols-3 gap-24 pt-12">
          <Crown size={60} />        <Crown size={60} />        <Crown size={60} />
        </div>
        <div>
          <p className="text-5xl font-bold font-dancing-script pt-12 h-34 text-center" style={{
                fontFamily: "var(--font-dancing-script)",
                background: "linear-gradient(to right, #50C878, #FFD700, #523d07",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
           Portfolio-Page
          </p>
        </div>
    </div>
)