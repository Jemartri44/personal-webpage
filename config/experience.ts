import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ExperienceInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescriptionKey: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr?: PagesInfoInterface[];
}

export const Experiences: ExperienceInterface[] = [
  {
    id: "enel",
    companyName: "Enel Green Power",
    type: "Professional",
    category: ["Data Science", "Predictive Maintenance", "Data Engineering"],
    shortDescriptionKey:
      "experience.enel.shortDescription",
    websiteLink: "https://www.enelgreenpower.com",
    techStack: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "SQL",
      "Data Engineering",
      "Big Data",
      "Predictive Modeling"
    ],
    startDate: new Date("2024-03-18"),
    endDate: new Date("2022-06-12"),
    companyLogoImg: "/experience/enel/logo.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "experience.enel.description.part1",
        "experience.enel.description.part2"
      ],
      bullets: [
        "experience.enel.description.bullet1",
        "experience.enel.description.bullet2",
      ],
    },
  },
  {
    id: "exercise4you",
    companyName: "Exercise4You",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "Freelance"],
    shortDescriptionKey:
      "experience.exercise4you.shortDescription",
    websiteLink:
      "https://exercise4you.es",
    techStack: ["Spring Boot", "Spring Security", "Java", "Angular", "TypeScript", "MySQL", "MongoDB", "MinIO", "Git", "GitHub", "Docker", "Amazon Web Services", "Amazon EC2", "Amazon RDS", "Amazon DocumentDB", "Amazon S3", "Amazon Route 53", "Amazon VPC", "Amazon Certificate Manager"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2025-02-01"),
    companyLogoImg: "/experience/exercise4you/logo.png",
    pagesInfoArr: [
      {
        title: "experience.exercise4you.pages.title1",
        description:
            "experience.exercise4you.pages.description1",
        imgArr: ["/experience/exercise4you/login.png"],
      },
      {
        title: "experience.exercise4you.pages.title2",
        description:
          "experience.exercise4you.pages.description2",
        imgArr: [
          "/experience/exercise4you/patients.png",
        ],
      },
      {
        title: "experience.exercise4you.pages.title3",
        description:
          "experience.exercise4you.pages.description3",
        imgArr: ["/experience/exercise4you/functionalities.png"],
      },
      {
        title: "experience.exercise4you.pages.title4",
        description:
          "experience.exercise4you.pages.description4",
        imgArr: [
          "/experience/exercise4you/pdf.png",
        ],
      },
      {
        title: "experience.exercise4you.pages.title5",
        description:
          "experience.exercise4you.pages.description5",
        imgArr: ["/experience/exercise4you/architecture.jpg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "experience.exercise4you.description.part1",
        "experience.exercise4you.description.part2",
        "experience.exercise4you.description.part3",
        "experience.exercise4you.description.part4"
      ],
      bullets: [
        "experience.exercise4you.description.bullet1",
        "experience.exercise4you.description.bullet2",
        "experience.exercise4you.description.bullet3",
        "experience.exercise4you.description.bullet4",
        "experience.exercise4you.description.bullet5"
      ],
    },
  },
];

export const featuredExperiences = Experiences.slice(0, 3);
