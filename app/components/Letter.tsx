import { Crown } from "./Crown"
import Image from "next/image";

export default function Letter (){

  return (
      <div className="pb-10 px-4 relative ml-2">
          <div className="text-center mb-12">
            <h2
              className="text-5xl font-bold text-[#523d07] mb-4 font-dancing-script"
              style={{ fontFamily: "var(--font-dancing-script)" }}>
              Application Letter
            </h2>
            <div className="flex justify-center mb-4 space-x-2">
              <Crown size={40} />
              <Crown size={40} />
              <Crown size={40} />
            </div>
          </div>

          <div className="grid grid-cols-3 place-items-center">
            <div className="grid grid-cols-1">
              <Image src="/DragonImages/DragonDeco1.jpeg" alt="DragonDeco1" width={250} height={250} className="border-2 border-green-400 shadow-2xl shadow-green-400/50"/>
              <Image src="/DragonImages/DragonDeco2.jpeg" alt="DragonDeco2" width={250} height={250} className="border-2 border-green-400 shadow-2xl shadow-green-400/50"/>
              <Image src="/DragonImages/DragonDeco3.jpeg" alt="DragonDeco3" width={250} height={250} className="border-2 border-green-400 shadow-2xl shadow-green-400/50"/>
            </div>

            <div className="px-8 py-4 rounded-lg shadow-2xl relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 hover:border-yellow-400/50">
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
                  style={{ fontFamily: "var(--font-dancing-script)", color: "#523d07" }}>
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
                    placeholder="Through my last project, where I advanced a POC to a MVP independently, I grew into the Role of Product Manager and Software Architect natively. While leveraging DevOps Processes to deploy my Architecture with CI/CD Pipelines and IAC-Templates on native Cloud Providers, I gained the experience to fit this Role.                                                                                      Back in the Days, where I acquired knowledge about one of the forefront of innovative technologies, the Blockchain Industry, I had a deep dive into Security Algorithms and Authentication Features. Additionally the learning of Mechanism Design from a Free Stanford Course of Tim Roughgarden (Head of Research A16Z), gave me a strong foundation to understand how a System can be manipulated or compromised.                                                         Analyzing and Automating internal Workflows is one the Tasks that I enjoy the most to do on a Daily Basis. The Passion about Innovation that resides inside my Blood, drives me everyday to keep up with the newest AI-Solutions. Building Multi-Agent Pipelines with Validators, Instructors and Coders is something that scales Productivity massively.                                                          Collaboration on international and diverse Teams, has been performed by myself within a global Science Community on a daily Basis. I understand the formalities of international Business Meetings. Additionally I can navigate difficult Personalities respectfully in the right Way and keep them focused on the Business Goal, without sacrificing my own Principles."
                    rows={8}
                    className="w-[500px] h-[620px] p-4 rounded-lg font-dancing-script text-md resize-none focus:outline-none focus:ring-2 transition-all duration-300 bg-white/5 backdrop-blur-md border border-white/20 hover:border-yellow-400/50"
                    style={{
                      fontFamily: "var(--font-helvetica)",
                      resize: "none",
                      color: "#523d07",
                    }}
                    required
                  />
                </div>
              </form>

              {/* Letter Footer */}
              <div className="text-center mt-6 pt-4" style={{ borderTop: "1px solid #523d07" }}>
                <p
                  className="text-sm font-dancing-script"
                  style={{ fontFamily: "var(--font-dancing-script)", color: "#523d07" }}>
                  To Infinity and Beyond
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1">
              <Image src="/DragonImages/DragonDeco5.jpeg" alt="DragonDeco4" width={250} height={250} className="border-2 border-green-400 shadow-2xl shadow-green-400/50"/>
              <Image src="/DragonImages/OGDragon.jpeg" alt="DragonDeco5" width={250} height={250} className="border-2 border-green-400 shadow-2xl shadow-green-400/50"/>
              <Image src="/DragonImages/DragonDeco7.jpeg" alt="DragonDeco6" width={250} height={250} className="border-2 border-green-400 shadow-2xl shadow-green-400/50"/>
            </div>
          </div>

      </div>
  )
}