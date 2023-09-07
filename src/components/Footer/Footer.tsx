import React from "react";
import "./footer.css";

type IFooter = {
  contentText: string;
};

export const Footer: React.FC<IFooter> = ({ contentText }) => {
  return (
    <div className="footer">
      <div className="footer-content">{contentText}</div>
    </div>
  );
};
