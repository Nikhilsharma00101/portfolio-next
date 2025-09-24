"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function Hero() {
  return <HeroParallax products={products} />;
}

const products = [
  {
    id: "proj-001",
    title: "Business",
    thumbnail: "/images/hero/rogue-motors.svg",
    videoUrl:
      "https://res.cloudinary.com/<your-cloud-name>/video/upload/f_auto,q_auto,br_auto/portfolio/videos/rogue-motors.mp4",
  },
  {
    id: "proj-002",
    title: "E-commerce",
    thumbnail: "/images/hero/karbhawan-next.svg",
    videoUrl:
      "https://res.cloudinary.com/dyk47o3ai/video/upload/v1758737807/Karbhawan_-_Opera_2025-09-23_17-32-55_-_COMPRESS_i6jrgw.mp4",
  },
  {
    id: "proj-003",
    title: "Landing page",
    thumbnail: "/images/hero/premium-landing-page.svg",
    videoUrl:
      "https://res.cloudinary.com/<your-cloud-name>/video/upload/f_auto,q_auto,br_auto/portfolio/videos/premium-page.mp4",
  },
  {
    id: "proj-004",
    title: "Static Website",
    thumbnail: "/images/hero/buydsc.svg",
    videoUrl:
      "https://res.cloudinary.com/<your-cloud-name>/video/upload/f_auto,q_auto,br_auto/portfolio/videos/buydsc.mp4",
  },
  {
    id: "proj-005",
    title: "Portfolio",
    thumbnail: "/images/hero/portfolio.svg",
    videoUrl:
      "https://res.cloudinary.com/<your-cloud-name>/video/upload/f_auto,q_auto,br_auto/portfolio/videos/portfolio.mp4",
  },
  {
    id: "proj-006",
    title: "Basic Landing page",
    thumbnail: "/images/hero/basic-page.png",
    videoUrl:
      "https://res.cloudinary.com/<your-cloud-name>/video/upload/f_auto,q_auto,br_auto/portfolio/videos/basic-page.mp4",
  },
  {
    id: "proj-007",
    title: "Law Firm",
    thumbnail: "/images/hero/lawfirm.svg",
    videoUrl:
      "https://res.cloudinary.com/<your-cloud-name>/video/upload/f_auto,q_auto,br_auto/portfolio/videos/law-firm.mp4",
  },
  {
    id: "proj-008",
    title: "Skillnox - Mobile APP",
    thumbnail: "/images/hero/skillnox.svg",
    videoUrl:
      "https://res.cloudinary.com/<your-cloud-name>/video/upload/f_auto,q_auto,br_auto/portfolio/videos/skillnox.mp4",
  },
  {
    id: "proj-009",
    title: "NyaySena",
    thumbnail: "/images/hero/nyaysena.svg",
    videoUrl:
      "https://res.cloudinary.com/<your-cloud-name>/video/upload/f_auto,q_auto,br_auto/portfolio/videos/nyaysena.mp4",
  },
  // {
  //   id: "proj-010",
  //   title: "SmartBridge",
  //   thumbnail: "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  //   videoUrl: "https://res.cloudinary.com/<your-cloud-name>/video/upload/f_auto,q_auto,br_auto/portfolio/videos/smartbridge.mp4",
  // },
  // {
  //   id: "proj-011",
  //   title: "Renderwork Studio",
  //   thumbnail: "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  //   videoUrl: "https://res.cloudinary.com/<your-cloud-name>/video/upload/f_auto,q_auto,br_auto/portfolio/videos/renderwork-studio.mp4",
  // },
  // {
  //   id: "proj-012",
  //   title: "Creme Digital",
  //   thumbnail: "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  //   videoUrl: "https://res.cloudinary.com/<your-cloud-name>/video/upload/f_auto,q_auto,br_auto/portfolio/videos/creme-digital.mp4",
  // },
  // {
  //   id: "proj-013",
  //   title: "Golden Bells Academy",
  //   thumbnail: "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  //   videoUrl: "https://res.cloudinary.com/<your-cloud-name>/video/upload/f_auto,q_auto,br_auto/portfolio/videos/golden-bells-academy.mp4",
  // },
  // {
  //   id: "proj-014",
  //   title: "Invoker Labs",
  //   thumbnail: "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  //   videoUrl: "https://res.cloudinary.com/<your-cloud-name>/video/upload/f_auto,q_auto,br_auto/portfolio/videos/invoker-labs.mp4",
  // },
  // {
  //   id: "proj-015",
  //   title: "E Free Invoice",
  //   thumbnail: "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  //   videoUrl: "https://res.cloudinary.com/<your-cloud-name>/video/upload/f_auto,q_auto,br_auto/portfolio/videos/e-free-invoice.mp4",
  // },
];
