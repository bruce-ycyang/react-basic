import React from "react";
import { useContext } from "react";
import { LevelContext } from "../context/LevelContext";

interface IProps {
  children: React.ReactNode;
}

export default function Section({ children }: IProps) {
  const level = useContext(LevelContext);

  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>{children}</LevelContext.Provider>
    </section>
  );
}
