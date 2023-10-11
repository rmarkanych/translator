import { TranslateForm } from './components/TranslateForm';
import { ColorModeToggler } from './components/ColorModeToggler';
import {
  Box,
  Flex,
  Heading,
  Spacer,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';
import { FC } from 'react';

export const App: FC = () => {
  return (
    <Box p={'2rem'}>
      <Flex minWidth='max-content' alignItems='center' gap='2'>
        <Box p='2'>
          <Heading size='md'>Translate App</Heading>
        </Box>
        <Spacer />
        <ButtonGroup>
          <Button colorScheme='teal'>Log in</Button>
          <ColorModeToggler />
        </ButtonGroup>
      </Flex>
      <Box mt='5'>
        <TranslateForm />
      </Box>
    </Box>
  );
};

