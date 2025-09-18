"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList,
  GitBranch,
  Server,
  Rocket,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

interface Step {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    title: "Planning & Research",
    description:
      "Define project requirements, choose tech stack, design wireframes, and outline milestones for smooth development.",
    image: "/images/tools/jira.png",
    icon: <ClipboardList className="w-6 h-6 text-cyan-400" />,
  },
  {
    title: "Version Control / Setup",
    description:
      "Initialize Git repositories, establish branching strategy, configure CI/CD, and ensure collaborative workflow.",
    image: "/images/tools/github.png",
    icon: <GitBranch className="w-6 h-6 text-blue-400" />,
  },
  {
    title: "Frontend Development",
    description:
      "Build responsive UIs, implement UX best practices, and develop components using modern frameworks.",
    image: "/images/tools/UI.svg",
    icon: <Server className="w-6 h-6 text-indigo-400" />,
  },
  {
    title: "Backend Development",
    description:
      "Design APIs, structure databases, implement authentication, and set up the server environment.",
    image: "/images/tools/API.png",
    icon: <Server className="w-6 h-6 text-purple-400" />,
  },
  {
    title: "Integration / Testing",
    description:
      "Connect frontend and backend, perform unit and integration tests, and ensure functional correctness.",
    image: "/images/tools/CI-CD.png",
    icon: <ClipboardList className="w-6 h-6 text-green-400" />,
  },
  {
    title: "Deployment & Launch",
    description:
      "Automate deployment, host on cloud, monitor performance, and track errors for continuous improvement.",
    image: "/images/tools/vercel.png",
    icon: <Rocket className="w-6 h-6 text-red-400" />,
  },
];

interface Star {
  id: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

export default function TimelineGalaxyHorizontal() {
  const [activeStep, setActiveStep] = useState(0);
  const [twinklingStars, setTwinklingStars] = useState<Star[]>([]);
  const [rightStars, setRightStars] = useState<Star[]>([]);
  const [zoomImage, setZoomImage] = useState<string | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const goNext = () =>
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  const goPrev = () => setActiveStep((prev) => Math.max(prev - 1, 0));

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    },
    []
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  // Scroll exactly 1 step at a time
  useEffect(() => {
    if (!timelineRef.current) return;
    const container = timelineRef.current;
    const stepWidth = container.offsetWidth / 3; // 3 steps visible
    const scroll = activeStep * stepWidth;
    container.scrollTo({ left: scroll, behavior: "smooth" });
  }, [activeStep]);

  // Background stars
  useEffect(() => {
    const twinkle: Star[] = Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      duration: 3 + Math.random() * 3,
      delay: Math.random() * 5,
    }));
    setTwinklingStars(twinkle);

    const rightTwinkle: Star[] = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 200,
      y: Math.random() * 400,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 5,
    }));
    setRightStars(rightTwinkle);
  }, []);

  return (
    <div className="relative w-full py-28 bg-black overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-20 relative z-10">
        <span className="text-3xl md:text-5xl font-bold mb-10 text-center font-heading bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent animate-gradient pb-5">
          Mission Control: From Concept to Launch
        </span>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Navigating the Mission from Concept to Completion.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="relative flex items-center justify-between">
          {/* Base line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-700 rounded-full" />
          {/* Progress line */}
          <motion.div
            className="absolute top-1/2 left-0 h-[2px] bg-cyan-400 origin-left rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.5 }}
          />

          {/* Desktop timeline */}
          <div className="hidden md:flex relative flex-1 justify-between">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center z-10">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className={`w-14 h-14 flex items-center justify-center rounded-full border-2 bg-black transition-all ${activeStep === idx
                      ? "border-cyan-400 scale-110"
                      : "border-gray-600 opacity-70 hover:opacity-100"
                    }`}
                  onClick={() => setActiveStep(idx)}
                >
                  {step.icon}
                </motion.div>
              </div>
            ))}
          </div>

          {/* Mobile swipeable timeline */}
          <div
            ref={timelineRef}
            className="flex md:hidden overflow-x-auto gap-5 py-4 snap-x snap-mandatory w-full px-2"
          >
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1 }}
                className={`flex-shrink-0 w-[calc(33.3333%-0.666rem)] h-14 flex items-center justify-center rounded-full border-2 bg-black transition-all snap-start ${activeStep === idx
                    ? "border-cyan-400 scale-110"
                    : "border-gray-600 opacity-70 hover:opacity-100"
                  }`}
                onClick={() => setActiveStep(idx)}
              >
                {step.icon}
              </motion.div>
            ))}
          </div>

        </div>

        {/* Step content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className={`mt-20 grid md:grid-cols-2 items-center gap-12 ${activeStep % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
          >
            {/* Image */}
            <div className="relative">
              <img
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                className="rounded-2xl border border-cyan-500/20 w-full cursor-zoom-in"
                onClick={() => setZoomImage(steps[activeStep].image)}
              />
            </div>

            {/* Text */}
            <div className="relative bg-black/30 border border-white/10 rounded-2xl p-10 flex flex-col justify-center">
              <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none overflow-hidden">
                {rightStars.map((star) => (
                  <motion.span
                    key={`right-${star.id}`}
                    className="absolute w-[2px] h-[2px] bg-white rounded-full"
                    style={{ left: star.x, top: star.y }}
                    animate={{ opacity: [0, 1, 0.3, 1, 0] }}
                    transition={{
                      duration: star.duration,
                      repeat: Infinity,
                      delay: star.delay,
                    }}
                  />
                ))}
              </div>

              <span className="text-sm uppercase tracking-wider text-cyan-400 mb-2">
                Step {activeStep + 1} of {steps.length}
              </span>
              <h3 className="text-3xl font-semibold text-white mb-4">
                {steps[activeStep].title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {steps[activeStep].description}
              </p>

              {/* Navigation */}
              <div className="flex justify-between mt-10">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  className="flex items-center gap-2 px-6 py-3 text-white bg-black rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all cursor-pointer"
                  onClick={goPrev}
                >
                  <ArrowLeft className="w-5 h-5" /> Prev
                </HoverBorderGradient>
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  className="flex items-center gap-2 px-6 py-3 text-white bg-black rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all cursor-pointer"
                  onClick={goNext}
                >
                  Next <ArrowRight className="w-5 h-5" />
                </HoverBorderGradient>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Twinkling stars - full background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {twinklingStars.map((star) => (
          <motion.span
            key={star.id}
            className="absolute w-[2px] h-[2px] bg-white rounded-full"
            style={{ left: star.x, top: star.y }}
            animate={{ opacity: [0, 1, 0.3, 1, 0] }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {zoomImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomImage(null)}
          >
            <motion.img
              src={zoomImage}
              className="max-w-[90%] max-h-[90%] rounded-2xl shadow-xl cursor-zoom-out"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
