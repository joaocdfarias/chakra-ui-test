import React from 'react';
import { ChakraProvider, Box, Link, Flex, Spacer } from '@chakra-ui/react';

function Header() {
  return (
    <ChakraProvider>
      <Box bg="tomato" w="100%" p={4} color="white">
        <Flex alignItems="center">
          <h1>
            <Link fontSize="3xl">Logo</Link>
          </h1>
          <Spacer />
          <ul>
            <Link p={2} to="/">
              Home
            </Link>
            <Link p={2} to="/produtos">
              Produtos
            </Link>
            <Link p={2} to="/contato">
              Contato
            </Link>
          </ul>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default Header;
