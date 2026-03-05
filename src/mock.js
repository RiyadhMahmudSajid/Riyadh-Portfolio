
export const personalInfo = {
  name: "Riyadh Mahmud Sajid",
  role: "Full Stack Developer",
  tagline: "Building modern web applications with React,Next.js, Node.js , Express, MongoDB,PostgreSQL,Prisma ",
  bio: "Passionate full-stack developer with expertise in modern web technologies including React, Next.js, Node.js, Express, MongoDB, and PostgreSQL. I love creating responsive, user-friendly applications that solve real-world problems. Experienced in both frontend and backend development with a strong foundation in JavaScript ecosystem.",
  email: "rdhsajid@gmail.com",
  emailLink:"https://mail.google.com/mail/u/0/#inbox?compose=new",
  phone:"01996371082",
  github: "https://github.com/RiyadhMahmudSajid",
  linkedin: "https://www.linkedin.com/in/riyadh-mahmud-sajid-a08823366/",
  resume: "/resume.pdf"
};

export const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML5", icon: "Code2" },
      { name: "CSS3", icon: "Palette" },
      { name: "JavaScript", icon: "FileCode" },
      { name: "React", icon: "Atom" },
      { name: "Next.js", icon: "Zap" }
    ]
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", icon: "Server" },
      { name: "Express", icon: "Route" },
      { name: "MongoDB", icon: "Database" },
      { name: "PostgreSQL", icon: "Database" },
      { name: "Prisma", icon: "Pyramid" }
    ]
  },
  {
    category: "Tools & Others",
    technologies: [
      { name: "Git", icon: "GitBranch" },
      { name: "REST API", icon: "Webhook" },
      { name: "Responsive Design", icon: "Layout" },
      { name: "Tailwind CSS", icon: "Paintbrush" }
    ]
  }
];

export const projects = [
   {
    id: 1,
    title: "MedPlus - Secure Multi-Vendor Online Pharmacy",
    description: "MedPlus is a secure multi-vendor pharmacy marketplace featuring role-based access for Customers, Sellers, and Admins. Built with Better-Auth and Resend, it ensures a trusted, seamless experience for medicine trade with a focus on high security",
    technologies: ["Next.js","TailwindCSS","Shadcn","TypeScript","Better Auth","Resend","Node.js", "Express","PostgreSQL", "Prisma"],
    image: "https://i.ibb.co.com/PZScp9PH/1648794675image-2.webp",
    github: "https://github.com/RiyadhMahmudSajid/medistore-fullstack.git",
    demo: "https://medistore-client-beta.vercel.app/",
    featured: true
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "ShopHub is a secure e-commerce platform with role-based access and SSLCommerz payment integration. Using TanStack Query, it provides fast performance and a seamless shopping journey for all users. A scalable solution focused on speed and smooth user experience.",
    technologies: ["React","TailwindCSS","Firebase", "Node.js", "MongoDB", "Express"],
    image: "https://i.ibb.co.com/F4bJ7bRm/64a7e3ad11a3d501576c4bf3-How-Can-SHOPLINE-Help-in-the-Current-E-Commerce-Situation-2.png",
    github: "https://github.com/RiyadhMahmudSajid/e-commerce-platform-fullstack.git",
    demo: "https://e-commerce-8ba86.web.app/",
    featured: true
  },
 
  {
    id: 3,
    title: "CarEase - A Car Rental Ecosystem",
    description: "CarEase is a premium car rental platform featuring smooth React Motion animations and Recharts analytics. It provides a secure, role-based experience for booking vehicles and managing fleets. A high-performance solution focused on stunning UI and seamless UX.",
    technologies: ["React","TailwindCSS","Firebase", "Node.js", "MongoDB", "Express"],
    image: "https://i.ibb.co.com/0jLPKL8J/2024-Exeed-Starway-Star-Era-Es-Luxurious-High-Tech-Electric-Vehicle-Stylish-and-Comfortable-Electric.webp",
    github: "https://github.com/RiyadhMahmudSajid/car-rental-fullstack.git",
    demo: "https://car-rental-4b1d1.web.app",
    featured: false
  },
  // {
  //   id: 4,
  //   title: "Blog Platform",
  //   description: "Modern blogging platform with markdown support, comments, and user authentication.",
  //   technologies: ["Next.js", "MongoDB", "NextAuth", "MDX"],
  //   image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
  //   github: "https://github.com/yourusername/project4",
  //   demo: "https://demo-link.com",
  //   featured: false
  // }
];

export const socialLinks = [
  { name: "Facebook", url: "https://www.facebook.com/share/1BeoQWbmKh/", icon: "Facebook" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/riyadh-mahmud-sajid-a08823366/", icon: "Linkedin" },
  { name: "Twitter", url: "https://mail.google.com/mail/u/0/#inbox?compose=new", icon: "Twitter" }
];