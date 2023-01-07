import axios from "axios"
import { loadBlogs } from "../actionsCreator/actionCreator"

const fetchBlogs = ()=>{
    return async(dispatch,getState)=>{
        const {data} = await  axios.get("http://localhost:5000/blogs")
        console.log("data fnhdsajo",data)
        if(data.data.length){
            dispatch(loadBlogs(data.data))
        };

    }
}



export default fetchBlogs