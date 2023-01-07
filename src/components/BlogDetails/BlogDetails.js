import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    const {id} = useParams()
    const [blog,setBlog] = useState([]);
    useEffect(()=>{
        
    },[])
    return (
        <div>
          <div>
            <p> {id}</p>
          </div>
        </div>
    );
};

export default BlogDetails;