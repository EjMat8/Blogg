import React from "react";
import AllBlogs from "../../components/Blog/AllBlogs";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { getAllBlogs } from "../../util/blogs-util";

export default function AllBlogsPage({ blogs }) {
  return (
    <React.Fragment>
      <Head>
        <title>All Blogs</title>
        <meta
          name="description"
          content="A list of FuN blogs for you to read. Lol."
        />
      </Head>
      <Box>
        <AllBlogs blogs={blogs} />
      </Box>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const allBlogs = getAllBlogs();

  return {
    props: { blogs: allBlogs },
  };
}
