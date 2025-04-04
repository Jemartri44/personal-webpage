"use client";

import PageContainer from "@/components/common/page-container";
import SkillsCard from "@/components/skills/skills-card";
import { pagesConfig } from "@/config/pages";
import { skills } from "@/config/skills";
import { useTranslation } from "@/utils/client-translation";

export default function SkillsPage() {

  const { t } = useTranslation();

  return (
    <PageContainer
      title={t("skills.title")}
      description={t("skills.description")}
    >
      <SkillsCard skills={skills} />
    </PageContainer>
  );
}
