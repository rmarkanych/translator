import { FC } from 'react';
import { Box, Spinner as CustomSpinner } from '@chakra-ui/react';

export const Spinner: FC = () => (
  <Box display={'flex'} justifyContent={'center'}>
    <CustomSpinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='teal'
      size='xl'
    />
  </Box>
);
