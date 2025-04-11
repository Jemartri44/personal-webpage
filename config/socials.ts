import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@Jemartri44",
    icon: Icons.gitHub,
    link: "https://github.com/Jemartri44",
  },
  {
    name: "LinkedIn",
    username: "Jesús Martín Trilla",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/jesus-martin-trilla/",
  },
  {
    name: "Gmail",
    username: "Jesús M.T",
    icon: Icons.gmail,
    link: "mailto:jemartri@gmail.com",
  },
];
