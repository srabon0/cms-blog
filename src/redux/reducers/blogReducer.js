import { ADD_BLOG, ADD_TO_HISTORY, DELETE_BLOG, LOAD_BLOG, SEARCH_BLOG } from "../actionTypes/actionTypes"

const initilState = {
    test:[],
    blogs:[],
    history:[],
    searchword:"",
    searchedBlogs:[],
}
const blogReducer = (state=initilState,action)=>{
    switch(action.type){
        case SEARCH_BLOG:
            console.log("searching",action.payload)
            return {
                ...state,
                searchword:action.payload,
                searchedBlogs:state.blogs.filter(item=>{
                    if(action.payload){
                        return item.title.toLowerCase().includes(action.payload)

                    }else if(action.payload){
                        return item.tags.map(tag=>tag.toLowerCase().includes(action.payload))
                    }else if(!action.payload){
                    return item
                    }
                })
                
                
            }
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
            break
        default:
            return state
    }
}

export default blogReducer