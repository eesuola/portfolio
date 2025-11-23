import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, MapPin, FileText } from "lucide-react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import trackResumeDownload from "@/hooks/use-resume-tracker";
import SITE from "@/lib/site";

const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Let's <span className="gradient-text">Connect</span>
        </h2>

        <Card className="p-8 md:p-12 bg-gradient-card border-border/50 shadow-glow">
          <div className="text-center space-y-6">
            <p className="text-xl text-muted-foreground">
              I’m open to backend roles and freelance projects. I respond
              quickly to messages. let’s talk about how I can help build your
              next product.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a href={`mailto:${SITE.email}`} className="w-auto">
                <Button
                  size="lg"
                  className="bg-gradient-primary border-0 hover:shadow-glow transition-all"
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

            <div className="flex items-center justify-center gap-2 text-muted-foreground pt-8">
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
