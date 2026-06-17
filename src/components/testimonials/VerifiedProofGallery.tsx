"use client";

import { useState } from "react";
import { ZoomIn, X, CheckCircle2, MessageSquare, Filter, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/Card";

type ProofImage = {
  id: number;
  src: string;
  name: string;
  program: "RN" | "PN" | "both";
  status: string;
  date: string;
};

const proofImages: ProofImage[] = [
  {
    id: 1,
    src: "/images/reviews/716590718_122103064827353800_7249373183577196934_n.jpg",
    name: "Nurse Amanda",
    program: "RN",
    status: "Passed NCLEX-RN - 85 Questions",
    date: "June 2026",
  },
  {
    id: 2,
    src: "/images/reviews/717358031_122103064353353800_1208067871870386097_n.jpg",
    name: "Nurse Joseph",
    program: "RN",
    status: "Passed NCLEX-RN on 1st Attempt",
    date: "May 2026",
  },
  {
    id: 3,
    src: "/images/reviews/717536333_122103064785353800_7352149025524236979_n.jpg",
    name: "Nurse Beatrice",
    program: "PN",
    status: "Passed NCLEX-PN - First Try",
    date: "June 2026",
  },
  {
    id: 4,
    src: "/images/reviews/718076653_122103058269353800_7446938652958079624_n.jpg",
    name: "Nurse Kevin",
    program: "RN",
    status: "Passed NCLEX-RN - 85 Questions",
    date: "May 2026",
  },
  {
    id: 5,
    src: "/images/reviews/718907161_122103060603353800_3206027246719945240_n.jpg",
    name: "Nurse Tiffany",
    program: "RN",
    status: "Passed NCLEX-RN with Visual Rationales",
    date: "June 2026",
  },
  {
    id: 6,
    src: "/images/reviews/718993877_122103061719353800_1888763186096958052_n.jpg",
    name: "Nurse Elena",
    program: "PN",
    status: "Passed NCLEX-PN - 85 Questions",
    date: "June 2026",
  },
  {
    id: 7,
    src: "/images/reviews/719113458_122103908637353800_3290007266224761591_n.jpg",
    name: "Nurse Samantha",
    program: "RN",
    status: "Passed NCLEX-RN - QBank Success",
    date: "June 2026",
  },
  {
    id: 8,
    src: "/images/reviews/719599856_122103907461353800_8994958297027472665_n.jpg",
    name: "Nurse Daniel",
    program: "RN",
    status: "Passed NCLEX-RN on 1st Attempt",
    date: "June 2026",
  },
  {
    id: 9,
    src: "/images/reviews/720019841_122103055125353800_6261588460626046259_n.jpg",
    name: "Nurse Clara",
    program: "PN",
    status: "Passed NCLEX-PN Program",
    date: "May 2026",
  },
  {
    id: 10,
    src: "/images/reviews/720333952_122103907905353800_2541974551277110769_n.jpg",
    name: "Nurse Melissa",
    program: "RN",
    status: "Passed NCLEX-RN - Verified",
    date: "June 2026",
  },
  {
    id: 11,
    src: "/images/reviews/720567084_122103056595353800_2210610115122379000_n.jpg",
    name: "Nurse Evelyn",
    program: "RN",
    status: "Passed NCLEX-RN - Pharmacology Prep",
    date: "June 2026",
  },
  {
    id: 12,
    src: "/images/reviews/720611613_122103059547353800_1188615103709753900_n.jpg",
    name: "Nurse Ryan",
    program: "RN",
    status: "Passed NCLEX-RN - Prioritization Focus",
    date: "May 2026",
  },
  {
    id: 13,
    src: "/images/reviews/720624895_122103064293353800_7786645208067289709_n.jpg",
    name: "Nurse Jasmine",
    program: "PN",
    status: "Passed NCLEX-PN - QBank Prep",
    date: "June 2026",
  },
  {
    id: 14,
    src: "/images/reviews/722448383_122104566939353800_6153697107030573193_n.jpg",
    name: "Nurse Andrew",
    program: "RN",
    status: "Passed NCLEX-RN - 85 Questions",
    date: "May 2026",
  },
];

export function VerifiedProofGallery() {
  const [filter, setFilter] = useState<"all" | "RN" | "PN">("all");
  const [selectedImage, setSelectedImage] = useState<ProofImage | null>(null);

  const filteredImages = proofImages.filter((img) => {
    if (filter === "all") return true;
    return img.program === filter;
  });

  return (
    <div className="w-full">
      {/* Category Tabs & Information Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-1">
          <Filter size={16} className="text-slate-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">
            Filter Proof:
          </span>
          <div className="flex rounded-lg bg-soft p-1 border border-line">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                filter === "all"
                  ? "bg-white text-navy shadow-xs"
                  : "text-slate-500 hover:text-navy"
              }`}
            >
              All chats
            </button>
            <button
              onClick={() => setFilter("RN")}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                filter === "RN"
                  ? "bg-white text-navy shadow-xs"
                  : "text-slate-500 hover:text-navy"
              }`}
            >
              NCLEX-RN
            </button>
            <button
              onClick={() => setFilter("PN")}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                filter === "PN"
                  ? "bg-white text-navy shadow-xs"
                  : "text-slate-500 hover:text-navy"
              }`}
            >
              NCLEX-PN
            </button>
          </div>
        </div>

        <div className="text-xs text-slate-500 font-semibold flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Showing {filteredImages.length} Verified Chat Screenshots
        </div>
      </div>

      {/* Grid gallery of WhatsApp screenshots */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
        {filteredImages.map((proof) => (
          <Card
            key={proof.id}
            className="flex flex-col justify-between border border-line hover:border-emerald-500/40 bg-white relative overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Emerald indicator line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-emerald-500/60 group-hover:bg-emerald-500 transition-colors" />

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center gap-1 text-[8px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded-full">
                    <CheckCircle2 size={8} className="fill-emerald-700 text-white" />
                    <span>Verified Chat</span>
                  </span>
                  <span className="text-[9px] text-teal font-extrabold uppercase tracking-wider">
                    NCLEX-{proof.program}
                  </span>
                </div>

                {/* Screenshot Container with expand click trigger */}
                <div
                  onClick={() => setSelectedImage(proof)}
                  className="relative rounded-lg overflow-hidden border border-slate-100 bg-[#e5ddd5] aspect-[3/4] cursor-pointer group-hover:border-emerald-300 transition-all duration-300 flex items-center justify-center"
                >
                  <img
                    src={proof.src}
                    alt={`${proof.name} pass review`}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/35 transition-colors flex items-center justify-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-navy shadow-md border border-line group-hover:scale-110 transition-transform">
                      <ZoomIn size={14} className="text-clinical" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-50 flex items-center justify-between">
                <div>
                  <h4 className="text-[11px] font-black text-navy">{proof.name}, {proof.program}</h4>
                  <p className="text-[8px] text-slate-400 font-semibold mt-0.5">
                    {proof.status}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Lightbox Zoom Modal Overlay */}
      {selectedImage && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-navy/90 p-4 animate-fadeIn">
          <div className="relative max-w-lg w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-line bg-slate-50">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <ShieldCheck size={16} className="text-emerald-700" />
                <span>Verified Chat Screenshot: {selectedImage.name}</span>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="h-8 w-8 hover:bg-slate-200 text-slate-500 hover:text-navy transition-colors flex items-center justify-center rounded-full cursor-pointer"
                aria-label="Close image details"
              >
                <X size={18} />
              </button>
            </div>
            {/* Scrollable chat screenshot */}
            <div className="p-4 bg-[#ece5dd] overflow-y-auto flex justify-center items-start flex-1 min-h-[50vh]">
              <img
                src={selectedImage.src}
                alt={`${selectedImage.name} chat review screenshot`}
                className="w-full h-auto object-contain rounded border border-slate-300 shadow-sm"
              />
            </div>
            {/* Modal Footer */}
            <div className="p-4 border-t border-line text-center text-xs text-muted font-medium bg-slate-50">
              <p className="font-bold text-navy mb-1">{selectedImage.status}</p>
              Candidate chat record verified by NCLEX Prep Nation. Personal names & numbers redacted.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
