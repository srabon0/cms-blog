import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import fetchBlogs from "../../redux/thunk/fetchBlogs";

import BlogCard from "./BlogCard";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  const state = useSelector((state) => state);
  const blogs = state.blogs;
  const [sortFactor, setSortFactor] = useState("new");
  let content;
  if(sortFactor=='new'){
    content = blogs.sort((a,b)=> a.createdAt.localeCompare(b.createdAt)).map((blog) => (
      <BlogCard key={blog.index} blog={blog}></BlogCard>
    ));;
  }else if(sortFactor=='old'){
    content = blogs.sort((a,b)=> -a.createdAt.localeCompare(b.createdAt)).map((blog) => (
      <BlogCard key={blog.index} blog={blog}></BlogCard>
    ))

  }
  console.log(sortFactor);
  return (
    <div className="my-1">
      <div class="row">
        <div className="col-10"></div>
        <div class="col-2 float-end">
          <select onChange={(e)=>setSortFactor(e.target.value)} id="inputState" class="form-select">
            <option selected disabled>sort by</option>
            <option value='new'>Newer</option>
            <option value='old'>Older</option>
          </select>
        </div>
      </div>
      <br />
      <div class="row row-cols-1 row-cols-md-3 g-4">{content}</div>
    </div>
  );
};

export default Home;
