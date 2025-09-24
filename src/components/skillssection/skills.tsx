"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, Moon, Rocket } from "lucide-react";

interface Skill {
  name: string;
  desc: string;
  icon: string;
}

const frontendSkills: Skill[] = [
  { name: "React", desc: "Building dynamic and interactive UIs", icon: "/images/logos/react.svg" },
  { name: "Next.js", desc: "Fullstack apps with server-side rendering and routing", icon: "/images/logos/nextjs.svg" },
  { name: "Tailwind", desc: "Crafting responsive, modern designs quickly", icon: "/images/logos/tailwindcss.svg" },
  { name: "TypeScript", desc: "Typed JavaScript for safer and scalable code", icon: "/images/logos/typescript.svg" },
];

const backendSkills: Skill[] = [
  { name: "Node.js", desc: "JavaScript runtime for server-side logic", icon: "/images/logos/nodejs.svg" },
  { name: "Express", desc: "Minimal and fast Node.js web framework", icon: "/images/logos/expressjs.png" },
  { name: "MongoDB", desc: "Flexible NoSQL database for scalable applications", icon: "/images/logos/mongodb.svg" },
  { name: "Firebase", desc: "Realtime database, authentication, and cloud functions", icon: "/images/logos/Firebase.svg" },
];

const toolsSkills: Skill[] = [
  { name: "Git", desc: "Version control for tracking and collaboration", icon: "/images/logos/git.svg" },
  { name: "Figma", desc: "UI/UX design and prototyping tool", icon: "/images/logos/figma.svg" },
  { name: "Cloudinary", desc: "Cloud media storage and optimization platform", icon: "/images/logos/cloudinary.svg" },
  { name: "Vercel", desc: "Deploy frontend and fullstack apps seamlessly", icon: "/images/logos/Vercel.svg" },
];

export default function OrbitingSkills() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [stars, setStars] = useState<{ top: string; left: string; size: number; opacity: number }[]>([]);
  const [activeTab, setActiveTab] = useState<"frontend" | "backend" | "tools">("frontend");
  const [tabKey, setTabKey] = useState(0);

  const getSkills = () => {
    if (activeTab === "frontend") return frontendSkills;
    if (activeTab === "backend") return backendSkills;
    return toolsSkills;
  };

  // Stars effect
  useEffect(() => {
    const generateStars = () =>
      Array.from({ length: 120 }, () => ({
        size: Math.random() * 3 + 1,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: Math.random(),
      }));
    setStars(generateStars());
  }, [activeTab, hovered]);

  const tabConfig = [
    { key: "frontend", label: "Design Orbit", icon: <Sparkles size={18} /> },
    { key: "backend", label: "Engine Core", icon: <Moon size={18} /> },
    { key: "tools", label: "Command Station", icon: <Rocket size={18} /> },
  ] as const;

  return (
    <section className="relative w-full h-[900px] bg-black flex flex-col items-center justify-center overflow-hidden mt-20">
      {/* Tabs */}
      <div className="absolute top-5 flex space-x-2 md:space-x-4 z-30">
        {tabConfig.map((tab) => (
          <motion.button
            key={tab.key}
            onClick={() => {
              setActiveTab(tab.key);
              setTabKey((prev) => prev + 1);
            }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(0,255,255,0.6)" }}
            className={`px-5 py-2 text-xs md:text-xl rounded-full font-semibold flex items-center gap-2 transition-all border font-heading ${
              activeTab === tab.key
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-black border-cyan-400 animate-pulse"
                : "bg-transparent border-cyan-600/40 text-cyan-200 hover:text-white hover:border-cyan-400"
            }`}
          >
            {tab.icon}
            {tab.label}
          </motion.button>
        ))}
      </div>

      {/* Orbits + Sun + Planets */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={tabKey}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0, rotate: 180, transition: { duration: 0.8, ease: "easeIn" } }}
          >
            {/* Central Sun */}
            <motion.div
              className="absolute z-20 flex items-center justify-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { delay: 0.6 } }}
              exit={{ scale: 0, opacity: 0 }}
            >
              <div className="w-[88px] h-[88px] md:w-[140px] md:h-[140px] rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white text-l md:text-2xl font-heading font-bold shadow-[0_0_40px_rgba(0,255,255,0.9)]">
                Dev Core
              </div>
            </motion.div>

            {/* Planets */}
            {getSkills().map((item, i) => {
              const baseRadius = 160;
              const gap = 60;
              const orbitRadius = baseRadius + i * gap;
              const size = 50;
              const orbitDuration = 18 + i * 4;
              const selfRotationDuration = 6;

              return (
                <motion.div
                  key={item.name}
                  className="absolute flex items-center justify-center pointer-events-none"
                  style={{
                    width: orbitRadius * 2,
                    height: orbitRadius * 2,
                    left: `calc(50% - ${orbitRadius}px)`,
                    top: `calc(50% - ${orbitRadius}px)`,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: orbitDuration, ease: "linear" }}
                >
                  {/* Orbit Ring */}
                  <div
                    className="absolute rounded-full border border-cyan-400/20 pointer-events-none"
                    style={{ width: orbitRadius * 2, height: orbitRadius * 2 }}
                  />

                  {/* Planet wrapper */}
                  <div
                    className="absolute top-0 left-1/2 flex flex-col items-center"
                    style={{ transform: `translateX(-50%) translateY(${-size / 2}px)` }}
                  >
                    {/* Planet spinning itself */}
                    <div
                      className="flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_30px_rgba(0,255,255,0.8)] cursor-pointer z-[60] pointer-events-auto animate-spin"
                      style={{ width: size, height: size, animationDuration: `${selfRotationDuration}s` }}
                      onMouseEnter={() => setHovered(item.name)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <Image src={item.icon} alt={item.name} width={size - 10} height={size - 10} />
                    </div>

                    {/* Tooltip (counter-rotate to stay upright) */}
                    {hovered === item.name && (
                      <motion.div
                        className="absolute -top-16 left-1/2 w-48 p-3 text-sm bg-black/80 backdrop-blur-md border border-cyan-500 text-cyan-100 rounded-lg shadow-xl z-[999] text-center"
                        style={{ transform: "translateX(-50%)" }}
                        animate={{ rotate: -360 }}
                        transition={{ repeat: Infinity, duration: orbitDuration, ease: "linear" }}
                      >
                        <p className="font-bold">{item.name}</p>
                        <p className="text-xs text-cyan-200 mt-1">{item.desc}</p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Black Hole pulse */}
      <AnimatePresence>
        <motion.div
          key={`hole-${tabKey}`}
          className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-black via-cyan-900 to-black z-10"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0.5], transition: { duration: 1.2 } }}
          exit={{ scale: 0, opacity: 0, transition: { duration: 0.6 } }}
        />
      </AnimatePresence>

      {/* Stars */}
      <div className="absolute w-full h-full z-0 pointer-events-none">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{ width: star.size, height: star.size, top: star.top, left: star.left, opacity: star.opacity }}
          />
        ))}
      </div>
    </section>
  );
}
