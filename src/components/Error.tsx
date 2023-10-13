import { Box, Button, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Error: FC = () => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      h='100vh'
      w='100%'
    >
      <Text>Oops!</Text>
      <Text>Something went wrong!</Text>
      <Text>Not found</Text>
      <Link to={'/translation'}>
        You can return
        <Button ml='2'>Home</Button>
      </Link>
    </Box>
  );
};
