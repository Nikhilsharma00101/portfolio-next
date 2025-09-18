"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image"; // <-- import next/image
import { useSwipeable } from "react-swipeable";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
}

// Custom hook to generate meteors only on client
function useMeteors(count: number) {
  const [meteors, setMeteors] = useState<
    { left: string; animationDelay: string; animationDuration: string; rotation: string }[]
  >([]);

  useEffect(() => {
    const generated = Array.from({ length: count }).map(() => ({
      left: `${Math.random() * 50}%`,
      animationDelay: `${Math.random() * 10}s`,
      animationDuration: `${6 + Math.random() * 5}s`,
      rotation: `rotate(${-5 - Math.random() * 10}deg)`,
    }));
    setMeteors(generated);
  }, [count]);

  return meteors;
}

export default function ProjectCarousel() {
  const projects: Project[] = [
    {
      title: "Karbhawan –  E-Commerce",
      description:
        "A fully dynamic and scalable e-commerce platform for car accessories. Includes secure Razorpay payments, cloud-based image handling, and a premium admin dashboard for complete product and order management.",
      image: "/images/projects/karbhawan-ecomm.png",
      tech: ["Next.js", "MongoDB", "Cloudinary", "Razorpay", "Tailwind CSS", "TypeScript", "Vercel"],
    },
    {
      title: "Business Website – Corporate Presence",
      description:
        "A professional and responsive business website crafted to establish a strong online presence. Designed with clean UI/UX, modern layouts, and mobile-first responsiveness for seamless access across devices.",
      image: "/images/projects/static.jpg",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Figma"],
    },
    {
      title: "Advocates Landing Page – Premium Legal Theme",
      description:
        "A next-level premium landing page designed for advocates and law firms. Features a sleek, modern theme with professional UI elements, partial dynamic sections, and responsive layouts for an elevated digital presence.",
      image: "/images/projects/premium-page.jpg",
      tech: ["Tailwind CSS", "HTML", "CSS", "JavaScript"],
    },
  ];

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [showCTA, setShowCTA] = useState(false);

  const meteors = useMeteors(10);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 8000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index, projects.length]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setIndex((prev) => (prev + 1) % projects.length),
    onSwipedRight: () => setIndex((prev) => (prev - 1 + projects.length) % projects.length),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const goNext = () => setIndex((prev) => (prev + 1) % projects.length);

  useEffect(() => {
    const meteorTimer = setTimeout(() => {
      setShowCTA(true);
    }, 1500);
    return () => clearTimeout(meteorTimer);
  }, []);

  return (
    <div className="flex flex-col items-center pb-20 relative">
      {/* Section Heading */}
      <span className="text-3xl md:text-5xl font-bold mb-10 text-center font-heading bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent animate-gradient pb-5" >
        Cosmos of Creations
      </span>

      {/* Transparent container with neon glow */}
      <div className="relative w-full max-w-6xl px-4 py-10 rounded-xl shadow-[inset_0_0_30px_rgba(0,255,255,0.1),0_0_30px_rgba(0,255,255,0.1)]">
        <div {...swipeHandlers} className="overflow-hidden relative rounded-lg">
          {/* Sliding container */}
          <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
            {projects.map((project, i) => (
              <div key={i} className="flex-shrink-0 w-full md:flex md:flex-row items-center gap-6">
                {/* Content Left with Meteors */}
                <div className="md:w-1/2 text-center md:text-left p-4 group relative flex flex-col justify-between overflow-hidden">
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {meteors.map((meteor, idx) => (
                      <span
                        key={idx}
                        className="meteor"
                        style={{
                          left: meteor.left,
                          animationDelay: meteor.animationDelay,
                          animationDuration: meteor.animationDuration,
                          transform: meteor.rotation,
                        }}
                      />
                    ))}
                  </div>

                  <div>
                    <h3 className="text-2xl md:text-4xl font-bold mb-4 font-heading relative z-10">{project.title}</h3>
                    <p className="text-gray-300 font-body relative z-10">{project.description}</p>
                  </div>

                  <div className="min-h-[60px] mt-4 relative z-10">
                    <div className="flex flex-wrap gap-3 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100">
                      {project.tech.map((tech, idx) => (
                        <HoverBorderGradient key={idx} containerClassName="rounded-full" className="px-3 py-1 text-xs sm:text-sm font-medium text-white bg-black">
                          {tech}
                        </HoverBorderGradient>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image Right using Next.js Image */}
                <div className="md:w-1/2 flex justify-center md:justify-end p-4 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg object-cover w-full md:w-auto"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Top-right arrow */}
          <button
            onClick={goNext}
            className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-blue-400 transition"
          >
            &#10095;
          </button>
        </div>

        {/* Indicators at bottom */}
        <div className="flex justify-center mt-4 space-x-2">
          {projects.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${i === index ? "bg-blue-400" : "bg-gray-300"}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        {/* CTA Meteor Strike */}
        <AnimatePresence>
          {showCTA && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-[-20px] left-[41%] transform -translate-x-1/2 z-20"
            >
              <motion.button
                whileHover={{ scale: 1.1, boxShadow: "0 0 20px cyan, 0 0 40px blue" }}
                onClick={() => (window.location.href = "/projects")}
                className="px-6 py-3 bg-black text-white font-bold rounded-full shadow-[0_0_20px_cyan,0_0_40px_blue] border border-cyan-400 font-heading"
              >
                🚀 See More Projects
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
