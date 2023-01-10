import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({blog}) => {
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
  const convertedDate = (date)=>{
    const d = new Date(date);
    return d.toLocaleDateString('en-GB');}
  return (
    <div class="col">
    <div class="card h-100">
      <img src={picture} class="card-img-top" alt="..." />
      <div class="card-body">
       <div className="mb-2">
       {
           tags?.map(item=><span className="px-2 bg-dark text-white mx-1 rounded py-1 cursor-pointer">#{item}</span>)
        }
        </div> 
        <h5 class="card-title">{title}</h5>
        <p className="text-muted">Author : <span className="border rounded  p-1 text-success"> {author} </span></p>
        <p class="card-text">{desc.slice(0,200) +"..." } <Link to={`/details/${_id}`}> <span className="text-primary cursor-pointer" >see more</span> </Link> </p>
      </div>
      <div class="card-footer">
      <small class="text-muted mx-2">{convertedDate(createdAt)}</small>
      <small class="text-muted">Views : {totalHits}</small>
      </div>
    </div>
  </div>
  
  );
};

export default BlogCard;


// <div class="row row-cols-1 row-cols-md-3 g-4">
//   <div class="col">
//     <div class="card h-100">
//       <img src="..." class="card-img-top" alt="..." />
//       <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//       </div>
//       <div class="card-footer">
//         <small class="text-muted">Last updated 3 mins ago</small>
//       </div>
//     </div>
//   </div>
  
  
// </div>
