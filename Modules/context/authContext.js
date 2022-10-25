import createContext from "./createContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

import api from "../api";

const initialState = {};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const teste = (dispatch) => {
  return (args) => {
    console.log(args);
  };
};

const createUser = (dispatch) => {
  return async (nome, email, senha) => {
    try {
      await api.post("/criar", {
        nome: nome,
        email: email,
        senha: senha,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

const loginUser = (dispatch) => {
  return async (email, senha) => {
    try {
      const data = await api.post("/login/auth", {
        email: email,
        senha: senha,
      });

      await AsyncStorage.setItem("id", data.data.token);

      const id = await AsyncStorage.getItem("id");
      console.log(id);
    } catch (e) {
      console.log(e);
    }
  };
};

export const { Context, Provider } = createContext(
  reducer,
  { teste, createUser, loginUser },
  initialState,
);