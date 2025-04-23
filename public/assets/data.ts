import { NavbarProps } from "../../src/components/Navbar";
import { DashboardProps } from "../../src/pages/Dashboard";

type ProjectProps = {
  id: number;
  title: string;
  description: string;
  model?: string;
};

export const navList: NavbarProps = {
  itemsArray: [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Product Design", path: "/" },
    { id: 3, title: "DIY", path: "/" },
    { id: 4, title: "Resume", path: "/" },
  ],
};

export const dashboardData: DashboardProps = {
  itemsArray: [
    {
      id: 1,
      title: "Title 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/assets/images/dashboard-cards/controller-card.png",
    },
    {
      id: 2,
      title: "Title 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/assets/images/dashboard-cards/olympics-card.png",
    },
    {
      id: 3,
      title: "Title 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/assets/images/dashboard-cards/ooc-card.png",
    },
    {
      id: 4,
      title: "Title 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/assets/images/dashboard-cards/pump-card.png",
    },
    {
      id: 5,
      title: "Title 5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/assets/images/dashboard-cards/sanitizer-card.png",
    },
  ],
};

export const projectsList: ProjectProps[] = [
  {
    id: 1,
    title: "Title 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    model: "/assets/3d-models/playstation_1.glb",
  },
  {
    id: 2,
    title: "Title 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    model: "/assets/3d-models/playstation_1.glb",
  },
  {
    id: 3,
    title: "Title 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    model: "/assets/3d-models/playstation_1.glb",
  },
  {
    id: 4,
    title: "Title 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    model: "/assets/3d-models/playstation_1.glb",
  },
  {
    id: 5,
    title: "Title 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    model: "/assets/3d-models/playstation_1.glb",
  },
];
