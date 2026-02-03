import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import { education } from "@/config/education";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

interface EducationDetailPageProps {
  params: Promise<{
    eduId: string;
  }>;
}

export async function generateStaticParams() {
  return education.map((edu) => ({
    eduId: edu.id,
  }));
}

export async function generateMetadata({
  params,
}: EducationDetailPageProps): Promise<Metadata> {
  const { eduId } = await params;
  const edu = education.find((e) => e.id === eduId);
  return {
    title: edu ? `${edu.degree} | Davis Maloch` : "Education",
    description: edu
      ? `${edu.degree} from ${edu.institution}`
      : "Education details",
  };
}

export default async function EducationDetailPage({
  params,
}: EducationDetailPageProps) {
  const { eduId } = await params;
  const edu = education.find((e) => e.id === eduId);

  if (!edu) {
    return <div>Education not found</div>;
  }

  return (
    <article className="container max-w-4xl py-6 lg:py-10">
      <div className="mb-8 flex flex-col gap-4 sm:gap-6">
        <div className="flex items-start gap-4">
          {edu.logo && (
            <Image
              src={edu.logo}
              alt={edu.institution}
              width={80}
              height={80}
              className="rounded-lg border-2 border-border bg-white p-2"
            />
          )}
          <div className="flex-1">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {edu.degree}
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              {edu.institution} • {edu.location}
            </p>
            {edu.institutionUrl && (
              <Link
                href={edu.institutionUrl}
                target="_blank"
                className="mt-2 inline-flex items-center gap-2 text-primary hover:underline"
              >
                Visit Institution <Icons.externalLink className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {edu.skills.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Skills Developed</h2>
            <div className="flex flex-wrap gap-2">
              {edu.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center px-3 py-1 rounded-lg text-sm font-medium bg-primary/10 text-primary border border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        <div>
          <h2 className="text-2xl font-bold mb-4">Description</h2>
          <div className="space-y-4">
            {edu.description.map((para, idx) => (
              <p key={idx} className="text-muted-foreground leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>

        {edu.achievements.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Achievements</h2>
            <ul className="space-y-3">
              {edu.achievements.map((achievement, idx) => (
                <li
                  key={idx}
                  className="text-base leading-relaxed flex items-start gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}

        {edu.focus && edu.focus.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Focus Areas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {edu.focus.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 rounded-lg bg-muted"
                >
                  <Icons.check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {edu.curriculum && edu.curriculum.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Curriculum</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {edu.curriculum.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 rounded-lg bg-muted"
                >
                  <Icons.check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link
          href="/education"
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          All Education
        </Link>
      </div>
    </article>
  );
}
