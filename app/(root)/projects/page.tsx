"use client";

import PageContainer from "@/components/common/page-container";
import ProjectCard from "@/components/projects/project-card";
import { projectsUnsorted } from "@/config/projects";
import { pagesConfig } from "@/config/pages";
import { useTranslation } from "@/utils/client-translation";

export default function ContributonsPage() {

  const { t } = useTranslation();

  return (
    <PageContainer
      title={t("projects")}
      description={t("projects.description")}
    >
      <ProjectCard
        projects={projectsUnsorted}
      />
    </PageContainer>
  );
}
