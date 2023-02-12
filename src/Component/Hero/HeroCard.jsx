import { IconCheckbox } from "@tabler/icons-react";
import React from "react";

export default function HeroCard(props) {
  return (
    <div className="flex justify-center items-center gap-2 bg-white rounded-2xl p-3">
      <IconCheckbox className={"text-yellow-400"} />
      <h5>{props.title}</h5>
    </div>
  );
}
