import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  Alert,
  AlertIcon,
  AlertDescription,
  SlideFade,
  Box,
} from "@chakra-ui/react";
import ContactForm from "../components/Contact/ContactForm";
export default function Contact() {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let timer = null;
    let timer2 = null;
    if (message) {
      setIsOpen(true);
      timer2 = setTimeout(() => {
        setIsOpen(false);
      }, 1500);
      timer = setTimeout(() => {
        setError(false);
        setMessage("");
      }, 2000);
    }
    return () => {
      if (timer || timer2) {
        clearTimeout(timer2);
        clearTimeout(timer);
      }
    };
  }, [message]);
  return (
    <React.Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me feedback" />
      </Head>
      <ContactForm setError={setError} setMessage={setMessage} />
      <Box pos="fixed" left="50%" bottom="8%" transform="translateX(-50%)">
        <SlideFade in={isOpen} offsetY="50px">
          <Alert status={error ? "error" : "success"} maxW="max-content">
            <AlertIcon />
            <AlertDescription>{message || ""}</AlertDescription>
          </Alert>
        </SlideFade>
      </Box>
    </React.Fragment>
  );
}
