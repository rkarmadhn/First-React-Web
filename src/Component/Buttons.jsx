import React from "react";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import clsx from "clsx";

export default function Buttons(props) {
  const { className = "bg-yellow-400" } = props;
  return (
    <button className={clsx(className, "flex justify-center items-center gap-x-4 p-2 px-6 md:w-max w-full rounded-2xl mx-auto")}>
      Go
      <IconArrowNarrowRight />
    </button>
  );
}
