import React, { useEffect, useRef, useState } from "react";

type ConsoleTextProps = {
  text: string;
  speed?: number;
  cursor?: boolean;
  cursorChar?: string;
  delay?: number;
};

const ConsoleText: React.FC<ConsoleTextProps> = ({
  text,
  speed = 10,
  cursor = true,
  cursorChar = "_",
  delay = 0
}) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(cursor);
  const animationRef = useRef<number>();

  useEffect(() => {
    const updateDisplayText = (timestamp: number) => {
      if (index < text.length) {
        setDisplayText((prevText) => prevText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
        animationRef.current! = requestAnimationFrame(updateDisplayText);
      } else {
        setShowCursor((prevShowCursor) => !prevShowCursor);
      }
    };

    animationRef.current = requestAnimationFrame(updateDisplayText);

    return () => {
      cancelAnimationFrame(animationRef.current!);
    };
  }, [index, text]);

  return (
    <>
      {displayText}
      {showCursor && <span>{cursorChar}</span>}
    </>
  );
};

export default ConsoleText;
