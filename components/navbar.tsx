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
    <div className="border-b border-neutral-200 dark:border-neutral-800">
      <DesktopNavbar />
      <MobileNavbar />
    </div>
  );
};

export const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex md:hidden px-4 py-2 justify-between relative">
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
            className="fixed inset-0 h-full w-full bg-white"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-2 top-2"
            >
              <IconX />
            </button>
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
