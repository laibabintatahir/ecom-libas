import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ id, title, image }) => {
  return (
    <div className="blog-item">
      <Link to={`/blogs/${id}`}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </Link>
    </div>
  );
};

export default BlogItem;
