import { useState, ChangeEvent, FormEvent, FC } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { Input, Button, Text, Box, Spinner } from '@chakra-ui/react';

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

    const encodedParams = new URLSearchParams();

    encodedParams.set('source_language', sourceLanguage);
    encodedParams.set('target_language', targetLanguage);
    encodedParams.set('text', text);

    const options: AxiosRequestConfig = {
      method: 'POST',
      url: 'https://text-translator2.p.rapidapi.com/translate',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '7a161dec9bmsh06dcda20021daeap1e1e75jsn2426b51b2950',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com',
      },
      data: encodedParams,
    };

    try {
      const { data } = await axios.request(options);
      setTranslatedText(data.data.translatedText), setText('');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setTranslatedText(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box style={{ display: 'flex', justifyContent: 'center', gap: '5px' }}>
        <Text fontSize='xl' mt='2'>
          Translation Language:
        </Text>
        <Button mt='2' onClick={changeLanguage}>
          {isEnglishToUkrainian ? 'UK' : 'EN'}
        </Button>
      </Box>
      <Box
        style={{
          display: 'flex',
          marginTop: '20px',
          marginBottom: '20px',
          gap: '10px',
        }}
      >
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
        <Box style={{ display: 'flex', justifyContent: 'center' }}>
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='teal'
            size='xl'
          />
        </Box>
      ) : (
        translatedText && (
          <Box mt='5'>
            <Text fontSize='xl'>Translation:</Text>
            <Text fontSize='xl'>{translatedText}</Text>
          </Box>
        )
      )}
    </form>
  );
};
