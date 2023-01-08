import { ADD_BLOG, LOAD_BLOG } from "../actionTypes/actionTypes"

export const loadBlogs = (blogData)=>{
    console.log(blogData)
    return {
        type:LOAD_BLOG,
        payload:blogData
    }

}

export const addBlog = (newBlog)=>{
    return{
        type:ADD_BLOG,
        payload:newBlog
    }
}