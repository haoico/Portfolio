import { Crown } from "./Crown"

export default function Letter (){

  return (
      <div className="pb-10 px-4 relative ml-2">
          <div className="text-center mb-12">
            <h2
              className="text-5xl font-bold text-yellow-400 mb-4 font-dancing-script"
              style={{ fontFamily: "var(--font-dancing-script)" }}>
              Application Letter
            </h2>
            <div className="flex justify-center mb-4 space-x-2">
              <Crown size={40} />
              <Crown size={40} />
              <Crown size={40} />
            </div>
          </div>

            <div
              className="px-8 py-4 rounded-lg shadow-2xl relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 hover:border-yellow-400/50">
              {/* Decorative corners */}
              <div className="grid grid-cols-12 ml-2">
                {Array.from({ length: 12 }).map((_, index) => (
                    <Crown key={index} size={25} className="text-yellow-400 opacity-60" />
                ))}
              </div>

              {/* Letter Header */}
              <div className="text-center my-8">
                <h3
                  className="text-2xl font-bold mb-2 font-dancing-script"
                  style={{ fontFamily: "var(--font-dancing-script)", color: "#FFFF99" }}>
                  Dear Recruiting Team
                </h3>
                <div
                  className="w-32 h-1 mx-auto rounded-full"
                  style={{ background: "linear-gradient(to right, #FFFF99, #FFD700)" }}
                />
              </div>

              {/* Form */}
              <form className="space-y-6">
                <div>
                  <textarea
                    id="message"
                    placeholder="Through my last project, where I advanced a POC to a MVP independently, I grew into the Role of Product Manager and Software Architect natively. While leveraging DevOps Processes to deploy my Architecture with CI/CD Pipelines and IAC-Templates on native Cloud Providers, I gained the experience to fit this Role.                                                             Back in the Days, where I acquired knowledge about one of the forefront of innovative technologies, the Blockchain Industry, I had a deep dive into Security Algorithms and Authentication Features. Additionally the learning of Mechanism Design from a Free Stanford Course of Tim Roughgarden (Head of Research A16Z), gave me a strong foundation to understand how a System can be manipulated or compromised.                                                         Analyzing and Automating internal Workflows is one the Tasks that I enjoy the most to do on a Daily Basis. The Passion about Innovation that resides inside my Blood, drives me everyday to keep up with the newest AI-Solutions. Building Multi-Agent Pipelines with Validators, Instructors and Coders is something that scales Productivity massively.                                                          Collaboration on international and diverse Teams, has been performed by myself within a global Science Community on a daily Basis. I understand the formalities of international Business Meetings. Additionally I can navigate difficult Personalities respectfully in the right Way and keep them focused on the Business Goal, without sacrificing my own Principles."
                    rows={8}
                    className="w-[500px] h-[500px] p-4 rounded-lg font-dancing-script text-lg resize-none focus:outline-none focus:ring-2 transition-all duration-300 bg-white/5 backdrop-blur-md border border-white/20 hover:border-yellow-400/50"
                    style={{
                      fontFamily: "var(--font-helvetica)",
                      resize: "none",
                      color: "#FFFF99",
                    }}
                    required
                  />
                </div>
              </form>

              {/* Letter Footer */}
              <div className="text-center mt-6 pt-4" style={{ borderTop: "1px solid rgba(208, 198, 5, 0.5)" }}>
                <p
                  className="text-sm font-dancing-script"
                  style={{ fontFamily: "var(--font-dancing-script)", color: "#FFFF99" }}>
                  To Infinity and Beyond
                </p>
              </div>
            </div>
      </div>
  )
}