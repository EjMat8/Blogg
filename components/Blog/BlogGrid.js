import React from "react";
import { Grid, Container } from "@chakra-ui/react";
export default function BlemeGrid(props) {
  return (
    <Container maxW="container.xl">
      <Grid
        templateColumns="repeat(auto-fill,minmax(20rem,1fr))"
        gap={6}
        py={8}
      >
        {props.children}
      </Grid>
    </Container>
  );
}
