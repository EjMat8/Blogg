import React from "react";
import BlogGrid from "./BlogGrid";
import BlogCard from "./BlogCard";
import { Box, Heading } from "@chakra-ui/react";

const FeaturedBlemes = React.forwardRef((props, ref) => {
  return (
    <Box bgColor="gray.50" ref={ref} py={12}>
      <Box textAlign="center">
        <Heading
          fontWeight="hairline"
          textAlign="center"
          fontSize="1.875rem"
          pb={4}
          mb={6}
          borderBottom="1px solid #000"
          display="inline-block"
          textTransform="uppercase"
        >
          Featured
        </Heading>
      </Box>
      <BlogGrid>
        {props.blogs.map((el) => (
          <BlogCard key={el.blogName} {...el} />
        ))}
      </BlogGrid>
    </Box>
  );
});
FeaturedBlemes.displayName = "FeaturedBlemes";
export default FeaturedBlemes;
