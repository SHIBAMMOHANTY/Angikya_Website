import { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaAws, FaDatabase, FaJava } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiDocker, SiGraphql, SiNextdotjs, SiTypescript, SiFirebase, SiKotlin, SiSupabase, SiOpenai } from "react-icons/si";

const techStack = [
  {
    name: "React",
    icon: <FaReact className="text-blue-400 text-3xl sm:text-4xl" />, // Reduced icon size
    description: [
      "A JavaScript library for building user interfaces. Used for modern web apps with fast rendering.",
      "1. A JavaScript library for building interactive user interfaces.",
      "2. Helps create fast and smooth web applications.",
      "3. Used by companies like Facebook, Instagram, and Airbnb.",
      "4. Makes it easy to reuse components, saving development time."
    ]
  },
  { 
    name: "Next.js", 
    icon: <SiNextdotjs className="text-white text-3xl sm:text-4xl" />, // Reduced icon size
    description: [
      "A React framework for server-side rendering, static site generation, and API routes.",
      "1. A React framework for server-side rendering (SSR) and static site generation (SSG).",
      "2. Simplifies API routes and file-based routing.",
      "3. Optimized for performance and SEO.",
      "4. Used by companies like Netflix and Twitch."
    ]
  },
  { 
    name: "Node.js", 
    icon: <FaNodeJs className="text-green-400 text-3xl sm:text-4xl" />, // Reduced icon size
    description: [
      "A JavaScript runtime for building fast, scalable server-side applications.",
      "1. A JavaScript runtime built on Chrome's V8 engine.",
      "2. Enables building fast and scalable server-side applications.",
      "3. Non-blocking I/O model for high performance.",
      "4. Widely used in backend development."
    ]
  },
  { 
    name: "TypeScript", 
    icon: <SiTypescript className="text-blue-500 text-3xl sm:text-4xl" />, // Reduced icon size
    description: [
      "A strongly typed JavaScript language that helps catch errors early in development.",
      "1. A strongly typed superset of JavaScript.",
      "2. Helps catch errors during development.",
      "3. Improves code quality and maintainability.",
      "4. Used by large-scale applications."
    ]
  },
  { 
    name: "MongoDB", 
    icon: <SiMongodb className="text-green-500 text-3xl sm:text-4xl" />, // Reduced icon size
    description: [
      "A NoSQL database used for scalable applications with flexible data structures." ,
      "1. A NoSQL database for scalable applications.",
      "2. Uses flexible JSON-like documents for data storage.",
      "3. Ideal for real-time applications and big data.",
      "4. High performance and horizontal scaling."
    ]
  },
  { 
    name: "Tailwind CSS", 
    icon: <SiTailwindcss className="text-cyan-400 text-3xl sm:text-4xl" />, // Reduced icon size
    description: [
      "A utility-first CSS framework for building modern, responsive designs efficiently." ,
      "1. A utility-first CSS framework.",
      "2. Enables rapid UI development with pre-defined classes.",
      "3. Highly customizable and responsive.",
      "4. Used by modern web applications."
    ]
  },
  { 
    name: "GraphQL", 
    icon: <SiGraphql className="text-pink-500 text-3xl sm:text-4xl" />, // Reduced icon size
    description: [
     "A query language that allows efficient fetching of data from APIs." ,
      "1. A query language for APIs.",
      "2. Allows clients to request only the data they need.",
      "3. Reduces over-fetching and under-fetching of data.",
      "4. Used by companies like GitHub and Shopify."
    ]
  },
  { 
    name: "Docker", 
    icon: <SiDocker className="text-blue-500 text-3xl sm:text-4xl" />, // Reduced icon size
    description: [
      "A platform to containerize applications, making deployment easier and more reliable." ,
      "1. A platform for containerizing applications.",
      "2. Simplifies deployment and scaling.",
      "3. Ensures consistency across development environments.",
      "4. Widely used in DevOps and CI/CD pipelines."
    ]
  },
  { 
    name: "AWS", 
    icon: <FaAws className="text-yellow-500 text-3xl sm:text-4xl" />, // Reduced icon size
    description: [
      "A cloud computing platform offering storage, computing, and machine learning services." ,
      "1. A cloud computing platform by Amazon.",
      "2. Offers services like EC2, S3, and Lambda.",
      "3. Scalable and cost-effective solutions.",
      "4. Used by enterprises worldwide."
    ]
  },
  { 
    name: "Firebase", 
    icon: <SiFirebase className="text-orange-500 text-3xl sm:text-4xl" />, // Reduced icon size
    description: [
      "A backend-as-a-service for authentication, databases, and hosting.",
      "1. A backend-as-a-service (BaaS) platform.",
      "2. Provides authentication, real-time databases, and hosting.",
      "3. Easy integration with mobile and web apps.",
      "4. Used by startups and small businesses."
    ]
  },
  { 
    name: "Supabase", 
    icon: <SiSupabase className="text-green-500 text-3xl sm:text-4xl" />, // Reduced icon size
    description: [
      "An open-source alternative to Firebase, offering real-time databases and authentication." ,
      "1. An open-source alternative to Firebase.",
      "2. Offers real-time databases and authentication.",
      "3. Built on PostgreSQL for scalability.",
      "4. Ideal for modern web applications."
    ]
  },
  // { 
  //   name: "OpenAI", 
  //   icon: <SiOpenai className="text-gray-300 text-3xl sm:text-4xl" />, // Reduced icon size
  //   description: [
  //     "1. Provides AI models like GPT for natural language processing.",
  //     "2. Enables text generation, translation, and summarization.",
  //     "3. Used in chatbots, content creation, and more.",
  //     "4. Powers cutting-edge AI applications."
  //   ]
  // },
  { 
    name: "Python", 
    icon: <FaPython className="text-yellow-400 text-3xl sm:text-4xl" />, // Reduced icon size
    description: [
      "A versatile programming language widely used in AI, web development, and automation." ,
      "1. A versatile programming language.",
      "2. Widely used in AI, web development, and automation.",
      "3. Simple syntax and extensive libraries.",
      "4. Popular in data science and machine learning."
    ]
  },
  { 
    name: "Kotlin", 
    icon: <SiKotlin className="text-purple-500 text-3xl sm:text-4xl" />, // Reduced icon size
    description: [
      "A modern programming language for Android development." ,
      "1. A modern programming language for Android development.",
      "2. Fully interoperable with Java.",
      "3. Reduces boilerplate code and improves productivity.",
      "4. Used by Google for Android apps."
    ]
  },
  { 
    name: "Java", 
    icon: <FaJava className="text-red-500 text-3xl sm:text-4xl" />, // Reduced icon size
    description: [
      "A robust, object-oriented language used for enterprise applications and Android development." ,
      "1. A robust, object-oriented programming language.",
      "2. Used for enterprise applications and Android development.",
      "3. Platform-independent and highly scalable.",
      "4. Powers applications like Minecraft and LinkedIn."
    ]
  },
  { 
    name: "SQL Databases", 
    icon: <FaDatabase className="text-gray-500 text-3xl sm:text-4xl" />, // Reduced icon size
    description: [
      "Structured databases used for managing relational data." ,
      "1. Structured databases for managing relational data.",
      "2. Supports complex queries and transactions.",
      "3. Used in applications like banking and e-commerce.",
      "4. Examples include MySQL, PostgreSQL, and SQL Server."
    ]
  },
];

const TechStack = () => {
  const [selectedTech, setSelectedTech] = useState(techStack[0]);

  return (
    <div className="mt-1 lg:mt-6  mb-5 pb-10 text-center flex flex-col lg:flex-row items-center justify-center lg:items-stretch lg:space-x-10 w-full px-3 md:px-6 lg:px-12 xl:px-20">
      {/* Left Side - Grid */}
      <div className="w-full lg:w-1/2 h-[500px] bg-neutral-900 rounded-xl shadow-lg p-4"> {/* Reduced padding */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4"> {/* Reduced gap */}
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-neutral-800 p-3 sm:p-4 rounded-lg shadow-lg cursor-pointer border border-blue-500/30 hover:border-blue-500/70"
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setSelectedTech(tech)}
            >
              {tech.icon}
              <span className="text-xs sm:text-sm mt-1 text-neutral-300"> {/* Reduced margin-top */}
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Side - Tech Info */}
      <div className="w-full lg:w-1/2 h-[500px] bg-neutral-800 rounded-lg shadow-lg p-6 mt-6 lg:mt-0">
        <div className="flex flex-col justify-start h-full">
          <motion.h3 
            className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {selectedTech.name}
          </motion.h3>
          <motion.div 
            className="text-neutral-300 text-lg space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {selectedTech.description.map((line, index) => (
              <p key={index} className="text-sm sm:text-base text-start">{line}</p>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;