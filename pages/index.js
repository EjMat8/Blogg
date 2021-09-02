import React, { useRef } from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import FeaturedBlog from "../components/Blog/FeaturedBlog";
import { getFeaturedBlogs } from "../util/blogs-util";

export default function HomePage(props) {
  const featuredSectionRef = useRef();
  return (
    <React.Fragment>
      <Head>
        <title>I Blog</title>
        <meta name="description" content="I blog why not. Burgers" />
      </Head>
      <Header ref={featuredSectionRef} />
      <FeaturedBlog ref={featuredSectionRef} blogs={props.blogs} />
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const featuredBlogs = getFeaturedBlogs();
  return {
    props: { blogs: featuredBlogs },
  };
}
