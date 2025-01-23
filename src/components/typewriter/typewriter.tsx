import { Typewriter } from "react-simple-typewriter";

export const TypingEffect = ( { words } : { words: Array<string> } ) => {
  return (
      <Typewriter
        words={words}
        loop={5}
        cursor
        cursorStyle="|"
        typeSpeed={50}
        deleteSpeed={30}
        delaySpeed={1000}
      />
  );
};
