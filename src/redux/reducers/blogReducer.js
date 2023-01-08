import { ADD_BLOG, LOAD_BLOG } from "../actionTypes/actionTypes"

const initilState = {
    test:"TEST",
    blogs:[]
}
const blogReducer = (state=initilState,action)=>{
    switch(action.type){
        case LOAD_BLOG :
            return {
                ...state,
                blogs:action.payload
            }
        case ADD_BLOG:
            return {
                ...state,
                blogs:[...state.blogs,action.payload]
            }
        default:
            return state
    }
}

export default blogReducer