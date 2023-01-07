import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({blog}) => {
  return (
    <div class="col">
    <div class="card h-100">
      <img src={blog?.picture} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{blog?.title}</h5>
        <p class="card-text">{blog?.desc.slice(0,200) +"..." } <Link to={`/details/${blog._id}`}> <span className="text-primary cursor-pointer" >see more</span> </Link> </p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
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
