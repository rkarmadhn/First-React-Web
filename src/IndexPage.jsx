import React from "react";
import Card from "./Component/Card/Card";
import HeroPage from "./Component/Hero/HeroPage";
import FirstImages from "./assets/ilustrasi.png";
import TwoImages from "./assets/box.png";
import LastImages from "./assets/drawkit.png";
import CardWithList from "./Component/Card/CardWithList";

export default function IndexPage() {
  return (
    <div className="p-4">
      <HeroPage />
      <Card
        title="Phasellus a vitae iaculis magna eleifend pulvinar velit odio."
        body="Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis vulputate et vulputate suspendisse natoque id tellus consectetur pulvinar et. "
        images={FirstImages}
        classTitle="text-neutral-600"
      />
      <Card
        title="Cursus Integer Conseq Aliquam Tristique. "
        body="Quisque porttitor vitae vel amet neque scelerisque mattis. Consectetur nibh velit magna consectetur leo. "
        images={TwoImages}
        className="bg-neutral-800"
        classTitle="text-white"
        classBody="text-white"
        classButton="bg-yellow-400 text-neutral-800"
        classImage="md:order-first"
      />
      <CardWithList images={LastImages} />
    </div>
  );
}
