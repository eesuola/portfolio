import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SITE from "@/lib/site";
import trackResumeDownload from "@/hooks/use-resume-tracker";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Skills />
      <Projects />
      <Contact />

      <footer className="py-8 text-center text-muted-foreground border-t border-border/50">
        <p>
          © {new Date().getFullYear()} Opeyemi Eesuola. Built with React,
          TypeScript & Tailwind CSS.
        </p>
        <div className="mt-2">
          <a
            href={SITE.resume}
            target="_blank"
            rel="noreferrer"
            className="text-sm underline"
            onClick={() => trackResumeDownload("footer")}
          >
            Resume
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
