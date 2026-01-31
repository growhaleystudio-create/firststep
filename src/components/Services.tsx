import SectionHeader from "./SectionHeader";

interface ServiceItem {
  name: string;
  price: string;
  description?: string;
}

interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

const services: ServiceCategory[] = [
  {
    title: "DEEP CLEANING",
    items: [
      { name: "1 PASANG SEPATU", price: "85K", description: "Deep clean jenis dan bahan sandal/sepatu (kecuali boots)" },
      { name: "2-3 PASANG SEPATU (HARGA PER PASANG)", price: "80K", description: "Deep clean semua jenis dan bahan sandal/sepatu (kecuali boots)" },
      { name: "4+ PASANG SEPATU (HARGA PER PASANG)", price: "75K", description: "Deep clean semua jenis dan bahan sandal/sepatu (kecuali boots)" },
      { name: "1 PASANG SEPATU BOOTS / HIGH BOOTS", price: "95K / 105K", description: "Deep clean semua jenis dan bahan sepatu boots" },
      { name: "2+ PASANG SEPATU BOOTS / HIGH BOOTS", price: "@90K / @100K", description: "Deep clean semua jenis dan bahan sepatu boots" },
      { name: "LEATHER TREATMENT SEPATU / BOOTS KULIT", price: "+10K / +15K", description: "Special polished treatment dari Saphir Medaille D'or Paris" },
      { name: "SEPATU ANAK", price: "60K", description: "Deep clean semua jenis dan bahan sepatu anak (maksimal size 33)" },
      { name: "BAG", price: "150-300K", description: "Let's clean your backpack, totebag, sling bag, etc!" },
      { name: "ONE DAY SERVICE SEPATU DEWASA / ANAK", price: "100K / 75K", description: "Drop your shoes today & get them cleaned by tomorrow!" },
    ],
  },
  {
    title: "ADDITIONAL CARE",
    items: [
      { name: "UNYELLOWING MIDSOLE", price: "95K", description: "Get rid of the yellow shoes midsole (exclude cleaning)." },
      { name: "REPAIR SOLE LEPAS", price: "105K", description: "Repair untuk midsole/outsole sepatu yang lepas" },
      { name: "REPAIR LAINNYA (SEPATU &TAS)", price: "185k - 295k", description: "Seperti pergantian karet,sole /dll (silakan dikonsultasikan dahulu)" },
      { name: "REPAINT", price: "150-300K", description: "Restoring color and vibrancy to your worn-out shoes." },
    ],
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
              <div className="flex items-center mb-8">
                <span className="inline-block px-8 py-2 bg-primary text-primary-foreground rounded-full text-sm font-black tracking-widest uppercase z-10">
                  {category.title}
                </span>
                <div className="h-[2px] bg-primary flex-grow -ml-4"></div>
              </div>

              {/* Service Items */}
              <div className="space-y-8 pl-2 md:pl-4">
                {category.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-2 md:gap-4 group"
                  >
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground text-lg uppercase tracking-tight group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      {item.description && (
                        <p className="text-muted-foreground text-sm mt-1 max-w-xl">
                          {item.description}
                        </p>
                      )}
                    </div>

                    <div className="flex items-end gap-2 md:w-auto w-full justify-between md:justify-end">
                      {/* <span className="price-leader md:block hidden" /> */}
                      <span className="font-bold text-foreground text-xl tabular-nums whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <a href="https://wa.me/6281234567890" target="_blank" className="btn-pill-primary text-lg px-10 py-4 shadow-xl shadow-blue-900/20">
            CUSTOMER REVIEWS
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;