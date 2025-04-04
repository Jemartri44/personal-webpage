"use client";

import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { projectsInterface } from "@/config/projects";
import { useTranslation } from "@/utils/client-translation";

interface ProjectCardProps {
  projects: projectsInterface[];
}

export default function ProjectCard({
  projects,
}: ProjectCardProps) {

  const { t } = useTranslation();

  return (
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 static">
      {projects.map((project, id) => (
        <Link href={project.link} target="_blank" key={id}>
          <div className="relative rounded-lg border bg-background p-2 hover:bg-accent hover:text-accent-foreground">
            <Icons.externalLink
              size={35}
              className="absolute bottom-3 right-3 border bg-background rounded-full p-2 cursor-pointer text-muted-foreground "
            />
            <div className="flex h-[170px] flex-col justify-between rounded-md p-6 sm:h-[170px]">
              <div className="flex flex-row justify-between">
                <h3 className="font-bold flex space-x-2 items-center">
                  <Icons.gitRepoIcon size={20} />
                  <span>{project.repo}</span>
                </h3>
                
                {/* Conditional rendering of icons */}
                {project.repo === "Exercise4You" ? (
                  <Icons.laptop size={20} />
                ) : (
                  <Icons.gitBranch size={20} />
                )}
              </div>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {t(project.projectDescription as keyof typeof t)}
                </p>
                <p className="text-sm text-muted-foreground flex space-x-2 items-center">
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}