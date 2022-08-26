import React from "react";
import NavButton from "./NavButton";

export function Navbar() {
  const buttons: string[] = [
    "O Atelier",
    "Coleções",
    "Catálogo",
    "Agendar",
    "Feedbacks",
    "Blog",
    "Your Sytle",
  ];

  return (
    <div className="flex gap-8 py-4">
      {buttons.map((button) => (
        <NavButton>{button}</NavButton>
      ))}
    </div>
  );
}
