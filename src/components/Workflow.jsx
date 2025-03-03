import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaAws, FaDatabase, FaJava, FaPhp } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiDocker, SiGraphql, SiNextdotjs, SiTypescript, SiFirebase, SiKotlin, SiSupabase, SiOpenai } from "react-icons/si";

const techStack = [
  { name: "React", icon: <FaReact className="text-blue-400 text-4xl sm:text-5xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white text-4xl sm:text-5xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-400 text-4xl sm:text-5xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-4xl sm:text-5xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-4xl sm:text-5xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-4xl sm:text-5xl" /> },
  { name: "GraphQL", icon: <SiGraphql className="text-pink-500 text-4xl sm:text-5xl" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-500 text-4xl sm:text-5xl" /> },
  { name: "AWS", icon: <FaAws className="text-yellow-500 text-4xl sm:text-5xl" /> },
  { name: "Firebase", icon: <SiFirebase className="text-orange-500 text-4xl sm:text-5xl" /> },
  { name: "Supabase", icon: <SiSupabase className="text-green-500 text-4xl sm:text-5xl" /> },
  { name: "OpenAI", icon: <SiOpenai className="text-gray-300 text-4xl sm:text-5xl" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400 text-4xl sm:text-5xl" /> },
  { name: "Kotlin", icon: <SiKotlin className="text-purple-500 text-4xl sm:text-5xl" /> },
  { name: "Java", icon: <FaJava className="text-red-500 text-4xl sm:text-5xl" /> },
  // { name: "PHP", icon: <FaPhp className="text-blue-700 text-4xl sm:text-5xl" /> },
  { name: "SQL Databases", icon: <FaDatabase className="text-gray-500 text-4xl sm:text-5xl" /> },
];

const TechStack = () => {
  return (
    <div className="mt-5 mb-5 pb-10 text-center">
      {/* Title */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-4 tracking-wide">
        Our <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text font-bold">Tech Stack</span>
      </h2>

      {/* Tech Stack Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 px-4">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-neutral-800 p-4 sm:p-5 rounded-lg shadow-lg cursor-pointer border border-blue-500/30 hover:border-blue-500/70"
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            {tech.icon}
            <p className="mt-2 text-sm sm:text-lg text-neutral-300">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
