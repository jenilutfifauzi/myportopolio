import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Flex, VStack, Heading, Spacer } from '@chakra-ui/react';
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import Header from './component/Header';
import Profile from './component/Profile';
import Social from './component/Social';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';



  return (
    <VStack padding={5}>
      <Flex w="100%">
        <Heading
        ml="8" size="md" fontWeight="semibold" color="purple"> imJen</Heading>
        <Spacer></Spacer>
            <IconButton icon={<FaLinkedin />} isRound="true"></IconButton>
            <IconButton icon={<FaInstagram />} isRound="true" ></IconButton>
            <IconButton icon={<FaGithub />} isRound="true" ></IconButton>
            <IconButton icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode} ></IconButton>

      </Flex>
      <Header />
      <Social />
      <Profile />
    </VStack>
  );
}

export default App;
