import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-2 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 relative">
            <Image
              src="/phone.png"
              alt="phone"
              width={440}
              height={1000}
              className="md:flex center opacity-15 lg:hidden absolute -z-10 rotate-[25deg]"
            />
            {FEATURES.map((feature, i) => (
              <FeatureItem
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
                key={i}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({
  title,
  icon,
  description,
}: {
  title: string;
  icon: string;
  description: string;
}) => {
  return (
    <li className="flex border w-full flex-1 flex-col items-start rounded-md p-4 bg-slate-100">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image alt="map" src={icon} width={28} height={28} />
      </div>
      <h2 className="bold-20 capitalize lg:bold-32 mt-5">{title}</h2>
      <p className="regular-16 mt-5 text-gray-30 lg:mt-[39px] lg:bg-none">{description}</p>
    </li>
  );
};

export default Features;
