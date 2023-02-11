import { LOGIN_USER, LOGOUT_USER } from "../actionTypes/actionTypes"

const initilState = {
    currentUser:""
}

const userReducer = (state=initilState,action)=>{
    switch(action.type){
        case LOGIN_USER:
            return {
                ...state,
                currentUser:action.payload
            }
        case LOGOUT_USER:
            return {
                ...state,
                currentUser:""
            }
        
        default:
            return state
    }
}

export default userReducer;