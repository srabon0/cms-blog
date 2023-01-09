import { ADD_BLOG, DELETE_BLOG, LOAD_BLOG } from "../actionTypes/actionTypes"

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

export const deleteBlog = (blogId)=>{
    return {
        type:DELETE_BLOG,
        payload:blogId
    }
}