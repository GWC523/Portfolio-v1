import { CSSProperties, FC, PropsWithChildren, useRef } from "react";
import useElementOnScreen from "../../Helpers/useElementOnScreen";

const AnimateIn: FC<PropsWithChildren<{ from: CSSProperties; to: CSSProperties }>> = ({ from, to, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);
  const defaultStyles: CSSProperties = { 
    transition: "600ms ease-in-out",
  };
  return (
    <div
      ref={ref}
      style={
        onScreen
          ? {
            ...defaultStyles,
            ...to,
          }
        : {
            ...defaultStyles,
            ...from,
          }
        }
      >
        {children}
      </div> 
  );
};

export default AnimateIn;