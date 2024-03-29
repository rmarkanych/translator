import { useState, ChangeEvent, FormEvent, FC } from 'react';
import { AxiosError } from 'axios';
import { Input, Button, Text, Box } from '@chakra-ui/react';
import { Spinner } from './Spinner';
import { makeTranslationRequest } from '../services/api';

export const TranslateForm: FC = () => {
  const [text, setText] = useState<string>('');
  const [translatedText, setTranslatedText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [isEnglishToUkrainian, setIsEnglishToUkrainian] =
    useState<boolean>(true);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setText(event.target.value);

  const changeLanguage = () => [
    setIsEnglishToUkrainian((prev) => !prev),
    setText(''),
  ];

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (text.trim().length === 0) {
      return;
    }

    setLoading(true);

    const sourceLanguage = isEnglishToUkrainian ? 'en' : 'uk';
    const targetLanguage = isEnglishToUkrainian ? 'uk' : 'en';

    try {
      const translatedText = await makeTranslationRequest(
        sourceLanguage,
        targetLanguage,
        text
      );

      setTranslatedText(translatedText);
      setText('');
    } catch (error) {
      setText((error as AxiosError)?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form style={{width: '100%'}} onSubmit={handleSubmit}>
      <Box display={'flex'} justifyContent={'center'} gap={'5px'}>
        <Text fontSize='xl' mt='2'>
          Translation Language:
        </Text>
        <Button mt='2' onClick={changeLanguage}>
          {isEnglishToUkrainian ? 'UK' : 'EN'}
        </Button>
      </Box>
      <Box display={'flex'} mx={0} my={5} gap={5}>
        <Input
          placeholder={
            isEnglishToUkrainian
              ? 'Enter some text on English'
              : 'Enter some text on Ukrainian'
          }
          type='text'
          id='text'
          name='text'
          value={text}
          onChange={handleInputChange}
        />
        <Button type='submit' disabled={loading} colorScheme='teal'>
          Translate
        </Button>
      </Box>
      {loading ? (
        <Spinner />
      ) : (
        translatedText && (
            <Box mt='5'
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}
            >
            <Text fontSize='xl'>Translation:</Text>
            <Text fontSize='xl'>{translatedText}</Text>
          </Box>
        )
      )}
    </form>
  );
};
