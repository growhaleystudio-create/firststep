import { CalendarDays, Truck, Sparkles, Bell, Truck as TruckIcon, Check } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const steps = [
  {
    icon: CalendarDays,
    title: "Book Your First Step",
    description: (
      <>
        Book online via:
        <br />
        <a href="https://wa.me/6281313255076" className="text-primary hover:underline">WhatsApp: +62 813-1325-5076</a>
        <br />
        <a href="https://wa.me/6281573499548" className="text-primary hover:underline">+62 815-7349-9548</a>
        <br />
        <a href="https://instagram.com/firststep.clean" className="text-primary hover:underline">Instagram DM: @firststep.clean</a>
        <br />
        <br />
        Or drop off directly at our place:
        <br />
        Jl. Maleer 2 No. 3 (belakang Kampus Piksi Ganesha),
        <br />
        Gatot Subroto, Kota Bandung
      </>
    ),
    step: "01",
  },
  {
    icon: Truck,
    title: "We Pick Up",
    description: (
      <>
        Free pick up & delivery within ±5 km
        <br />
        Minimum 2 pairs.
      </>
    ),
    step: "02",
  },
  {
    icon: Sparkles,
    title: "Care in Progress",
    description: (
      <>
        Each pair is handled by experienced hands.
        <br />
        Cleaning process takes 3–4 working days, because good care takes time.
      </>
    ),
    step: "03",
  },
  {
    icon: Bell,
    title: "Ready Notification",
    description: (
      <>
        Once finished, our team will contact you to arrange the return schedule.
      </>
    ),
    step: "04",
  },
  {
    icon: TruckIcon,
    title: "Delivered Back to You",
    description: (
      <>
        Your shoes return:
        <br />
        Clean. Fresh. Ready to step again.
      </>
    ),
    step: "05",
  },
];

const HowItWorks = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 12000; // 12 seconds
    let startTime = performance.now();
    let animationFrameId: number;

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const newProgress = (elapsed % duration) / duration;

      setProgress(newProgress);

      // Calculate current step (0 to 4)
      const step = Math.floor(newProgress * 4 + 0.05); // +0.05 buffer to trigger change slightly after passing
      // Clamp to 0-4
      const clampedStep = Math.min(Math.max(step, 0), 4);

      setCurrentStep(clampedStep);

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section id="process" className="section-padding container-padding bg-section-bg">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="HOW WE WORK" />

        {/* Steps Container */}
        <div className="relative mt-12">
          {/* Mobile Vertical Connection Line with Dot */}
          <div className="absolute md:hidden top-0 bottom-0 left-[50%] w-0.5 bg-muted-foreground/20 -translate-x-1/2 z-0">
            <motion.div
              className="absolute w-3 h-3 bg-primary rounded-full shadow-lg shadow-blue-500/50 -translate-x-1/2"
              style={{
                top: `${progress * 100}%`,
                left: "50%"
              }}
            />
          </div>

          {/* Desktop Horizontal Connection Line with Dot */}
          <div className="hidden md:block absolute top-[4rem] left-0 right-0 h-0.5 border-t-2 border-dashed border-muted-foreground/30 z-0" style={{ left: '10%', right: '10%' }}>
            <motion.div
              className="absolute w-4 h-4 bg-primary rounded-full shadow-lg shadow-blue-500/50 -translate-y-1/2"
              style={{
                left: `${progress * 100}%`,
                top: "50%"
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10 items-start">
            {steps.map((step, index) => {
              const isCompleted = index < currentStep;
              const isActive = index === currentStep;

              return (
                <div key={step.step} className="relative flex flex-col items-center text-center bg-background md:bg-transparent p-6 md:p-0 rounded-2xl shadow-sm md:shadow-none">
                  {/* Step Number */}
                  <span className={`text-xs font-bold tracking-widest mb-4 transition-colors duration-300 ${isActive || isCompleted ? "text-primary" : "text-muted-foreground"}`}>
                    STEP {step.step}
                  </span>

                  {/* Icon Circle */}
                  <div className={`feature-icon mb-6 relative z-10 bg-background border-2 shadow-sm w-16 h-16 flex items-center justify-center rounded-full transition-all duration-500
                      ${isCompleted ? "border-primary bg-primary/10" : isActive ? "border-primary scale-110 shadow-blue-500/20" : "border-secondary"}`}>

                    {isCompleted ? (
                      <Check size={28} className="text-primary" />
                    ) : (
                      <step.icon
                        size={24}
                        strokeWidth={1.5}
                        className={`transition-colors duration-300 ${isActive ? "text-primary" : "text-secondary"}`}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <h3 className={`font-bold text-lg mb-4 h-auto md:h-12 flex items-center justify-center transition-colors duration-300 ${isActive || isCompleted ? "text-primary" : "text-foreground"}`}>
                    {step.title}
                  </h3>
                  <div className="text-sm text-muted-foreground leading-relaxed w-full">
                    {step.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;