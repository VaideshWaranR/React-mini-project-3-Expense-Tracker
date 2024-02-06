import React from "react";
function Transactions({ trans,dispatch}) {
  return trans.price < 0 ? (
    <div className="flex items-center w-[100%]">
      <button className="cursor-pointer w-16 p-1 rounded-xl h-11 mt-[0.50rem] flex justify-center bg-red-500 text-white items-center font-semibold text-[0.8rem] ">
        DELETE
      </button>
      <div className="h-11 rounded-sm bg-zinc-100 mt-2 border-red-500 border-r-8  w-[100%]">
        <li className="flex p-2 justify-between font-semibold">
          <h1>{trans.text}</h1>
          <p>-${Math.abs(trans.price)}</p>
        </li>
      </div>
    </div>
  ) : (
    <div className="flex items-center w-[100%]">
      <button  className=" cursor-pointer w-16 p-1 rounded-xl h-11 mt-[0.50rem] flex justify-center bg-red-500 text-white items-center font-semibold text-[0.8rem] hover:">
        DELETE
      </button>
      <div className="h-11 rounded-sm bg-zinc-100 mt-2 border-green-500 border-r-8  w-[100%]">
        <li className="flex p-2 justify-between font-semibold">
          <h1>{trans.text}</h1>
          <p>+${Math.abs(trans.price)}</p>
        </li>
      </div>
    </div>
  );
}

export default Transactions;
