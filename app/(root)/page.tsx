"use client";

import Image from "next/image";
import Link from "next/link";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import ProjectCard from "@/components/projects/project-card";
import ExperienceCard from "@/components/experience/project-card";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { featuredProjects } from "@/config/projects";
import { featuredExperiences } from "@/config/experience";
import { featuredEducation } from "@/config/education";
import { pagesConfig } from "@/config/pages";
import { featuredSkills, skills } from "@/config/skills";
import { cn } from "@/lib/utils";
import jesusImg from "@/public/1743651219647.jpg";
import { useTranslation } from "@/utils/client-translation";
import EducationCard from "@/components/education/education-card";
// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger, 
// } from "@/components/ui/accordion";
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuLabel,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

export default function IndexPage() {

  const { t } = useTranslation();
  
  return (
    <ClientPageWrapper>
      <section className="space-y-6 pb-8 pt-10 sm:pt-16 md:pt-24 h-screen flex items-center">
        <div className="container flex max-w-[64rem] flex-col items-center gap-6 text-center">
          {/* <Link
                        href={"siteConfig.links.twitter"}
                        className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
                        target="_blank"
                    >
                        Follow along on Twitter
                    </Link> */}
          {/* <div className="max-w-[16rem]"> */}
          <Image
            src={jesusImg}
            height={100}
            width={100}
            sizes="100vw"
            className="bg-primary rounded-full mb-4 h-auto w-[50%] sm:w-[55%] max-w-[16rem] border-8 border-primary"
            alt="jesus-martin-trilla-img"
          />
          <AnimatedText
            as="h1"
            delay={0.2}
            className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Jesús Martín Trilla
          </AnimatedText>
          <AnimatedText
            as="h3"
            delay={0.4}
            className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl"
          >
            {t("job")}
          </AnimatedText>
          <div className="flex flex-col mt-10 items-center justify-center sm:flex-row sm:space-x-4 gap-3">
            <AnimatedText delay={0.6}>
              <Link
                href={"https://github.com/jemartri44"}
                target="_blank"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                <Icons.gitHub className="w-4 h-4 mr-2" /> GitHub
              </Link>
            </AnimatedText>
            <AnimatedText delay={0.8}>
              <Link
                href={"/contact"}
                rel="noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  })
                )}
              >
                <Icons.contact className="w-4 h-4 mr-2" /> {t("contact")}
              </Link>
            </AnimatedText>
          </div>
          <AnimatedText delay={1.2}>
            <Icons.chevronDown className="h-6 w-6 mt-10" />
          </AnimatedText>
        </div>
      </section>
      <AnimatedSection
        className="container space-y-6 bg-muted py-10"
        id="projects"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {t("projects.title")}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {t("projects.description")}
          </AnimatedText>
        </div>
        <div className="mx-auto justify-center gap-4 md:w-full lg:grid-cols-3">
          <ProjectCard projects={featuredProjects} />
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/projects">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> {t("view-all")}
            </Button>
          </Link>
        </AnimatedText>
        {/* <div className="mx-auto text-center md:max-w-[58rem]">
                    <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        See all the relevant skills.
                    </p>
                </div> */}
      </AnimatedSection>
      <AnimatedSection
        direction="left"
        className="container space-y-6 py-10 my-14"
        id="education"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {t("education.title")}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {t("education.description")}
          </AnimatedText>
        </div>
        <div className="mx-auto w-full max-w-[58rem]">
          <EducationCard educations={featuredEducation} />
        </div>
      </AnimatedSection>
      <AnimatedSection
        direction="right"
        className="container space-y-6 bg-muted py-10 my-14"
        id="experience"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {t("experience.title")}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {t("experience.description")}
          </AnimatedText>
        </div>
        <div className="mx-auto flex flex-wrap justify-center gap-4 md:w-full">
          {featuredExperiences.map((exp, index) => (
            <AnimatedSection
              key={exp.id}
              delay={0.1 * (index + 1)}
              direction="up"
              className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
            >
              <ExperienceCard project={exp} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/experience">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> {t("view-all")}
            </Button>
          </Link>
        </AnimatedText>
        {/* <div className="mx-auto text-center md:max-w-[58rem]">
                    <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        See all the relevant experiences.
                    </p>
                </div> */}
      </AnimatedSection>
      <AnimatedSection
        direction="left"
        className="container space-y-6 py-10 my-14"
        id="skills"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {t("skills.title")}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {t("skills.description")}
          </AnimatedText>
        </div>
        <SkillsCard skills={featuredSkills} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/skills">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> {t("view-all")}
            </Button>
          </Link>
        </AnimatedText>
        {/* <div className="mx-auto text-center md:max-w-[58rem]">
                    <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        See all the relevant skills.
                    </p>
                </div> */}
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
