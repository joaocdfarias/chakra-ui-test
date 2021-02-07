import React from 'react';

import {
  ChakraProvider,
  Container,
  Box,
  Grid,
  GridItem,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';

function Layout() {
  return (
    <>
      <ChakraProvider>
        <Container maxW="6xl" centerContent>
          <Box padding="4" bg="gray.100" w="100%">
            <Grid
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(5, 1fr)"
              gap={4}
            >
              <GridItem rowSpan={2} colSpan={1}>
                <Box p={4} bg="gray.50" borderRadius="lg">
                  <UnorderedList>
                    <ListItem>Perfil</ListItem>
                    <ListItem>Amigos</ListItem>
                    <ListItem>Configurações</ListItem>
                  </UnorderedList>
                </Box>
              </GridItem>
              <GridItem rowSpan={2} colSpan={4}>
                <Box p={4} bg="gray.50" borderRadius="lg"></Box>
              </GridItem>
            </Grid>
          </Box>
        </Container>
      </ChakraProvider>
    </>
  );
}

export default Layout;
