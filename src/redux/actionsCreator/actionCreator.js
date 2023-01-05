import { LOAD_PRODUCT } from "../actionTypes/actionTypes"

export const loadBlogs = (blogData)=>{
    return {
        type:LOAD_PRODUCT,
        payload:blogData
    }

} 