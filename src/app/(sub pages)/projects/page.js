import Image from "next/image";
import SectionLayout from "../../components/projects-sections/sectionLayout";

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center -z-10 relative">
      <Image
        src="/background/data-pipeline-etl-data-engineering.webp"
        alt="background-image"
        fill
        className="fixed max-w-full-2xl h-full object-cover object-center -z-50 select-none opacity-40 blur-md"
        />

        <SectionLayout />


    </main>
  );
}
