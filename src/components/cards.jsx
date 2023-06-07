import React from "react";
import Card from "./card";

import feature from "../image/feature.svg"
import feature2 from "../image/feature2.svg"
import feature3 from "../image/feature3.svg"

const Cards = () => {
  return (
    <section className="container w-full h-auto py-10 flex justify-center items-center flex-col gap-10">    
      <div className="flex justify-center items-center flex-col text-center gap-24">
        <Card title="Your title here" description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          malesuada nisi tellus, non imperdiet nisi tempor at." addres={feature} />
           <Card title="Your title here" description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          malesuada nisi tellus, non imperdiet nisi tempor at." addres={feature2} order={2}/>
           <Card title="Your title here" description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          malesuada nisi tellus, non imperdiet nisi tempor at." addres={feature3}/>
      </div>
    </section>
  );
};

export default Cards;
