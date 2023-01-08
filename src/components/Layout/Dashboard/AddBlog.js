import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import postBlog from "../../../redux/thunk/addBlog";


const AddBlog = () => {
  const dispatch = useDispatch();
  const state = useSelector((state)=>state)
    const { register, handleSubmit } = useForm({
        defaultValues: {
          title: '',
          desc: '',
          picture:null,
          author: '',
          createdAt: '',
          isActive:null,
          tags:[]
        }
      });
      const [ file, setFile ] = useState(null)
      const [ fileName, setFileName ] = useState(null)
    
      const fileToBase64 = (file, cb) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function () {
          cb(null, reader.result)
        }
        reader.onerror = function (error) {
          cb(error, null)
        }
      }
    
      const onUploadFileChange = ({ target }) => {
        if (target.files < 1 || !target.validity.valid) {
          return
        }
        fileToBase64(target.files[0], (err, result) => {
          if (result) {
            setFile(result)
            setFileName(target.files[0])
          }
        })
      }
  
  const modifyData=(data)=>{
  const newData = {
      ...data,
      picture:file
    }
  // const url = ''
  dispatch(postBlog(newData));
  console.log(state.blogs);

  }
 
  const onSubmit=async (data)=>{modifyData(data)}
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div class="row mb-3">
        <label  class="col-sm-2 col-form-label">
          Title
        </label>
        <div class="col-sm-10">
        <input  class="form-control" {...register("title", { required: true })} placeholder="Title" />
        </div>
      </div>
      <div class="row mb-3">
        <label  class="col-sm-2 col-form-label">
        Description
        </label>
        <div class="col-sm-10">
        <textarea  class="form-control" {...register("desc", { required: true })} placeholder="Description" />
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">
        Author
        </label>
        <div class="col-sm-10">
        <input  class="form-control" {...register("author", { required: true })} placeholder="Author" />
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">
        Picture
        </label>
        <div class="col-sm-10">
        <input onChange={onUploadFileChange}  class="form-control" type='file'  placeholder="Picture" />
        </div>
      </div>
      
      <select  {...register("tags")} class="form-select">
        <option selected>Open this select menu</option>
        <option value="webdev">Web development</option>
        <option value="redux">Redux</option>
        <option value="vue">Vue js</option>
      </select>
      <fieldset class="row mb-3">
        <legend class="col-form-label col-sm-2 pt-0">Is Active</legend>
        <div class="col-sm-10">
          <div class="form-check">
          <input {...register("isActive")} type="radio" value={true} />
            <label class="form-check-label" for="gridRadios1">
              Yes
            </label>
          </div>
          <div class="form-check">
          <input {...register("isActive")} type="radio" value={false} />
            <label class="form-check-label" for="gridRadios1">
              No
            </label>
          </div>
          
          
        </div>
      </fieldset>
      <div class="row mb-3">
        <div class="col-sm-10 offset-sm-2">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck1" />
            <label class="form-check-label" for="gridCheck1">
              Example checkbox
            </label>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">
        Add Blog
      </button>
    </form>
  );
};

export default AddBlog;
