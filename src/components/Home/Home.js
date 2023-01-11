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
  const allTags = state.tags;
  const searchkey = state.searchword;
  const searchedBlogs = state.searchedBlogs
  
  const [sortFactor, setSortFactor] = useState("");
  const [cTag, setCTag] = useState("");
  let content;
  const clearFilter = () => {
    setCTag("");
    setSortFactor("");
    console.log("done filter clear");
  };
  const tags = allTags?.map((tag) => (
    <button
      onClick={() => {
        setCTag(tag);
      }}
      className="text-white bg-dark rounded mx-1 mb-1"
    >
      #{tag}
    </button>
  ));
  if(searchkey && searchedBlogs.length){
    content = searchedBlogs?.map((blog) => (
      <BlogCard key={blog.index} blog={blog}></BlogCard>
    ));
  }else{
    
  if (sortFactor == "old" || (sortFactor=='old' && cTag)) {
    content = blogs
      ?.filter((v) => {
        if (cTag) {
          return v.tags.includes(cTag);
        }
        return v
      })
      ?.sort((a, b) => a.createdAt.localeCompare(b.createdAt))
      ?.map((blog) => <BlogCard key={blog.index} blog={blog}></BlogCard>);
  }
  if (sortFactor == "new" || (sortFactor=='new' && cTag)) {
    content = blogs
      ?.filter((v) => {
        if (cTag) {
          return v.tags.includes(cTag);
        }
        return v
      })
      ?.sort((a, b) => -a.createdAt.localeCompare(b.createdAt))
      ?.map((blog) => <BlogCard key={blog.index} blog={blog}></BlogCard>);
  }
  if (!sortFactor)
    content = blogs
      ?.filter((v) => {
        if (v.tags.includes(cTag)) {
          return v.tags.includes(cTag);
        }
      })
      ?.map((blog) => <BlogCard key={blog.index} blog={blog}></BlogCard>);
  if (!sortFactor && !cTag)
    content = blogs?.map((blog) => (
      <BlogCard key={blog.index} blog={blog}></BlogCard>
    ));
  }
  console.log(sortFactor);
  return (
    <div className="container-fluid my-1">
      <div class="row">
        <div className="col-9">{tags}</div>
        <div class="col-2">
          <select
            onChange={(e) => setSortFactor(e.target.value)}
            id="inputState"
            class="form-select"
          >
            <option selected disabled value="">
              sort by
            </option>
            <option value="new">Newer</option>
            <option value="old">Older</option>
          </select>
        </div>
        <div className="col-1">
          <button onClick={() => clearFilter()} className="btn btn-light">
            Clear{" "}
          </button>
        </div>
      </div>
      <br />
      <div class="row row-cols-1 row-cols-md-3 g-4">{content}</div>
    </div>
  );
};

export default Home;
