import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// TODO: Update skills
const skills = [
  "Java",
  "C",
  "Python",
  "Javascript",
  "LaTeX",
  "HTML",
  "CSS",
  "ReactJS",
  "Material-UI",
  "jQuery",
  "Bootstrap",
  "Tailwind CSS",
  "Gatsby",
  "React Native",
  "NodeJS",
  "Spring Boot",
  "ExpressJS",
  "Jest",
  "Enzyme",
  "React Testing Library",
  "JUnit",
  "JWT",
  "HTTP Cookies",
  "Stripe",
  "Plaid",
  "Highcharts",
  "Git",
  "GitHub",
  "CI/CD Pipelines",
  "JIRA",
  "Confluence",
  "Gulp",
  "Webpack",
  "Redux",
  "Postman",
  "Babel",
  "ESLint",
];

export const Skills = () => {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((s, i) => (
            <Badge key={i} variant="secondary">
              {s}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
