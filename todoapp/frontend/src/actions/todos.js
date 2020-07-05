// import axios from "axios";
import {
  READ_TODOS,
  TODO_COUNT,
  LOAD_CONTRACT,
  LOAD_BC_FAIL,
  LOAD_BC_REQUEST,
  LOAD_BC_ISLISTENING,
  LOAD_ADDRESSE,
  GET_TODOS,
} from "./types";
import Web3 from "web3";
import store from "../store";
import MyContract from "../Todolist.json";
const contractABI = MyContract.abi;
let web3;
let todoContract;
let count;

//LOAD_BC_request
export const LoadBC_Request = () => (dispatch) => {
  web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

  dispatch({
    type: LOAD_BC_REQUEST,
    web3: web3,
  });
};

//LOAD_BC_success
export const LoadBC_isListening = () => (dispatch) => {
  web3.eth.net
    .isListening()
    .then((response) => {
      dispatch({
        type: LOAD_BC_ISLISTENING,
        connected: response,
      });
    })
    .catch((error) => {
      console.log("error", error);
    });
};

//LOAD_BC_success
export const LoadBC_FAIL = () => (dispatch) => {
  dispatch({
    type: LOAD_BC_FAIL,
    connected: false,
  });
};

//load blockchain and contract
export const fetchData = () => {
  return function (dispatch, getstate) {
    dispatch(LoadBC_Request());
    dispatch(LoadBC_isListening());
    dispatch(LoadContract());
  };
};

//LOAD_address
export const LoadAddress = () => (dispatch) => {
  web3.eth
    .getAccounts()
    .then((response) => {
      const res = response[0];
      console.log("address", res);

      dispatch({
        type: LOAD_ADDRESSE,
        Myaddress: res,
      });
    })
    .catch((error) => {
      console.log("error", error);
    });
};

//Load contract

export const LoadContract = () => {
  return async function (dispatch, getstate) {
    const id = await web3.eth.net.getId(); //get networkId
    if (id === 5777) {
      try {
        const deployedNet = MyContract.networks[id];
        todoContract = new web3.eth.Contract(contractABI, deployedNet.address);
        // console.log('deployedNet', deployedNet);
        dispatch({
          type: LOAD_CONTRACT,
          todoContract: todoContract,
        });
      } catch (error) {
        console.log("deployedNetError", error);
      }
    } else {
      console.log("your not in local network 5777");
    }

    let TDaddress = await todoContract.options.address;

    dispatch({
      type: LOAD_CONTRACT,
      TDaddress: TDaddress,
    });
  };
};

//Todos Count
export const TodoCount = () => {
  return async function (dispatch, getstate) {
    let TDcount = await todoContract.methods.todos_lenght().call();
    count = parseInt(TDcount);
    dispatch({
      type: TODO_COUNT,
      TDcount: count,
    });
  };
};

//READ_TODOS
export const ReadTodos = () => async (dispatch) => {
  let x = store.getState().todos.TDcount;
  console.log("tfcount", x);
  let pointer;
  let n = [];
  for (let i = 1; i < x + 1; i++) {
    let fnum = i.toString();
    pointer = await todoContract.methods.readtodo(fnum).call();
    n = [...n, pointer];

  }
  if((n.length !== (0)) && (x !==(null|undefined)) ) {

  dispatch({
    type:READ_TODOS,
    todos: n
  });
  console.log('dispatched', 'n :',n.length, ', x: ',x);

};

  // console.log('n', n);

  // console.log(store.getState().todos.todos)
};
