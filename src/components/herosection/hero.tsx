"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function Hero() {
  return <HeroParallax products={products} />;
}

const products = [
  {
    title: "Business",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/images/hero/rogue-motors.svg",
  },
  {
    title: "E-commerce",
    link: "https://cursor.so",
    thumbnail:
      "/images/hero/karbhawan-next.svg",
  },
  {
    title: "Landing page",
    link: "https://userogue.com",
    thumbnail:
      "/images/hero/premium-landing-page.svg",
  },
  {
    title: "Static Website",
    link: "https://editorially.org",
    thumbnail:
      "/images/hero/buydsc.svg",
  },
  {
    title: "Portfolio",
    link: "https://editrix.ai",
    thumbnail:
      "/images/hero/portfolio.svg",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
  {
    title: "Law Firm ",
    link: "https://algochurn.com",
    thumbnail:
      "/images/hero/lawfirm.svg",
  },
  {
    title: "Skillnox - Mobile APP",
    link: "https://ui.aceternity.com",
    thumbnail:
      "/images/hero/skillnox.svg",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },
  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
