import { ROUTE } from "@/config";

export type Nav = {
  name: string;
  link: ROUTE;
  icon: any;
}

export const navs: Nav[] = [
  {
    name: "Home",
    link: ROUTE.HOME,
    icon: "",
  },
  {
    name: "Pokedex",
    link: ROUTE.POKEDEX,
    icon: "",
  },
  {
    name: "Game",
    link: ROUTE.GAME,
    icon: "",
  },
]