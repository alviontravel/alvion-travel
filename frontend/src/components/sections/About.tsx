import Image from "next/image";
import Link from "next/link";
import { siteImages } from "../../constants/site-images";

export default function About() {
  return (
    <section id="about" className="section-shell bg-[var(--cream)]">
      <div className="mx-auto max-w-[1240px]">

        {/* ABOUT INTRODUCTION */}
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-24">

          {/* LEFT IMAGE */}
          <div className="relative pl-5 sm:pl-10">
            <div className="absolute left-0 top-10 h-48 w-24 border-l border-t border-[var(--aqua)]/50 sm:h-64 sm:w-32" />

            <div className="image-frame relative aspect-[4/5] max-w-md">
              <Image
                src={siteImages.about}
                alt="A beautiful coastal travel destination"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="eyebrow text-[var(--aqua)]">
              About ALVION
            </p>

            <h2 className="font-display mt-5 max-w-xl text-4xl leading-[1.05] text-[var(--navy)] sm:text-6xl">
              Making Every Journey{" "}
              <em className="font-editorial text-[var(--aqua)]">
                Meaningful.
              </em>
            </h2>

            <div className="mt-7 max-w-2xl">

              <p className="text-base leading-8 text-[var(--ink-soft)]">
                At Alvion Travels Management, we believe that every journey
                deserves thoughtful planning, reliable support and a seamless
                travel experience.
              </p>

              <div className="mt-8 border-t border-[var(--line)]">

                {[
                  {
                    title: "Based in Bengaluru, India",
                    description:
                      "An emerging travel management company serving individuals, families and businesses.",
                  },
                  {
                    title: "Complete Travel Solutions",
                    description:
                      "Flights, hotel reservations, holiday packages, corporate travel and personalised travel assistance under one roof.",
                  },
                  {
                    title: "Customer-Focused Approach",
                    description:
                      "Understanding your needs and providing suitable travel solutions tailored to your requirements.",
                  },
                  {
                    title: "Reliable Travel Support",
                    description:
                      "Making business trips, family holidays and international adventures convenient, comfortable and hassle-free.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-5 border-b border-[var(--line)] py-5"
                  >
                    <span className="font-display shrink-0 text-lg text-[var(--aqua)]">
                      0{index + 1}
                    </span>

                    <div>
                      <h3 className="text-base font-semibold text-[var(--navy)]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-[var(--ink-soft)]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}

              </div>
            </div>

            <Link
              href="#contact"
              className="link-arrow mt-8 inline-flex"
            >
              Plan your journey
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        {/* MISSION & VISION */}
        <div className="mt-24 grid gap-8 border-t border-[var(--line)] pt-12 md:grid-cols-2 md:gap-16">

          {/* OUR MISSION */}
          <div className="border-b border-[var(--line)] pb-10 md:border-b-0 md:border-r md:pb-0 md:pr-12">
            <p className="eyebrow text-[var(--aqua)]">
              01 / Our purpose
            </p>

            <h3 className="font-display mt-5 text-3xl text-[var(--navy)] sm:text-4xl">
              Our Mission
            </h3>

            <p className="mt-5 max-w-lg text-base leading-8 text-[var(--ink-soft)]">
              To make travel simpler, more accessible and more convenient
              by delivering reliable travel solutions, personalised service
              and value-driven experiences.
            </p>
          </div>

          {/* OUR VISION */}
          <div>
            <p className="eyebrow text-[var(--aqua)]">
              02 / Our ambition
            </p>

            <h3 className="font-display mt-5 text-3xl text-[var(--navy)] sm:text-4xl">
              Our Vision
            </h3>

            <p className="mt-5 max-w-lg text-base leading-8 text-[var(--ink-soft)]">
              To become a trusted and recognised travel management brand,
              connecting people and businesses to destinations worldwide
              through quality service, innovation and lasting relationships.
            </p>
          </div>

        </div>

        {/* BRAND CLOSING STATEMENT */}
        <div className="mt-20 border-t border-[var(--line)] pt-12 text-center">
          <p className="eyebrow text-[var(--aqua)]">
            Alvion Travels 
          </p>

          <h3 className="font-display mt-5 text-3xl text-[var(--navy)] sm:text-5xl">
            Your Journey.{" "}
            <em className="font-editorial text-[var(--aqua)]">
              Our Commitment.
            </em>
          </h3>
        </div>

      </div>
    </section>
  );
}