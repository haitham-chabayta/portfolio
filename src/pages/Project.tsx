import React from "react";
import { useParams } from "react-router-dom";
import { defaultOptions, SimpleViewer } from "threedviewer";
import { projectsList } from "../../public/assets/data";
import modelUrl from "../3d-models/harry-potter_albus_dumbledore.glb"; // Import the model

const Project = () => {
  const { id } = useParams();
  const projectItem = projectsList.find((item) => item.id === Number(id));
  return (
    <section>
      <h1 className="text-4xl font-bold mb-4">{projectItem?.title}</h1>
      <div style={{ width: "100vw", height: "100vh" }}>
        <SimpleViewer
          options={{
            ...defaultOptions,
            usePathTracing: true,
          }}
          object={"/assets/3d-models/harry-potter_albus_dumbledore.glb"} // Use the imported model URL
        />
      </div>
    </section>
  );
};

export default Project;
