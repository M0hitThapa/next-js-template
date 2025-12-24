"use client";
import React, { useState } from "react";
import { Container } from "./container";
import { Logo, LogoIcon } from "./logo";
import Link from "next/link";
import { Button } from "./ui/button";
import { IconLayoutSidebar, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
const NavLinks = [
  { title: "home", href: "/" },
  { title: "features", href: "/#features" },
  { title: "pricing", href: "/#pricing" },
  { title: "contact", href: "/#contact" },
];

export const Navbar = () => {
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800 ">
      <DesktopNavbar />
      <MobileNavbar />
    </div>
  );
};

export const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex md:hidden px-4  py-2 justify-between relative">
      <LogoIcon />
      <button onClick={() => setOpen(!open)}>
        <IconLayoutSidebar className="size-4" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1, backdropFilter: "blur(15px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{
              duration: 0.2,
            }}
            className="fixed inset-0 h-full w-full px-4 py-2 z-50"
          >
            <div className="flex justify-between">
              <LogoIcon />
              <button onClick={() => setOpen(false)}>
                <IconX />
              </button>
            </div>

            <div className="flex flex-col gap-6 my-10">
              {NavLinks.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  key={index + item.title}
                >
                  <Link
                    key={index}
                    href={item.href}
                    className="text-2xl text-neutral-600 dark:text-neutral-400 font-medium"
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/login"
                className="text-sm text-neutral-600 dark:text-neutral-400 font-medium"
              >
                login
              </Link>
              <Button>
                <Link href="/signup" className="text-sm  font-medium">
                  signup
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const DesktopNavbar = () => {
  return (
    <Container className="py-4  items-center hidden md:flex justify-between">
      <Logo />
      <div className="flex items-center gap-4">
        {NavLinks.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-sm text-neutral-600 dark:text-neutral-400 font-medium"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <Link
          href="/login"
          className="text-sm text-neutral-600 dark:text-neutral-400 font-medium"
        >
          login
        </Link>
        <Button>
          <Link href="/signup" className="text-sm  font-medium">
            signup
          </Link>
        </Button>
      </div>
    </Container>
  );
};
