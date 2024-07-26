import { useState } from "react";
import MyButton from "../../components/myButton/myButton";
import { Consultation07Wrapper, Result, Text, Error } from "./styles";

export default function Consultation7() {
  const randomJokeUrl = "https://official-joke-api.appspot.com/random_joke";
  const [joke, setJoke] = useState("");
  const [error, setError] = useState("");

  const getJokes = async () => {
      const response = await fetch(randomJokeUrl);
      const result = await response.json();
      console.log(response);
      console.log(result);
      
  };
  return (
    <Consultation07Wrapper>
      <MyButton name="Get Joke" type="submit" onClick={getJokes} />
      <Result>
        <Text></Text>
        <Error></Error>
      </Result>
    </Consultation07Wrapper>
  );
}
