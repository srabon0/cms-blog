import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import fetchBlogs from '../../redux/thunk/fetchBlogs';

import BlogCard from './BlogCard';

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchBlogs())
       }, [dispatch]);
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