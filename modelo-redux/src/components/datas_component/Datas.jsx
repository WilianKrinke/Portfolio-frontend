import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTo } from "../../features/bool/boolStatesChange";
import { decrement, increment } from "../../features/counter/counterSlice";
import "./datas.css"

const Datas = () => {
  const count = useSelector((state) => state.counter.value);
  const boolValueString = useSelector((state) => state.boolState.value);
  const dispatch = useDispatch();

  return boolValueString ? (
    <>
      <section>
        <button onClick={() => dispatch(changeTo(false))}>
          Change the value redux state
        </button>
      </section>
      <h3>Estado está em True</h3>

      <section className="section_datas_class">
        <div>
          <button onClick={() => dispatch(decrement())}>- 1</button>
        </div>
        <div>
          <h3>{count}</h3>
        </div>
        <div>
          <button onClick={() => dispatch(increment())}>+ 1</button>
        </div>
      </section>
    </>
  ) : (
    <>
      <section>
        <button onClick={() => dispatch(changeTo(true))}>
          Change the value redux state
        </button>
      </section>
      <h3>Estado está em False</h3>
      <section className="section_datas_class">
        <div>
          <button onClick={() => dispatch(decrement())}>- 1</button>
        </div>
        <div>
          <h3>{count}</h3>
        </div>
        <div>
          <button onClick={() => dispatch(increment())}>+ 1</button>
        </div>
      </section>
    </>
  );
};

export default Datas;
