import React from "react";
import gambar from "../img/1.jpg";

const ResponsiveDesign = () => {
  return (
    <div className="container p-4 font-inter sm:max-w-xl md:max-w-5xl lg:flex lg:max-w-full">
      <div className="lg:12px lg:flex-1">
        <h3 className="text-2xl text-slate-800 font-bold mt-4">Hadi Purnomo</h3>
        <img src={gambar} alt="" className="mt-4 rounded-lg lg:hidden" />
        <h2 className="text-2xl sm:text-4xl mt-4">Mari Belajar Programming</h2>
        <p className="text-sm mt-4 sm:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          incidunt amet ratione laborum. Voluptas in molestiae aperiam vitae eos
          quaerat, nam aliquam quam ullam accusamus distinctio architecto esse
          dolores illum.
        </p>
        <div className="mt-4">
          <a
            href="#"
            className="inline-block px-2 py-2 bg-red-600 text-white rounded-lg shadow-lg font-semibold tracking-wider text-sm sm:text-xl"
          >
            Subcribe Channel Youtube
          </a>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2">
        <img src={gambar} alt="" />
      </div>
    </div>
  );
};
export default ResponsiveDesign;
