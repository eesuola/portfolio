import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Mail } from "lucide-react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import SITE from "@/lib/site";

const projects = [
  {
    title: "Eventra — Web3 Event Ticketing Platform",
    description:
      "Backend for a decentralized ticketing marketplace with dual Web2/Web3 payments, resale royalties, analytics endpoints and wallet integrations.",
    tech: [
      "Node.js",
      "Supabase",
      "TypeScript",
      "JWT",
      "Web3.js",
      "PayStack API",
      "Hedera SDK",
    ],
    repo: "https://github.com/jerrywonderr/eventra",
    demo: "https://eventra-delta.vercel.app/",
  },
  {
    title: "Fashion Swap & Donation App",
    description:
      "Community-driven platform for swapping, selling, and donating fashion items with media uploads and messaging.",
    tech: ["JWT", "PostgreSQL", "FlutterWave", "Express", "Node.js", "Cloudinary", "Jest","wiston"],
    repo: "https://github.com/eesuola/fashion-swap",
    demo: "https://eventra-delta.vercel.app/",
  },
  {
    title: "ChatBus Live Chat",
    description:
      "Real-time business live chat system with agents ↔ customers, built using Node.js, Socket.IO, Redis, and PostgreSQL. Supports presence (online/offline), typing indicators, and messaging in real time.",
    tech: ["Socket.io", "PostgreSQL", "Express", "JWT", "Node.Js","Ioredis"],
    repo: "https://github.com/eesuola/chatBus/",
    demo: "https://www.github.com/eesuola",
  },
  {
    title: "Fintech App (Flutterwave Integration)",
    description:
      "Prototype fintech backend handling secure payments, wallets, and transaction audit logs via Flutterwave.",
    tech: ["NodeJs", "Express.js", "JWT", "MongoDB", "FlutterWave"],
    repo: "https://github.com/eesuola/Fintech",
    demo: "https://www.github.com/eesuola",
  },
  {
    title: "Receipt & Sales Record App",
    description:
      "A digital receipt generator and sales management backend. Auto-tracked partial & full payments,PDF receipt generation, Account & customer record management, Improved small business bookkeeping",
    tech: ["NodeJs", "Express.js", "JWT", "MongoDB", "Puppeteer"],
    repo: "https://github.com/eesuola/pearl_luxury",
    demo: "https://www.github.com/eesuola",
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="p-6 bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="text-xs px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.repo ?? SITE.github}
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
                  href={project.demo ?? SITE.linkedin}
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

              <div className="mt-3 flex items-center gap-3">
                {/* <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center text-sm text-foreground/90"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  <span className="underline">{SITE.email}</span>
                </a> */}

                {/* <a
                  href={SITE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-sm text-foreground/90"
                >
                  <Github className="mr-2 h-4 w-4" />
                  <span className="underline">GitHub</span>
                </a> */}

                {/* <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-sm text-foreground/90"
                >
                  <LinkedinIcon className="mr-2 h-4 w-4" />
                  <span className="underline">LinkedIn</span>
                </a> */}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
