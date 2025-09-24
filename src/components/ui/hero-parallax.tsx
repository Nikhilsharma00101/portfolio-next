"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";

// Updated types
type Product = {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl?: string; // optional, can be used in dynamic page
};

export const HeroParallax = ({ products }: { products: Product[] }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [swipeEnabled, setSwipeEnabled] = React.useState(false);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.2 && !swipeEnabled) setSwipeEnabled(true);
    if (latest <= 0.2 && swipeEnabled) setSwipeEnabled(false);
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.2], [15, 0]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.2], [20, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.2], [-500, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.2, 1]);

  return (
    <div
      ref={ref}
      className="overflow-hidden antialiased relative flex flex-col [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div style={{ rotateX, rotateZ, translateY, opacity }}>
        {firstRow.length > 0 && (
          <InfiniteRow
            products={firstRow}
            direction="right"
            swipeEnabled={swipeEnabled}
          />
        )}
        {secondRow.length > 0 && (
          <InfiniteRow
            products={secondRow}
            direction="left"
            swipeEnabled={swipeEnabled}
          />
        )}
        {thirdRow.length > 0 && (
          <InfiniteRow
            products={thirdRow}
            direction="right"
            swipeEnabled={swipeEnabled}
          />
        )}
      </motion.div>
    </div>
  );
};


// Full-row sliding animation
const InfiniteRow = ({
  products,
  direction,
  swipeEnabled,
}: {
  products: Product[];
  direction: "left" | "right";
  swipeEnabled: boolean;
}) => {
  const rowRef = React.useRef<HTMLDivElement>(null);

  const displayProducts = [...products, ...products]; // duplicate for seamless scroll
  const totalWidth = displayProducts.length * 320;

  return (
    <motion.div
      ref={rowRef}
      className={`flex ${direction === "right" ? "flex-row-reverse" : "flex-row"} space-x-8 mb-20`}
      drag={swipeEnabled ? "x" : false}
      dragConstraints={{ left: -500, right: 500 }}
      whileTap={{ cursor: swipeEnabled ? "grabbing" : "default" }}
      animate={{ x: direction === "right" ? [0, totalWidth / 2] : [0, -totalWidth / 2] }}
      transition={{ duration: 40, ease: "linear", repeat: Infinity }}
    >
      {displayProducts.map((product, idx) => (
        <ProductCard key={`${product.id}-${idx}`} product={product} />
      ))}
    </motion.div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0 text-center md:text-left">
      <h1 className="text-3xl md:text-6xl font-extrabold font-heading">
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent animate-gradient">
          Dive deep into the cosmos of code
        </span>
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-300 font-body leading-relaxed">
        I explore the infinite expanse of technology to craft digital experiences
        that are both immersive and precise. From sleek apps to interactive websites,
        I bring ideas to life with{" "}
        <span className="text-white font-semibold glow-text">cosmic elegance</span>.
      </p>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
        .glow-text {
          text-shadow: 0 0 10px rgba(173, 216, 230, 0.9),
            0 0 20px rgba(0, 0, 255, 0.7);
        }
      `}</style>
    </div>
  );
};

export const ProductCard = ({ product }: { product: Product }) => {
  const router = useRouter();

  return (
    <motion.div
      whileHover={{ y: -20 }}
      className="group/product h-48 w-64 sm:h-64 sm:w-80 md:h-96 md:w-[30rem] relative shrink-0 cursor-pointer"
      style={{ willChange: "transform" }}
      onClick={() => router.push(`/projects/${product.id}`)}
    >
      <img
        src={product.thumbnail}
        height="600"
        width="600"
        loading="lazy"
        className="object-contain object-left-top absolute h-full w-full inset-0"
        alt={product.title}
      />
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
