import React from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import { Box, Center, Text, VStack, Heading } from "@chakra-ui/react";

SyntaxHighlighter.registerLanguage("js", js);
export default function BlogContent({ content, blogName }) {
  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <Center alignSelf="center">
            <Image
              src={`/images/${blogName}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </Center>
        );
      }

      return <Text>{paragraph.children}</Text>;
    },
    ul(list) {
      return <ul style={{ marginLeft: "3rem" }}>{list.children}</ul>;
    },
    h2(h2) {
      return <Heading>{h2.children}</Heading>;
    },
    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1];
      return (
        <SyntaxHighlighter style={atomDark} language={language}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };
  return (
    <Box>
      <VStack align="start" fontSize="lg" spacing={4}>
        <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
      </VStack>
    </Box>
  );
}
