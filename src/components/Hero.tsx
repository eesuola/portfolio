import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Mail, FileText } from "lucide-react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import SITE from "@/lib/site";
import me from "@/images/me.png";
import trackResumeDownload from "@/hooks/use-resume-tracker";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4 animate-fade-in">
          <Avatar className="w-28 h-28 sm:w-40 sm:h-40 md:w-64 md:h-64 mx-auto mb-6 shadow-lg">
            <AvatarImage
              src={me}
              alt="Profile picture"
              className="object-cover object-center"
            />
            <AvatarFallback className="text-2xl">BD</AvatarFallback>
          </Avatar>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Opeyemi Peter Eesuola
          </h1>
          <h2 className="text-3xl md:text-5xl gradient-text">
            Backend Developer
          </h2>
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Specialized in Node.js, Express, Typescript and PostgreSQL. I design
          and implement RESTful APIs, authentication, payment integrations (Web2
          & Web3), and data models that power products. My focus is
          maintainability, reliability, and clear documentation.
        </p>

        <div className="flex flex-wrap gap-4 justify-center pt-8">
          <a href={`mailto:${SITE.email}`} className="w-auto">
            <Button
              size="lg"
              className="bg-gradient-primary border-0 hover:shadow-glow transition-all"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </a>

          <a
            href={SITE.resume}
            target="_blank"
            rel="noreferrer"
            download
            className="w-auto"
            onClick={() => trackResumeDownload("hero")}
          >
            <Button size="lg" variant="outline">
              <FileText className="mr-2 h-5 w-5" />
              Resume
            </Button>
          </a>

          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            className="w-auto"
          >
            <Button size="lg" variant="outline">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </a>

          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-auto"
          >
            <Button size="lg" variant="outline">
              <LinkedinIcon className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
