"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "motion/react";
import React from "react";
import { Container } from "./container";

export const LandingImages = () => {
  return (
    <div className="relative min-h-140 w-full  perspective-distant  pt-20 pr-10 sm:pr-20">
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
          delay: 0.1,
        }}
        className="perspective-[4000px]"
      >
        <Image
          src="/hero-dash1.png"
          alt="hero dashboard"
          height={900}
          width={1720}
          className={cn(
            "absolute inset-0 rounded mask-r-from-40% mask-b-from-40% shadow-2xl"
          )}
          style={{
            transform: "rotateY(30deg) rotateX(40deg) rotateZ(-20deg)",
          }}
        />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: -200,
        }}
        animate={{
          opacity: 1,
          y: -10,
        }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
          delay: 0.5,
        }}
        className="perspective-[4000px] translate-x-10 sm:translate-x-30 -translate-y-10 md:-translate-y-20 lg:-translate-y-40"
      >
        <Image
          src="/hero-dash.png"
          alt="hero dashboard"
          height={900}
          width={1700}
          className={cn(
            "absolute inset-0 rounded mask-r-from-40% mask-b-from-40% shadow-2xl"
          )}
          style={{
            transform: "rotateY(30deg) rotateX(40deg) rotateZ(-20deg)",
          }}
        />
      </motion.div>
    </div>
  );
};
