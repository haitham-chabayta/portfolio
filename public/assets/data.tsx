import { FC, ForwardRefExoticComponent, SVGProps } from "react";
import { NavbarProps } from "../../src/components/Navbar";
import { DashboardProps } from "../../src/pages/Dashboard";
import { IconProps } from "react-feather";
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
  education: TimelineItem[];
  experience: TimelineItem[];
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

export interface TimelineItem {
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
