import Image from "next/image";
import AboutMe from "./component/about-me";
import CareerTimeline from "./component/career";
import VisualPortfolio from "./component/visual-portfolio";
import Skills from "./component/skills";
import Myjourney from "./component/career";
import { ArrowDown10Icon, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center ">
        <img
          src="/hero/hero.jpeg"
          alt="Logo"
          className="max-h-screen w-full  duration-300 object-cover"
        />
      </div>
      <Link
        href="#about"
        className="absolute  animate-bounce left-1/2 -mt-20 text-white w-10 h-10 z-50 "
      >
        <ChevronDown className="absolute  animate-bounce  text-white w-10 h-10 z-50 " />
      </Link>
      <AboutMe />
      <Myjourney />
      <Skills />
      <VisualPortfolio />
    </>
  );
}
