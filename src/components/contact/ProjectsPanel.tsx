"use client";

import { useEffect } from "react";
import { X, MapPin, ArrowUpRight } from "lucide-react";
import { Merriweather, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const merri = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const projects = [
  {
    region: "Lorem",
    state: "Ipsum Dolor",
    title: "Lorem Ipsum Project Alpha",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    year: "2023",
    value: "₹000 Cr",
  },
  {
    region: "Dolor",
    state: "Sit Amet",
    title: "Dolor Sit Infrastructure",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "2022",
    value: "₹000 Cr",
  },
  {
    region: "Amet",
    state: "Consectetur",
    title: "Amet Coastal Development",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    year: "2023",
    value: "₹000 Cr",
  },
  {
    region: "Elit",
    state: "Adipiscing",
    title: "Elit Industrial Expansion",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    year: "2021",
    value: "₹000 Cr",
  },
  {
    region: "Sed",
    state: "Eiusmod",
    title: "Sed Smart Grid System",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    year: "2022",
    value: "₹000 Cr",
  },
  {
    region: "Tempor",
    state: "Incididunt",
    title: "Tempor Terminal Project",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores.",
    year: "2023",
    value: "₹000 Cr",
  },
  {
    region: "Labore",
    state: "Dolore",
    title: "Labore Port Upgrade",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit.",
    year: "2021",
    value: "₹000 Cr",
  },
  {
    region: "Magna",
    state: "Aliqua",
    title: "Magna Highway Project",
    description:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    year: "2022",
    value: "₹000 Cr",
  },
];

const regions = ["North", "West", "South", "East", "Central"];

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ProjectsPanel({ open, onClose }: Props) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-500 ${
          open ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Panel */}
      <div
        className={`${merri.className} fixed top-0 right-0 h-full z-50 w-full max-w-2xl bg-white flex flex-col shadow-2xl transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-8 py-7 border-b border-black/10">
          <div>
            <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#886c46] mb-2">
              Across the Nation
            </p>
            <h2 className={`${playfair.className} text-3xl font-bold text-black leading-tight`}>
              Our{" "}
              <span className="italic text-[#886c46]">landmark</span> projects
            </h2>
          </div>
          <button
            onClick={onClose}
            className="mt-1 w-9 h-9 flex items-center justify-center border border-black/15 hover:border-black hover:bg-black hover:text-white transition-all duration-200 shrink-0"
          >
            <X className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          {regions.map((region) => {
            const regionProjects = projects.filter((p) => p.region === region);
            return (
              <div key={region} className="mb-10">
                {/* Region label */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-2 h-2 bg-[#886c46] shrink-0" />
                  <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#886c46]">
                    {region} India
                  </p>
                  <div className="flex-1 h-px bg-black/8" />
                </div>

                <div className="flex flex-col gap-4">
                  {regionProjects.map((project) => (
                    <div
                      key={project.title}
                      className="group border border-black/10 hover:border-black transition-colors duration-200 p-5"
                    >
                      {/* Top row */}
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-[#886c46] shrink-0" strokeWidth={2} />
                          <span className="text-[11px] font-medium tracking-wide text-[#886c46] uppercase">
                            {project.state}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="text-[11px] text-black/40 font-light">
                            {project.year}
                          </span>
                          <span className={`${playfair.className} text-sm font-bold text-black`}>
                            {project.value}
                          </span>
                          <ArrowUpRight
                            className="w-4 h-4 text-black/20 group-hover:text-[#886c46] transition-colors"
                            strokeWidth={2}
                          />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className={`${playfair.className} text-lg font-bold text-black mb-2 leading-snug`}>
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm font-light text-black/55 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-8 py-5 border-t border-black/10 flex items-center justify-between">
          <p className={`${playfair.className} text-sm italic text-[#886c46]`}>
            Rooted in India. Ready for the world.
          </p>
          <span className="text-[11px] font-light text-black/40">
            {projects.length} projects listed
          </span>
        </div>
      </div>
    </>
  );
}