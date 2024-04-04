import React from "react";
import { ImCancelCircle } from "react-icons/im";
function TransactionList({ arr, dispatch }) {
  return (
    <div className="p-2 my-5 ml-[10%] sm:w-[80%] w-[60%] bg-white backdrop-filter backdrop-blur-lg bg-opacity-15 rounded-lg ">
      <h3 className="text-lg font-bold mb-1">History</h3>
      <hr className="border-zinc-600 border-[1px]"></hr>
      {arr.length!=0?<ul>
        {arr.map((trans, index) =>
          trans.price < 0 ? (
            <div className="cursor-pointer group flex items-center w-[100%]">
              <button
                onClick={() => dispatch({ type: "delete", index })}
                className="rounded-lg hidden group-hover:flex cursor-pointer w-14 h-[80px] mt-[0.50rem] justify-center bg-red-500 text-white items-center font-semibold text-[0.8rem] "
              >
               <ImCancelCircle size={"2em"}/>
              </button>
              <div className="rounded-lg h-18 px-5 py-5 bg-zinc-300 bg-opacity-20 mt-2 border-red-500 border-r-8  w-[100%]">
                <li className="flex p-2 justify-between font-semibold">
                  <h1 className="text-white">{trans.text}</h1>
                  <p className="text-red-900 text-lg font-semibold">-${Math.abs(trans.price)}</p>
                </li>
              </div>
            </div>
          ) : (
            <div className="group flex items-center w-[100%]">
              <button
                onClick={() => dispatch({ type: "delete", index })}
                className="rounded-lg hidden group-hover:flex cursor-pointer w-14 h-[80px] mt-[0.50rem] justify-center bg-red-500 text-white items-center font-semibold text-[0.8rem] "
              >
               <ImCancelCircle size={"2em"}/>
              </button>
              <div className="h-18 p-5 rounded-lg bg-zinc-300 bg-opacity-20 mt-2 border-green-500 border-r-8  w-[100%]">
                <li className="flex p-2 justify-between font-semibold">
                  <h1 className="text-white text-lg">{trans.text}</h1>
                  <p className="text-green-900 text-lg font-semibold">+${Math.abs(trans.price)}</p>
                </li>
              </div>
            </div>
          )
        )}
      </ul>:<h1 className="text-lg font-semibold">-----No Transaction History Found-----</h1>}
    </div>
  );
}
export default TransactionList;
