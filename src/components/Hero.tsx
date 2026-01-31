import { ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react";
import sneakerImage from "@/assets/sneaker-floating.png";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] bg-background overflow-hidden flex flex-col justify-between">
      {/* Brutalism Layout: Huge Sneaker Background + Overlapping Content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-5 md:px-8 lg:px-12 pt-8 md:pt-16 lg:pt-20 h-full flex flex-col justify-between">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center h-full gap-8 lg:gap-12 pointer-events-none">

          {/* Left Side - Headline & CTA (Pointer events auto to allow clicking) */}
          <div className="flex-1 max-w-3xl pointer-events-auto z-30 mix-blend-difference lg:mix-blend-normal text-primary lg:text-primary">
            {/* Reduced Font Size: was text-[7rem]/[8rem], now max text-7xl/8xl roughly */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.9] mb-8 text-left">
              Discover
              <br />
              New Life
              <br />
              <span className="text-muted-foreground/80">for Your</span>
              <br />
              Dirty Kicks.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed font-medium">
              Professional care and premium treatment for every shoe material. We bring back the fresh.
            </p>

            <div className="flex flex-col items-start gap-6">
              <a
                href="#services"
                className="inline-flex items-center gap-4 bg-primary text-primary-foreground pl-8 pr-2 py-2 rounded-full font-bold text-lg hover:bg-primary/90 transition-all duration-300 group shadow-lg shadow-blue-900/20"
              >
                Explore
                <span className="w-12 h-12 rounded-full bg-background text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </span>
              </a>
            </div>
          </div>

          {/* Right Side - Social Proof & Glass Card (Pointer events auto) */}
          <div className="flex flex-col items-start lg:items-end lg:text-right w-full lg:w-auto mt-20 lg:mt-0 pointer-events-auto z-30">

            {/* Glassmorphism Card Wrapper with Float Animation - made COMPACT (smaller padding/text) */}
            <div className="bg-white/30 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-white/10 p-6 rounded-3xl shadow-xl animate-float max-w-md">
              {/* Star Rating */}
              <div className="flex items-center gap-3 lg:flex-row-reverse mb-4 justify-end">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20} /* Smaller stars */
                      className="fill-foreground text-foreground"
                    />
                  ))}
                </div>
                <span className="font-bold text-foreground text-lg">4.9 / 399 Review</span>
              </div>

              <div className="flex flex-col items-start lg:items-end gap-2">
                <p className="text-xl font-bold text-foreground max-w-xs leading-tight">
                  Comfort, Style, Versatility, Quality
                </p>
                <p className="text-sm text-foreground font-medium max-w-xs leading-relaxed lg:text-right mt-1">
                  These shoes offer incredible comfort and style. Perfect for every occasion, I wear them daily!
                </p>
              </div>

              {/* Navigation Arrows - Compact */}
              <div className="flex items-center justify-end gap-3 mt-6">
                <button className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors">
                  <ChevronLeft size={20} />
                </button>
                <button className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Giant Sneaker Layer (Absolute, Centered) */}
      {/* Giant Sneaker Layer (Absolute, Centered) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] lg:w-[80%] z-10 pointer-events-none select-none">
        <div className="animate-float" style={{ animationDelay: '1.5s', animationDuration: '7s' }}>
          <img
            src={sneakerImage}
            alt="Giant floating sneaker"
            className="w-full h-auto object-contain drop-shadow-2xl opacity-100 rotate-[-15deg] lg:rotate-[-12deg]"
            style={{
              mixBlendMode: 'multiply',
              filter: 'drop-shadow(0 50px 100px rgba(0,0,0,0.25)) contrast(1.1)',
            }}
          />
        </div>
      </div>

      {/* Watermark Text Layer - FIRSTSTEP */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center overflow-hidden pointer-events-none select-none z-0">
        <span
          className="text-[18vw] font-black tracking-tighter leading-none translate-y-[25%] opacity-20"
          style={{
            color: 'transparent',
            WebkitTextStroke: '2px #0369b4',
          }}
        >
          FIRSTSTEP
        </span>
      </div>
    </section>
  );
};

export default Hero;