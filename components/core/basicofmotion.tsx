"use client";
import { motion } from "framer-motion";
export default function Basicofframer() {
  return (
    <div className="h-full w-full grid place-content-center">
      <motion.div
        initial={{ rotate: "0deg" }}
        animate={{ rotate: "180deg" }}
        transition={{ duration: 1, type: "spring" }}
        className=" h-[200px] w-[200px] bg-black rounded-sm"
      ></motion.div>
    </div>
  );
}
