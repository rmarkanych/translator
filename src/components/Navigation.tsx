import {
  Flex,
  Heading,
  Spacer,
  ButtonGroup,
  Button,
  Box,
} from '@chakra-ui/react';
import { FC } from 'react';
import { ColorModeToggler } from './ColorModeToggler';
import { Outlet, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

export const Navigation: FC = () => {
  const currentURL = window.location.pathname;

  const URL = '/'

  const navigate = useNavigate()

  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
  try {
    await logOut();
     await navigate(URL)
  } catch (error) {
    console.log(error);
  }
 };

  return (
    <>
      <Box px={'1rem'} py={'2rem'}>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Box>
            <Heading size='sm'>Translate App</Heading>
          </Box>
          <Spacer />
          {currentURL !== URL && (
            <Box display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <p>Welcome:</p>
              <Box display={'flex'} gap='2'>
                <img
                  style={{ width: '25px', borderRadius: '50%' }}
                  src={user?.photoURL || ''}
                  alt='avatar'
                />
                <div>{user?.displayName?.split(' ')[0]}</div>
              </Box>
            </Box>
          )}
          <Spacer />
          <Box>
            <ButtonGroup>
              {currentURL !== URL && (
                <Button onClick={handleSignOut} colorScheme='teal'>
                  Log out
                </Button>
              )}
              <ColorModeToggler />
            </ButtonGroup>
          </Box>
        </Flex>
      </Box>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        px={'1rem'}
        py={0}
      >
        <Outlet />
      </Box>
    </>
  );
};

