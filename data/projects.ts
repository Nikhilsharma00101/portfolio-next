export type Project = {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  videoWidth?: string;
  videoHeight?: string;
  desc: string; // HTML string now
  techStack?: string[];
  cta?: {
    label: string;
    link: string;
  };
};

// Read cloud name from environment
const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export const projects: Project[] = [
  {
    id: "proj-001",
    title: "Rogue Motors - Car Company Website",
    thumbnail: "/images/projects/rogue-motors.svg",
    // thumbnail: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_400,h_250,c_fill,q_auto,f_auto/rogue-motors.svg`,
    videoUrl: `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1758738802/KarBhawan_Car_Accessories_Expert_Doorstep_Installation_Delhi_-_Google_Chrome_2025-09-23_19-52-43_-_COMPRESS_c6xzqh.mp4`,
    videoWidth: "w-full max-w-3xl",
    videoHeight: "h-[400px] md:h-[380px]",
    desc: `
      <p><b>Rogue Motors</b> is a semi-dynamic, production-ready website built for a premium car company. It offers scalability, speed, and a seamless user experience while empowering admins with powerful management tools.</p>
      </br>
        <li><b style="color:#ffffff;">Admin Dashboard:</b> Fully functional dashboard to manage cars, images, and content with ease.</li>
        <li><b style="color:#ffffff;">Firebase Integration:</b> Secure authentication and database handling with real-time sync.</li>
        <li><b style="color:#ffffff;">Cloudinary Support:</b> Efficient, scalable image hosting and delivery optimized for performance.</li>
        <li><b style="color:#ffffff;">Responsive & Scalable:</b> Tailwind-powered responsive design, blazing fast, and production-ready.</li>
        <li><b style="color:#ffffff;">Future-Ready Vision:</b> Designed for scalability with potential expansion into e-commerce and booking systems.</li>
    `,
    techStack: ["React", "Firebase", "Cloudinary", "Tailwind CSS"],
    cta: {
      label: "View Live Site",
      link: "https://karbhawan.vercel.app",
    },
    
  },
  {
    id: "proj-002",
    title: "Karbhawan - Premium Car Accessories E-commerce",
    thumbnail: "/images/projects/karbhawan.jpg",
    // thumbnail: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_400,h_250,c_fill,q_auto,f_auto/karbhawan-next.svg`,
    videoUrl: `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1758737807/Karbhawan_-_Opera_2025-09-23_17-32-55_-_COMPRESS_i6jrgw.mp4`,
    videoWidth: "w-full max-w-2xl",
    videoHeight: "h-[400px] md:h-[380px]",
    desc: `
      <p><b>Karbhawan</b> is a fully dynamic, production-ready <span style="color:#ff0000; font-weight:bold;">e-commerce platform</span> for premium car accessories. Built to deliver speed, security, and scalability, it provides a futuristic shopping experience with a powerful admin ecosystem.</p>
      </br>
        <li><b style="color:#ffffff;">E-commerce Features:</b> Cart management, Razorpay integration, and real-time order tracking.</li>
        <li><b style="color:#ffffff;">Authentication:</b> Google login, email OTP verification, JWT, and hashed passwords for secured user accounts.</li>
        <li><b style="color:#ffffff;">Admin Dashboard:</b> Premium full-featured dashboard for managing products, orders, and users.</li>
        <li><b style="color:#ffffff;">Database & Media:</b> MongoDB for scalable data handling with Cloudinary for optimized image storage and delivery.</li>
        <li><b style="color:#ffffff;">Responsive & Premium UI:</b> Tailwind-powered responsive design delivering a fast, modern, and user-friendly interface.</li>
        <li><b style="color:#ffffff;">Deployment:</b> Fully deployed on cloud infrastructure, production-ready and built for scale.</li>
    `,
    techStack: ["Next.js", "MongoDB", "Cloudinary", "Tailwind CSS", "Razorpay"],
    cta: {
      label: "View Live Site",
      link: "https://karbhawan-next-client.vercel.app",
    },
  },
  {
    id: "proj-003",
    title: "Premium Landing Page - Advocates & Law Firms",
    thumbnail: "/images/projects/premium-landing-page.jpg",
    // thumbnail: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_400,h_250,c_fill,q_auto,f_auto/premium-landing-page.svg`,
    videoUrl: `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1758739259/landing-page-premium_-_Opera_2025-09-23_17-06-10_-_COMPRESS_qezahm.mp4`,
    videoWidth: "w-full max-w-2xl",
    videoHeight: "h-[400px] md:h-[450px]",
    desc: `
      <p>A <b style="color:#0a9396;">premium, mobile-first landing page</b> crafted for advocates and law firms. Designed with precision and elegance, it highlights professionalism while driving maximum client engagement.</p>
      </br>
        <li><b style="color:#ffffff;">Responsive Layout:</b> Mobile-first design ensuring flawless performance on all screen sizes.</li>
        <li><b style="color:#ffffff;">Premium UI/UX:</b> Extremely polished look with modern typography, color palette, and smooth interactions.</li>
        <li><b style="color:#ffffff;">Optimized for Scale:</b> Fully scalable architecture, built for both small practices and large firms.</li>
        <li><b style="color:#ffffff;">Performance:</b> Lightweight, fast-loading, and SEO-friendly to maximize visibility.</li>
        <li><b style="color:#ffffff;">Technology Stack:</b> Built with HTML, CSS, JS, and Tailwind for clean, maintainable code.</li>
    `,
    techStack: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Framer"],
    cta: {
      label: "View Live Site",
      link: "https://landingpage-premium.vercel.app",
    },
  },
  {
    id: "proj-004",
    title: "buydsc - Static Website",
    thumbnail: "/images/projects/buydsc.svg",
    // thumbnail: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_400,h_250,c_fill,q_auto,f_auto/buydsc.svg`,
    videoUrl: `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1758739480/Home_-_Opera_2025-09-23_19-04-17_-_COMPRESS_yflyzq.mp4`,
    videoWidth: "w-full max-w-2xl",
    videoHeight: "h-[400px] md:h-[450px]",
    desc: `
      <p><b>buydsc</b> is India’s top <span style="color:#0d6efd; font-weight:bold;">DSC & e-Sign portal</span>, providing secure and legally valid electronic signatures. The platform complies with the Second Schedule of the IT Act and follows the strict guidelines of the CCA, Ministry of IT, Government of India.</p>
      </br>
        <li><b style="color:#ffffff;">Legally Valid:</b> Recognized under the IT Act, ensuring trust and compliance for all users.</li>
        <li><b style="color:#ffffff;">Digital Signatures:</b> Hassle-free issuance and management of Digital Signature Certificates (DSC).</li>
        <li><b style="color:#ffffff;">e-Sign Services:</b> Easy integration of electronic signatures for businesses and individuals.</li>
        <li><b style="color:#ffffff;">Clean & Responsive:</b> Bootstrap 5 powered static website with fast performance and mobile-first design.</li>
        <li><b style="color:#ffffff;">Scalable & Reliable:</b> Optimized for high traffic and future-ready enhancements.</li>
    `,
    techStack: ["Bootstrap 5", "HTML", "CSS", "JavaScript"],
    cta: {
      label: "View Live Site",
      link: "https://buydsc.net",
    },
  },
  {
    id: "proj-005",
    title: "Premium Portfolio",
    thumbnail: "/images/projects/portfolio.jpg",
    // thumbnail: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_400,h_250,c_fill,q_auto,f_auto/Group_1.jpg`,
    videoUrl: `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1758739173/Royal_Portfolio_-_Opera_2025-09-23_20-14-45_-_COMPRESS_fjyxng.mp4`,
    videoWidth: "w-full max-w-3xl",
    videoHeight: "h-[400px] md:h-[600px]",
    desc: `
      <p>A <b style="color:#d4af37;">premium personal portfolio</b> designed with a gold and charcoal black theme, delivering a luxurious and professional look. Built with custom code for scalability, it highlights projects, skills, and creativity with smooth animations and modern aesthetics.</p>
      </br>
        <li><b style="color:#ffffff;">Premium Theme:</b> Gold accents with charcoal black for a sleek, elegant, and timeless design.</li>
        <li><b style="color:#ffffff;">Animations:</b> Interactive, fluid animations powered by Framer for a captivating experience.</li>
        <li><b style="color:#ffffff;">Responsive & Scalable:</b> Mobile-first, fully scalable, and built to adapt across all devices.</li>
        <li><b style="color:#ffffff;">Custom Code:</b> Hand-coded for maximum flexibility and long-term scalability.</li>
        <li><b style="color:#ffffff;">User Experience:</b> Premium UI with engaging transitions to showcase skills and projects effectively.</li>
    `,
    techStack: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Framer Motion"],
    cta: {
      label: "View Live Site",
      link: "https://portfolio-ten-mu-cg4juvi6xt.vercel.app",
    },
  },
  {
    id: "proj-006",
    title: "Basic Landing Page",
    thumbnail: "/images/projects/basic-page.png",
    // thumbnail: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_400,h_250,c_fill,q_auto,f_auto/basic-page.png`,
    videoUrl: `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1758739385/Landing_Page_Basic_-_Google_Chrome_2025-09-23_20-30-12_zrnuqg.mp4`,
    videoWidth: "w-full max-w-3xl",
    videoHeight: "h-[400px] md:h-[600px]",
    desc: `
      <p>A clean and <b style="color:#d4af37;">basic landing page</b> built with custom code, designed to be lightweight yet fully scalable into a premium UI. Perfect as a foundation for modern web projects.</p>
      </br>
        <li><b style="color:#ffffff;">Custom Code:</b> Built from scratch for flexibility and long-term scalability.</li>
        <li><b style="color:#ffffff;">Scalable Design:</b> Simple UI architecture that can easily be upgraded to premium aesthetics.</li>
        <li><b style="color:#ffffff;">Reusable Components:</b> Organized structure with reusable elements for faster development.</li>
        <li><b style="color:#ffffff;">Responsive Layout:</b> Mobile-friendly and optimized for all screen sizes.</li>
        <li><b style="color:#ffffff;">Foundation for Growth:</b> Ideal as a starter template for portfolios, startups, or business websites.</li>
    `,
    techStack: ["HTML", "CSS", "JavaScript"],
    cta: {
      label: "View Live Site",
      link: "https://landingpage-basic.vercel.app",
    },
  },
  {
    id: "proj-007",
    title: "Standard Law Firm Landing Page",
    thumbnail: "/images/projects/standard-page.svg",
    // thumbnail: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_400,h_250,c_fill,q_auto,f_auto/lawfirm.svg`,
    videoUrl: `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1758739517/Standard_Landing_Page_-_Opera_2025-09-23_19-59-41_amfy66.mp4`,
    videoWidth: "w-full max-w-3xl",
    videoHeight: "h-[400px] md:h-[600px]",
    desc: `
      <p>A <b style="color:#d4af37;">professional law firm landing page</b> built with custom code, offering a clean, trustworthy design. It is fully scalable with well-structured sections to showcase services, expertise, and client engagement.</p>
      </br>
        <li><b style="color:#ffffff;">Custom Code:</b> Built from scratch for flexibility, scalability, and premium enhancements.</li>
        <li><b style="color:#ffffff;">Sectioned Layout:</b> Modern multi-section design including services, testimonials, and contact forms.</li>
        <li><b style="color:#ffffff;">Responsive Design:</b> Optimized for mobile, tablet, and desktop users.</li>
        <li><b style="color:#ffffff;">Trustworthy UI:</b> Clean, minimal visuals tailored for the legal profession.</li>
        <li><b style="color:#ffffff;">Scalable Foundation:</b> Easily extendable into a full website with dynamic features.</li>
    `,
    techStack: ["React", "Next.js", "Tailwind CSS"],
    cta: {
      label: "View Live Site",
      link: "https://landingpage-standard.vercel.app",
    },
  },
  {
    id: "proj-008",
    title: "Skillnox - Mobile APP",
    thumbnail: "/images/projects/skillnox.jpg",
    // thumbnail: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_400,h_250,c_fill,q_auto,f_auto/skillnox.svg`,
    videoUrl: `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1758739660/Untitled_design_ta3wxx.mp4`,
    videoWidth: "max-w-4xl",
    videoHeight: "h-[100px] md:h-[400px]",
    desc: `
      <p><b>Skillnox</b> is a next-generation service marketplace that enables users to list their services or request services in real-time. Whether seeking a tutor, electrician, chef, maid, or any other professional, the platform provides a seamless way to connect and communicate.</p>
      </br>
        <li><b style="color:#ffffff;">Service Listing & Requests:</b> Users can create detailed service listings and request services from others.</li>
        <li><b style="color:#ffffff;">Real-Time Interactions:</b> Service requests can be accepted or sent instantly, with in-app chat available upon confirmation.</li>
        <li><b style="color:#ffffff;">Secure Authentication:</b> Accounts protected with bcrypt & JWT.</li>
        <li><b style="color:#ffffff;">Real-Time Interactions:</b> Service requests with instant in-app chat.</li>
        <li><b style="color:#ffffff;">Future-Ready Vision:</b> Operates like Uber or Ola for services, enabling users to create, accept, and request services in real-time.</li>
    `,
    techStack: ["React Native", "Expo", "Tailwind CSS"],
  },
  {
    id: "proj-009",
    title: "NyaySena - Law Firm Website",
    thumbnail: "/images/projects/law-firm.png",
    // thumbnail: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_400,h_250,c_fill,q_auto,f_auto/nyaysena.svg`,
    videoUrl: `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1758739590/Landing_Page_-_Google_Chrome_2025-09-24_00-48-49_jy7vk3.mp4`,
    videoWidth: "max-w-4xl",
    videoHeight: "h-[100px] md:h-[400px]",
    desc: `
      <p><b>NyaySena</b> is a custom-coded, <span style="color:#d4af37; font-weight:bold;">Figma-to-code</span> law firm website, designed with precision and scalability in mind. Built to reflect trust, professionalism, and modern legal branding.</p>
      </br>
        <li><b style="color:#ffffff;">Figma to Code:</b> Pixel-perfect implementation of design files into a live, production-ready website.</li>
        <li><b style="color:#ffffff;">Custom Coded:</b> No templates used — crafted entirely with reusable components for long-term scalability.</li>
        <li><b style="color:#ffffff;">Responsive Design:</b> Optimized for all devices, ensuring accessibility and user-friendliness.</li>
        <li><b style="color:#ffffff;">Premium UI:</b> Clean layouts, professional visuals, and a structure tailored for law firms.</li>
        <li><b style="color:#ffffff;">Future-Ready:</b> Scalable foundation with the flexibility to integrate dynamic features.</li>
    `,
    techStack: ["HTML", "CSS", "Javascript", "Tailwind CSS"],
    cta: {
      label: "View Live Site",
      link: "https://karbhawan.vercel.app",
    },
  },
];
