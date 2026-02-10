import SectionHeader from "./SectionHeader";

const Services = () => {
  return (
    <section id="services" className="py-8 md:py-12 container-padding">
      <div className="max-w-4xl mx-auto">
        {/* <SectionHeader title="OUR SERVICES" /> */}

        {/* Pricelist Image */}
        <div className="flex justify-center px-4 max-w-5xl mx-auto mb-8">
          <img
            src="/Pricelist.jpeg"
            alt="Service Pricelist"
            className="w-full h-auto rounded-2xl border border-white/20 hover:scale-[1.01] transition-transform duration-500"
          />
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="https://wa.me/6281313255076" target="_blank" className="btn-pill-primary text-lg px-10 py-4 shadow-xl shadow-blue-900/20">
            CUSTOMER REVIEWS
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;