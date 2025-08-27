"use client";
import React from "react";
import StyledMain from "@/components/atoms/StyledMain";

interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  // Ensure deterministic rendering and avoid browser-only APIs during SSR
  return <StyledMain>{children}</StyledMain>;
};
export default Main;
