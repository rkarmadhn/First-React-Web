import React from "react";
import Buttons from "../Buttons";
import HeroCard from "../Hero/HeroCard";

export default function CardWithList(props) {
  const { images } = props;
  const list = ["Ac viverra sed risus praesent vulputate. ", "Natoqu consectetur pulvinar.", "Sollicitudin ornare tempus nulla varius pulvinar.", "Varius pulvinar", "Natoque id tellus consectetur", "Vulputate et vulputate suspendisse"];
  return (
    <div className={"md:flex block justify-center items-center rounded-3xl px-8 md:px-12 mx-auto py-4 my-8 bg-yellow-400"}>
      <div className={"md:w-1/2 flex justify-center items-center order-last"}>
        <img src={images} alt="" className="md:h-96 h-56 my-8" />
      </div>
      <div className="md:w-1/2 grid gap-4">
        <h1 className={"lg:text-4xl md:text-3xl text-2xl font-bold text-neutral-700"}>Cursus Integer consequat Tristique. </h1>
        <div className="grid grid-cols-1 gap-4">
          {list.map((el, index) => (
            <HeroCard title={el} keys={index} />
          ))}
        </div>
        <Buttons className={"bg-neutral-800 text-yellow-400"} />
      </div>
    </div>
  );
}
