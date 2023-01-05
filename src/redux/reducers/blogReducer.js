import { LOAD_PRODUCT } from "../actionTypes/actionTypes"

const initilState = {
    test:"TEST",
    blogs:[]
}
const blogReducer = (state=initilState,action)=>{
    switch(action.type){
        case LOAD_PRODUCT :
            return {
                ...state,
                blogs:action.payload
            }
        default:
            return state
    }
}

export default blogReducer