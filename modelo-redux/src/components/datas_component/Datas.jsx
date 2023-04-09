import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTo } from "../../features/bool/boolStatesChange";

const Datas = () => {
  const count = useSelector((state) => state.counter.value)
  const boolValue = useSelector((state) => state.boolState.value)
  const dispatch = useDispatch();
  
  
  return (
    <>
      <section>
        {count} - {boolValue}
      </section>

      <section>
        <button onClick={() => dispatch(changeTo(3424))}>Change the value</button>
      </section>
    </>
  );
};

export default Datas;
