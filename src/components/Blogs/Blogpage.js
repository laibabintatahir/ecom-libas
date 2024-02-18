import React from "react";
import BlogItem from "./Blogitem";

const BlogPage = () => {
  // Assuming you have an array of blog data
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      image: "blog1.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 2,
      title: "Blog 2",
      image: "blog2.jpg",
      content: "Nulla ac malesuada justo, a aliquet velit."
    },
    {
      id: 3,
      title: "Blog 3",
      image: "blog3.jpg",
      content: "Sed euismod tortor quis mi maximus efficitur."
    },
    {
      id: 4,
      title: "Blog 4",
      image: "blog4.jpg",
      content: "Vivamus nec neque non nibh accumsan tempor."
    }
  ];

  return (
    <div className="blog-page">
      <h2>Blog Page</h2>
      <div className="blog-container">
        {blogs.map(blog => (
          <BlogItem key={blog.id} id={blog.id} title={blog.title} image={blog.image} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

