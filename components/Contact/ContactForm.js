import React, { useRef } from "react";
import {
  Container,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  HStack,
  Button,
} from "@chakra-ui/react";
export default function ContactForm({ setError, setMessage }) {
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    //do some client side validation
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        email: emailRef.current.value,
        name: nameRef.current.value,
        message: messageRef.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setMessage(data.message);
    if (!res.ok) {
      setError(true);
      return;
    }
    emailRef.current.value = "";
    nameRef.current.value = "";
    messageRef.current.value = "";
  };
  return (
    <Container maxW="container.lg" mt={4}>
      <Box as="form" onSubmit={submitHandler}>
        <HStack spacing={8} mb={4}>
          <FormControl id="email">
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              borderColor="gray.400"
              ref={emailRef}
              autoFocus
            />
          </FormControl>
          <FormControl id="name">
            <FormLabel>Your Name</FormLabel>
            <Input type="text" borderColor="gray.400" ref={nameRef} />
          </FormControl>
        </HStack>
        <FormControl id="message" mb={4}>
          <FormLabel>Your Message</FormLabel>
          <Textarea rows={6} borderColor="gray.400" ref={messageRef} />
        </FormControl>
        <Button type="submit">Submit</Button>
      </Box>
    </Container>
  );
}
