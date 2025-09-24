"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  User,
  Briefcase,
  Award,
  MessageSquare,
  Phone,
  Zap,
} from "lucide-react";

type Meteor = {
  left: string;
  animationDelay: string;
  animationDuration: string;
  rotation: string;
};

function useMeteors(count: number) {
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: count }).map(() => ({
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 6}s`,
      animationDuration: `${4 + Math.random() * 6}s`,
      rotation: `${-25 + Math.random() * 50}deg`,
    }));
    setMeteors(generated);
  }, [count]);

  return meteors;
}

export default function Footer() {
  const navLinks = [
  { name: "About", href: "#about", icon: <User size={16} /> },
  { name: "Skills", href: "#skills", icon: <Zap size={16} /> },
  { name: "Projects", href: "#projects", icon: <Briefcase size={16} /> },
  { name: "Certificates", href: "#certificates", icon: <Award size={16} /> },
  { name: "Testimonials", href: "#testimonials", icon: <MessageSquare size={16} /> },
  { name: "Contact", href: "#contact", icon: <Phone size={16} /> },
];

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/yourusername" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/yourusername" },
    { icon: <Mail size={20} />, href: "mailto:yourmail@example.com" },
  ];

  const meteors = useMeteors(10);

  return (
    <footer className="relative text-white overflow-hidden border-t border-gray-800">
      {/* Sparkles Background */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={2}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#3B82F6"
        />
        <div className="absolute inset-0 w-full h-full bg-black/40"></div>
      </div>

      {/* Meteors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {meteors.map((m, i) => (
          <span
            key={i}
            className="meteor-wrapper"
            style={{
              left: m.left,
              top: "-10%",
              transform: `rotate(${m.rotation})`,
            }}
          >
            <span
              className="meteor-tail"
              style={{
                animationDelay: m.animationDelay,
                animationDuration: m.animationDuration,
              }}
            />
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-12 flex flex-col gap-10">
        {/* Top Row: Logo + Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <Link
            href="/"
            
          >
            <h1 className="text-xs md:text-xl font-bold tracking-wide text-white drop-shadow-md">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400">
                ★彡
              </span>
              [ɴɪᴋʜɪʟ ꜱʜᴀʀᴍᴀ]
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400">
                彡★
              </span>
            </h1>
          </Link>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-black/30 hover:bg-blue-500 transition text-white shadow-md shadow-blue-500/20 hover:shadow-blue-500/40"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 font-medium text-gray-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-2 transition-colors duration-300 hover:text-sky-400"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Bottom copyright */}
        <div className="text-center text-gray-500 text-sm pb-12 md:pb-6">
          &copy; {new Date().getFullYear()} ɴɪᴋʜɪʟ ꜱʜᴀʀᴍᴀ. All rights reserved.
        </div>
      </div>

      {/* Meteor CSS */}
      <style jsx>{`
        .meteor-wrapper {
          position: absolute;
          top: -10%;
          pointer-events: none;
          width: 0;
          height: 0;
          overflow: visible;
          will-change: transform;
        }

        .meteor-tail {
          display: block;
          width: 3px;
          height: 140px;
          margin-left: -1.5px;
          border-radius: 999px;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0) 0%,
            rgba(96, 165, 250, 0.15) 35%,
            rgba(96, 165, 250, 0.55) 70%,
            rgba(96, 165, 250, 1) 100%
          );
          filter: blur(0.6px) drop-shadow(0 0 6px rgba(96, 165, 250, 0.6));
          transform-origin: top center;
          animation-name: meteor-slide;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          opacity: 0;
        }

        @keyframes meteor-slide {
          0% {
            transform: translateY(-40vh);
            opacity: 0;
          }
          8% {
            opacity: 1;
          }
          100% {
            transform: translateY(120vh);
            opacity: 0;
          }
        }

        @media (max-width: 640px) {
          .meteor-tail {
            height: 90px;
            width: 2px;
            margin-left: -1px;
          }
        }
      `}</style>
    </footer>
  );
}
