import React from "react";
import "./header.css";

type IHeader = {
  contentText: string;
};

export const Header: React.FC<IHeader> = ({ contentText }) => {
  return (
    <div className="navbar">
      <div className="navbar-content">{contentText}</div>
    </div>
  );
};
