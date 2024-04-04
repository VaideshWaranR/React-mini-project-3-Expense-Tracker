import React from "react";
import { FaCircleArrowUp } from "react-icons/fa6";
function IncomeExpenses({arr}) {
  const array=arr.map((a)=>a.price)
 const income=array.reduce((acc,curr)=>(curr>0)?acc+curr:acc+0,0)
 const expense=array.reduce((acc,curr)=>(curr<0)?acc-curr:acc+0,0)
  return (
    <div className="ml-[10%]  flex gap-10 md:w-[80%] w-[65%]">
      <div className=" rounded-xl  w-[300px] h-[200px] bg-white backdrop-filter backdrop-blur-lg bg-opacity-15 flex justify-center items-center">
        <div className="flex gap-2">
        <div className="flex items-center"><FaCircleArrowUp className="bg-green-500 rounded-[50%] text-green-200" size={"2em"}/></div>
        <div className="flex-col"><h2 className="font-semibold text-sm text-green-500 ">INCOME</h2>
        <h4 className="text-3xl font-bold text-white ">+${income}</h4></div>
        </div>
      </div>
      <div className=" rounded-xl w-[300px] h-[200px] bg-white backdrop-filter backdrop-blur-lg bg-opacity-15 flex justify-center items-center">
        <div className="flex gap-2">
        <div className="flex items-center"><FaCircleArrowUp className="bg-red-500 rounded-[50%] text-red-200" size={"2em"}/></div>
        <div className="flex-col"><h2 className="font-semibold text-sm text-red-500 ">EXPENSE</h2>
        <h4 className="text-3xl font-bold text-white ">-${expense}</h4></div>
        </div>
      </div>
    </div>
  );
}

export default IncomeExpenses;
