// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/Page/TextLayer.css";
// import { Download } from "react-feather";
import CV from "react-cv";
import "../resume.css";
import { resumeData } from "../../public/assets/data";

// pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Resume() {
  return <CV {...resumeData} />;
}
