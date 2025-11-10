declare module "react-cv" {
  import * as React from "react";
  export type ResumeProps = {
    personalData: {
      name: string;
      title: string;
      image: string;
      contacts: [
        { type: string; value: string },
        { type: string; value: string },
        { type: string; value: string },
        { type: string; value: string },
        { type: string; value: string },
        { type: string; value: string },
        { type: string; value: string }
      ];
    };
    sections: [
      {
        type: string;
        title: string;
        content: string;
        icon: string;
      }
    ];
    branding: false;
  };
  const ReactCV: React.FC<ResumeProps>;
  export default ReactCV;
}
