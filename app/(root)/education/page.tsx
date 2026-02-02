import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import EducationCard from "@/components/education/education-card";
import { education } from "@/config/education";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.education.metadata.title,
  description: pagesConfig.education.metadata.description,
};

export default function EducationPage() {
  return (
    <PageContainer
      title={pagesConfig.education.title}
      description={pagesConfig.education.description}
    >
      <div className="mx-auto my-4 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 static items-stretch">
        {education.map((edu) => (
          <EducationCard education={edu} key={edu.id} />
        ))}
      </div>
    </PageContainer>
  );
}
