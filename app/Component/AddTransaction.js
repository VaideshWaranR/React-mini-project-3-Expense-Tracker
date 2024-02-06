
import React, { useState } from "react";
function AddTransaction({dispatch,num}) {
  const [text, settext] = useState("");
  const [price, setprice] = useState("");
  const adding = (e) => {
    e.preventDefault();
   dispatch({type:"insert",val:{text:text,price:parseInt(price)}})
    setprice("");
    settext("");
  };
  return (
    <form
      className="ml-[10%] sm:w-[80%] w-[60%] p-2 h-[42%] flex flex-col bg-zinc-300 rounded-xl "
    >
      <h1 className=" text-xl font-semibold tracking-tight">
        Add New Transactions
      </h1>
      <hr className="border-zinc-600 border-[1px] my-3"></hr>
      <div className="mt-y">
        <h1 className=" text-lg font-semibold">Text</h1>
        <input
          className="w-full my-1 h-11 rounded-md p-2"
          type="text"
          placeholder="Enter your text"
          value={text}
          onChange={(e) => settext(e.target.value)}
        ></input>
      </div>
      <div className="mt-1 leading-5">
        <h1 className="text-lg font-semibold ">Amount</h1>
        <h1 className=" text-sm font-semibold">
          (negative-expenses postive-income)
        </h1>
        <input
          className="w-full my-1 h-11 rounded-md p-2 "
          type="text"
          placeholder="Enter the amount"
          value={price}
          onChange={(e) => setprice(e.target.value)}
        ></input>
      </div>
      <button onClick={adding} className="mt-2 rounded-md w-full h-11 py-2 bg-green-500 text-white text-sm font-semibold cursor-pointer">
        Add Transactions
      </button>
    </form>
  );
}

export default AddTransaction;
