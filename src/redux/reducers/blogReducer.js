import { ADD_BLOG, ADD_TO_HISTORY, DELETE_BLOG, LOAD_BLOG } from "../actionTypes/actionTypes"

const initilState = {
    test:[],
    blogs:[],
    history:[],
}
const blogReducer = (state=initilState,action)=>{
    switch(action.type){
        case LOAD_BLOG :
            return {
                ...state,
                blogs:action.payload.data,
                tags:action.payload.tags
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
        case ADD_TO_HISTORY:
            console.log("red",action.payload);
            if(!state.history.length){
                return {
                    ...state,
                    history:[action.payload]
                }
            }else if(state.history.length){
                const exist = state.history?.find(item=>item?._id==action.payload._id);
                if(exist){
                    return state
                }else{
                    return{
                        ...state,
                        history:[...state.history,action.payload].reverse()
                    }
                }
            }
        default:
            return state
    }
}

export default blogReducer