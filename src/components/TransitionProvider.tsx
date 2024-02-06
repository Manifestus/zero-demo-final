import { AnimatePresence, motion } from "framer-motion";

export default function TransitionProvider(props: {
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        exit={{ opacity: 0 }}
      >
        {props.children}
      </motion.div>
    </AnimatePresence>
  );
}
