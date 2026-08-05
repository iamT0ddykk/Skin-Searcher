import type React from "react";
import { Link } from "react-router";
import "./preset.css";
type PresetProps = {
  children: React.ReactNode;
};
export function Preset({ children }: PresetProps) {
  return (
    <div className="texts-area">
      <h1>
        <Link to={"/"}>Skin Searcher</Link>
      </h1>
      {children}
    </div>
  );
}
