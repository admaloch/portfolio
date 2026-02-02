import { skillsInterface } from "@/config/skills";

interface SkillsCardProps {
  skills: skillsInterface[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-10">
      {skills.map((skill, id) => (
        <div
          key={id}
          className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-200"
          title={skill.name}
        >
          <skill.icon size={48} className="text-primary" />
          <span className="text-xs sm:text-sm font-medium text-muted-foreground">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  );
}
