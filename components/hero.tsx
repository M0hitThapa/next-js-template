import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { SubHeading } from "./subheading";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { LandingImages } from "./landing-images";

export const Hero = () => {
  return (
    <div className="pt-10 md:pt-20 lg:pt-32">
      <Container>
        <Heading as="h1">
          Agents that do the work <br /> Approval that keeps you safe.
        </Heading>
        <SubHeading className="py-8">
          Curious developers build meaningful products by learning continuously,
          collaborating openly, embracing challenges, refining.
        </SubHeading>
        <div className="flex items-center gap-6">
          <Button className="shadow-brand">Start your free trial</Button>
          <Button asChild variant="outline">
            <Link href="/">View role based demos</Link>
          </Button>
        </div>
        <LandingImages />
      </Container>
    </div>
  );
};
