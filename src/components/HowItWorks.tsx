import { CalendarDays, Truck, Sparkles, Package } from "lucide-react";
import SectionHeader from "./SectionHeader";

const steps = [
  {
    icon: CalendarDays,
    title: "Book Online",
    description: "Schedule your pickup.",
    step: "01",
  },
  {
    icon: Truck,
    title: "We Pick Up",
    description: "Free pickup at your door.",
    step: "02",
  },
  {
    icon: Sparkles,
    title: "Professional Clean",
    description: "Deep cleaning by experts.",
    step: "03",
  },
  {
    icon: Package,
    title: "Delivery",
    description: "Delivered back fresh & clean.",
    step: "04",
  },
];

const HowItWorks = () => {
  return (
    <section id="process" className="section-padding container-padding bg-section-bg">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="HOW WE WORK" />

        {/* Steps Container */}
        <div className="relative">
          {/* Mobile Vertical Connection Line with Dot */}
          <div className="absolute md:hidden top-0 bottom-0 left-[50%] w-0.5 bg-muted-foreground/20 -translate-x-1/2 z-0">
            <div className="absolute top-0 left-1/2 w-3 h-3 bg-primary rounded-full shadow-lg shadow-blue-500/50 -translate-x-1/2 animate-move-y"></div>
          </div>

          {/* Desktop Horizontal Connection Line with Dot */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 border-t-2 border-dashed border-muted-foreground/30 z-0" style={{ left: '12.5%', right: '12.5%' }}>
            <div className="absolute top-1/2 w-4 h-4 bg-primary rounded-full shadow-lg shadow-blue-500/50 -translate-y-1/2 animate-move-x"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10">
            {steps.map((step) => (
              <div key={step.step} className="relative flex flex-col items-center text-center bg-background md:bg-transparent py-4 md:py-0">
                {/* Step Number */}
                <span className="text-xs font-bold text-primary tracking-widest mb-4">
                  STEP {step.step}
                </span>

                {/* Icon Circle */}
                <div className="feature-icon mb-6 relative z-10 bg-background border-2 border-secondary shadow-sm">
                  <step.icon size={24} strokeWidth={1.5} className="text-secondary" />
                </div>

                {/* Content */}
                <h3 className="font-bold text-lg text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground max-w-[200px] mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;