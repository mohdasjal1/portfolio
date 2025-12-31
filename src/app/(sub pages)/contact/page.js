import Image from "next/image";
import bg from "../../../../public/background/data-pipeline-etl-data-engineering.webp";
import ContactForm from "@/app/components/contact/Form";
import ContactExperience from "@/app/components/contact/ContactExperience";

export default function Contact() {
  return (
    <main className="flex items-center justify-center min-h-screen px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16">
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="fixed top-0 left-0 w-full h-full object-cover object-center -z-50 select-none opacity-20"
      />

      <article className="w-full max-w-screen-2xl flex flex-col xl:flex-row items-center justify-between gap-8 pb-8 pt-24 lg:pt-32 2xl:pt-40">

        {/* Left Side - Contact Form */}
        <div className="w-full xl:w-1/2 flex flex-col items-center justify-center space-y-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-cyan-400 font-semibold text-center text-2xl md:text-3xl lg:text-4xl capitalize">
              Let&#39;s Build Something Extraordinary!
            </h1>
          </div>
          <ContactForm />
        </div>

        {/* Right Side - 3D Experience */}
        <div className="w-full xl:w-1/2 h-96 xl:h-[500px]">
          <ContactExperience />
        </div>

      </article>
    </main>
  );
}