"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

export default function LogoCloud() {
  const logos = [
    { title: "Claude", src: "/logo1.svg" },
    { title: "Google", src: "/logo2.svg" },
    { title: "Linkedin", src: "/logo3.svg" },
    { title: "Microsoft", src: "/logo4.svg" },
    { title: "OpenAI", src: "/logo5.svg" },
    { title: "Tesla", src: "/logo6.svg" },
  ];
  return (
    <section>
      <h2 className="text-center text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto text-lg font-bold">
        Trusted by modern operators across industries
        <br />
        <span className="text-neutral-400">
          {" "}
          from pilot to scale without chaos.
        </span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 max-w-3xl mx-auto">
        {logos.map((logo, index) => (
          <motion.div
            initial={{ opacity: 0, y: -10, filter: "blur(10px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: index * 0.1,
            }}
          >
            <Image
              key={logo.title}
              src={logo.src}
              height={100}
              width={100}
              alt={logo.title}
              className="size-20 object-contain mx-auto"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
