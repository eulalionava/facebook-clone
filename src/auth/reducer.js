import { types } from "../types/types";

export const initialState = {
    user:null
};

export const reducer = ( state,action) =>{
    switch (action.type) {
        case types.SET_USER:
            
            return{
                ...state,
                user:action.user
            }
    
        default:
            return state;
    }
}