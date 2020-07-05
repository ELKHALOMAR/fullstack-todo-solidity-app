// import axios from "axios";
import { LOAD_BC_REQUEST,LOAD_BC_SUCCESS, LOAD_ADDRESSE, GET_TODOS} from './types';
import Web3 from "web3";
import store from '../store';
let web3
//LOAD_BC_request
const LoadBC_Request = () =>  dispatch => {
    web3= new Web3(Web3.givenProvider || "http://localhost:8545"); 
    dispatch({
        type: LOAD_BC_REQUEST,
        web3: web3,
        connected: false
    });
    
}


//LOAD_BC_success
const LoadBC_Success =  ()=>  dispatch =>  {
    web3.eth.net.isListening().then(response =>{
        dispatch({
            type: LOAD_BC_SUCCESS,
            connected: response
        });
    
}).catch(error =>{
    console.log('error', error)
})}

export const fetchData = () =>{
    return function(dispatch){
        dispatch(LoadBC_Request())
        dispatch(LoadBC_Success())
        
    }

}


//LOAD_address
export const LoadAddress = () => dispatch => {

    web3.eth.getAccounts().then(response =>{
        
            const res= response[0]
            console.log('res',res)

          dispatch({
              type: LOAD_ADDRESSE,
              Myaddress: res
          });
            
    

  }).catch(error =>{
    console.log('error', error)
})

}


//GEt TODOS

