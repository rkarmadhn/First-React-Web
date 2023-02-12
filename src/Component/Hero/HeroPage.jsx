import React from "react";
import Buttons from "../Buttons";
import HeroCard from "./HeroCard";
import "./HeroPage.css";

export default function HeroPage() {
  const names = ["Cursus Integer", "Integer Consequat", "Tellus Euismod Pellentesque", "Aliquot Tristique", "Pellentesque Tempus", "Mauris Fermentum Praesent"];
  
  return (
    <div className={"md:min-h-screen grid place-content-center my-16 md:m-0 hero-section "}>
      <div className="text-center">
        <h5 className={"lg:text-2xl md:text-2xl text-1xl font-bold text-yellow-400 m-4"}>risus praesent vulputate. </h5>
        <h1 className={"lg:text-7xl md:text-5xl text-3xl font-bold text-neutral-700 m-4"}>Cursus Consequat Tristique</h1>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center gap-3 p-4 mx-auto">
          {names.map((e,index) => <HeroCard title={e} keys={index}/>)}
        </div>
        <Buttons />
      </div>
    </div>
  );
}
