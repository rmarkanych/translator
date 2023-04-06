import TranslateForm from "./components/TranslateForm";
import { ColorModeToggler } from "./components/ColorModeToggler";
import {
  Box,
  Flex,
  Heading,
  Spacer,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

const App = () => {
  return (
    <Box>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading size="md">Translate App</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <Button colorScheme="teal">Sign Up</Button>
          <Button colorScheme="teal">Log in</Button>
          <ColorModeToggler />
        </ButtonGroup>
      </Flex>
      <Box mt="5">
        <TranslateForm />
      </Box>
    </Box>
  );
};

export default App;
