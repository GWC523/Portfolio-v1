import React, { useEffect, useRef, useState } from "react";

type ConsoleTextProps = {
  text: string;
  speed?: number;
  cursor?: boolean;
  cursorChar?: string;
};

const ConsoleText: React.FC<ConsoleTextProps> = ({
  text,
  speed = 10,
  cursor = true,
  cursorChar = "_",
}) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(cursor);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prevText) => prevText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        setShowCursor((prevShowCursor) => !prevShowCursor);
        clearInterval(intervalRef.current);
      }
    }, speed);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [index, text, speed]);

  return (
    <>
      {displayText}
      {showCursor && <span>{cursorChar}</span>}
    </>
  );
};

export default ConsoleText;
