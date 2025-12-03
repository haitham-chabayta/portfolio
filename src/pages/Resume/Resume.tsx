import { pdfjs } from "react-pdf";
import { Download } from "react-feather";
import "../resume.css";
import { resumeData } from "../../../public/assets/data";
import { ChevronsDown } from "react-feather";
import classNames from "classnames";
import ResumeSection from "./ResumeSection";
import { SkillGroup } from "./Skills";
import TimelineItem from "./TimelineItem";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Resume() {
  return (
    <>
      <section id="resume_hero">
        <div className="relative flex h-screen w-full items-center justify-center">
          <div className="z-10  max-w-screen-lg px-4 lg:px-0">
            <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm">
              <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">
                {resumeData.heroData.name}
              </h1>
              {resumeData.heroData.description}
              <div className="flex gap-x-4 text-neutral-100">
                {resumeData.socialLinks.map(({ label, Icon, href }) => (
                  <a
                    aria-label={label}
                    className="-m-1.5 rounded-md p-1.5 transition-all duration-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500  sm:-m-3 sm:p-3"
                    href={href}
                    key={label}
                  >
                    <Icon className="h-5 w-5 align-baseline sm:h-6 sm:w-6" />
                  </a>
                ))}
              </div>
              <div className="flex w-full justify-center gap-x-4">
                <a
                  className="flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base border-orange-500 ring-orange-500"
                  href={resumeData.file}
                  download="Ahamd's Resume.pdf"
                >
                  Resume
                  <Download className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-6 flex justify-center">
            <a
              className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
              href="resume_aboutMe"
            >
              <ChevronsDown className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
            </a>
          </div>
        </div>
      </section>
      <section className="bg-neutral-800" id="resume_aboutMe">
        <div
          className={classNames("grid grid-cols-1 gap-y-4", {
            "md:grid-cols-4": !!resumeData.aboutData.profileImageSrc,
          })}
        >
          {!!resumeData.aboutData.profileImageSrc && (
            <div className="col-span-1 flex justify-center md:justify-start">
              <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32">
                <img
                  alt="about-me-image"
                  className="h-full w-full object-cover"
                  src={resumeData.aboutData.profileImageSrc}
                />
              </div>
            </div>
          )}
          <div
            className={classNames("col-span-1 flex flex-col gap-y-6", {
              "md:col-span-3": !!resumeData.aboutData.profileImageSrc,
            })}
          >
            <div className="flex flex-col gap-y-2">
              <h2 className="text-2xl font-bold text-white">About me</h2>
              <p className="prose prose-sm text-gray-300 sm:prose-base">
                {resumeData.aboutData.description}
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {resumeData.aboutData.aboutItems.map(
                ({ label, text, Icon }, idx) => (
                  <li
                    className="col-span-1 flex  items-start gap-x-2"
                    key={idx}
                  >
                    {Icon && <Icon className="h-5 w-5 text-white" />}
                    <span className="text-sm font-bold text-white">
                      {label}:
                    </span>
                    <span className=" text-sm text-gray-300">{text}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-neutral-100" id="resume_main">
        <div className="flex flex-col divide-y-2 divide-neutral-300">
          <ResumeSection title="Education">
            {resumeData.education.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </ResumeSection>
          <ResumeSection title="Work">
            {resumeData.experience.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </ResumeSection>
          <ResumeSection title="Skills">
            <p className="pb-8">
              Here you can show a snapshot of your skills to show off to
              employers
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {resumeData.skills.map((skillgroup, index) => (
                <SkillGroup
                  key={`${skillgroup.name}-${index}`}
                  skillGroup={skillgroup}
                />
              ))}
            </div>
          </ResumeSection>
        </div>
      </section>
    </>
  );
}
