"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

interface Certificate {
  title: string;
  description: string;
  image: string;
}

interface Category {
  name: string;
  certificates: Certificate[];
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

export default function CertificateCarousel() {
  const categories: Category[] = [
    {
      name: "Internship",
      certificates: [
        { title: "Frontend Developer Internship – C1 India Pvt. Ltd.", description: "Contributed to the development of scalable frontend applications during a 2-month internship at C1 India Pvt. Ltd. Focused on building responsive user interfaces with modern web technologies, ensuring seamless performance and user experience across platforms.", image: "/images/certificates/internship.png" },
        { title: "Data Structures & Algorithms Training – Internshala", description: "Completed an intensive 8-week training on Data Structures and Algorithms, gaining strong problem-solving skills and in-depth knowledge of core concepts essential for building efficient and optimized software solutions.", image: "/images/certificates/internship/internshala.png" },
      ],
    },
    {
      name: "Professional",
      certificates: [
        {
          title: "IBM Full Stack Software Developer Professional Certificate – IBM / Coursera",
          description:
            "Completed IBM’s industry-recognized Full Stack Software Developer Professional Certificate on Coursera. Gained hands-on experience in front-end development (HTML, CSS, JavaScript, React), back-end development (Node.js, Express), and database management (MongoDB, SQL). Built and deployed full-stack applications using cloud services and containerization tools such as Docker and Kubernetes. Acquired practical knowledge in DevOps, version control (Git/GitHub), CI/CD, and cloud-native application deployment, demonstrating end-to-end development and deployment capabilities.",
          image: "/images/certificates/professional/IBM.png"
        },
        { title: "Introduction to Cloud Computing – IBM / Coursera", description: "Acquired foundational knowledge in cloud computing through IBM’s “Introduction to Cloud Computing” course on Coursera. Gained understanding of the essential characteristics, service models (IaaS, PaaS, SaaS), deployment models (public, private, hybrid), cloud infrastructure components (virtual machines, containers, storage), and emerging trends such as serverless computing, DevOps, cloud-native applications, and hybrid/multi-cloud strategies. Demonstrated ability to apply cloud security practices and monitor cloud environments.", image: "/images/certificates/professional/cloud.png" },
        { title: "Introduction to HTML, CSS & JavaScript – IBM / Coursera", description: "Accomplished IBM’s Coursera course introducing the foundations of web development. Covered structuring web pages with HTML, styling using CSS including responsive design, and adding interactivity via JavaScript (DOM manipulation, form validation, event handling). Hands-on labs and a final project reinforced applied skills and modern best practices.", image: "/images/certificates/professional/html.png" },
        { title: "Getting Started with Git & GitHub – IBM / Coursera", description: "Completed IBM’s introductory course on Git & GitHub, covering version control fundamentals including repositories, branches, forking, merging, pull requests, and collaboration workflows via both command-line and web interfaces. Culminated with a final project to build and share an open-source GitHub repository, reinforcing practical skills", image: "/images/certificates/professional/git.png" },
        { title: "Developing Front-End Apps with React – IBM / Coursera", description: "Completed IBM’s Coursera course focusing on building dynamic user interfaces using React. Gained hands-on experience with React components, JSX, ES6, props, state, hooks, and Redux. Developed a final project—a budgeting allocation application—demonstrating proficiency in managing application state and integrating with external APIs.", image: "/images/certificates/professional/react.png" },
        { title: "Developing Back-End Apps with Node.js and Express – IBM / Coursera", description: "Completed IBM’s Coursera course on back-end development, focusing on building server-side applications using Node.js and Express. Gained hands-on experience in creating RESTful APIs, implementing CRUD operations, and managing asynchronous operations with callbacks and promises. Developed skills in authentication, session management, and utilizing middleware for enhanced application functionality.", image: "/images/certificates/professional/backend.png" },
        { title: "Python for Data Science, AI & Development – IBM / Coursera", description: "Completed IBM’s comprehensive course covering Python fundamentals, including data types, control structures, and object-oriented programming. Gained hands-on experience with data manipulation using Pandas and NumPy, file handling, and web scraping with BeautifulSoup. Applied programming skills to real-world scenarios, laying a solid foundation for careers in data science, AI, and software development.", image: "/images/certificates/professional/python.png" },
      ],
    },
    {
      name: "Sports & Activities",
      certificates: [
        { title: "Military Training Camp", description: "Participated in an intensive 6-day military training camp led by retired Indian Army officials. Gained hands-on experience in mountaineering, marathons, physical training, and team competitions, alongside leadership exercises, patriotism-building activities, and campfire sessions. Developed resilience, discipline, teamwork, and problem-solving skills while experiencing a structured military environment.", image: "/images/certificates/sports/MTC.png" },
        { title: "Basketball – College Sports Event", description: "Achieved 1st place in the college basketball sports event, showcasing teamwork, strategy, and competitive skill. Enhanced physical agility, coordination, and leadership while contributing to the team’s overall success in high-intensity matches.", image: "/images/certificates/sports/basketball.png" },
        { title: "Annual Sports Day", description: "Awarded winner at the school’s Annual Sports Day, excelling in competitive events and demonstrating physical fitness, agility, and determination. Showcased teamwork, discipline, and perseverance while achieving top performance in multiple activities", image: "/images/certificates/sports/medal-1.png" },
        { title: "Regional Topper – Abacus Tournament", description: "Secured the top position in the regional abacus competition, demonstrating exceptional calculation speed, accuracy, and mental agility. Developed strong analytical skills, concentration, and problem-solving abilities through competitive practice and high-level performance.", image: "/images/certificates/sports/medal-2.png" },
        { title: "Excellence Medal", description: "Awarded the Excellence Medal at St. Xavier’s School in recognition of outstanding achievements, dedication, and consistent high performance across academics, sports, and extracurricular activities. Demonstrates discipline, skill, and a strong commitment to excellence.", image: "/images/certificates/sports/medal-3.png" },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState(0);
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [showCTA, setShowCTA] = useState(false);

  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const meteors = useMeteors(8);
  const currentCertificates = categories[activeCategory].certificates;

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % currentCertificates.length);
    }, 8000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index, currentCertificates.length]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setIndex((prev) => (prev + 1) % currentCertificates.length),
    onSwipedRight: () => setIndex((prev) => (prev - 1 + currentCertificates.length) % currentCertificates.length),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  useEffect(() => {
    const meteorTimer = setTimeout(() => setShowCTA(true), 1500);
    return () => clearTimeout(meteorTimer);
  }, []);

  return (
    <div className="flex flex-col items-center pb-20 relative pt-20">
      {/* Section Heading */}
      <span className="text-3xl md:text-5xl font-bold mb-10 text-center font-heading bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent animate-gradient pb-5">
        Astro Achievements & Certificates
      </span>

      {/* Category Tabs */}
      <div className="flex gap-4 mb-8 justify-center flex-wrap font-heading">
        {categories.map((cat, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded-full font-medium transition ${i === activeCategory ? "bg-blue-500 text-white" : "bg-black/40 text-gray-300 hover:bg-blue-400"
              }`}
            onClick={() => {
              setActiveCategory(i);
              setIndex(0);
            }}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Transparent container with neon glow */}
      <div className="relative w-full max-w-6xl px-4 py-10 rounded-xl shadow-[inset_0_0_30px_rgba(0,255,255,0.1),0_0_30px_rgba(0,255,255,0.1)]">
        <div {...swipeHandlers} className="overflow-hidden relative rounded-lg">
          {/* Sliding container */}
          <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
            {currentCertificates.map((cert, i) => (
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
                    <h3 className="text-2xl md:text-4xl font-bold mb-4 font-heading relative z-10 font-heading text-sky-300">{cert.title}</h3>
                    <p className="text-gray-300 font-body relative z-10">{cert.description}</p>
                  </div>
                </div>

                {/* Image Right with Zoom on Click */}
                <div className="md:w-1/2 flex justify-center md:justify-end p-4 relative">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    width={600}
                    height={400}
                    className={`rounded-lg shadow-lg object-cover w-full md:w-auto cursor-zoom-in 
                      ${categories[activeCategory].name === "Sports & Activities" ? "scale-110 md:scale-125" : ""}`}
                    onClick={() => setZoomedImage(cert.image)}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Top-right arrow */}
          <button
            onClick={() => setIndex((prev) => (prev + 1) % currentCertificates.length)}
            className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-blue-400 transition"
          >
            &#10095;
          </button>
        </div>

        {/* Indicators at bottom */}
        <div className="flex justify-center mt-4 space-x-2">
          {currentCertificates.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${i === index ? "bg-blue-400" : "bg-gray-300"}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>

      {/* Zoom Modal */}
      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-zoom-out"
          onClick={() => setZoomedImage(null)}
        >
          <Image
            src={zoomedImage}
            alt="Zoomed certificate"
            width={1200}
            height={800}
            className="rounded-lg shadow-2xl max-h-[90vh] w-auto object-contain"
          />
        </div>
      )}
    </div>
  );
}
