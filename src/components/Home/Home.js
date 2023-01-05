import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadBlogs } from '../../redux/actionsCreator/actionCreator';
import BlogCard from './BlogCard';

const Home = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        // dispatch(fetchBlogs())
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>dispatch(loadBlogs(data)))
    },[dispatch])
    const state =  useSelector((state)=>state)
    const blogs = state.blogs
    console.log("I am state",state)
   let content;
   content = blogs.map(blog=><BlogCard key={blog.index} blog={blog}></BlogCard>)
    return (
        <div class="row row-cols-1 row-cols-md-3 g-4">
            {content}
        </div>
    );
};

export default Home;