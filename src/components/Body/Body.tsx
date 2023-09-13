import React from "react";
import "./body.scss";

type IBody = {
  bodyContent: React.ReactNode;
};

export const Body: React.FC<IBody> = ({ bodyContent }) => {
  return <div className="body">{bodyContent}</div>;
};
