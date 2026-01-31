import { useState } from "react";
import { MapPin, X, MessageCircle } from "lucide-react";
import SectionHeader from "./SectionHeader";
import mapImage from "@/assets/map.webp";

const Locations = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    service: "Deep Cleaning",
    message: ""
  });

  const testimonials = [
    { name: "Rizky", role: "Sneakerhead", text: "Gila sih ini detail banget bersihinnya, like new!" },
    { name: "Siti", role: "Mahasiswi", text: "Harganya pas dikantong mahasiswa, kualitas hotel bintang 5." },
    { name: "Budi", role: "Office Worker", text: "Pickup delivery nya sangat membantu buat yang sibuk." },
    { name: "Dewi", role: "Influencer", text: "Udah langganan dari lama, gapernah kecewa." },
    { name: "Andi", role: "Collector", text: "Repaint nya rapih banget, warnanya solid dan awet." },
  ];

  const handleOpenForm = () => setIsFormOpen(true);
  const handleCloseForm = () => setIsFormOpen(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "6282126279619"; // Replace with actual WhatsApp number
    const text = `Hello First Step, my name is ${formData.name}. I am interested in ${formData.service}. ${formData.message}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    handleCloseForm();
  };

  return (
    <section id="locations" className="section-padding container-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="FIND US" subtitle="Visit our workshop in Bandung" />

        <div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/10 border border-border group">
          {/* Map Image */}
          <div className="aspect-[21/9] w-full bg-muted">
            <img
              src={mapImage}
              alt="First Step Location Map"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Animated Pin Overlay */}
          <div
            className="absolute top-[75%] left-[32%] -translate-x-1/2 -translate-y-1/2 transform cursor-pointer z-10"
            onClick={handleOpenForm}
          >
            <div className="relative flex items-center justify-center group/pin">
              {/* Pulse Effect */}
              <div className="absolute w-24 h-24 bg-primary/30 rounded-full animate-ping opacity-75"></div>
              <div className="absolute w-16 h-16 bg-primary/50 rounded-full animate-pulse"></div>

              {/* Pin Icon */}
              <div className="relative z-10 bg-primary text-primary-foreground p-4 rounded-full shadow-lg transition-transform duration-300 group-hover/pin:scale-110">
                <MapPin size={32} fill="currentColor" />
              </div>

              {/* Tooltip */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg whitespace-nowrap opacity-100 transition-opacity duration-300 pointer-events-none animate-bounce">
                <span className="font-bold text-primary">Click to Book!</span>
              </div>
            </div>
          </div>



        </div>

        {/* Horizontal Moving Testimonials */}
        <div className="mt-8 overflow-hidden relative">
          <div className="flex gap-6 animate-scroll-x w-max">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-6">
                {testimonials.map((testi, index) => (
                  <div key={index} className="w-80 bg-white/5 border border-black/5 p-6 rounded-2xl shadow-sm flex flex-col gap-3">
                    <p className="text-sm text-foreground/80 leading-relaxed">"{testi.text}"</p>
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                        {testi.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground">{testi.name}</p>
                        <p className="text-xs text-muted-foreground">{testi.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Fade Edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>
        </div>
      </div>

      {/* Booking Form Modal */}
      {
        isFormOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden relative animate-fade-in-up">
              {/* Close Button */}
              <button
                onClick={handleCloseForm}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors z-10"
              >
                <X size={24} />
              </button>

              {/* Header */}
              <div className="bg-primary/5 p-8 pb-6 text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle size={32} />
                </div>
                <h3 className="text-2xl font-black text-foreground">Book Your Service</h3>
                <p className="text-muted-foreground mt-2 text-sm">Fill in the details and we'll direct you to WhatsApp to finalize your booking.</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-8 pt-6 space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground ml-1">Your Name</label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground ml-1">Service Type</label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option>Deep Cleaning</option>
                    <option>Repair & Repaint</option>
                    <option>Unyellowing</option>
                    <option>Other Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground ml-1">Message (Optional)</label>
                  <textarea
                    placeholder="Tell us about your shoes (e.g. 2 pairs of sneakers)..."
                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all min-h-[100px] resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-pill-primary justify-center py-4 text-lg shadow-xl shadow-blue-900/20 mt-4 group"
                >
                  Chat on WhatsApp
                  <MessageCircle size={20} className="ml-2 group-hover:scale-110 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        )
      }
    </section >
  );
};

export default Locations;