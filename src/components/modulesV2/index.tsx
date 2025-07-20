import { FC } from "react";

interface ModuleProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const Module: FC<ModuleProps> = ({ title, description, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <div>{children}</div>
    </div>
  );
};

export default Module;