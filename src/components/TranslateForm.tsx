import { useState, ChangeEvent, FormEvent } from "react";
import axios, { AxiosRequestConfig } from "axios";
import { Audio } from "react-loader-spinner";
import { Input, Button, Text, Box } from "@chakra-ui/react";

const TranslateForm = () => {
  
  const [text, setText] = useState<string>("");
  const [translatedText, setTranslatedText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setText(event.target.value);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);

    const encodedParams = new URLSearchParams();
    encodedParams.append("q", text);
    encodedParams.append("target", "uk");
    encodedParams.append("source", "en");

    const options: AxiosRequestConfig = {
      method: "POST",
      url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "application/gzip",
        "X-RapidAPI-Key": "7a161dec9bmsh06dcda20021daeap1e1e75jsn2426b51b2950",
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      },
      data: encodedParams,
    };

    try {
      const res = await axios.request(options);
      setTranslatedText(res.data.data.translations[0].translatedText);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", gap: "10px" }}>
        <Input
          placeholder="Enter some text on English"
          type="text"
          id="text"
          name="text"
          value={text}
          onChange={handleInputChange}
        />
        <Button
          type="submit"
          disabled={loading || text.trim().length === 0}
          colorScheme="teal"
        >
          Translate
        </Button>
      </div>
      {loading ? (
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <Audio height="80" width="80" color="green" ariaLabel="loading" />
        </Box>
      ) : (
        translatedText && (
          <Box mt="5">
            <Text fontSize="xl">Translation:</Text>
            <Text fontSize="xl">{translatedText}</Text>
          </Box>
        )
      )}
    </form>
  );
}

export default TranslateForm;
