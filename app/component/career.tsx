"use client";
import { Card, CardTitle } from "@/components/ui/card";
import timeline from "../api/timeline.json";
import { Badge } from "@/components/ui/badge";
import { Timeline } from "@/components/ui/timeline";

export default function MyJourney() {
  // Normalize timeline data
  const data = timeline.data.map((section) => ({
    title: section.title,
    content: (
      <div>
        {section.items.map((item: any, idx: number) => {
          // Normalize description to always be an array
          const descriptions = Array.isArray(item.description)
            ? item.description
            : item.description
              ? [item.description]
              : [];

          return (
            <Card
              key={idx}
              className="bg-white grid grid-cols-1 md:grid-cols-2 p-8 rounded-lg
                         hover:shadow-xl animate-bouncetransition-transform hover:-translate-y-4 duration-300"
            >
              <div>
                <Badge>{item.badge}</Badge>
                <h2 className="text-lg font-semibold mt-2">{item.role}</h2>
                <p className="text-muted-foreground">{item.company}</p>

                {descriptions.length > 0 && (
                  <ul className="list-disc pl-5 text-sm marker:text-secondary text-muted-foreground space-y-1 mt-3">
                    {descriptions.map((desc: string, i: number) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="flex flex-col items-center p-10 gap-10 justify-center">
                <div className="text-primary flex gap-2 items-center">
                  📅 <span className="text-sm">{item.date}</span>
                </div>
                <div className="w-55 h-56">
                  <img
                    src={item.image || "/images/default-fallback-image.png"}
                    alt={item.role}
                    className="h-full w-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    ),
  }));

  return (
    <div id="my-journey">
      <div className="py-32 px-4 bg-slate-50 dark:bg-black">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center dark:text-white">Career Timeline</h1>
          <div className="w-30 h-1 bg-secondary"></div>
        </div>
        <div className="max-w-7xl mx-auto overflow-hidden grid-cols-6">
          <Timeline data={data} />
        </div>
      </div>
    </div>
  );
}
