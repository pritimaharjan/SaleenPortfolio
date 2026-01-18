import { Card } from "@/components/ui/card";

export default function VisualPortfolio() {
  const data = [
    {
      image: "/images/4.jpeg",
      title: "Certified Bartending Training – Honeywell",
      subtitle:
        "Completed professional bartending training focused on beverage preparation, bar operations, and service standards.",
    },
    {
      image: "/images/Lalit.jpeg",
      title: "Lalit Bakery",
      subtitle: "Lalit Bakery",
    },
    {
      image: "/images/Kavya.jpeg",
      title: "Kavya Resort",
      subtitle: "Kavya Resort",
    },
    { image: "/images/JAW.jpeg", title: "making juice in Jaw ", subtitle: "" },
  ];
  return (
    <div className="bg-slate-100">
      <div className="max-w-7xl mx-auto py-20 ">
        <div>
          <h1 className="text-center">Visual Portfolio</h1>
        </div>
        <div className="grid grid-cols-1 py-20 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {data.map((item, index) => (
            <div
              key={index}
              className="group relative h-90 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />

              {/* Text Content */}
              <div className="absolute p-5 inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition">
                <h2 className="text-lg font-bold text-white">{item.title}</h2>
                <p className="mt-2 text-lg text-gray-200">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
