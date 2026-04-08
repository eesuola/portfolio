import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, MapPin, FileText } from "lucide-react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import trackResumeDownload from "@/hooks/use-resume-tracker";
import SITE from "@/lib/site";

const Contact = () => {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-16 text-center text-4xl font-bold md:text-5xl">
          Let's <span className="gradient-text">Connect</span>
        </h2>

        <Card className="border-border/50 bg-gradient-card p-8 shadow-glow md:p-12">
          <div className="space-y-6 text-center">
            <p className="text-xl text-muted-foreground">
              I'm open to backend roles and freelance projects. I respond
              quickly to messages. Let's talk about how I can help build your
              next product.
            </p>

            <div className="flex flex-col justify-center gap-4 pt-6 sm:flex-row">
              <a href={`mailto:${SITE.email}`} className="w-auto">
                <Button
                  size="lg"
                  className="border-0 bg-gradient-primary transition-all hover:shadow-glow"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
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
                  GitHub Profile
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

              <a
                href={SITE.resume}
                target="_blank"
                rel="noreferrer"
                download
                className="w-auto"
                onClick={() => trackResumeDownload("contact")}
              >
                <Button size="lg" variant="outline">
                  <FileText className="mr-2 h-5 w-5" />
                  Resume
                </Button>
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 pt-8 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>Available for remote opportunities worldwide</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
