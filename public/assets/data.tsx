import { FC, ForwardRefExoticComponent, SVGProps } from "react";
import { NavbarProps } from "../../src/components/Navbar";
import { DashboardProps } from "../../src/pages/Dashboard";
import { EngineeringProps } from "../../src/pages/Engineering";
import { Activity, Box, IconProps, Settings, Tool } from "react-feather";
import GithubIcon from "../../src/components/Icon/GithubIcon";
import InstagramIcon from "../../src/components/Icon/InstagramIcon";
import LinkedInIcon from "../../src/components/Icon/LinkedInIcon";
import StackOverflowIcon from "../../src/components/Icon/StackOverflowIcon";
import TwitterIcon from "../../src/components/Icon/TwitterIcon";
import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

type ProjectProps = {
  id: number;
  title: string;
  videoSrc?: string;
  videoMarks: { value: number; label: string }[];
  sliderColor?: string; // Only in hexa code
};

type ResumeProps = {
  file: string;
  heroData: Hero;
  aboutData: About;
  skills: SkillGroup[];
  education: TimelineItemProps[];
  experience: TimelineItemProps[];
  socialLinks: Social[];
};

export interface Hero {
  name: string;
  description: JSX.Element;
}

export interface About {
  profileImageSrc?: string;
  description: string;
  aboutItems: AboutItem[];
}

export interface AboutItem {
  label: string;
  text: string;
  Icon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref">>;
}

export interface Skill {
  name: string;
  level: number;
  max?: number;
}

export interface SkillGroup {
  name: string;
  skills: Skill[];
}

export interface TimelineItemProps {
  date: string;
  location: string;
  title: string;
  content: JSX.Element;
}

export interface Social {
  label: string;
  Icon: FC<IconProps>;
  href: string;
}

export const navList: NavbarProps = {
  itemsArray: [
    {
      id: 1,
      title: "Product Design",
      path: "/",
      activePrefixes: ["/project/"],
    },
    { id: 2, title: "DIY", path: "/DIY" },
    { id: 3, title: "Engineering", path: "/Engineering" },
    { id: 4, title: "Resume", path: "/Resume" },
  ],
};

// Dummy data for the Engineering page — swap images/text for real content.
export const engineeringData: EngineeringProps = {
  categories: [
    {
      id: 1,
      title: "Mechanical Design",
      subtitle: "CAD modelling, mechanisms & tolerancing",
      Icon: Settings,
      slides: [
        {
          id: 101,
          title: "Triplex Pump Crankshaft",
          description:
            "Three-throw crankshaft designed for balanced plunger loading, with bearing seats toleranced for long service life under high pressure.",
          image: "/assets/images/dashboard-cards/pump-card.png",
          tags: ["SolidWorks", "GD&T", "Bearings"],
        },
        {
          id: 102,
          title: "900° Thumb Steering Mechanism",
          description:
            "Compact gear-train translating thumb input into a full 900° steering range while keeping the controller handheld.",
          image: "/assets/images/dashboard-cards/controller-card.png",
          tags: ["Gear Train", "Ergonomics"],
        },
        {
          id: 103,
          title: "Multiwell Plate Valve Ramp",
          description:
            "Cam-driven valve ramp that sequences pneumatic channels across the organ-on-chip plate with a single linear actuator.",
          image: "/assets/images/dashboard-cards/ooc-card.png",
          tags: ["Pneumatics", "Cam Design"],
        },
        {
          id: 104,
          title: "Sanitizer Loading Tray",
          description:
            "Sliding tray with soft-close rails and rounded edges, sized for kindergarten toys and safe for little hands.",
          image: "/assets/images/dashboard-cards/sanitizer-card.png",
          tags: ["Sheet Metal", "Safety"],
        },
      ],
    },
    {
      id: 2,
      title: "Prototyping",
      subtitle: "3D printing, iteration & testing rigs",
      Icon: Box,
      slides: [
        {
          id: 201,
          title: "Controller Shell — Rev. C",
          description:
            "Third FDM iteration of the controller housing, refined for grip comfort and snap-fit assembly without screws.",
          image: "/assets/images/dashboard-cards/controller-card.png",
          tags: ["FDM", "Snap-fits"],
        },
        {
          id: 202,
          title: "Showcase Room Scale Model",
          description:
            "1:10 laser-cut wood and acrylic mock-up used to validate mirror angles and lighting before full-size build.",
          image: "/assets/images/dashboard-cards/olympics-card.png",
          tags: ["Laser Cutting", "Lighting"],
        },
        {
          id: 203,
          title: "Microfluidic Layer Stack",
          description:
            "Resin-printed test layers for checking channel sealing and alignment pins across the chip stack.",
          image: "/assets/images/dashboard-cards/ooc-card.png",
          tags: ["SLA", "Microfluidics"],
        },
      ],
    },
    {
      id: 3,
      title: "Simulation",
      subtitle: "FEA, CFD & motion studies",
      Icon: Activity,
      slides: [
        {
          id: 301,
          title: "Pump Head Stress Analysis",
          description:
            "Static FEA of the pump head under peak discharge pressure, used to optimise wall thickness and fillet radii.",
          image: "/assets/images/dashboard-cards/pump-card.png",
          tags: ["FEA", "Safety Factor"],
        },
        {
          id: 302,
          title: "Sanitizer Airflow Study",
          description:
            "CFD study of air circulation in the drying chamber to remove dead zones and cut cycle time.",
          image: "/assets/images/dashboard-cards/sanitizer-card.png",
          tags: ["CFD", "Thermal"],
        },
        {
          id: 303,
          title: "Trigger Return Spring",
          description:
            "Motion study tuning spring preload so acceleration and brake triggers feel progressive and return reliably.",
          image: "/assets/images/dashboard-cards/controller-card.png",
          tags: ["Motion Study", "Springs"],
        },
        {
          id: 304,
          title: "Pneumatic Path Pressure Drop",
          description:
            "Flow simulation through the chip's pneumatic path to balance actuation pressure across all wells.",
          image: "/assets/images/dashboard-cards/ooc-card.png",
          tags: ["Flow", "Pneumatics"],
        },
      ],
    },
    {
      id: 4,
      title: "Manufacturing",
      subtitle: "DFM, assembly & production drawings",
      Icon: Tool,
      slides: [
        {
          id: 401,
          title: "Pump Baseplate & Mounting",
          description:
            "Welded baseplate with integrated leakage recovery and machined mounting pads for motor alignment.",
          image: "/assets/images/dashboard-cards/pump-card.png",
          tags: ["Welding", "Machining"],
        },
        {
          id: 402,
          title: "Showcase Room Joinery",
          description:
            "Wooden interior panels designed for flat-pack transport and tool-free assembly on site.",
          image: "/assets/images/dashboard-cards/olympics-card.png",
          tags: ["Woodwork", "Flat-pack"],
        },
        {
          id: 403,
          title: "Controller Assembly Line-up",
          description:
            "Exploded assembly drawing and BOM preparing the controller for small-batch injection moulding.",
          image: "/assets/images/dashboard-cards/controller-card.png",
          tags: ["DFM", "BOM", "Injection Moulding"],
        },
      ],
    },
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

export const resumeData: ResumeProps = {
  file: "/assets/documents/resume.pdf",
  heroData: {
    name: `I'm Tim Baker.`,
    description: (
      <>
        <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
          I'm a Victoria based{" "}
          <strong className="text-stone-100">
            Full Stack Software Engineer
          </strong>
          , currently working at{" "}
          <strong className="text-stone-100">Instant Domains</strong> helping
          build a modern, mobile-first, domain registrar and site builder.
        </p>
        <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
          In my free time time, you can catch me training in{" "}
          <strong className="text-stone-100">Muay Thai</strong>, plucking my{" "}
          <strong className="text-stone-100">banjo</strong>, or exploring
          beautiful <strong className="text-stone-100">Vancouver Island</strong>
          .
        </p>
      </>
    ),
  },
  aboutData: {
    profileImageSrc: "/assets/images/personal/profile-pic.jpg",
    description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
                  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
                  in.`,
    aboutItems: [
      { label: "Location", text: "Victoria, BC", Icon: MapIcon },
      { label: "Age", text: "29", Icon: CalendarIcon },
      { label: "Nationality", text: "Canadian / Irish", Icon: FlagIcon },
      {
        label: "Interests",
        text: "Motorcycles, Muay Thai, Banjos",
        Icon: SparklesIcon,
      },
      { label: "Study", text: "University of Victoria", Icon: AcademicCapIcon },
      {
        label: "Employment",
        text: "Instant Domains, inc.",
        Icon: BuildingOffice2Icon,
      },
    ],
  },
  skills: [
    {
      name: "Spoken languages",
      skills: [
        {
          name: "English",
          level: 10,
        },
        {
          name: "French",
          level: 4,
        },
        {
          name: "Spanish",
          level: 3,
        },
      ],
    },
    {
      name: "Frontend development",
      skills: [
        {
          name: "React",
          level: 9,
        },
        {
          name: "Typescript",
          level: 7,
        },
        {
          name: "GraphQL",
          level: 6,
        },
      ],
    },
    {
      name: "Backend development",
      skills: [
        {
          name: "Node.js",
          level: 8,
        },
        {
          name: "Rust",
          level: 5,
        },
        {
          name: "Golang",
          level: 4,
        },
      ],
    },
    {
      name: "Mobile development",
      skills: [
        {
          name: "React Native",
          level: 9,
        },
        {
          name: "Flutter",
          level: 4,
        },
        {
          name: "Swift",
          level: 3,
        },
      ],
    },
  ],
  education: [
    {
      date: "April 2007",
      location: "Clown college",
      title: "Masters in Beer tasting",
      content: (
        <p>
          Describe your experience at school, what you learned, what useful
          skills you have acquired etc.
        </p>
      ),
    },
    {
      date: "March 2003",
      location: "School of Business",
      title: "What did you study 101",
      content: (
        <p>
          Describe your experience at school, what you learned, what useful
          skills you have acquired etc.
        </p>
      ),
    },
  ],
  experience: [
    {
      date: "March 2010 - Present",
      location: "Awesome Development Company",
      title: "Senior UX Engineer",
      content: (
        <p>
          Describe work, special projects, notable achievements, what
          technologies you have been working with, and anything else that would
          be useful for an employer to know.
        </p>
      ),
    },
    {
      date: "March 2007 - February 2010",
      location: "Garage Startup Studio",
      title: "Junior bug fixer",
      content: (
        <p>
          Describe work, special projects, notable achievements, what
          technologies you have been working with, and anything else that would
          be useful for an employer to know.
        </p>
      ),
    },
  ],
  socialLinks: [
    { label: "Github", Icon: GithubIcon, href: "https://github.com/tbakerx" },
    {
      label: "Stack Overflow",
      Icon: StackOverflowIcon,
      href: "https://stackoverflow.com/users/8553186/tim-baker",
    },
    {
      label: "LinkedIn",
      Icon: LinkedInIcon,
      href: "https://www.linkedin.com/in/timbakerx/",
    },
    {
      label: "Instagram",
      Icon: InstagramIcon,
      href: "https://www.instagram.com/reactresume/",
    },
    {
      label: "Twitter",
      Icon: TwitterIcon,
      href: "https://twitter.com/TimBakerx",
    },
  ],
};
