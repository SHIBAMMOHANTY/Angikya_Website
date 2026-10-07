import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/service" },
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/Careers" },
  { label: "Contact Us", href: "/contact" },
];

export const agencyStats = [
  { value: "50+", label: "Enterprise Projects Delivered" },
  { value: "99.9%", label: "System Uptime & Reliability" },
  { value: "100%", label: "Client Satisfaction Score" },
  { value: "24/7", label: "DevOps & Production Support" },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery & Architecture",
    description:
      "We unpack your business requirements, define scalable system blueprints, and select the optimal technology stack.",
  },
  {
    step: "02",
    title: "UI/UX & Rapid Prototyping",
    description:
      "Design user-centric, high-converting interfaces and interactive Figma prototypes validated by real user workflows.",
  },
  {
    step: "03",
    title: "Full-Stack Agile Sprints",
    description:
      "Clean, modular engineering with continuous integration, automated testing, and transparent bi-weekly deliverables.",
  },
  {
    step: "04",
    title: "Cloud Deployment & Scale",
    description:
      "Zero-downtime production deployment, cloud infrastructure automation, robust monitoring, and SLAs.",
  },
];

export const testimonials = [
  {
    user: "Sarah Jenkins",
    company: "FinTech Global",
    image: user1,
    role: "VP of Engineering",
    text: "Angikya delivered our high-throughput banking integration 3 weeks ahead of schedule. Their attention to clean architecture and security is unparalleled.",
  },
  {
    user: "Alexandre Moreau",
    company: "SaaS Automations",
    image: user2,
    role: "Founder & CTO",
    text: "Partnering with Angikya transformed our core product. The new cloud microservices architecture seamlessly handles 10x our previous user concurrency.",
  },
  {
    user: "Marcus Chen",
    company: "Aether AI Labs",
    image: user3,
    role: "Head of Product",
    text: "The speed, communication, and technical depth of the team are remarkable. They feel like a core extension of our in-house engineering squad.",
  },
];
