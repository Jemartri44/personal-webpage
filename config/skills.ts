import { FaChartLine, FaJava, FaLanguage, FaPython } from "react-icons/fa";
import { SiAmazonaws, SiAngular, SiDjango, SiDocker, SiFastapi, SiFlask, SiGit, SiGithub, SiGithubactions, SiJupyter, SiKeras, SiMongodb, SiMysql, SiNumpy, SiPandas, SiPlotly, SiPytorch, SiScikitlearn, SiSpringboot, SiTensorflow } from "react-icons/si";
import { PiGraphFill } from "react-icons/pi";
import { MdEngineering, MdLan, MdLanguage, MdSyncProblem } from "react-icons/md";
import { DiMysql } from "react-icons/di";
import { GiCctvCamera, GiTeePipe } from "react-icons/gi";
import { TbApi, TbChartInfographic } from "react-icons/tb";
import { RiTeamFill } from "react-icons/ri";
import { BiSolidBoltCircle } from "react-icons/bi";
import { LuBrain } from "react-icons/lu";


export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Python",
    description:
      "skills.python.description",
    rating: 5,
    icon: FaPython,
  },
  {
    name: "Scikit-learn",
    description:
      "skills.scikit-learn.description",
    rating: 4.5,
    icon: SiScikitlearn
  },
  {
    name: "Pandas",
    description:
      "skills.pandas.description",
    rating: 5,
    icon: SiPandas
  },
  {
    name: "Numpy",
    description:
      "skills.numpy.description",
    rating: 4,
    icon: SiNumpy
  },
  // {
  //   name: "Flask",
  //   description:
  //     "skills.flask.description",
  //   rating: 2.5,
  //   icon: SiFlask
  // },
  // {
  //   name: "Django",
  //   description:
  //     "skills.django.description",
  //   rating: 2,
  //   icon: SiDjango
  // },
  // {
  //   name: "FastAPI",
  //   description:
  //     "skills.fastapi.description",
  //   rating: 2,
  //   icon: SiFastapi
  // },
  {
    name: "Pytorch",
    description:
      "skills.pytorch.description",
    rating: 5,
    icon: SiPytorch
  },
  {
    name: "Tensorflow",
    description:
      "skills.tensorflow.description",
    rating: 4.5,
    icon: SiTensorflow
  },
  {
    name: "Keras",
    description:
      "skills.keras.description",
    rating: 4.5,
    icon: SiKeras
  },
  {
    name: "Matplotlib",
    description:
      "skills.matplotlib.description",
    rating: 4,
    icon: FaChartLine
  },
  {
    name: "Plotly",
    description:
      "skills.plotly.description",
    rating: 4,
    icon: SiPlotly
  },
  {
    name: "skills.computer-vision.name",
    description:
      "skills.computer-vision.description",
    rating: 3.5,
    icon: GiCctvCamera
  },
  {
    name: "skills.natural-language-processing.name",
    description:
      "skills.natural-language-processing.description",
    rating: 4,
    icon: FaLanguage
  },
  {
    name: "skills.reinforcement-learning.name",
    description:
      "skills.reinforcement-learning.description",
    rating: 3.5,
    icon: LuBrain
  },
  {
    name: "Seaborn",
    description:
      "skills.seaborn.description",
    rating: 3.5,
    icon: TbChartInfographic
  },
  {
    name: "skills.etl.name",
    description:
      "skills.etl.description",
    rating: 5,
    icon: GiTeePipe
  },
  {
    name: "skills.english.name",
    description:
      "skills.english.description",
    rating: 5,
    icon: MdLanguage
  },
  {
    name: "skills.deeplearning.name",
    description:
      "skills.deeplearning.description",
    rating: 4.5,
    icon: PiGraphFill
  },
  {
    name: "skills.feature-engineering.name",
    description:
      "skills.feature-engineering.description",
    rating: 4,
    icon: MdEngineering
  },
  {
    name: "MySQL",
    description:
      "skills.sql.description",
    rating: 4,
    icon: DiMysql
  },
  {
    name: "Docker",
    description:
      "skills.docker.description",
    rating: 3.5,
    icon: SiDocker
  },
  {
    name: "MongoDB",
    description:
      "skills.mongodb.description",
    rating: 3.5,
    icon: SiMongodb
  },
  {
    name: "Git",
    description:
      "skills.git.description",
    rating: 4,
    icon: SiGit
  },
  {
    name: "Github",
    description:
      "skills.github.description",
    rating: 4,
    icon: SiGithub
  },
  {
    name: "CI/CD",
    description:
      "skills.cicd.description",
    rating: 3,
    icon: SiGithubactions
  },
  {
    name: "Amazon Web Services",
    description:
        "skills.amazon-web-services.description",
    rating: 3.5,
    icon: SiAmazonaws
  },
  {
    name: "skills.teamwork.name",
    description:
      "skills.teamwork.description",
    rating: 5,
    icon: RiTeamFill
  },
  {
    name: "Jupyter",
    description:
      "skills.jupyter.description",
    rating: 5,
    icon: SiJupyter
  },
  {
    name: "Java",
    description:
      "skills.java.description",
    rating: 5,
    icon: FaJava
  },
  {
    name: "Spring Boot",
    description:
      "skills.spring-boot.description",
    rating: 5,
    icon: SiSpringboot
  },
  {
    name: "Angular",
    description:
      "skills.angular.description",
    rating: 4,
    icon: SiAngular
  },
  {
    name: "API REST",
    description:
      "skills.api-rest.description",
    rating: 5,
    icon: TbApi
  },
  {
    name: "skills.initiative.name",
    description:
      "skills.initiative.description",
    rating: 5,
    icon: BiSolidBoltCircle
  },
  {
    name: "skills.problem-solving.name",
    description:
      "skills.problem-solving.description",
    rating: 5,
    icon: MdSyncProblem
  },
  {
    name: "skills.spanish.name",
    description:
      "skills.spanish.description",
    rating: 5,
    icon: MdLanguage
  }
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
