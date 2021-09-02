import Document, { NextScript, Html, Head, Main } from "next/document";
import { Box } from "@chakra-ui/react";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Box>
            <Main />
            <NextScript />
          </Box>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
