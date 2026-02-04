import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Icons } from "@/components/common/icons";
import ProjectDescription from "@/components/projects/project-description";
import { buttonVariants } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { Projects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import profileImg from "@/public/profile-img.jpg";

interface ProjectPageProps {
  params: Promise<{
    projectId: string;
  }>;
}

export default async function Project({ params }: ProjectPageProps) {
  const { projectId } = await params;
  let project = Projects.find((val) => val.id === projectId);
  if (!project) {
    redirect("/projects");
  }

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <div>
        <h1 className="flex items-center text-center justify-between mt-2 font-heading text-4xl leading-tight lg:text-5xl">
          {project.companyName}
          <div className="flex items-center gap-2">
            {project.githubLink && (
              <CustomTooltip text="Link to the source code.">
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className="p-2 rounded-full bg-background border-2 border-primary hover:bg-primary hover:border-primary transition-colors group"
                >
                  <Icons.gitHub className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </Link>
              </CustomTooltip>
            )}
            {project.websiteLink && (
              <CustomTooltip text="Link to live demo of the project">
                <Link
                  href={project.websiteLink}
                  target="_blank"
                  className="p-2 rounded-full bg-background border-2 border-primary hover:bg-primary hover:border-primary transition-colors group"
                >
                  <Icons.externalLink className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </Link>
              </CustomTooltip>
            )}
          </div>
        </h1>
        <ChipContainer textArr={project.category} />
        <div className="my-4 flex space-x-4">
          <Link
            href={siteConfig.links.github}
            className="flex items-center space-x-3 "
          >
            <Image
              src={profileImg}
              alt={"Davis Maloch"}
              width={48}
              height={48}
              className="rounded-full bg-background"
            />

            <div className="flex-1 text-left leading-tight">
              <p className="font-medium text-base">{"Davis Maloch"}</p>
              <p className="text-sm text-muted-foreground">
                @{siteConfig.username}
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className="mb-7 ">
        <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-2">
          Tech Stack
        </h2>
        <ChipContainer textArr={project.techStack} />
      </div>

      <div className="mb-7">
        <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-2">
          Description
        </h2>
        <div className="relative">
          {/* Image - hidden on mobile, floats top right on tablet and up */}
          {project.pagesInfoArr[0]?.imgArr[0] && (
            <Image
              src={project.pagesInfoArr[0].imgArr[0]}
              alt={project.pagesInfoArr[0].title}
              width={300}
              height={300}
              className="hidden md:block md:float-right md:ml-4 md:mb-4 w md:w-[350px] rounded-xl border-4 border-foreground bg-muted transition-colors shadow-sm"
              priority
            />
          )}
          {/* {<project.descriptionComponent />} */}
          <ProjectDescription
            paragraphs={project.descriptionDetails.paragraphs}
            bullets={project.descriptionDetails.bullets}
          />
          {/* Image at bottom on mobile only */}
          {project.pagesInfoArr[0]?.imgArr[0] && (
            <Image
              src={project.pagesInfoArr[0].imgArr[0]}
              alt={project.pagesInfoArr[0].title}
              width={250}
              height={250}
              className="md:hidden my-4 rounded-xl border-4 border-foreground bg-muted transition-colors shadow-sm mx-auto max-w-[250px]"
              priority
            />
          )}
        </div>
      </div>

      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link
          href="/projects"
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          All Projects
        </Link>
      </div>
    </article>
  );
}
