import { NavbarProps } from "../../src/components/Navbar";
import { DashboardProps } from "../../src/pages/Dashboard";

type ProjectProps = {
  id: number;
  title: string;
  videoSrc?: string;
  videoMarks: { value: number; label: string }[];
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
      title: "DRIVING GAMING CONTROLLER",
      description:
        "A gaming controller featuring a 900-degree thumb steering wheel, plus acceleration and brake triggers, designed for driving enthusiasts",
      image: "/assets/images/dashboard-cards/controller-card.png",
    },
    {
      id: 2,
      title: "WINTER OLYMPICS HISTORY SHOWCASE ROOM",
      description:
        "A mirrored box room with a wooden interior, showcasing the greatest historical moments of the Winter Olympics",
      image: "/assets/images/dashboard-cards/olympics-card.png",
    },
    {
      id: 3,
      title: "ORGAN-ON-CHIP MULTIWELL PLATE",
      description:
        "Design of an Organ-on-Chip multiwell plate to culture 3D cell microtissues and provide mechanical stimuli",
      image: "/assets/images/dashboard-cards/ooc-card.png",
    },
    {
      id: 4,
      title: "TRIPLEX RECIPROCATING PUMP",
      description:
        "A triplex reciprocating pump designed for high-pressure and aggressive fluid transfer in industrial settings",
      image: "/assets/images/dashboard-cards/pump-card.png",
    },
    {
      id: 5,
      title: "KINDERGARTEN TOY SANITIZER",
      description:
        "An all-in-one toy sanitizing system prioritizing time efficiency and child safety",
      image: "/assets/images/dashboard-cards/sanitizer-card.png",
    },
  ],
};

export const projectsList: ProjectProps[] = [
  {
    id: 1,
    title: "Drive controller showcase",
    videoSrc: "/assets/videos/driving_controller_showcase.mp4",
    videoMarks: [
      { value: 3, label: "Features 1" },
      { value: 14, label: "Features 2" },
      { value: 21, label: "Inside look" },
      { value: 36, label: "Disassembly" },
      { value: 45, label: "Components" },
      { value: 56, label: "Assembly" },
    ],
  },
  {
    id: 2,
    title: "Drive controller showcase",
    videoSrc: "/assets/videos/driving_controller_showcase.mp4",
    videoMarks: [
      { value: 3, label: "Features 1" },
      { value: 14, label: "Features 2" },
      { value: 21, label: "Inside look" },
      { value: 36, label: "Disassembly" },
      { value: 45, label: "Components" },
      { value: 56, label: "Assembly" },
    ],
  },
  {
    id: 3,
    title: "Drive controller showcase",
    videoSrc: "/assets/videos/driving_controller_showcase.mp4",
    videoMarks: [
      { value: 3, label: "Features 1" },
      { value: 14, label: "Features 2" },
      { value: 21, label: "Inside look" },
      { value: 36, label: "Disassembly" },
      { value: 45, label: "Components" },
      { value: 56, label: "Assembly" },
    ],
  },
  {
    id: 4,
    title: "Drive controller showcase",
    videoSrc: "/assets/videos/driving_controller_showcase.mp4",
    videoMarks: [
      { value: 3, label: "Features 1" },
      { value: 14, label: "Features 2" },
      { value: 21, label: "Inside look" },
      { value: 36, label: "Disassembly" },
      { value: 45, label: "Components" },
      { value: 56, label: "Assembly" },
    ],
  },
  {
    id: 5,
    title: "Drive controller showcase",
    videoSrc: "/assets/videos/driving_controller_showcase.mp4",
    videoMarks: [
      { value: 3, label: "Features 1" },
      { value: 14, label: "Features 2" },
      { value: 21, label: "Inside look" },
      { value: 36, label: "Disassembly" },
      { value: 45, label: "Components" },
      { value: 56, label: "Assembly" },
    ],
  },
];
