import React from "react";
import daraz from "./../../../../Images/daraz.jpg";
import mobileBuzz from "./../../../../Images/mobile buzz.jpg";
import msi from "./../../../../Images/msi.png";
import samsung from "./../../../../Images/samsung.webp";
import singer from "./../../../../Images/Singer-Logo.png";
import smartbd from "./../../../../Images/smartbd.jpg";
import starttech from "./../../../../Images/starttech.jpg";
import walton from "./../../../../Images/walton.png";
const Supplier = () => {
  return (
    <div>
      <h1 className="text-6xl my-10 font-mono font-bold text-center">
        Our Valueable Supplier
      </h1>
      <p className="text-xl font-serif w-full lg:w-[80%] mx-auto">
        {" "}
        It is hard for us to import all the products as a result we take help
        from other importer .
      </p>
      <p className="text-4xl my-10 font-bold text-left ml-20">
        Here is the list of our some suppliers:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <p className="flex justify-evenly rounded-lg shadow-2xl mx-10 my-10 w-[80%] items-center">
          <img className="w-[100px]" src={daraz} alt="" srcset="" />
          <p className="uppercase text-[#116F6A] font-mono font-semibold text-2xl">
            Daraz
          </p>
        </p>
        <p className="flex justify-evenly rounded-lg shadow-2xl mx-10 my-10 w-[80%] items-center">
          <img className="w-[100px]" src={mobileBuzz} alt="" srcset="" />
          <p className="uppercase text-[#116F6A] font-mono font-semibold text-2xl">
            MobileBuzz
          </p>
        </p>
        <p className="flex justify-evenly rounded-lg shadow-2xl mx-10 my-10 w-[80%] items-center">
          <img className="w-[100px]" src={msi} alt="" srcset="" />
          <p className="uppercase text-[#116F6A] font-mono font-semibold text-2xl">
            Msi
          </p>
        </p>
        <p className="flex justify-evenly rounded-lg shadow-2xl mx-10 my-10 w-[80%] items-center">
          <img className="w-[100px]" src={samsung} alt="" srcset="" />
          <p className="uppercase text-[#116F6A] font-mono font-semibold text-2xl">
            Samsung
          </p>
        </p>
        <p className="flex justify-evenly rounded-lg shadow-2xl mx-10 my-10 w-[80%] items-center">
          <img className="w-[100px]" src={singer} alt="" srcset="" />
          <p className="uppercase text-[#116F6A] font-mono font-semibold text-2xl">
            Singer
          </p>
        </p>
        <p className="flex justify-evenly rounded-lg shadow-2xl mx-10 my-10 w-[80%] items-center">
          <img className="w-[100px]" src={smartbd} alt="" srcset="" />
          <p className="uppercase text-[#116F6A] font-mono font-semibold text-2xl">
            Smartbd
          </p>
        </p>
        <p className="flex justify-evenly rounded-lg shadow-2xl mx-10 my-10 w-[80%] items-center">
          <img className="w-[100px]" src={starttech} alt="" srcset="" />
          <p className="uppercase text-[#116F6A] font-mono font-semibold text-2xl">
            Star Tech
          </p>
        </p>
        <p className="flex justify-evenly rounded-lg shadow-2xl mx-10 my-10 w-[80%] items-center">
          <img className="w-[100px]" src={walton} alt="" srcset="" />
          <p className="uppercase text-[#116F6A] font-mono font-semibold text-2xl">
            Walton
          </p>
        </p>
      </div>
    </div>
  );
};

export default Supplier;
