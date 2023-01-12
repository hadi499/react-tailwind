import React from "react";

export const PseudoClassTailwind = () => {
  return (
    <div className="my-20 p-20 ">
      <p className="text-center font-bold text-4xl">Pseudo Class Tailwind</p>
      <div className="flex justify-center">
        <span className="text-sm text-slate-500 mr-2">light</span>
        <input type="checkbox" id="toggle" className="hidden" />
        <label htmlFor="toggle">
          <div
            className="w-9 h-5 bg-slate-500 rounded-full flex 
          items-center p-1 cursor-pointer"
          >
            <div className="w-4 h-4 bg-white rounded-full toogle-circle"></div>
          </div>
        </label>
        <span className="text-sm text-slate-500 ml-2">dark</span>
      </div>
      <button
        className="my-10 bg-sky-500 px-5 py3 rounded-full text-white font-semibold font-inter block mx-auto
       hover:bg-sky-600 active:bg-sky-800 focus:ring focus:ring-sky-300 outline-sky-500"
      >
        Simpan
      </button>
      {/* block untuk merubah inline ke block, supaya mx-auto berfungsi */}
      <div className="container mx-auto mt-6 max-w-screen-md bg-slate-300">
        <p className="mb-10 text-center font-bold">contoh inline button</p>
        <button className="bg-green-300 mx-20 border-none outline-none focus:ring focus:ring-amber-500">
          edit
        </button>
        <button className="bg-red-500 mb-10">delete</button>
      </div>
      <div className="max-w-lg border border-slate-200 p-5 mt-20 mx-auto font-inter text-lg hover:bg-blue-500 group">
        <h2 className="font-bold group-hover:text-white">Lorem ipsum</h2>
        {/* class group berfungsi untuk membuat elemen parent dan child bisa dihover */}
        <p
          className="group-hover:text-white selection:bg-lime-300 selection:text-slate-800 
        first-line:uppercase first-line:tracking-wide first-letter:text-7xl first-letter:float-left first-letter:mr-3"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias
          velit amet perspiciatis ab? Laboriosam neque provident error alias
          obcaecati molestias natus mollitia atque quia earum porro, vitae
          deleniti, consequatur, asperiores laudantium repellat quaerat totam
          fugiat hic voluptas. Cupiditate doloribus cumque ducimus expedita
          corporis nisi eius molestiae a ipsum aspernatur.
        </p>
      </div>
      <div className="max-w-lg border border-slate-200 rounded-xl mx-auto shadow-md font-inter p-5 mt-10">
        <form action="">
          <label htmlFor="email">
            <span className="block font-semibold mb-1 text-slate-700 after:content-['*'] after:text-pink-500 after:ml-0.5">
              Email
            </span>
            <input
              type="email"
              placeholder="masukkan email...."
              id="email"
              className="px-3 py-2 shadow rounded w-full block text-sm focus:outline-none 
              focus:ring-1 focus: ring-sky-500 invalid:text-pink-700 invalid:focus:ring-pink-700 peer "
            />
            <p className="text-sm m-1 text-pink-700 invisible peer-invalid:visible">
              Email not valid.
            </p>
          </label>
        </form>
      </div>
    </div>
  );
};

export default PseudoClassTailwind;
