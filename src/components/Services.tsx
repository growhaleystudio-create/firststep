import SectionHeader from "./SectionHeader";

interface ServiceItem {
  name: string;
  price: string;
  description?: string;
}

interface ServiceCategory {
  title: string;
  subtitle?: string;
  items: ServiceItem[];
}

const services: ServiceCategory[] = [
  {
    title: "Reguler Fast Clean",
    subtitle: "Upper · Midsole Only",
    items: [
      { name: "Canvas / Mesh", price: "30K" },
    ],
  },
  {
    title: "Deep Clean Treatment",
    subtitle: "Upper · Midsole · Outsole · Insole · Laces",
    items: [
      { name: "Canvas / Mesh", price: "35K" },
      { name: "Suede / Leather", price: "40K" },
      { name: "White Shoes", price: "45K" },
    ],
  },
  {
    title: "Additional Care",
    items: [
      { name: "Kids Shoes", price: "25K" },
      { name: "Hat", price: "25K" },
      { name: "Bag", price: "40K – 50K" },
    ],
  },
  {
    title: "Free Pick Up & Delivery",
    subtitle: "Bandung City (±5 km) · Min. 2 pairs",
    items: [],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding container-padding">
      <div className="max-w-4xl mx-auto">
        {/* <SectionHeader title="OUR SERVICES" /> */}

        <div className="space-y-16">
          {services.map((category) => (
            <div key={category.title}>
              {/* Category Header with Blue Line */}
              <div className="flex flex-col items-start mb-8">
                <div className="flex items-center w-full">
                  <span className="inline-block px-8 py-2 bg-primary text-primary-foreground rounded-full text-sm font-black tracking-widest uppercase z-10 whitespace-nowrap">
                    {category.title}
                  </span>
                  <div className="h-[2px] bg-primary flex-grow -ml-4"></div>
                </div>
                {category.subtitle && (
                  <p className="text-muted-foreground font-medium mt-3 ml-2 md:ml-4 text-lg">
                    {category.subtitle}
                  </p>
                )}
              </div>

              {/* Service Items */}
              {category.items.length > 0 && (
                <div className="space-y-6 pl-2 md:pl-4">
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-end justify-between gap-4 group border-b border-dashed border-border/50 pb-2"
                    >
                      <h3 className="font-bold text-foreground text-lg uppercase tracking-tight group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>

                      <span className="font-bold text-foreground text-xl tabular-nums whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Pricelist Image */}
        <div className="flex justify-center px-4 max-w-5xl mx-auto">
          <img
            src="/Pricelist.jpeg"
            alt="Service Pricelist"
            className="w-full h-auto rounded-2xl border border-white/20 hover:scale-[1.01] transition-transform duration-500"
          />
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="https://wa.me/6281234567890" target="_blank" className="btn-pill-primary text-lg px-10 py-4 shadow-xl shadow-blue-900/20">
            CUSTOMER REVIEWS
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;