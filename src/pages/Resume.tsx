import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import { Download } from "react-feather";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Resume({
  file,
  width = 600,
}: {
  file: string;
  width?: number;
}) {
  return (
    <div className="flex justify-center mb-4 bg-[rgba(0,0,0,0.4)] rounded-lg">
      <div className="relative group">
        <a
          className="h-full w-full hidden group-hover:flex justify-center items-center bg-[rgba(0,0,0,0.5)] absolute z-[3] cursor-pointer"
          href={file}
          download="Ahamd's Resume.pdf"
        >
          <Download
            size={26}
            className="text-white text-shadow-[0px_1px_5px_rgb(0,0,0)]"
          />
        </a>
        <Document className="mx-auto" file={file}>
          <Page
            pageNumber={1}
            renderAnnotationLayer={false}
            renderTextLayer={true}
          />
        </Document>
      </div>
    </div>
  );
}
