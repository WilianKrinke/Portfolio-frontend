import { createSlice } from "@reduxjs/toolkit";

export const objectSlicer = createSlice({
  name: "objectState",
  initialState: {
    value: {
      string: "Alguma frase legal",
      number: 999,
      lista: [1,2,3,4],
      objeto: {um:1,dois:2,tres:3},
    },
  },
  reducers: {
    changeString: (state, { payload }) => {
      state.value.string = payload;
    },
    changeNumber: (state, { payload }) => {
      state.value.number = payload;
    },
    insertIntoArray: (state, { payload }) => {
      state.value.lista.push(payload);
    },
    deleteOuttoArray: (state) => {
      state.value.lista.pop();
    },
    showList: (state) => {
      const array = state.value.lista;
      array.forEach((element) => {
        console.log(element);
      });
    },
    insertIntoObject: (state, { payload }) => {
      const { chave, valor } = payload;
      const objectState = state.value.objeto;

      Object.defineProperty(objectState, chave, {
        value: valor,
        writable: true,
        enumerable: true,
        configurable: true,
      });
    },
    removeItemObject: (state, { payload }) => {
      const objectState = state.value.objeto;

      if (Object.hasOwnProperty(payload)) {
        delete `${objectState}.${payload}`;
      }
    },
  },
});

export const {
  changeString,
  changeNumber,
  insertIntoArray,
  deleteOuttoArray,
  showList,
  insertIntoObject,
  removeItemObject,
} = objectSlicer.actions;

export default objectSlicer.reducer
