import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDir = path.join(process.cwd(), "blogs");

export const getBlogFiles = () => {
  return fs.readdirSync(blogDir);
};

export const getBlogData = (slug) => {
  const blogName = slug.replace(/\.md$/, "");
  const blogPath = path.join(blogDir, `${blogName}.md`);
  if (!getBlogFiles().includes(`${blogName}.md`)) return null;

  const blogContent = fs.readFileSync(blogPath, "utf-8");
  const { data, content } = matter(blogContent);
  return {
    blogName,
    ...data,
    content,
  };
};

export const getAllBlogs = () => {
  const blogFiles = getBlogFiles();
  return blogFiles
    .map((blog) => getBlogData(blog))
    .sort((a, b) => (a.date > b.date ? -1 : 1));
};

export const getFeaturedBlogs = () => {
  const allBlogs = getAllBlogs();
  return allBlogs.filter((blog) => blog.isFeatured);
};
