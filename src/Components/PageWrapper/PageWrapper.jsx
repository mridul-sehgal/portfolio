/* eslint-disable react/prop-types */

import { motion } from "framer-motion";

const slideVariants = {
  initial: { x: "100vw", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "-100vw", opacity: 0 },
};

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
