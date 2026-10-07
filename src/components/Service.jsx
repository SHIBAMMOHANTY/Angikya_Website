import React from "react";
import {
  Laptop,
  Smartphone,
  Bot,
  Database,
  Layers,
  Cloud,
  Palette,
  ShieldCheck,
  Server,
  CheckCircle2,
  Clock
} from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import AccordionGallery from "./AccordionGallery";

const capabilities = [
  {
    icon: Laptop,
    label: "WEB & ENT. APPS",
    tag: "ENGINEERING",
    title: "Web & Enterprise Apps",
    description: "High-performance web apps, responsive portals, and enterprise platforms engineered with Next.js and Node.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    highlights: ["React / Next.js", "Micro-Frontends", "High Throughput"],
    link: "/contact"
  },
  {
    icon: Smartphone,
    label: "MOBILE APPS",
    tag: "CROSS-PLATFORM",
    title: "Mobile App Development",
    description: "Native iOS/Android and Flutter/React Native applications with fluid 60fps animations and offline capabilities.",
    image: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Flutter & React Native", "Offline-First", "App Store Release"],
    link: "/contact"
  },
  {
    icon: Bot,
    label: "AI & LLMs",
    tag: "INTELLIGENT SYSTEMS",
    title: "AI, LLMs & Automation",
    description: "Custom AI integrations, LLM workflows, autonomous agents, and automated business intelligence pipelines.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    highlights: ["OpenAI & Anthropic", "RAG Pipelines", "Autonomous Agents"],
    link: "/contact"
  },
  {
    icon: Palette,
    label: "UI/UX DESIGN",
    tag: "DESIGN",
    title: "UI/UX & Product Design",
    description: "Crafting intuitive user journeys, conversion-focused design systems in Figma, and interactive high-fidelity mockups.",
    image: "https://images.unsplash.com/photo-1581291518655-9523b932edd6?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Figma Systems", "Interactive Prototypes", "UX Research"],
    link: "/contact"
  },
  {
    icon: Cloud,
    label: "CLOUD & DEVOPS",
    tag: "INFRASTRUCTURE",
    title: "Cloud & DevOps Solutions",
    description: "Kubernetes/Docker clusters, automated CI/CD pipelines, AWS/GCP architecture, and 99.9% uptime SLAs.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    highlights: ["AWS & GCP", "Kubernetes / Docker", "Zero Downtime"],
    link: "/contact"
  },
  {
    icon: Layers,
    label: "APIs & INTEGRATION",
    tag: "SCALABLE CORE",
    title: "SaaS & API Architecture",
    description: "Multi-tenant cloud architectures, resilient REST/GraphQL APIs, microservices, and elastic databases.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    highlights: ["GraphQL & REST", "Event-Driven", "Multi-Tenant"],
    link: "/contact"
  },
  {
    icon: Database,
    label: "DATA SCIENCE",
    tag: "BIG DATA",
    title: "Data Science & Analytics",
    description: "High-throughput database engines, automated ETL pipelines, and real-time executive telemetry dashboards.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Realtime Dashboards", "ETL Pipelines", "Vector Search"],
    link: "/contact"
  },
  {
    icon: ShieldCheck,
    label: "CYBERSECURITY",
    tag: "COMPLIANCE",
    title: "Cybersecurity & Audit",
    description: "Vulnerability audits, end-to-end encryption, role-based access control, and zero-trust infrastructure.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Zero-Trust", "Vulnerability Scans", "SOC2 Readiness"],
    link: "/contact"
  },
  {
    icon: Server,
    label: "QA & TESTING",
    tag: "PERFORMANCE",
    title: "QA & Automated Testing",
    description: "Automated test suites, end-to-end Cypress/Playwright workflows, and load-tested performance assurance.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Automated CI", "Load Testing", "99.9% Defect-Free"],
    link: "/contact"
  },
];

const FeatureSection = () => {
  return (
    <section id="services" className="relative py-14 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Ambient Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-500/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* Minimal Clean Section Header */}
      <SectionHeader
        title="Transforming Complex Ideas into"
        gradientWord="High-Impact Products"
      />

      {/* Interactive Expanding Accordion Gallery */}
      <div className="mt-8 sm:mt-10">
        <AccordionGallery
          items={capabilities}
          defaultIndex={3}
          expandRatio={0.52}
          trigger="hover"
          accentColor="#38bdf8"
          overlayColor="#070b14"
          textColor="#ffffff"
          grayscale={false}
          showLabels={true}
          duration={0.6}
          height={410}
          gap={10}
          radius={18}
          orientation="horizontal"
        />
      </div>
    </section>
  );
};

export default FeatureSection;