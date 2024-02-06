import React from "react";

function Balance({array}) {
  const amnt=array.map((arr)=>arr.price)
  const amount=amnt.reduce((acc,curr)=>acc+curr,0)
  return (
    <div className="rounded-xl bg-black p-8 mt-4 mb-10 ml-[10%] font-semibold w-[30%] items-center">
      <h1 className="text-white tracking-tighter text-lg font-semibold font-Poppins">BALANCE</h1>
      {amount<0 ?<h3 className="text-6xl text-red-500">${amount}</h3>:<h3 className="text-green-500 text-6xl">${amount}</h3>}
    </div>
  );
}

export default Balance;
