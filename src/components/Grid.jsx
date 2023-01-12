import React from "react";

const Grid = () => {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 p-4">
      <h2 className="h-15 text-xl font-semibold text-slate-700 md:col-start-4 md:row-start-2 md:flex">
        <span className="self-center">Welcome WPU</span>
      </h2>
      <div className="h-15 text-lg font-bold text-slate-600 md:col-start-2 md:row-start-2 md:flex">
        <span className="self-end">@hadipurnomo</span>
      </div>
      <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3]">
        <div className="w-full h-full bg-[url('/public/img/grid/1.jpg')] bg-cover bg-center"></div>
      </div>
      <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-3 ">
        <div className="w-full h-full bg-[url('/public/img/grid/2.jpg')] bg-cover bg-center"></div>
      </div>
      <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3]">
        <div className="w-full h-full bg-[url('/public/img/grid/3.jpg')] bg-cover bg-center"></div>
      </div>
      <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3]">
        <div className="w-full h-full bg-[url('/public/img/grid/4.jpg')] bg-cover bg-center"></div>
      </div>
      <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3]">
        <div className="w-full h-full bg-[url('/public/img/grid/5.jpg')] bg-cover bg-center"></div>
      </div>
      <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-2 ">
        <div className="w-full h-full bg-[url('/public/img/grid/6.jpg')] bg-cover bg-center"></div>
      </div>
      <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-4">
        <div className="w-full h-full bg-[url('/public/img/grid/7.jpg')] bg-cover bg-center"></div>
      </div>
      <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3]">
        <div className="w-full h-full bg-[url('/public/img/grid/8.jpg')] bg-cover bg-center"></div>
      </div>
      <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-3 ">
        <div className="w-full h-full bg-[url('/public/img/grid/9.jpg')] bg-cover bg-center"></div>
      </div>
      <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-3  ">
        <div className="w-full h-full bg-[url('/public/img/grid/10.jpg')] bg-cover bg-center"></div>
      </div>
    </div>
  );
};
export default Grid;
