import SectionHeader from "./SectionHeader";
import materialCanvas from "@/assets/material-canvas.jpg";
import materialLeather from "@/assets/material-leather.jpg";
import materialSuede from "@/assets/material-suede.jpg";
import materialGoretex from "@/assets/material-goretex.jpg";

const materials = [
  { name: "SUEDE", image: materialSuede },
  { name: "CANVAS", image: materialCanvas },
  { name: "LEATHER", image: materialLeather },
  { name: "HIKING / GORE-TEX", image: materialGoretex },
];

const Materials = () => {
  return (
    <section id="materials" className="section-padding container-padding bg-muted">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="CARE FOR ALL MATERIALS" />

        {/* Portrait Card Grid - tight spacing for panoramic feel */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {materials.map((material) => (
            <div
              key={material.name}
              className="relative aspect-[3/5] rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
            >
              {/* Full-height image */}
              <img
                src={material.image}
                alt={`${material.name} shoe material texture`}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />

              {/* Bottom gradient overlay with text */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent flex items-end p-4 md:p-6">
                <span className="text-background font-bold text-xs md:text-sm tracking-widest uppercase">
                  {material.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Materials;
