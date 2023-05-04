import { FC, PropsWithChildren } from "react";
import AnimateIn from "./AnimateIn";

export const FadeIn: FC<PropsWithChildren> = ({ children }) => (
  <AnimateIn from={{ opacity: 0 }} to={{ opacity: 1 }}>
    {children}
  </AnimateIn>
);
export const FadeUp: FC<PropsWithChildren> = ({ children }) => (
  <AnimateIn
    from={{ opacity: 0, translate: "0 2rem" }}
    to={{ opacity: 1, translate: "none" }}
  >
    {children}
  </AnimateIn>
);
export const ScaleIn: FC<PropsWithChildren> = ({ children }) => (
  <AnimateIn from={{ scale: "0" }} to={{ scale: "1" }}>
    {children}
  </AnimateIn>
);

export const Animate = {
    FadeIn,
    FadeUp,
    ScaleIn
}