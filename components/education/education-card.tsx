"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { EducationInterface } from "@/config/education";

interface EducationCardProps {
  education: EducationInterface;
}

const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-lg border bg-background p-4 sm:p-6 transition-all duration-300">
      {education.institutionUrl && (
        <a
          href={education.institutionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 p-2 rounded-full bg-background border-2 border-primary hover:bg-primary hover:border-primary transition-colors group/icon z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <Icons.externalLink className="w-4 h-4 text-primary group-hover/icon:text-primary-foreground transition-colors" />
        </a>
      )}
      <div className="flex items-start gap-3 sm:gap-4 pt-8">
        {education.logo && (
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 border-border overflow-hidden bg-white flex-shrink-0">
            <Image
              src={education.logo}
              alt={education.institution}
              width={48}
              height={48}
              className="w-full h-full object-contain p-2"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col gap-1 sm:gap-2">
            <div className="flex items-start sm:items-center gap-2">
              <h3 className="text-base sm:text-lg font-bold text-foreground line-clamp-2 sm:line-clamp-1">
                {education.degree}
              </h3>
            </div>
            <div className="flex flex-col gap-1 text-sm text-muted-foreground">
              <span className="font-medium">{education.institution}</span>
              <span>{education.location}</span>
            </div>
            {education.focus && education.focus.length > 0 && (
              <div className="mt-2">
                <p className="text-xs text-muted-foreground font-medium mb-1">
                  Focus:
                </p>
                <div className="flex flex-wrap gap-1">
                  {education.focus.slice(0, 3).map((item, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                  {education.focus.length > 3 && (
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground">
                      +{education.focus.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
          <p className="mt-2 sm:mt-3 text-sm text-muted-foreground line-clamp-2">
            {education.description[0]}
          </p>
        </div>
      </div>
      <div className="mt-3 sm:mt-4 flex justify-end">
        <Button
          variant="outline"
          size="sm"
          className="rounded-lg w-full sm:w-auto"
          asChild
        >
          <Link href={`/education/${education.id}`}>
            <Icons.chevronRight className="w-4 h-4" /> View Details
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default EducationCard;
