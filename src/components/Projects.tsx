import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  
  {
    title: "Stampiqo - Batch WaterMark for your product Images ",
    description:
      "A full-stack web application for business owners to batch-watermark product images with their logo..",
    tech: [
      "JWT",
      "React 18 + Vite",
      "Custom CSS design system",
      "Express",
      "Node.js",
      "Cloudinary",
      "Sharp",
      "Helmet",
      "express-rate-limit",
      "Archiver, CORS",
      "Multer",
    ],
    demo: "https://stampiqo.shop/",
  },
  // {
  //   title: "ChatBus Live Chat",
  //   description:
  //     "Real-time business live chat system connecting agents and customers, built with Node.js, Socket.IO, Redis, and PostgreSQL. Supports presence, typing indicators, and real-time messaging.",
  //   tech: ["Socket.IO", "PostgreSQL", "Express", "JWT", "Node.js", "ioredis"],
  //   repo: "https://github.com/eesuola/chatBus/",
  //   demo: "https://github.com/eesuola/chatBus/",
  // },
  {
    title: "WhatsApp Bot (AI Whatsapp job Assistant)",
    description:
      "A chatbot for handling job inquiries via WhatsApp, integrated with AI for automated responses.",
    tech: ["Node.js", "Express.js", "JWT", "MongoDB", "Twilio API", "OpenAI API"],
    repo: "https://github.com/eesuola/WhatsApp-Bot",
    demo: "https://whatsapp-bot-8x3i.onrender.com",
  },
  {
    title: "Opaline - Receipt, Invoice & Sales Record App",
    description:
      "A digital receipt generator and sales management backend with partial and full payment tracking, PDF receipt generation, and account and customer record management for small businesses.",
    tech: ["Node.js", "Express.js", "JWT", "MongoDB", "Puppeteer"],
    repo: "https://github.com/eesuola/opaline",
    demo: "https://opalinevogue.shop/",
  },
  {
    title: "Eventra - Web3 Event Ticketing Platform",
    description:
      "Backend for a decentralized ticketing marketplace with dual Web2/Web3 payments, resale royalties, analytics endpoints, and wallet integrations.",
    tech: [
      "Node.js",
      "Supabase",
      "TypeScript",
      "JWT",
      "Web3.js",
      "Paystack API",
      "Hedera SDK",
    ],
    repo: "https://github.com/jerrywonderr/eventra",
    demo: "https://eventra-delta.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section className="bg-muted/30 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-center text-4xl font-bold md:text-5xl">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="flex flex-col border-border/50 bg-gradient-card p-6 shadow-card transition-all duration-300 hover:shadow-glow"
            >
              <h3 className="mb-3 text-2xl font-bold text-foreground">
                {project.title}
              </h3>
              <p className="mb-4 flex-grow text-muted-foreground">
                {project.description}
              </p>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="rounded border border-primary/20 bg-primary/10 px-2 py-1 text-xs text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1"
                >
                  <Button variant="outline" size="sm" className="w-full">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1"
                >
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
