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
  const animationStart = useRef<number | null>(null);

    useEffect(() => {
    const updateDisplayText = (timestamp: number) => {
        const elapsed = timestamp - animationStart.current!;
        const indexToAdd = Math.floor(elapsed / speed);
        if (indexToAdd > 0) {
        const newIndex = Math.min(index + indexToAdd, text.length);
        setDisplayText(text.slice(0, newIndex));
        setIndex(newIndex);
        }
        if (index < text.length) {
        animationRef.current = requestAnimationFrame(updateDisplayText);
        } else {
        setShowCursor((prevShowCursor) => !prevShowCursor);
        }
    };

    animationStart.current = window.performance.now();
    animationRef.current = requestAnimationFrame(updateDisplayText);

    return () => {
        cancelAnimationFrame(animationRef.current!);
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
