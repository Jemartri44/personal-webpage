export interface projectsInterface {
  repo: string;
  projectDescription: string;
  link: string;
}

export const projectsUnsorted: projectsInterface[] = [
  {
    repo: "Fact-Verification-System-LLM",
    projectDescription:
      "projects.fact-verification-system.description",
    link: "https://github.com/guillermo-grande/Fact-Verification-System-LLM",
  },
  {
    repo: "Exercise4You",
    projectDescription:
      "projects.exercise4you.description",
    link: "https://exercise4you.es",
  },
  {
    repo: "Antibiotic-Resistance-Prediction",
    projectDescription:
      "projects.antibiotic-resistance-prediction.description",
    link: "https://github.com/guillermo-grande/Antibiotic-Resistance-Prediction",
  },
  {
    repo: "Credit-Granting-Prediction-ML",
    projectDescription:
      "projects.credit-granting-prediction.description",
    link: "https://github.com/guillermo-grande/Credit-Granting-Prediction-ML"
  },
  {
    repo: "f1-constructor-points-dashboard",
    projectDescription:
      "projects.f1-constructor-points-dashboard.description",
    link: "https://github.com/Jemartri44/f1-constructor-points-dashboard"
  }
];

export const featuredProjects: projectsInterface[] =
  projectsUnsorted.slice(0, 3);
