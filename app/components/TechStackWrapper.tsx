"use client";

import dynamic from "next/dynamic";

const TechStack = dynamic(() => import("./TechStack"), {
  ssr: false,
});

export default function TechStackWrapper() {
  return <TechStack />;
}