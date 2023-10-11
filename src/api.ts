import axios, { AxiosResponse } from 'axios';

interface ITranslationResponse {
  data: {
    translatedText: string;
  };
}

export const makeTranslationRequest = async (
  sourceLanguage: string,
  targetLanguage: string,
  text: string
) => {
  const encodedParams = new URLSearchParams();

  encodedParams.set('source_language', sourceLanguage);
  encodedParams.set('target_language', targetLanguage);
  encodedParams.set('text', text);

  const options = {
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
    const { data }: AxiosResponse<ITranslationResponse> = await axios.request(
      options
    );
    return data.data.translatedText;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return error.response.data.message;
      } else {
        return error.message;
      }
    }
  }
};
