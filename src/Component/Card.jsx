import clsx from "clsx";
import React from "react";
import Buttons from "./Buttons";

export default function Card(props) {
  const { title, body, images, className = "bg-yellow-400", classBody, classTitle, classButton = "bg-neutral-800" } = props;
  return (
    <div className={clsx(className, "md:flex block justify-center items-center rounded-3xl px-8 md:px-12 mx-auto py-4 my-8")}>
      <div className="md:w-1/2 flex justify-center items-center order-last">
        <img src={images} alt="" className="md:h-96 h-56 my-8" />
      </div>
      <div className="md:w-1/2 grid gap-4">
        <h1 className={clsx(classTitle, "lg:text-4xl md:text-3xl text-2xl font-bold text-neutral-700")}>{title}</h1>
        <h5 className={clsx(classBody, "md:text-md text-sm text-neutral-500")}>{body}</h5>
        <Buttons className={clsx(classButton, " text-white mx-0")} />
      </div>
    </div>
  );
}
