import React from 'react';
import { useSelector } from 'react-redux';
import BlogCard from '../Home/BlogCard';

const History = () => {
    const state = useSelector((state) => state);
    const readBlog =state.blogs.history
    let content;
    if(readBlog.length){
        content = readBlog?.map(blog=> <BlogCard key={blog.index} blog={blog}></BlogCard>);
    }
    else{
        content = <div className='text-bold' > No Read blog added </div>
    }
    return (
        <div className="container">
            {content}
        </div>
    );
};

export default History;