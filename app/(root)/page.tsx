import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import EducationCard from "@/components/education/education-card";
import ExperienceCard from "@/components/experience/experience-card";
import ProjectCard from "@/components/projects/project-card";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { featuredEducation } from "@/config/education";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { featuredProjects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { featuredSkills, skills } from "@/config/skills";
import { cn } from "@/lib/utils";
import profileImg from "@/public/profile-img.jpg";

export const metadata: Metadata = {
  title: `${pagesConfig.home.metadata.title}`,
  description:
    "Davis Maloch - Full-Stack Engineer with 2+ years of experience building scalable software solutions and AI integration. Explore my projects, experience, and contributions.",
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function IndexPage() {
  // Structured data for personal portfolio
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Full Stack Developer",
    sameAs: [siteConfig.links.github],
  };

  // Structured data for website as a software application (template)
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Next.js Portfolio Template",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <section className="space-y-6 pb-8 pt-6 mb-0 md:pb-12 md:py-20 lg:py-32 h-screen flex items-center">
        <div className="container flex max-w-[64rem] flex-col items-center text-center -mt-20">
          <Image
            src={profileImg}
            height={100}
            width={100}
            sizes="100vw"
            className="bg-primary rounded-full mb-0 h-auto md:mb-2 w-[60%] max-w-[16rem] border-8 border-primary"
            alt="Davis Maloch - Full stack developer Portfolio"
            priority
          />
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Davis Maloch
          </h1>
          <h3 className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl">
            Full-Stack Engineer
          </h3>
          <div className="mt-4 max-w-[42rem] text-center">
            <p className="leading-normal text-muted-foreground text-sm sm:text-base">
              Building scalable software solutions with Python, React, and
              modern cloud technologies. Creator of ChatVectorAI, an open-source
              RAG engine demonstrating hands-on AI implementation and semantic
              search.
            </p>
          </div>

          <div className="flex flex-col mt-10 items-center justify-center sm:flex-row sm:space-x-4 gap-3">
            <Link
              href={"/resume"}
              target="_blank"
              className={cn(buttonVariants({ size: "lg" }))}
              aria-label="View resume"
            >
              <Icons.post className="w-4 h-4 mr-2" /> Resume
            </Link>
            <Link
              href={"/contact"}
              rel="noreferrer"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                }),
                "border-2"
              )}
              aria-label="Contact Davis Maloch"
            >
              <Icons.contact className="w-4 h-4 mr-2" /> Contact
            </Link>
          </div>
          <Icons.chevronDown className="h-6 w-6 mt-10" />
        </div>
      </section>
      <section
        className="container space-y-6 bg-muted py-10 my-14"
        id="projects"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            {pagesConfig.projects.title}
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {pagesConfig.projects.description}
          </p>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full items-stretch">
            {featuredProjects.map((exp) => (
              <div key={exp.id} className="h-full w-full min-w-0">
                <ProjectCard project={exp} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <Link href="/projects">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </div>
      </section>
      <section className="container space-y-6 py-10 my-14" id="experience">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            {pagesConfig.experience.title}
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {pagesConfig.experience.description}
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-3">
          {experiences.slice(0, 3).map((experience) => (
            <div key={experience.id} className="h-full">
              <ExperienceCard experience={experience} />
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/experience">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </div>
      </section>
      <section
        className="container space-y-6 bg-muted py-10 my-14"
        id="education"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            {pagesConfig.education.title}
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {pagesConfig.education.description}
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-3">
          {featuredEducation.map((edu) => (
            <div key={edu.id} className="h-full">
              <EducationCard education={edu} />
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/education">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </div>
      </section>
      <section className="container space-y-6 py-10" id="skills">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            {pagesConfig.skills.title}
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {pagesConfig.skills.description}
          </p>
        </div>
        <div className="block md:hidden">
          <SkillsCard skills={featuredSkills} />
        </div>
        <div className="hidden md:block">
          <SkillsCard skills={skills} />
        </div>
        <div className="flex justify-center md:hidden">
          <Link href="/skills">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </div>
      </section>
    </ClientPageWrapper>
  );
}
