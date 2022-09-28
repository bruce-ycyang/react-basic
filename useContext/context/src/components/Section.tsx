import React from "react";
import { LevelContext } from "../context/LevelContext";

interface IProps {
  children: React.ReactNode;
  level: number;
}

export default function Section({ children, level }: IProps) {
  return (
    <section className="section">
      <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
    </section>
  );
}
