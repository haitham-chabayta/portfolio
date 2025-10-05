import { NavbarProps } from "../../src/components/Navbar";
import { DashboardProps } from "../../src/pages/Dashboard";

type ProjectProps = {
  id: number;
  title: string;
  videoSrc?: string;
  videoMarks: { value: number; label: string }[];
  sliderColor?: string; // Only in hexa code
};

export const navList: NavbarProps = {
  itemsArray: [
    { id: 1, title: "Product Design", path: "/" },
    { id: 2, title: "DIY", path: "/DIY" },
    { id: 3, title: "Resume", path: "/Resume" },
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
      title: "ORGAN-ON-CHIP MULTIWELL PLATE SYSTEM",
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
    title: "DRIVING GAMING CONTROLLER",
    videoSrc: "/assets/videos/driving_controller_showcase.mp4",
    videoMarks: [
      { value: 1, label: "" },
      { value: 3, label: "Showcase" },
      { value: 14.2, label: "Main Features" },
      { value: 21.2, label: "Triggers" },
      { value: 34.9, label: "Inside look" },
      { value: 44.5, label: "Components" },
      { value: 53, label: "Assembly" },
      { value: 55, label: "GAD" },
    ],
    sliderColor: "#fc4444",
  },
  {
    id: 2,
    title: "WINTER OLYMPICS HISTORY SHOWCASE ROOM",
    videoSrc: "/assets/videos/Winter_Olympics_Box_History.mp4",
    videoMarks: [
      { value: 2.5, label: "Outside View" },
      { value: 5, label: "Inside View 1" },
      { value: 8, label: "Inside View 2" },
      { value: 9.5, label: "Outside View" },
    ],
    sliderColor: "#b644fc",
  },
  {
    id: 3,
    title: "ORGAN-ON-CHIP MULTIWELL PLATE SYSTEM",
    videoSrc: "/assets/videos/OOC_complete_ 300925.mov",
    videoMarks: [
      { value: 0.2, label: "Showcase" },
      { value: 4.2, label: "Sub assemblies" },
      { value: 9.2, label: "ValveRamp" },
      { value: 12.2, label: "OOC features" },
      { value: 16, label: "OOC layers" },
      { value: 22.5, label: "Pipetting" },
      { value: 33, label: "Pneumatic path" },
      { value: 49, label: "Mechanical actuation" },
 ],
    sliderColor: "#ff8724ff",
  },
  {
    id: 4,
    title: "TRIPLEX RECIPROCATING PUMP",
    videoSrc: "/assets/videos/Triplex_pump_animation_compressed.mp4",
    videoMarks: [
      { value: 3, label: "Pump overview" },
      { value: 19, label: "Coupling" },
      { value: 23, label: "Components" },
      { value: 32, label: "Pump head" },
      { value: 37, label: "Mechanism" },
      { value: 44, label: "Leakage recovery system" },
      { value: 52, label: "Baseplate features" },
      { value: 61, label: "Mounting" },
      { value: 65, label: "Final view" },
    ],
    sliderColor: "#42a1ff",
  },
  {
    id: 5,
    title: "Drive controller showcase",
    videoSrc: "/assets/videos/driving_controller_showcase.mp4",
    videoMarks: [
      { value: 3, label: "" },
      { value: 21, label: "Features 1" },
      { value: 23, label: "Features 2" },
      { value: 31, label: "Inside look" },
      { value: 37, label: "Components" },
      { value: 44, label: "Assembly" },
      { value: 53, label: "Assembly" },
      { value: 61, label: "Assembly" },
      { value: 65, label: "Assembly" },
    ],
  },
];
