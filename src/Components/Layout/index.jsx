import React from 'react';

import {
  ChakraProvider,
  Box,
  Grid,
  GridItem,
  ListIcon,
  ListItem,
  List,
  Text,
} from '@chakra-ui/react';

import { InfoIcon, StarIcon, SettingsIcon } from '@chakra-ui/icons';

function Layout() {
  return (
    <>
      <ChakraProvider>
        <Box color="gray.100" padding="4" w="100%">
          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={2} colSpan={1}>
              <Box p={4} bg="gray.700" boxShadow="base" borderRadius="lg">
                <Text fontSize="2xl" mb={3}>
                  Menu
                </Text>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={InfoIcon} />
                    Dispositivos
                  </ListItem>
                  <ListItem>
                    <ListIcon as={StarIcon} />
                    Favoritos
                  </ListItem>
                  <ListItem>
                    <ListIcon as={SettingsIcon} />
                    Configurações
                  </ListItem>
                </List>
              </Box>
            </GridItem>
            <GridItem rowSpan={2} colSpan={4}>
              <Text fontSize="3xl">Dispositivos conectados</Text>
              <Box p={4} bg="gray.700" boxShadow="base" borderRadius="lg"></Box>
            </GridItem>
          </Grid>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default Layout;
