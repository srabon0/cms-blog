import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const BlogUpdate = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  const {
    _id,
    title,
    desc,
    author,
    tags,
  } = blog;
  useEffect(() => {
    const getData = async (id) => {
      const url = `http://localhost:5000/blog/${id}`;
      const { data } = await axios.get(url);
      setBlog(data);
    };
    getData(id);
  }, [id]);
  const allTagsintheBlog = tags?.join(" ");
  const [tagInput,setTagInput] = useState("");

  const onSubmit = async e => {
    e.preventDefault();
   
    const mainData = {
        title:e.target.title.value,
        desc:e.target.description.value,
        tags:e.target.tags.value.split(" "),
        author:e.target.author.value
    }
    console.log(mainData);
  };
  return (
    <div>
      <div>
        <form onSubmit={(e)=>(onSubmit(e))}>
          <div class="mb-3">
            <label for="title" class="form-label">
              Title
            </label>
            <input
              type="text"
              class="form-control"
              id="title"
              placeholder="Title"
              defaultValue={title}
            />
          </div>
          <div class="mb-3">
            <label for="Description" class="form-label">
              Description
            </label>
            <textarea
              
              type="text"
              class="form-control"
              id="description"
              placeholder="Desc"
              defaultValue={desc}
            />
          </div>
          <div class="mb-3">
            <label for="tags" class="form-label">
              Tags
            </label>
            <input
              type="text"
              class="form-control"
              id="tags"
              placeholder="tags"
              defaultValue={allTagsintheBlog}
            />
          </div>
          <div class="mb-3">
            <label for="author" class="form-label">
              Author
            </label>
            <input
             
              type="text"
              class="form-control"
              id="author"
              placeholder="author"
              defaultValue={author}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Update blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogUpdate;
