import React from "react";

interface HeadingBoxProps {
  title: string;
}

function HeadingBox({ title }: HeadingBoxProps) {
  return (
    <div className="heading-box border-l-4 border-l-[var(--button-primary)]">
      <h4 className="text-[2.5rem] mx-5 font-extrabold">{title}</h4>
    </div>
  );
}

export default HeadingBox;
