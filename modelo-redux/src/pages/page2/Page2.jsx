import React from "react";
import Header from "../../components/header_component/Header";
import { useSelector } from "react-redux";

const Page2 = () => {

  const count = useSelector((state) => state.counter.value);
  const boolValueString = String(useSelector((state) => state.boolState.value));
  const {string, number, lista, objeto} = useSelector((state) => state.objectState.value);

  return (
    <>
      <Header title={"Page Two"} />
      <main>
        <section>{count}</section>
        <section>{boolValueString}</section>
        <section>{string}</section>
        <section>{number}</section>
        <section>{lista}</section> 
        <section>{objeto.um}</section>       
      </main>
    </>
  );
};

export default Page2;
