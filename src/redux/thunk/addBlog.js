import axios from "axios"
import { addBlog } from "../actionsCreator/actionCreator"

const postBlog = (blogData)=>{
    return async(dispatch)=>{
        const {data} = await  axios.post("https://cms-blog-srabon.onrender.com/blog",blogData);
        console.log("got post",data)
        if(data.acknowledged==true){
            const newBlog = {
                ...blogData,
                _id:data.insertedId
            }
            dispatch(addBlog(newBlog))
        };

    }
}



export default postBlog