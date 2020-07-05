import {LOAD_BC_REQUEST,LOAD_BC_SUCCESS, LOAD_BC_FAIL, LOAD_ADDRESSE} from '../actions/types.js';


const initialState = {
    connected:'',
    web3:'',
    Myaddress:''

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

        case LOAD_BC_SUCCESS:
            return{
                ...state,
                connected: action.connected
            }   
        case LOAD_BC_FAIL:
            return{
                ...state,
                data: 'error'
            }         
                
        case LOAD_ADDRESSE:
            return{
                ...state,
                Myaddress:action.Myaddress
            }
            
        default:
            return state;
    }
}