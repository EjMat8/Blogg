import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GridItem as Gi, Flex, Heading, Text, VStack } from "@chakra-ui/react";

export default function BlemeCard(props) {
  const imagePath = `/images/${props.blogName}/${props.image}`;
  return (
    <Gi boxShadow="base" bgColor="white" borderRadius="md">
      <Link href={`/blogs/${props.blogName}`}>
        <a>
          <Image
            src={imagePath}
            alt={props.blogName}
            layout="responsive"
            width={400}
            height={300}
            className="image-card"
          />

          <Flex p={4} direction="column">
            <VStack spacing={3} align="flex-start">
              <Heading fontWeight="medium" fontSize="xx-large">
                {props.title}
              </Heading>
              <Text as="i">
                {new Date(props.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Text>
              <Text noOfLines={2} fontSize="sm">
                {props.caption}
              </Text>
            </VStack>
          </Flex>
        </a>
      </Link>
    </Gi>
  );
}
