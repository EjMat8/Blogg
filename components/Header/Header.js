import React from "react";

import { Center, Heading, Text, Button } from "@chakra-ui/react";

const Header = React.forwardRef((props, ref) => {
  return (
    <Center h="85vh" flexDirection="column">
      <Heading textTransform="uppercase" fontSize="6xl" mb={2}>
        I Blog
      </Heading>
      <Text fontSize="xl">Just a place for me to dump words on. Peace.</Text>
      <Text fontSize="sm" as="i" mb={5}>
        {
          "(If you plan to read my blogs, then you'd better be someone who just wants to pass the time or who is just really bored.)"
        }
      </Text>

      <Button
        onClick={() => ref.current.scrollIntoView({ behavior: "smooth" })}
        variant="solid"
      >
        Read blogs
      </Button>
    </Center>
  );
});
Header.displayName = "Header";
export default Header;
