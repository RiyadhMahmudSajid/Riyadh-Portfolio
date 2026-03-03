import { motion } from "framer-motion";
import { Code2, Send } from "lucide-react";

const Navbar = () => {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md  "
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center ">
        {/* Logo with Lucide Icon */}
        <div className="text-2xl font-bold flex items-center group gap-2">
          <Code2 className="h-6 w-6 text-emerald-500 group-hover:rotate-180 transition-transform duration-500" />
           <span className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent font-extrabold">
              Riyadh Mahmud
            </span>
        </div>

      
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors relative group font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
          href="#contact"
          >
            <button className="flex items-center gap-2 bg-gradient-to-r from-primaryGreen to-primaryBlue px-5 py-2 rounded-full text-darkBackground font-bold text-sm hover:opacity-90 transition-all">
            Contact <Send size={16} />
          </button>
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;