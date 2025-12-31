"use client";

import Image from "next/image";
import bg from "../../../../public/background/data-pipeline-etl-data-engineering.webp";

import AboutDetails from "@/app/components/about";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center -z-10 relative">
      <Image
        src={bg}
        priority
        alt="Next.js Portfolio website's about page background image"
        className="fixed w-full h-full object-cover object-center -z-50 select-none opacity-40 blur-md"
      />

      <AboutDetails />
    </main>
  );
}
