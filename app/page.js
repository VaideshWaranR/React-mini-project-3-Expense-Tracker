"use client"
import React, {  useEffect, useReducer } from "react";
import Header from "./Component/Header";
import Container from "./Component/Container";
import IncomeExpenses from "./Component/IncomeExpenses";
import TransactionList from "./Component/TransactionList";
import AddTransaction from "./Component/AddTransaction";
const page=()=>{
  useEffect(() => {
  
  }, [])
  let num=0;
  function reducer(state, action) {
    switch (action.type) {
      case "insert":
       return{
        trans:[...state.trans,action.val]
       }
        case "delete":
         return {
         trans:state.trans.filter((t,idx)=>idx!==action.index)
         }
      default:
        return state;   }
  }
    const [state, dispatch] = useReducer(reducer,{
      trans:[]
    });
  return (
    <div className="ml-0 w-[70%] bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 rounded-xl h-full mt-3">
      <Header />
      <Container arr={state.trans}/>
      <IncomeExpenses arr={state.trans}/>
      <TransactionList arr={state.trans} dispatch={dispatch}/>
      <AddTransaction dispatch={dispatch} num={num}/>
    </div>
  );
}

export default page;
