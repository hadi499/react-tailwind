import React from "react";

const GaleryImage = () => {
  return (
    <div>
      <h2 className="mt-24 mb-10 text-center font-bold text-3xl text-slate-700">
        My Galery
      </h2>

      <div className="container mx-auto px-6 font-inter  sm:flex sm:flex-wrap sm:justify-evenly sm:gap-6">
        <div className="rounded-md shadow-lg overflow-hidden mb-8 sm:w-64 sm:mb-0 md:w-80 lg:w72">
          <img
            src="https://source.unsplash.com/600x400"
            alt=""
            className="w-full"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-slate-700">Image Title</div>
            <p className="text-sm text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quidem
              quasi iure vero vel nemo delectus iusto illo perferendis nisi.
            </p>
          </div>
        </div>
        <div className="rounded-md shadow-lg overflow-hidden mb-8 sm:w-64 sm:mb-0 md:w-80 lg:w72">
          <img
            src="https://source.unsplash.com/600x400"
            alt=""
            className="w-full"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-slate-700">Image Title</div>
            <p className="text-sm text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quidem
              quasi iure vero vel nemo delectus iusto illo perferendis nisi.
            </p>
          </div>
        </div>
        <div className="rounded-md shadow-lg overflow-hidden mb-8 sm:w-64 sm:mb-0 md:w-80 lg:w72">
          <img
            src="https://source.unsplash.com/600x400"
            alt=""
            className="w-full"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-slate-700">Image Title</div>
            <p className="text-sm text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quidem
              quasi iure vero vel nemo delectus iusto illo perferendis nisi.
            </p>
          </div>
        </div>
        <div className="rounded-md shadow-lg overflow-hidden mb-8 sm:w-64 sm:mb-0 md:w-80 lg:w72">
          <img
            src="https://source.unsplash.com/600x400"
            alt=""
            className="w-full"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-slate-700">Image Title</div>
            <p className="text-sm text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quidem
              quasi iure vero vel nemo delectus iusto illo perferendis nisi.
            </p>
          </div>
        </div>
        <div className="rounded-md shadow-lg overflow-hidden mb-8 sm:w-64 sm:mb-0 md:w-80 lg:w72">
          <img
            src="https://source.unsplash.com/600x400"
            alt=""
            className="w-full"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-slate-700">Image Title</div>
            <p className="text-sm text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quidem
              quasi iure vero vel nemo delectus iusto illo perferendis nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GaleryImage;
