import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToHistory } from "../../redux/actionsCreator/actionCreator";

const BlogDetails = () => {
  const double = (data)=>{
      setBlog(data)
      dispatch(addToHistory(data))
  }
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const dispatch = useDispatch()
  const {
    _id,
    title,
    picture,
    desc,
    author,
    rating,
    tags,
    totalHits,
    isActive,
    createdAt,
  } = blog;
  useEffect(() => {
    const getData = async (id) => {
      const url = `http://localhost:5000/blog/${id}`;
      const { data } = await axios.get(url);
      if(data._id){
        return double(data);
      }
     
    };
    getData(id);
  }, [id]);

  let tagData =   tags?.map((item,index)=><span key={index} className="px-2 bg-dark text-white mx-1 rounded py-1 cursor-pointer">#{item}</span>)


  return (
    <div class="card mb-3">
      <img src={picture} class="card-img-top" alt="..." />
      
      <div class="card-body">
      <div className="mb-2">
      {tagData}
        </div>  
        <h5 class="card-title">{title}</h5>
        <p className="text-muted">Author : <span className="border rounded  p-1 text-success"> {author} </span></p>
        <p class="card-text">{desc}</p>
        <p class="card-text">
          <small class="text-muted">{createdAt}</small>
          <small class="text-muted">totalHits : {totalHits}</small>

        </p>
      </div>
    </div>
  );
};

export default BlogDetails;
