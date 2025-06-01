import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { projectsList } from "../../public/assets/data";
import Slider from "@mui/material/Slider";

const Project = () => {
  const { id } = useParams();
  const projectItem = projectsList.find((item) => item.id === Number(id));
  const minValue = Math.min(
    ...(projectItem?.videoMarks?.map((mark) => mark.value) ?? [])
  );
  const maxValue = Math.max(
    ...(projectItem?.videoMarks?.map((mark) => mark.value) ?? [])
  );
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [step, setStep] = useState(minValue);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const video = videoRef.current;

  useEffect(() => {
    if (minValue !== 0 && video) {
      video.play().catch((err) => console.error("Video play failed:", err));

      timeoutRef.current = setTimeout(() => {
        video.pause();
      }, (minValue - 0) * 1000);
    }
  }, []);

  const handleStepChange = (_event: Event, newStep: number) => {
    const prevStep = step;
    setStep(newStep);
    if (!video || !projectItem?.videoMarks) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    let startTime = 0;

    if (newStep !== minValue) {
      const previousMark = [...projectItem.videoMarks]
        .filter((mark) => mark.value < newStep)
        .sort((a, b) => b.value - a.value)[0];
      startTime = previousMark?.value ?? prevStep;
    }
    video.currentTime = startTime;

    video.play().catch((err) => console.error("Video play failed:", err));

    timeoutRef.current = setTimeout(() => {
      video.pause();
    }, (newStep - startTime) * 1000);
  };

  return (
    <section>
      <h1 className="text-4xl font-bold mb-12 text-white text-shadow-[0px_1px_5px_rgb(0,0,0)]">
        {projectItem?.title}
      </h1>
      <video
        ref={videoRef}
        controls={false}
        className="max-w-[1000px] w-full mx-auto mb-13 rounded-lg shadow-[0px_0px_20px_4px_rgb(0,0,0)]"
      >
        <source src={projectItem?.videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="w-full px-12">
        <Slider
          aria-label="Video marks"
          className="video-slider"
          min={minValue}
          max={maxValue}
          defaultValue={minValue}
          value={step}
          step={null}
          onChange={handleStepChange}
          marks={projectItem?.videoMarks}
        />
      </div>
    </section>
  );
};

export default Project;
