"use client"

import { Header } from "./components/Header";
import Letter from "./components/Letter";
import { Hero } from "./components/Hero";
import SoftwareSkills from "./components/SoftwareSkills";
import MathSkills from "./components/MathSkills";
import Me from "./components/Model";

export default function Home() {

  return (
    <div className="grid items-center justify-items-center min-h-screen pb-12" style={{ background: "linear-gradient(to bottom right, #50C878, #B8860B, #228B22)" }}>

      <Header/>

      <Hero/>

      <div className="pt-64">
        <Letter/>
      </div>

      <div className="pt-24">
        <SoftwareSkills/>
      </div>

      <div className="pt-24">
        <MathSkills/>
      </div>

      <div className="pt-24">
        <Me/>
      </div>

    </div>
  );
}
