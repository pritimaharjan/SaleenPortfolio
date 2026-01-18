"use client";
import { Card, CardTitle } from "@/components/ui/card";
import timeline from "../api/timeline.json";
import { Badge } from "@/components/ui/badge";
import { Timeline } from "@/components/ui/timeline";
import { useState } from "react";
import { i } from "motion/react-client";

export default function Myjourney() {
  const data = timeline.data.map((item, index) => ({
    title: item.title,
    content: (
      <div id="my-journey" className=" ">
        {item.items.map((item, index) => (
          <Card
            key={index}
            className="bg-white grid grid-cols-1 md:grid-cols-2  p-8 rounded-lg
                     hover:shadow-xl animate-bouncetransition-transform  hover:-translate-y-4 duration-300"
          >
            <div>
              <Badge>{item.badge}</Badge>
              <h2 className="text-lg font-semibold mt-2">{item.role}</h2>
              <p className="text-muted-foreground">{item.company}</p>
              {Array.isArray(item.description) &&
                item.description.length > 0 && (
                  <ul className="list-disc pl-5 text-sm  marker:text-secondary text-muted-foreground space-y-1 mt-3">
                    {item.description.map((desc, idx) => (
                      <li key={idx} className="">
                        {desc}
                      </li>
                    ))}
                  </ul>
                )}
            </div>

            <div className="flex flex-col items-center p-10  gap-10 justify-center">
              <div className="text-primary flex gap-2 items-center">
                📅 <span className="text-sm">{item.date}</span>
              </div>
              <div className="w-55 h-56">
                <img
                  src={item.image}
                  alt={item.role}
                  className="h-full w-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    ),
  }));
  return (
    <>
      <div className="py-20 px-4 bg-slate-50 ">
        <div className="flex flex-col lex justify-center items-center mb-20">
          <h1 className="text-center ">Career Timeline</h1>
          <div className="w-30 h-1 bg-secondary "></div>
        </div>
        <div className="max-w-7xl mx-auto overflow-hidden py-30  grid-cols-6">
          <Timeline data={data} />
        </div>
      </div>
    </>
  );
}
