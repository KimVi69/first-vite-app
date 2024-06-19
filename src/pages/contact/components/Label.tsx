import React from "react";

interface LabelProps {
  title?: string;
  style: boolean;
}
const Label1: React.FC<LabelProps> = ({ title = "default value", style }) => {
  return (
    <p
      className={`text-base font-medium ${style ? "text-[red]" : "text-black"}`}
    >
      {title}
    </p>
  );
};

const Label2 = ({ title }: { title: string }) => {
  return <p className="text-base font-medium">{title}</p>;
};

export { Label1, Label2 };
