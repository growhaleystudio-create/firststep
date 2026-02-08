import React from 'react';

const WhatWeDo = () => {
    return (
        <section id="about" className="section-padding container-padding bg-background relative overflow-hidden">
            <div className="max-w-4xl mx-auto">
                {/* Title with Tektur font (applied via global h2 style) */}
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-10 text-primary uppercase tracking-tighter">
                    What We Do
                </h2>

                {/* Split layout for content */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                    <div className="flex-1 space-y-6">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed font-sans text-foreground">
                            We focus on what matters most: <br />
                            <span className="text-foreground/80">proper cleaning, thoughtful process, and visible results.</span>
                        </p>
                    </div>

                    <div className="flex-1">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed font-sans text-foreground">
                            At the moment, First Step specializes in Deep Clean Treatment,
                            designed to restore your shoes without compromising the material.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
