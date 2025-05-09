import React from "react";
import Heading from "../common/heading/Heading";
import PriceCard from "../pricing/PriceCard";

const Hprice = () => {
  return (
    <>
      <section className=" bg-gray-100 py-10">
        <div className=" mx-auto px-4">
          <Heading subtitle="OUR PRICING" title="Pricing & Packages" />
          <PriceCard />
        </div>
      </section>
    </>
  );
};

export default Hprice;
