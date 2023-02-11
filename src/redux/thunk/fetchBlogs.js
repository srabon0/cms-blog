import axios from "axios"
import { loadBlogs } from "../actionsCreator/actionCreator"

const fetchBlogs = ()=>{
    return async(dispatch,getState)=>{
        const {data} = await  axios.get("https://cms-blog-srabon.onrender.com/blogs")
        console.log("data fnhdsajo",data)
        if(data.data.length){
            dispatch(loadBlogs(data))
        };

    }
}



export default fetchBlogs