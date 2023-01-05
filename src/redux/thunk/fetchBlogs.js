import { loadBlogs } from "../actionsCreator/actionCreator"

const fetchBlogs = ()=>{
    return async(dispatch,getState)=>{
        const res = await  fetch("http://localhost:5000/blogs")
        const data =await res.json()
        if(data.data.length){
            dispatch(loadBlogs(data.data))
        };

    }
}



export default fetchBlogs