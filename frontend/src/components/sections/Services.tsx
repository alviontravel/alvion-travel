import Image from "next/image";
import { siteImages } from "../../constants/site-images";

const services = [
  "Domestic & International Flight Bookings",
  "Holiday Packages (Customized & Group Tours)",
  "Hotel Reservations (Budget to Luxury)",
  "Visa Assistance & Documentation",
  "Corporate Travel Management",
  "Travel Insurance & Forex Assistance",
];

export default function Services() {
  return (
    <section id="services" className="section-shell bg-white">
      <div className="mx-auto max-w-[1240px]">

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">

          {/* LEFT: SERVICES CONTENT */}
          <div>
            <p className="eyebrow text-[var(--aqua)]">
              What we offer
            </p>

            <h2 className="font-display mt-5 max-w-xl text-4xl leading-[1.08] text-[var(--navy)] sm:text-6xl">
              Everything you need
              <br />
              to travel{" "}
              <em className="font-editorial text-[var(--aqua)]">
                well.
              </em>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-[var(--ink-soft)]">
              From booking your flights to planning the perfect getaway,
              we take care of every detail so you can focus on the journey.
            </p>

            {/* SERVICES LIST */}
            <div className="mt-10 border-t border-[var(--line)]">

              {services.map((service, index) => (
                <div
                  key={service}
                  className="group flex items-center gap-5 border-b border-[var(--line)] py-5 transition-colors duration-300 hover:border-[var(--aqua)]"
                >
                  <span className="font-display w-8 shrink-0 text-sm text-[var(--aqua)]">
                    0{index + 1}
                  </span>

                  <h3 className="flex-1 text-base font-medium leading-6 text-[var(--navy)] transition-colors duration-300 group-hover:text-[var(--aqua)] sm:text-lg">
                    {service}
                  </h3>

                  <span className="text-lg text-[var(--aqua)] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    
                  </span>
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT: LANDSCAPE IMAGE */}
          <div className="relative">
            <div className="image-frame relative aspect-[4/4.5] overflow-hidden sm:aspect-[4/3] lg:aspect-[4/5]">
              <Image
                src={siteImages.services.international}
                alt="Beautiful mountain lake landscape representing travel and exploration"
                fill
                priority={false}
                sizes="(max-width: 1024px) 92vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/65 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-7 sm:p-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/75">
                  Alvion Travel
                </p>

                <h3 className="font-display mt-3 max-w-sm text-3xl leading-tight text-white sm:text-4xl">
                  Your journey.
                  <br />
                  Our expertise.
                </h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}