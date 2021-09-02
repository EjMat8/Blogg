import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  Flex,
  Spacer,
  Text,
  HStack,
  Container,
  IconButton,
} from "@chakra-ui/react";

export default function Navigation() {
  const router = useRouter();

  return (
    <Container maxW="container.xl">
      <Flex p={4} mt={4}>
        {router.pathname !== "/" && (
          <IconButton
            aria-label="back"
            variant="outline"
            border="none"
            icon={<ChevronLeftIcon h={6} w={6} />}
            onClick={() => router.back()}
          />
        )}
        <Spacer />
        <HStack
          spacing={7}
          fontSize="md"
          textTransform="uppercase"
          fontWeight="semibold"
        >
          <Link href="/blogs">
            <a>
              <Text>Read All Blogs</Text>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <Text>Contact</Text>
            </a>
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
}
