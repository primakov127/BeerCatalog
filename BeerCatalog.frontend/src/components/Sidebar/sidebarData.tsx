import { AiFillHome } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

interface ISidebarData {
  title: string;
  path: string;
  icon: JSX.Element;
}

export const SidebarData: ISidebarData[] = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
  },
  {
    title: "Favorites",
    path: "/favorites",
    icon: <AiFillStar />,
  },
];
