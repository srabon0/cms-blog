import { ADD_BLOG, ADD_TO_HISTORY, DELETE_BLOG, LOAD_BLOG, SEARCH_BLOG } from "../actionTypes/actionTypes"

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

export const addToHistory = (blogdata)=>{
    
    return {
        type:ADD_TO_HISTORY,
        payload:blogdata
    }
}
export const searchBlog = (keyword)=>{
    
    return {
        type:SEARCH_BLOG,
        payload:keyword.toLowerCase()
    }
}
