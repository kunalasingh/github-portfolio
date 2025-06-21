import Image from "next/image";

import { CalendarDays } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { JobImages } from "@/components/JobImages";

const jobs = [
  {
    role: "Associate (WebDeveloper)", // TODO: Replace with actual role
    company: "COGNIZANT", // TODO: Replace with actual company name
    logo: "/job1.png", // TODO: Replace with actual logo
    duration: "Feb 2021 - Jul 2023",
    description:
      "Developed responsive user interfaces with React.js and Material-UI, built analytics dashboards with interactive charts and real-time data integration, authored test cases achieving 97% coverage, and ensured seamless AWS deployments with secure data management.",
    link: "#",
    images: [],
  },
  {
    role: "Intern (Automation Engineer)", // TODO: Replace with actual role
    company: "ARTEE FLOW CONTROLS PVT. LTD", // TODO: Replace with actual company name
    logo: "/job2.png", // TODO: Replace with actual logo
    duration: "Jun 2019 – Jul 2019",
    description:
      "Designed and implemented SCADA systems for a gas manufacturing plant, integrating advanced automation technologies, and ensured seamless operations through proactive monitoring, issue resolution, and performance optimization.",
    link: "#",
    images: [],
  },
];

export const Experience = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4 text-black dark:text-white">
        Work Experience
      </h2>
      <Card>
        <CardContent className="pt-6">
          <ul className="space-y-8">
            {jobs.map((j, i) => (
              <li key={i} className="border-b last:border-b-0 pb-8 last:pb-0">
                {/* Job Details */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={j.logo}
                    alt={j.company}
                    width={40}
                    height={40}
                    className="rounded-md border shadow-md object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{j.role}</h3>
                    <p className="text-sm text-muted-foreground">{j.company}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                  <CalendarDays className="size-3 mr-2" />
                  {j.duration}
                </p>
                <p className="text-sm mt-2">{j.description}</p>
                {/* Job Images */}
                <JobImages
                  role={j.role}
                  link={j.link}
                  images={j.images}
                  duration={j.duration}
                />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};
