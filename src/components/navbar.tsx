"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SparklesCore } from "@/components/ui/sparkles";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import {
  Mail,
  Send,
  Home,
  User,
  FolderGit2,
  Quote,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "HOME", icon: <Home size={18} /> },
    { href: "#about", label: "ABOUT", icon: <User size={18} /> },
    { href: "#projects", label: "PROJECTS", icon: <FolderGit2 size={18} /> },
    { href: "#testimonials", label: "TESTIMONIALS", icon: <Quote size={18} /> },
  ];

  return (
    <>
      {/* TOP NAVBAR (Desktop + Tablet + Mobile) */}
      <nav className="relative w-full bg-black/70 backdrop-blur-lg text-white border-b border-gray-800 overflow-hidden">
        {/* Sparkles Background */}
        <div className="absolute inset-0">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={600}
            className="w-full h-full"
            particleColor="#60A5FA"
          />
          <div className="absolute inset-0 w-full h-full bg-black/40 [mask-image:radial-gradient(800px_400px_at_top,transparent_30%,white)]"></div>
        </div>

        {/* Navbar content */}
        <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex flex-col items-center">
            <h1 className="text-xs md:text-xl font-bold tracking-wide text-white drop-shadow-md">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400">
                ★彡
              </span>
              [ɴɪᴋʜɪʟ ꜱʜᴀʀᴍᴀ]
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400">
                彡★
              </span>
            </h1>
          </div>

          {/* Nav links (Desktop Only) */}
          <ul className="hidden md:flex gap-10 text-sm font-semibold tracking-[0.15em] uppercase">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`
                      group relative px-1 transition-all duration-300 
                      ${isActive ? "text-blue-400" : "text-gray-200 hover:text-white"}
                    `}
                  >
                    <span
                      className={`relative z-10 transition-all duration-300 group-hover:tracking-widest group-hover:scale-105 ${
                        isActive
                          ? "drop-shadow-[0_0_6px_rgba(96,165,250,0.8)]"
                          : ""
                      }`}
                    >
                      {link.label}
                    </span>
                    <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 transition-all duration-500 group-hover:w-full"></span>
                    <span className="absolute inset-0 blur-md opacity-0 group-hover:opacity-30 bg-blue-500/40 transition"></span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA (Desktop Only) */}
          <Link href="#contact" className="group relative hidden md:block">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
              <SparklesCore
                background="transparent"
                minSize={0.5}
                maxSize={1.5}
                particleDensity={150}
                className="w-full h-full"
                particleColor="#3B82F6"
              />
            </div>
            <HoverBorderGradient
              containerClassName="rounded-lg"
              className="relative flex items-center gap-2 px-6 py-2 text-white bg-black rounded-lg shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-500"
            >
              <span className="relative flex items-center gap-2">
                <span className="transition-all duration-300 group-hover:opacity-0">
                  <Mail size={18} />
                </span>
                <span className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <Send size={18} />
                </span>
                <span className="tracking-wide font-medium">Contact</span>
              </span>
            </HoverBorderGradient>
          </Link>

          {/* CTA (Mobile Only - Top Right) */}
          <Link href="#contact" className="md:hidden block">
            <HoverBorderGradient
              containerClassName="rounded-lg"
              className="px-3 py-1 text-white bg-black rounded-md shadow shadow-blue-500/20 text-sm"
            >
              Contact
            </HoverBorderGradient>
          </Link>
        </div>
      </nav>

      {/* MOBILE BOTTOM NAVBAR */}
      <div className="fixed bottom-0 left-0 w-full md:hidden z-50">
        {/* Sparkles Background with stronger glow */}
        <div className="absolute inset-0">
          <SparklesCore
            background="transparent"
            minSize={0.6}
            maxSize={2}
            particleDensity={800} // doubled density
            className="w-full h-full"
            particleColor="#3B82F6" // brighter blue
          />
          <div className="absolute inset-0 w-full h-full bg-black/80"></div>
        </div>

        <div className="relative z-10 flex justify-around items-center py-3 border-t border-gray-700 text-xs text-gray-300">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex flex-col items-center transition ${
                  isActive ? "text-blue-400" : "hover:text-white"
                }`}
              >
                {link.icon}
                <span className="mt-1">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
