import React from "react";
import Head from "next/head";
import { getBlogData, getBlogFiles } from "../../util/blogs-util";
import BlogContent from "../../components/Blog/BlogDetails/BlogContent";
import BlogHeader from "../../components/Blog/BlogDetails/BlogHeader";
import { Container } from "@chakra-ui/react";
export default function BlogDetailPage(props) {
  return (
    <React.Fragment>
      <Head>
        <title>{props.blogData.title}</title>
        <meta name="description" content={props.blogData.caption} />
      </Head>
      <Container
        maxW="container.lg"
        p={12}
        borderRadius="md"
        backgroundColor="gray.100"
        boxShadow="md"
        my={8}
      >
        <BlogHeader {...props.blogData} />
        <BlogContent
          content={props.blogData.content}
          blogName={props.blogData.blogName}
        />
      </Container>
    </React.Fragment>
  );
}

export async function getStaticProps(context) {
  const {
    params: { slug },
  } = context;

  const blogData = getBlogData(slug);

  if (!blogData) return { redirect: { destination: "/" } };

  return { props: { blogData: blogData }, revalidate: 600 };
}

export async function getStaticPaths() {
  const allBlogFiles = getBlogFiles();
  const fileNames = allBlogFiles.map((file) => file.replace(".md", ""));
  const params = fileNames.map((file) => ({
    params: {
      slug: file,
    },
  }));

  return {
    paths: params,
    fallback: "blocking",
  };
}
