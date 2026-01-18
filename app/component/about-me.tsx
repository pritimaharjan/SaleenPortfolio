import { Badge } from "@/components/ui/badge";

export default function AboutMe() {
  const stats = [
    {
      title: "BHM",
      value: "4 Years Bachelor Degree",
      icon: "🎓",
    },
    {
      title: "Intl. Internship",
      value: "1 year",
      icon: "🌍",
    },
    {
      title: "Field Experience",
      value: "5+ Years",
      icon: "🏨",
    },
    {
      title: "Coffee & Bartending",
      value: "",
      icon: "☕️",
    },
  ];
  return (
    <div id="about" className="bg-[#e5e7eb]">
      <div className="grid grid-cols-2 gap-10 py-20 max-w-7xl mx-auto">
        <div className="col-span-1  flex flex-col items-end justify-center">
          <div className=" aspect-auto border-10 rounded-lg border-white">
            <img
              src="/hero/profile.jpeg"
              alt="Saleen Maharjan"
              className="w-full "
            />
          </div>
          <div className="-mt-20  ml-10 left-20 bg-card z-50 rounded-2xl p-10 border-l-6 border-secondary">
            <span className="text-secondary italic font-bold text-2xl">
              "Service is an Art"
            </span>
          </div>
        </div>
        <div className="col-span-1 top-1/2">
          <Badge>Professional Background</Badge>
          <h1>Mastering the Craft of Guest Excellence</h1>
          <p>
            Bachelor's degree in Hotel Management with over 5 years of hands-on
            experience in Nepal's luxury hospitality industry and 1 year of
            high-stakes international internship experience. My mission is to
            blend traditional hospitality with modern operational efficiency.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-row items-start gap-4 ">
                <div className="text-primary text-2xl">{stat.icon}</div>

                <div>
                  <h3 className="font-semibold text-lg">{stat.title}</h3>
                  <p className="text-slate-600">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
