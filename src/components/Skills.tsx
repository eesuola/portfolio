import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["Node.js", "Express.js", "JavaScript (ES6+)", "TypeScript"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "Prisma ORM", "Mongoose"],
  },
  {
    title: "Security & Auth",
    skills: ["JWT", "OAuth2", "Bcrypt", "Input Validation (Joi/Zod)"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Git/GitHub", "Railway", "Render", "Hetzner", "Postman", "Swagger", "Redis", "RabbitMQ", "Hostinger"],
  },
  {
    title: "Other Tools",
    skills: ["Web3.js / Ethers.js", "Flutterwave API", "Puppeteer", "Cloudinary", "Socket.io", "PayStack API"],
  },
];

const Skills = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Technical <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <Card
              key={idx}
              className="p-6 bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <Badge
                    key={skillIdx}
                    variant="secondary"
                    className="text-sm px-3 py-1 bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <code className="text-foreground">{skill}</code>
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;