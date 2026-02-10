import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { sub } from "motion/react-client";
import { title } from "process";
import { Inquiries } from "../data/data";

export default function Footer() {
  return (
    <div className="relative">
      <section id="contact" className="bg-card ">
        <footer className=" max-w-7xl mx-auto  grid justify-between grid-cols-1 md:grid-cols-2 md:gap-50 text-white  py-32  gap-10">
          <div className="col-span-1 px-5">
            <div>
              <h1 className="text-white">
                Connect for <br />
                <span className="text-secondary">Excellence.</span>{" "}
              </h1>
              <p className="text-white">
                Looking for a hospitality leader who understands both local
                Nepalese culture and international service standards? Let's
                start a conversation.
              </p>
            </div>
            <div className="flex gap-5">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-400 text-white bg-gray-700 hover:bg-secondary hover:text-black transition"
              >
                <Instagram size={20} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-400 text-white hover:bg-secondary hover:text-black bg-gray-700 transition"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div className=" col-span-1 flex flex-col  text-left gap-5 px-5">
            {Inquiries.map((inquiry, index) => (
              <div key={index} className="flex  group  gap-4 ">
                <div className="flex h-10 w-10  bg-gary-200 rounded-lg bg-gray-700  group-hover:bg-secondary items-center justify-center">
                  <inquiry.icon className="text-5xl text-secondary bg-gary-600 group-hover:text-black  y" />
                </div>
                <div className="group">
                  <h2 className="text-xl text-gray-700 font-bold">
                    {inquiry.title}
                  </h2>
                  <p className="text-lg text-white ">{inquiry.subTitle}</p>
                </div>
              </div>
            ))}
          </div>
        </footer>
      </section>
    </div>
  );
}
