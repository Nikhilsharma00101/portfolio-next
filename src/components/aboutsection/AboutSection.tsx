"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface InfoCard {
  id: number;
  title: string;
  description: string;
  color: string;
  desktopX: number;
  desktopY: number;
  desktopRotate: number;
}

export default function PremiumAboutMeSection() {
  const [cards] = useState<InfoCard[]>([
    {
      id: 1,
      title: "Who I Am",
      description:
        "Full-stack developer blending creativity with logic. Turning caffeine and curiosity into full-stack magic.",
      color: "#1E40AF",
      desktopX: -770,
      desktopY: -330,
      desktopRotate: 10,
    },
    {
      id: 2,
      title: "Flow State",
      description: "Once I start coding, hours feel like minutes",
      color: "#0EA5E9",
      desktopX: 520,
      desktopY: -330,
      desktopRotate: -10,
    },
    {
      id: 3,
      title: "Hobbies",
      description: "Beats, discoveries, and the cosmos — that's what keeps my curiosity spinning.",
      color: "#22D3EE",
      desktopX: -770,
      desktopY: 170,
      desktopRotate: -10,
    },
    {
      id: 4,
      title: "Always Learning",
      description:
        "Experimenting with new frameworks, libraries, and building futuristic projects.",
      color: "#3B82F6",
      desktopX: 520,
      desktopY: 170,
      desktopRotate: 10,
    },
    {
      id: 5,
      title: "My Toolbox",
      description:
        "React, Next.js, Node, MongoDB… basically an all-you-can-code buffet.",
      color: "#2563EB",
      desktopX: -770,
      desktopY: -80,
      desktopRotate: 8,
    },
    {
      id: 6,
      title: "Let’s Connect",
      description:
        "Open to collaborations & freelance projects. Always up for building cool stuff.",
      color: "#0EA5E9",
      desktopX: 520,
      desktopY: -80,
      desktopRotate: -8,
    },
  ]);

  return (
    <section className="w-full min-h-[90vh] flex flex-col justify-center items-center relative overflow-hidden bg-black">
      {/* Heading */}
      <h2 className="relative text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 mb-16 tracking-wide font-heading">
        About Me
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-400/60 rounded-full blur-md"></span>
      </h2>

      {/* Profile with glowing rings */}
      <div className="relative w-56 h-56 flex justify-center items-center">
        {/* Gradient halo */}
        <div className="absolute w-60 h-60 rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-purple-500 opacity-20" />

        {/* Glowing rings */}
        <div
          className="absolute w-72 h-72 border border-blue-400/40 rounded-full"
          style={{ boxShadow: "0 0 60px rgba(59,130,246,0.4)" }}
        />
        <div
          className="absolute w-64 h-64 border border-cyan-400/30 rounded-full"
          style={{ boxShadow: "0 0 40px rgba(14,165,233,0.3)" }}
        />

        {/* Profile Image */}
        <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-blue-400/60 shadow-xl shadow-blue-500/50 relative">
          <Image
            src="/images/myself.png"
            alt="Profile Picture"
            fill
            className="object-cover object-[50%_0%]" // custom X% Y% positioning
          />
        </div>

      </div>



      {/* Desktop custom-position cards */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        {cards.map((card, i) => (
          <motion.div
            key={card.id}
            drag
            dragElastic={0.2}
            dragMomentum={true}
            initial={{
              x: card.desktopX,
              y: card.desktopY,
              rotate: card.desktopRotate,
            }}
            whileHover={{
              scale: 1.1,
              rotate: card.desktopRotate + 3,
              y: card.desktopY - 8,
              boxShadow:
                "0 10px 30px rgba(59,130,246,0.6), 0 0 60px rgba(59,130,246,0.3), inset 0 0 15px rgba(14,165,233,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="absolute w-64 h-40 flex flex-col justify-center items-center rounded-3xl cursor-grab border border-blue-400/40 bg-gradient-to-br from-gray-800/70 via-gray-900/60 to-black/70 text-white backdrop-blur-xl p-4 pointer-events-auto"
            style={{ left: "50%", top: "50%", zIndex: cards.length - i }}
          >
            <h3 className="text-lg font-semibold text-blue-400 drop-shadow-md mb-1">
              {card.title}
            </h3>
            <p className="text-sm text-gray-300">{card.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Mobile fanned-out cards */}
      <div className="md:hidden absolute inset-0 flex justify-center items-center">
        {cards.map((card, i) => (
          <motion.div
            key={card.id}
            drag
            dragElastic={0.3}
            dragMomentum={true}
            initial={{
              rotate: -15 + i * 10,
              x: (i - (cards.length - 1) / 2) * 30,
              y: 80,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 8px 25px rgba(59,130,246,0.6), 0 0 40px rgba(59,130,246,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            whileDrag={{ zIndex: 999 }}
            className="absolute w-64 h-40 flex flex-col justify-center items-center rounded-3xl cursor-grab border border-blue-400/40 bg-gradient-to-br from-gray-800/80 via-gray-900/70 to-black/80 text-white backdrop-blur-xl p-4"
            style={{
              zIndex: cards.length - i,
            }}
          >
            <h3 className="text-lg font-semibold text-blue-400 drop-shadow-md mb-1">
              {card.title}
            </h3>
            <p className="text-sm text-gray-300">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
