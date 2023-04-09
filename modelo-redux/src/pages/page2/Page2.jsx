import React from "react";
import Header from "../../components/header_component/Header";
import { useSelector } from "react-redux";

const Page2 = () => {

  const count = useSelector((state) => state.counter.value);
  const boolValueString = String(useSelector((state) => state.boolState.value));

  return (
    <>
      <Header title={"Page Two"} />
      <main>
        <section>{count}</section>
        <section>{boolValueString}</section>
      </main>
    </>
  );
};

export default Page2;
