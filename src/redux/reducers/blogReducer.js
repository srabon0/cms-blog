import { ADD_BLOG, DELETE_BLOG, LOAD_BLOG } from "../actionTypes/actionTypes"

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
        case DELETE_BLOG:
            return {
                ...state,
                blogs:state.blogs.filter(item=>item._id!=action.payload)
            }
        default:
            return state
    }
}

export default blogReducer