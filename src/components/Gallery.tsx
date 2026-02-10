import SectionHeader from "./SectionHeader";
import BeforeAfterSlider from "./BeforeAfterSlider";
import sneakerDirty from "@/assets/sneaker-dirty.jpg";
import sneakerClean from "@/assets/sneaker-clean.jpg";


const Gallery = () => {
  return (
    <section id="gallery" className="section-padding">
      {/* Narrow container for header */}
      <div className="max-w-6xl mx-auto container-padding">
        <SectionHeader title="REAL RESULTS" />
      </div>

      {/* Wide container for cards */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="flex flex-col gap-10">

          {/* Card 1: Deep Clean Transformation */}
          <div className="relative rounded-3xl overflow-hidden aspect-[16/9] md:aspect-[21/9] shadow-2xl shadow-foreground/10">
            {/* Treatment Badge */}
            <div className="absolute top-5 left-5 z-20 px-4 py-2 bg-background/95 backdrop-blur-sm rounded-full text-xs font-bold text-foreground tracking-widest uppercase">
              Deep Cleaning
            </div>

            {/* Before/After Slider */}
            <BeforeAfterSlider
              beforeImage={sneakerDirty}
              afterImage={sneakerClean}
              beforeLabel="Before"
              afterLabel="After"
            />

            {/* Caption Overlay */}
            <div className="absolute bottom-0 left-0 right-0 z-20 p-5 md:p-8 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent">
              <p className="text-background text-sm md:text-lg font-medium max-w-xl">
                Restoring the brightness of your daily beaters.
              </p>
            </div>
          </div>



        </div>
      </div>
    </section>
  );
};

export default Gallery;
