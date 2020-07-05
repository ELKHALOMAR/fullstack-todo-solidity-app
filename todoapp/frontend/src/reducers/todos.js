import {READ_TODOS, TODO_COUNT,LOAD_CONTRACT, LOAD_BC_REQUEST,LOAD_BC_ISLISTENING, LOAD_BC_FAIL, LOAD_ADDRESSE} from '../actions/types.js';
import store from '../store';

const initialState = {
    connected:false,
    web3:'',
    Myaddress:'',
    todoContract:'',
    TDaddress:'',
    TDcount:'',
    todos:[],
    complededLoop: false
}

export default function(state = initialState, action){

    switch (action.type) {
        // case GET_TODOS:
        //    return{
        //        ...state,
        //        todos: action.payload
        //    };
        
        case LOAD_BC_REQUEST:
            return{
                ...state,
                connected:action.connected,
                web3: action.web3
            }

        case LOAD_BC_ISLISTENING:
            return{
                ...state,
                connected: action.connected
            }   
        case LOAD_BC_FAIL:
            return{
                ...state,
                connected: false
            }         
                
        case LOAD_ADDRESSE:
            return{
                ...state,
                Myaddress:action.Myaddress
            }
        case LOAD_CONTRACT:
            return{
                ...state,
                todoContract:action.todoContract,
                TDaddress: action.TDaddres
                
            }
        case TODO_COUNT:
            return{
                ...state,
                TDcount: action.TDcount
            }
        case READ_TODOS:
            return{
                ...state,
                todos: action.todos,
                complededLoop:action.complededLoop
            }
        default:
            return state;
    }
}