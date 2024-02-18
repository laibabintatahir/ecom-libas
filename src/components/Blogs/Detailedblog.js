import React from "react";
import { useParams } from "react-router-dom";

const blogData = [
  {
    id: 1,
    title: "Blog 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 2,
    title: "Blog 2",
    content: "Nulla ac malesuada justo, a aliquet velit."
  },
  {
    id: 3,
    title: "Blog 3",
    content: "Sed euismod tortor quis mi maximus efficitur."
  },
  {
    id: 4,
    title: "Blog 4",
    content: "Vivamus nec neque non nibh accumsan tempor."
  }
];

const DetailedBlog = () => {
  const { id } = useParams();

  // Find the blog with the matching ID
  const blog = blogData.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  return (
    <div className="detailed-blog">
      <h2>Detailed Blog Page</h2>
      {/* Display the details of the blog */}
      <h3>{blog.title}</h3>
      <p>{blog.content}</p>
    </div>
  );
};

export default DetailedBlog;
