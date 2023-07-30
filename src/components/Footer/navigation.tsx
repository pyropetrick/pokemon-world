import { ReactNode } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

type FootNav = {
  icon: ReactNode;
  link: string;
};

export const navs: FootNav[] = [
  {
    icon: <BsGithub size={30}/>,
    link: "https://github.com/pyropetrick",
  },
  {
    icon: <BsLinkedin size={30} />,
    link: "https://www.linkedin.com/in/pyropetrick/",
  },
];
