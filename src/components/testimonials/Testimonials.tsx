"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Mr. Rohan",
    role: "Software Engineer",
    text: "Bro, working with you to build my portfolio was amazing! It looks professional, sleek, and really shows off my work. I’ve already gotten so many compliments. You made everything so easy to understand and perfectly executed!",
    avatar: "/images/testimonials/rohan.jpeg",
  },
  {
    name: "Mr. H.L Sharma",
    role: "Owner - Karbhawan",
    text: "The Karbhawan site is modern, elegant, and runs smoothly. The design and layout show attention to detail, making it both practical and visually appealing.",
    avatar: "/images/testimonials/hl-sharma.jpeg",
  },
  {
    name: "Mr. Vipul",
    role: "Product Designer",
    text: "The landing page strikes a perfect balance between style and clarity. Each project is showcased in a way that feels intentional, professional, and easy to navigate, giving my work the presentation it deserves.",
    avatar: "/images/testimonials/vipul.jpeg",
  },
];

const SpaceshipWindowsTestimonials = () => {
  // Background stars
  const [starPositions, setStarPositions] = useState<{ top: string; left: string; size: string }[]>([]);
  // Stars inside testimonial cards
  const [cardStars, setCardStars] = useState<{ top: string; left: string; size: string }[][]>([]);

  useEffect(() => {
    // background stars
    const positions = Array.from({ length: 40 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
    }));
    setStarPositions(positions);

    // card stars
    const stars = testimonials.map(() =>
      Array.from({ length: 8 }).map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 2 + 1}px`,
      }))
    );
    setCardStars(stars);
  }, []);

  return (
    <section className="relative pb-10 bg-black text-white overflow-hidden">
      {/* Background Twinkling Stars */}
      <div className="absolute inset-0 z-0">
        {starPositions.map((star, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{ width: star.size, height: star.size, top: star.top, left: star.left }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              repeatType: "mirror",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <span className="text-3xl md:text-5xl font-bold mb-4 md:mb-15 text-center font-heading bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent animate-gradient pb-5">
          Window to the Cosmos
        </span>

        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex flex-col items-center ${i === 0 || i === 2 ? "h-full" : ""}`}
            >
              {/* Spaceship Window Frame */}
              <div className="relative w-48 h-48 rounded-full border-[6px] border-sky-400/60 shadow-[0_0_30px_rgba(100,200,255,0.4)] bg-gradient-to-b from-gray-900 to-black overflow-hidden flex items-center justify-center md:mt-20">
                {/* Stars inside window */}
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:20px_20px]" />
                {/* Avatar inside window */}
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={112}
                  height={112}
                  className="rounded-full border-2 border-sky-300 z-10 object-cover"
                  loading="lazy"
                />
              </div>

              {/* Testimonial Card */}
              <div
                className={`mt-4 md:mt-6 relative bg-black/20 border border-white/20 rounded-xl p-4 backdrop-blur-lg shadow-[0_0_30px_rgba(0,200,255,0.3)] max-w-xs flex flex-col ${
                  i === 0 || i === 2 ? "justify-between flex-1" : ""
                }`}
              >
                {/* Stars inside card */}
                {cardStars[i]?.map((star, idx) => (
                  <motion.div
                    key={idx}
                    className="absolute bg-white rounded-full"
                    style={{
                      width: star.size,
                      height: star.size,
                      top: star.top,
                      left: star.left,
                      opacity: 0.3,
                    }}
                    animate={{ opacity: [0.1, 0.5, 0.1] }}
                    transition={{
                      duration: Math.random() * 2 + 1,
                      repeat: Infinity,
                      repeatType: "mirror",
                      delay: Math.random() * 2,
                    }}
                  />
                ))}

                <p className="text-gray-200 italic mb-3">{t.text}</p>
                <div className="mt-auto">
                  <h3 className="text-lg font-semibold text-sky-300">{t.name}</h3>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpaceshipWindowsTestimonials;
