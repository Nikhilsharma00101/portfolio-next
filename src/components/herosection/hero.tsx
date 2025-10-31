"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function Hero() {
  return <HeroParallax products={projects} />;
}

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

const projects = [
  {
    id: "proj-001",
    title: "Rogue Motors - Car Company Website",
    thumbnail: "/images/projects/rogue-motors.svg",
    // thumbnail: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_400,h_250,c_fill,q_auto,f_auto/rogue-motors_cpxu0j.svg`,
    videoUrl: `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1758738802/KarBhawan_Car_Accessories_Expert_Doorstep_Installation_Delhi_-_Google_Chrome_2025-09-23_19-52-43_-_COMPRESS_c6xzqh.mp4`,
  },
  {
    id: "proj-002",
    title: "Karbhawan - Premium Car Accessories E-commerce",
    thumbnail: "/images/projects/karbhawan.jpg",
    // thumbnail: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_400,h_250,c_fill,q_auto,f_auto/karbhawan-next_dkk2xa.svg`,
    videoUrl: `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1758737807/Karbhawan_-_Opera_2025-09-23_17-32-55_-_COMPRESS_i6jrgw.mp4`,
  },
  {
    id: "proj-003",
    title: "Premium Landing Page - Advocates & Law Firms",
    thumbnail: "/images/projects/premium-landing-page.jpg",
    // thumbnail: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_400,h_250,c_fill,q_auto,f_auto/premium-landing-page_akb5tm.svg`,
    videoUrl: `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1758739259/landing-page-premium_-_Opera_2025-09-23_17-06-10_-_COMPRESS_qezahm.mp4`,
  },
  {
    id: "proj-004",
    title: "buydsc - Static Website",
    thumbnail: "/images/projects/buydsc.svg",
    // thumbnail: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_400,h_250,c_fill,q_auto,f_auto/buydsc_thf3jq.svg`,
    videoUrl: `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1758739480/Home_-_Opera_2025-09-23_19-04-17_-_COMPRESS_yflyzq.mp4`,
  },
  {
    id: "proj-005",
    title: "Premium Portfolio",
    thumbnail: "/images/projects/portfolio.jpg",
    // thumbnail: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_400,h_250,c_fill,q_auto,f_auto/Group_1_podofv.jpg`,
    videoUrl: `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1758739173/Royal_Portfolio_-_Opera_2025-09-23_20-14-45_-_COMPRESS_fjyxng.mp4`,
  },
  {
    id: "proj-006",
    title: "Basic Landing Page",
    thumbnail: "/images/projects/basic-page.png",
    // thumbnail: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_400,h_250,c_fill,q_auto,f_auto/basic-page_lkuyuh.png`,
    videoUrl: `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1758739385/Landing_Page_Basic_-_Google_Chrome_2025-09-23_20-30-12_zrnuqg.mp4`,
  },
  {
    id: "proj-007",
    title: "Standard Law Firm Landing Page",
    thumbnail: "/images/projects/standard-page.svg",
    // thumbnail: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_400,h_250,c_fill,q_auto,f_auto/lawfirm_tizs4m.svg`,
    videoUrl: `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1758739517/Standard_Landing_Page_-_Opera_2025-09-23_19-59-41_amfy66.mp4`,
  },
  {
    id: "proj-008",
    title: "Skillnox - Mobile APP",
    thumbnail: "/images/projects/skillnox.jpg",
    // thumbnail: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_400,h_250,c_fill,q_auto,f_auto/skillnox_wbttdr.svg`,
    videoUrl: `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1758739660/Untitled_design_ta3wxx.mp4`,
  },
  {
    id: "proj-009",
    title: "NyaySena - Law Firm Website",
    thumbnail: "/images/projects/law-firm.png",
    // thumbnail: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_400,h_250,c_fill,q_auto,f_auto/nyaysena_d9na0f.svg`,
    videoUrl: `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1758739590/Landing_Page_-_Google_Chrome_2025-09-24_00-48-49_jy7vk3.mp4`,
  },
];
