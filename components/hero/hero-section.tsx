"use client";
import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { Hero } from "@/lib/contentful";

interface HeroSectionProps {
  hero: Hero;
}

export const HeroSection = ({ hero }: HeroSectionProps) => {
  return (
    <div className="relative w-full min-h-screen lg:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={hero.backgroundImage}
        alt="Hero Background"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto mt-20">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-copperplate font-bold text-white uppercase tracking-[0.02em] leading-[1em]
                     text-4xl md:text-6xl lg:text-hero-heading mb-6"
        >
          {hero.headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-body text-white-dim text-lg lg:text-sub-heading leading-[1.15em] max-w-2xl mb-12"
        >
          {hero.subtext}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <Button
            asChild
            variant="primary"
            className="w-44 h-14 text-lg font-bold font-body"
          >
            <Link href="/plan-your-visit">Join us</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="w-44 h-14 text-lg font-bold font-body"
          >
            <Link href="/sermons">Get inspired</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
