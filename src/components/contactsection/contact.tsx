"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Mail, Linkedin, Send } from "lucide-react";

interface Star {
  top: string;
  left: string;
  size: string;
  animationDelay: string;
}

function useStars(count: number) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: count }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      animationDelay: `${Math.random() * 5}s`,
    }));
    setStars(generated);
  }, [count]);

  return stars;
}

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const stars = useStars(25);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setShowErrors(true);
      return;
    }

    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+919899405614";
    const professionalMessage = `Hello Nikhil,%0A%0AI am ${name} (${email}) and I would like to discuss:%0A"${message}"%0A%0ALooking forward to your response.%0A%0AThanks!`;
    const whatsappURL = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${professionalMessage}`;
    window.open(whatsappURL, "_blank");

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setShowErrors(false);

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="relative w-full py-20 flex justify-center items-center bg-black text-white overflow-hidden">
      {/* Twinkling stars */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white opacity-70 animate-twinkle"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDelay: star.animationDelay,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl w-full px-4 grid md:grid-cols-2 gap-10 z-10">
        {/* Left Content */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold font-heading bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent animate-gradient">
            Reach for the Stars
          </h2>
          <p className="text-gray-300 font-body">
            Have a project or collaboration in mind? Drop me a message and let&apos;s make it cosmic! 🚀
          </p>
          <div className="flex space-x-4 mt-4">
            <HoverBorderGradient
              containerClassName="rounded-full"
              className="px-5 py-2 font-semibold text-black bg-black bg-opacity-30 hover:bg-opacity-60 transition flex items-center gap-2"
            >
              <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} className="flex items-center gap-2 w-full justify-center text-white">
                <Mail size={18} /> Email
              </a>
            </HoverBorderGradient>

            <HoverBorderGradient
              containerClassName="rounded-full"
              className="px-5 py-2 font-semibold text-black bg-black bg-opacity-30 hover:bg-opacity-60 transition flex items-center gap-2"
            >
              <a href={process.env.NEXT_PUBLIC_LINKEDIN} target="_blank" className="flex items-center gap-2 w-full justify-center text-white">
                <Linkedin size={18} /> LinkedIn
              </a>
            </HoverBorderGradient>
          </div>
        </div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-5 bg-[#111111] p-8 rounded-2xl shadow-[0_0_50px_rgba(0,255,255,0.25)] border border-cyan-400 backdrop-blur-md"
        >
          {/* Floating Label Input */}
          {["name", "email"].map((field) => (
            <div key={field} className="relative w-full">
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder=" "
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                className="peer w-full p-4 rounded-xl bg-black bg-opacity-30 border border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none placeholder-transparent text-white transition shadow-inner"
              />
              <label className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-cyan-400 peer-focus:text-sm pointer-events-none">
                {field === "name" ? "Your Name" : "Your Email"}
              </label>
              {showErrors && !formData[field as keyof typeof formData] && (
                <span className="text-sm text-red-400 italic animate-pulse">
                  {field === "name" ? "Please enter your name ✨" : "Please enter a valid email ✨"}
                </span>
              )}
            </div>
          ))}

          {/* Message */}
          <div className="relative w-full">
            <textarea
              name="message"
              placeholder=" "
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="peer w-full p-4 rounded-xl bg-black bg-opacity-30 border border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none placeholder-transparent text-white transition shadow-inner resize-none"
            />
            <label className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-cyan-400 peer-focus:text-sm pointer-events-none">
              Your Message
            </label>
            {showErrors && !formData.message && (
              <span className="text-sm text-red-400 italic animate-pulse">Don&apos;t leave the message empty ✨</span>
            )}
          </div>

          {/* CTA */}
          <motion.div whileHover={{ scale: 1.05 }} className="mt-2">
            <HoverBorderGradient
              containerClassName="rounded-full cursor-pointer"
              className="px-7 py-3 font-bold text-white bg-black bg-opacity-30 hover:bg-opacity-60 transition flex items-center justify-center gap-2 shadow-md"
              onClick={handleSubmit}
            >
              <Send size={18} /> {submitted ? "Sent! ✅" : "Send via WhatsApp"}
            </HoverBorderGradient>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
