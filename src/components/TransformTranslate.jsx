import React from "react";

export const TransformTranslate = () => {
  return (
    <div className="container my-40">
      <div className="w-40 h-40 bg-sky-500 hover:scale-125 hover:rotate-45 mx-auto transition hover:bg-red-400"></div>
      <div className="w-40 h-40 group mx-auto mt-40">
        <div className="w-full h-full bg-blue-400 group-hover:rotate-180 origin-top-left transition"></div>
      </div>
      <div className="w-40 h-40 bg-red-600  animate-spin  mx-auto mt-20"></div>
      <div className="w-20 h-20 bg-blue-500 animate-ping rounded-full  mx-auto mt-32"></div>
    </div>
  );
};
export default TransformTranslate;
