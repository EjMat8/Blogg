import React from "react";
import Image from "next/image";
import { Heading, Text, VStack, Center } from "@chakra-ui/react";
export default function BlogHeader(props) {
  return (
    <React.Fragment>
      <VStack spacing={2} mb={2}>
        <Heading size="2xl" fontWeight="medium">
          {props.title}
        </Heading>
        <Text as="i" fontSize="lg" fontWeight="light">
          {props.caption}
        </Text>
      </VStack>
      <Center mb={8}>
        <Image
          alt={props.blogName}
          src={`/images/${props.blogName}/${props.image}`}
          width={800}
          height={500}
          className="blog-image"
        />
      </Center>
    </React.Fragment>
  );
}
