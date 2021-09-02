import React from "react";
import BlogGrid from "./BlogGrid";
import BlogCard from "./BlogCard";
export default function AllBlogs({ blogs }) {
  return (
    <BlogGrid>
      {blogs.map((el) => (
        <BlogCard key={el.blogName} {...el} />
      ))}
    </BlogGrid>
  );
}
