import React from "react";
import { useForm, useFieldArray,Controller } from "react-hook-form";

const TestBlog = () =>{
  const { register, control, handleSubmit, reset, trigger, setError } = useForm({
    // defaultValues: {}; you can populate the fields by this attribute
    tags:[], 
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "tags"
  });
  
  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <ul>
        {fields.map((item, index) => (
          <li key={item.id} className="list-group d-flex flex-row">
            <input className="form-control my-1" {...register(`tags.${index}`)} />
            <button className="btn btn-sm btn-danger mx-1 my-1" type="button" onClick={() => remove(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => append("")}
      >
        append
      </button>
      <input type="submit" />
    </form>
  );
}

export default TestBlog;
