"use client";

import { motion, useScroll, useTransform } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const LINE_TOP_OFFSET = 160;

  /* Measure full timeline height correctly (works with sticky) */
  useEffect(() => {
    if (!timelineRef.current) return;

    const updateHeight = () => {
      if (!timelineRef.current) return;

      const fullHeight = timelineRef.current.scrollHeight;
      setHeight(fullHeight - LINE_TOP_OFFSET);
    };

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(timelineRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  /* Scroll tracking */
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 20%", "end 80%"],
  });

  /* Motion transforms */
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);

  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-white dark:bg-black font-sans pb-20 md:px-10">
      <div ref={timelineRef} className="relative max-w-7xl mx-auto">
        {/* Timeline Items */}
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            {/* Left Column (Sticky Title + Dot) */}
            <div className="sticky hidden top-40 z-40 md:flex items-center max-w-xs md:w-full">
              <div className="relative flex items-center">
                {/* Dot */}
                <div className="h-10 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700" />
                </div>

                {/* Title */}
                <h3 className="hidden md:block text-xl font-bold text-neutral-500 dark:text-neutral-500 pl-10">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className="relative md:pl-20 pr-4  w-full">{item.content}</div>
          </div>
        ))}

        {/* Vertical Line */}
        <div
          className="absolute overflow-hidden left-[1.375rem] top-40 w-[2px]"
          style={{ height }}
        >
          {/* Base line */}
          <div
            className="absolute hidden    inset-0 bg-neutral-200 dark:bg-neutral-700 
            [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          />

          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full hidden md:block rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
