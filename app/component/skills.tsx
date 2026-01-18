export default function Skills() {
  const skills = [
    {
      title: "Hotel Operations",
      description: [
        "Property Management (Opera)",
        "Revenue Optimization",
        "Staff Leadership",
        "Sustainability Management",
      ],
    },
    {
      title: "Guest Services",
      description: [
        "Concierge Excellence",
        "Crisis Communication",
        "Cultural Diplomacy",
        "VIP Relations",
      ],
    },
    {
      title: "Academic & Training",
      description: [
        "BHM (Bachelor in Hotel Management)",
        "WSET Level 1",
        "Advanced Culinary Arts",
        "First Aid & Safety",
      ],
    },
  ];
  return (
    <div id="operational-expertise" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col  md:items-start  ">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-left">
          Operational Expertise
        </h1>

        <p className="max-w-2xl text-sm md:text-base text-neutral-600">
          Specialized skills acquired through rigorous academic training and
          real-world property management.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-16 w-full">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border bg-slate-100 group hover:bg-card transition-all duration-300
          rounded-2xl flex flex-col gap-6 p-6"
            >
              <h2
                className="text-xl md:text-2xl font-bold border-b border-slate-300 pb-4
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
