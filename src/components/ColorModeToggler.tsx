import { Button, useColorMode } from "@chakra-ui/react";

export const ColorModeToggler = () => {
    
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Button onClick={toggleColorMode} size="m" colorScheme="teal" p="2.5">
        {colorMode === "light" ? "🌑" : "☀️"}
      </Button>
    </>
  );
};
