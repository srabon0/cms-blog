import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <ul class="list-group">
       <Link className="text-decoration-none" to='/dashboard'> <li class="list-group-item">Blog list</li></Link>
       <Link className="text-decoration-none" to='/dashboard/addblog'> <li class="list-group-item">Add Blog</li></Link>
      </ul>
    </div>
  );
};

export default Sidebar;
