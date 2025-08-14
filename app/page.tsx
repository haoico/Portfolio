"use client"

import { Header } from "./components/Header";
import Letter from "./components/Letter";
import { Hero } from "./components/Hero";
import SoftwareSkills from "./components/SoftwareSkills";
import MathSkills from "./components/MathSkills";
import BookSection from "./components/Book";

export default function Home() {

  return (
    <div className="grid items-center justify-items-center min-h-screen pb-12" style={{ background: "linear-gradient(to bottom right, #523d07, #FFD700, #02c809)" }}>

      <Header/>

      <Hero/>

      <div className="pt-64">
        <Letter/>
      </div>

      <div className="pt-24">
        <SoftwareSkills/>
      </div>

      <div className="pt-12">
        <MathSkills/>
      </div>

      <div className="pt-12">
        <BookSection/>
      </div>

    </div>
  );
}
