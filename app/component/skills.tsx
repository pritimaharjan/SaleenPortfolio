import { skills } from "../data/data";
export default function Skills() {
  return (
    <div
      id="operational-expertise"
      className="py-32 px-4 bg-white dark:bg-black"
    >
      <div className="max-w-7xl mx-auto flex flex-col  md:items-start  ">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-left dark:text-white">
          Operational Expertise
        </h1>

        <p className="max-w-2xl dark:text-white text-sm md:text-base text-neutral-600">
          Specialized skills acquired through rigorous academic training and
          real-world property management.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-16 w-full">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border bg-slate-100  dark:bg-card group hover:bg-card transition-all duration-300
          rounded-2xl flex flex-col gap-6 p-6"
            >
              <h2
                className="text-xl md:text-2xl font-bold border-b dark:text-secondary border-slate-300 pb-4
          group-hover:text-secondary transition-colors duration-300"
              >
                {skill.title}
              </h2>

              <ul
                className="list-disc pl-5 text-sm md:text-base 
          marker:text-secondary group-hover:text-white transition-colors duration-300"
              >
                {skill.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
