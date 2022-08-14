import { useColorMode } from "@chakra-ui/color-mode";
import { Circle, Stack, Flex, Box, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import React from "react";

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Stack>
      <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px"alignSelf="flex-end"/>
      <Flex direction={isNotSmallerScreen ? "row" : "column"} spacing="200px" p={isNotSmallerScreen ? "32" : "0"} alignSelf="flex-start">
        <Box mt={isNotSmallerScreen ? "0" : "16"} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold"> Hi 👋, I am </Text>
          <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" > Jeni Lutfi Fauzi </Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>Jika kita andaikan hujan itu runtutan masalah dan payung itu sabar,
           memang payung tidak bisa menghentikan hujan, tapi bisa menahan derasnya air hujan ✨</Text>
          <Button mt="8" colorScheme='purple'onClick={() =>
                        window.open("https://instagram.com/jeni_lf")
                    }>Click me</Button>

        </Box>
        <Image alignSelf={"center"} mt={isNotSmallerScreen ? 0 : 12}
          mb={isNotSmallerScreen ? 0 : 12 } borderRadius="full" 
          backgroundColor="transparent" boxShadow="lg"
          boxSize="300px" src="https://avatars.githubusercontent.com/u/61114044?v=4" />
      </Flex>
    </Stack>
  );
}

export default Header;
