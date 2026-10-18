"use client";

import Image from "next/image";

function BlurPlaceholder({ children }: { children?: React.ReactNode }) {
  return (
    <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-3xl">
      {children}
    </div>
  );
}

import { defaultPastors, type PastorProfile } from "@/lib/contentful";

interface LeadPastorsProps {
  pastors?: PastorProfile[];
}

export function LeadPastors({ pastors = defaultPastors }: LeadPastorsProps) {
  const displayPastors = pastors && pastors.length > 0 ? pastors : defaultPastors;

  return (
    <section
      className="py-20 px-6 text-black md:px-[80px]"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-copperplate md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            MEET OUR LEAD PASTORS
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            Explore our journey, our heart for the truth, and find a community
            where you truly belong.
          </p>
        </div>

        {/* Pastor Profiles */}
        <div className="space-y-16">
          {displayPastors.map((pastor, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={pastor.id || pastor.name}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                {/* Image block */}
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-3xl ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <BlurPlaceholder />
                  <Image
                    src={pastor.image}
                    alt={pastor.name}
                    fill
                    style={{ objectPosition: isEven ? "center 5%" : "center 20%" }}
                    className="w-full h-auto rounded-3xl object-cover relative z-10"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Text block */}
                <div
                  className={`space-y-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {pastor.name}
                  </h3>
                  <p className="text-body-text lg:text-body-text-lg leading-relaxed">
                    {pastor.bio}
                  </p>
                  {pastor.secondaryBio && (
                    <p className="text-body-text lg:text-body-text-lg leading-relaxed">
                      {pastor.secondaryBio}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default LeadPastors;
