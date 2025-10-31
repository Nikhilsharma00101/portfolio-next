"use client";
import { useParams } from "next/navigation";
import React from "react";
import { projects, Project } from "../../../../data/projects";
import Link from "next/link";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { SparklesCore } from "@/components/ui/sparkles";
import { ExternalLink } from "lucide-react";


export default function ProjectPage() {
  const params = useParams();
  const { id } = params;

  const project: Project | undefined = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        <h1 className="text-3xl">Project not found</h1>
      </div>
    );
  }

  // Fallback Tailwind classes if project doesn't have custom width/height
  const videoWidthClass = project.videoWidth || "w-full max-w-4xl";
  const videoHeightClass = project.videoHeight || "h-96 md:h-[400px]";

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6 relative">
      {/* Project Title */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-8 font-heading bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent animate-gradient">
        {project.title}
      </h1>

      {/* Video Card */}
      <div
        className={`rounded-3xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-lg ${videoWidthClass} ${videoHeightClass}`}
      >
        <video
          src={project.videoUrl}
          controls
          autoPlay
          loop
          className="w-full h-full object-contain"
        />
      </div>

      {/* Project Description */}
      <div className="mt-8 max-w-3xl bg-white/5 rounded-xl p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
        <div
          className="text-gray-300 leading-relaxed space-y-2"
          dangerouslySetInnerHTML={{ __html: project.desc }}
        />

        {/* Tech Stack */}
        {project.techStack?.length ? (
          <>
            <h3 className="mt-6 text-lg font-semibold">Tech Stack</h3>
            <div className="mt-2 flex flex-wrap gap-3">
              {project.techStack.map((tech: string) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-white/10 text-blue-300 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </>
        ) : null}
      </div>

      {project.cta && (
        <div className="mt-6 flex justify-center">
          <Link
            href={project.cta.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
          
            {/* The main button */}
            <HoverBorderGradient
              containerClassName="rounded-lg"
              className="relative flex items-center gap-2 px-6 py-2 text-white bg-black rounded-lg shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-500"
            >
              <span className="relative flex items-center gap-2">
                <span className="transition-all duration-300 group-hover:opacity-0">
                  <ExternalLink size={18} />
                </span>
                <span className="tracking-wide font-medium">{project.cta.label}</span>
              </span>
            </HoverBorderGradient>
          </Link>
        </div>
      )}




      {/* Related Projects Carousel */}
      <div className="mt-16 w-full max-w-6xl">
        <h2 className="text-3xl font-semibold mb-6 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent animate-gradient font-heading">
          More Projects
        </h2>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {projects
            .filter((p: Project) => p.id !== project.id)
            .slice(0, 3)
            .map((p: Project) => (
              <Link
                key={p.id}
                href={`/projects/${p.id}`} //  Dynamic navigation
                className="min-w-[250px] bg-white/5 rounded-xl p-4 flex flex-col items-center hover:bg-white/10 transition"
              >
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className="h-32 object-contain mb-4"
                />
                <p className="text-lg font-medium text-center">{p.title}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
