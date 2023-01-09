import axios from "axios"
import {deleteBlog } from "../actionsCreator/actionCreator"

const deleteBlogByID = (blogData)=>{
    return async(dispatch)=>{
        const {data} = await  axios.delete(`http://localhost:5000/blog/${blogData}`);
        console.log("got post",data)
        if(data.deletedCount==true){
            dispatch(deleteBlog(blogData))
        };

    }
}



export default deleteBlogByID