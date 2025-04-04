import { EducationEntry } from "@/components/education/education-card";

// Education entries with translation keys instead of direct text
export const featuredEducation: EducationEntry[] = [
  {
    titleKey: "education.masters.title", // Uses keys instead of direct text
    institutionKey: "education.masters.institution",
    logo: "/education/uc3m-logo.png", 
    dateKey: "education.masters.date",
    link: "https://www.uc3m.es/master/inteligencia-artificial-aplicada",
    descriptionKey: "education.masters.description"
  },
  {
    titleKey: "education.mathematics.title",
    institutionKey: "education.mathematics.institution",
    logo: "/education/urjc-logo.png",
    dateKey: "education.mathematics.date",
    link: "https://www.urjc.es/estudios/doble-grado/684-ingenieria-informatica-matematicas",
    descriptionKey: "education.mathematics.description"
  },
  {
    titleKey: "education.computer-science.title",
    institutionKey: "education.computer-science.institution",
    logo: "/education/urjc-logo.png",
    dateKey: "education.computer-science.date",
    link: "https://www.urjc.es/estudios/doble-grado/684-ingenieria-informatica-matematicas",
    descriptionKey: "education.computer-science.description"
  },
  {
    titleKey: "education.ml-specialization.title",
    institutionKey: "education.ml-specialization.institution",
    logo: "/education/deeplearning-ai-logo.png",
    dateKey: "education.ml-specialization.date",
    link: "https://www.coursera.org/account/accomplishments/specialization/VW5K9ZXH84LU",
    descriptionKey: "education.ml-specialization.description"
  },
];

export const education = [...featuredEducation];