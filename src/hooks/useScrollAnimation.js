import { useRef } from "react";
import { useInView } from "framer-motion";

export const useScrollAnimation = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" }); // margin দিয়ে আগে trigger করানো যায়
  return { ref, inView };
};
