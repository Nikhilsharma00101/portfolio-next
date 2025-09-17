"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Skill {
  name: string;
  desc: string;
  orbitRadius: number;
  size: number;
  duration: number;
  icon: string;
}

interface Star {
  width: number;
  height: number;
  top: number; // numeric for drift
  left: number;
  opacity: number;
  driftX: number;
  driftY: number;
}

const orbitItems: Skill[] = [
  { name: "React", desc: "Building dynamic UIs with React.js", orbitRadius: 160, size: 50, duration: 18, icon: "/images/logos/react.svg" },
  { name: "Next.js", desc: "Fullstack web apps with Next.js", orbitRadius: 200, size: 50, duration: 22, icon: "/images/logos/nextjs.svg" },
  { name: "Tailwind", desc: "Crafting responsive designs", orbitRadius: 240, size: 50, duration: 26, icon: "/images/logos/tailwindcss.svg" },
  { name: "MongoDB", desc: "Scalable NoSQL database", orbitRadius: 280, size: 50, duration: 30, icon: "/images/logos/mongodb.svg" },
  { name: "Node.js", desc: "Backend APIs with Node.js", orbitRadius: 320, size: 50, duration: 34, icon: "/images/logos/nodejs.svg" },
  { name: "Express", desc: "Fast server frameworks", orbitRadius: 360, size: 50, duration: 38, icon: "/images/logos/expressjs.png" },
  { name: "TypeScript", desc: "Typed JavaScript for robust apps", orbitRadius: 400, size: 50, duration: 42, icon: "/images/logos/typescript.svg" },
  { name: "Redux", desc: "State management made easy", orbitRadius: 440, size: 50, duration: 46, icon: "/images/logos/redux.svg" },
  { name: "Git", desc: "Version control expertise", orbitRadius: 480, size: 50, duration: 50, icon: "/images/logos/git.svg" },
  { name: "Cloudinary", desc: "Image & media hosting", orbitRadius: 520, size: 50, duration: 54, icon: "/images/logos/cloudinary.svg" },
];

export default function OrbitingSkills() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [stars, setStars] = useState<Star[]>([]);

  // Generate stars
  const generateStars = (count = 120) =>
    Array.from({ length: count }, () => ({
      width: Math.random() * 3 + 1,
      height: Math.random() * 3 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random(),
      driftX: (Math.random() - 0.5) * 0.05, // subtle drift
      driftY: (Math.random() - 0.5) * 0.05,
    }));

  // Initial stars on mount
  useEffect(() => {
    setStars(generateStars());
  }, []);

  // Twinkle effect
  useEffect(() => {
    const interval = setInterval(() => {
      setStars((prev) =>
        prev.map((star) => ({
          ...star,
          opacity: Math.random(),
        }))
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Drift effect (updates position every frame)
  useEffect(() => {
    let frame: number;
    const drift = () => {
      setStars((prev) =>
        prev.map((star) => {
          let newTop = star.top + star.driftY;
          let newLeft = star.left + star.driftX;

          // wrap around edges
          if (newTop < 0) newTop = 100;
          if (newTop > 100) newTop = 0;
          if (newLeft < 0) newLeft = 100;
          if (newLeft > 100) newLeft = 0;

          return { ...star, top: newTop, left: newLeft };
        })
      );
      frame = requestAnimationFrame(drift);
    };
    frame = requestAnimationFrame(drift);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Regenerate stars on hover
  const handleHover = (name: string) => {
    setHovered(name);
    setStars(generateStars());
  };

  return (
    <section className="relative w-full h-[1300px] bg-black flex flex-col items-center justify-center overflow-hidden mt-20">
      {/* Heading */}
      <h2 className="absolute top-10 text-3xl md:text-5xl font-bold text-center text-white z-30">
        Orbiting the <span className="text-cyan-400">Cosmos of Code</span>
      </h2>

      {/* Central Sun */}
      <div className="relative z-20 flex items-center justify-center">
        <div className="w-[88px] h-[88px] md:w-[140px] md:h-[140px] rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white text-l md:text-2xl font-heading font-bold shadow-[0_0_30px_rgba(0,255,255,0.8)]">
          Dev Core
        </div>
      </div>

      {/* Orbits + Planets */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        {orbitItems.map((item, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-cyan-400/20 pointer-events-none"
            style={{
              width: item.orbitRadius * 2,
              height: item.orbitRadius * 2,
              left: `calc(50% - ${item.orbitRadius}px)`,
              top: `calc(50% - ${item.orbitRadius}px)`,
            }}
          />
        ))}

        {orbitItems.map((item, i) => (
          <motion.div
            key={i}
            className="absolute flex items-center justify-center pointer-events-none"
            style={{
              width: item.orbitRadius * 2,
              height: item.orbitRadius * 2,
              left: `calc(50% - ${item.orbitRadius}px)`,
              top: `calc(50% - ${item.orbitRadius}px)`,
            }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: item.duration, ease: "linear" }}
          >
            <div
              className="absolute flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_30px_rgba(0,255,255,0.8)] cursor-pointer z-50 pointer-events-auto"
              style={{
                width: item.size,
                height: item.size,
                top: -item.size / 2,
                left: `calc(50% - ${item.size / 2}px)`,
              }}
              onMouseEnter={() => handleHover(item.name)}
              onMouseLeave={() => setHovered(null)}
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={item.size - 10}
                height={item.size - 10}
                className="object-contain"
              />

              {hovered === item.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute -top-20 left-1/2 -translate-x-1/2 w-48 p-3 text-sm bg-black/80 backdrop-blur-md border border-cyan-500 text-cyan-100 rounded-lg shadow-xl z-[999]"
                >
                  <p className="font-bold">{item.name}</p>
                  <p className="text-xs text-cyan-200 mt-1">{item.desc}</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Starry background */}
      <div className="absolute w-full h-full z-10">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full transition-all duration-1000 ease-in-out"
            style={{
              width: star.width,
              height: star.height,
              top: `${star.top}%`,
              left: `${star.left}%`,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>
    </section>
  );
}
