"use client";

import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, MessageSquare, ZoomIn, X, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

type Review = {
  id: number;
  type: "text" | "whatsapp_image";
  name: string;
  status: string;
  stars?: number;
  quote?: string;
  imageSrc?: string;
};

const reviewsData: Review[] = [
  {
    id: 1,
    type: "whatsapp_image",
    name: "Nurse Jessica, RN",
    status: "Passed in 85 Questions - WhatsApp verified",
    imageSrc: "/images/whatsapp_review_one.png",
  },
  {
    id: 101,
    type: "whatsapp_image",
    name: "Nurse Amanda, RN",
    status: "Passed NCLEX-RN - 85 Questions",
    imageSrc: "/images/reviews/716590718_122103064827353800_7249373183577196934_n.jpg",
  },
  {
    id: 2,
    type: "text",
    quote: "The visual rationales were a lifesaver for me. Instead of just reading text, I could actually see the diagrams of Peritoneal Dialysis and DVT. It helped me pass my NCLEX-RN on the first try!",
    name: "Sarah M., RN",
    status: "Passed in 85 Questions",
    stars: 5,
  },
  {
    id: 102,
    type: "whatsapp_image",
    name: "Nurse Beatrice, LPN",
    status: "Passed NCLEX-PN - First Try",
    imageSrc: "/images/reviews/717536333_122103064785353800_7352149025524236979_n.jpg",
  },
  {
    id: 3,
    type: "text",
    quote: "After failing once, I needed a structured plan. NCLEX Prep Nation's diagnostic test pointed out my weaknesses in pharmacology and delegation. The WhatsApp support kept me accountable.",
    name: "Michael K., RN",
    status: "Repeat Test Taker - Passed",
    stars: 5,
  },
  {
    id: 4,
    type: "whatsapp_image",
    name: "Nurse David, LPN",
    status: "NCLEX-PN Passed - WhatsApp verified",
    imageSrc: "/images/whatsapp_review_two.png",
  },
  {
    id: 103,
    type: "whatsapp_image",
    name: "Nurse Tiffany, RN",
    status: "Passed NCLEX-RN with Visual Rationales",
    imageSrc: "/images/reviews/718907161_122103060603353800_3206027246719945240_n.jpg",
  },
  {
    id: 5,
    type: "text",
    quote: "Great practice question bank! The SATA questions are highly realistic, and the explanation block is thorough. Highly recommend the Premium Access package.",
    name: "Amanda L., LPN",
    status: "NCLEX-PN - Passed",
    stars: 5,
  },
  {
    id: 104,
    type: "whatsapp_image",
    name: "Nurse Elena, LPN",
    status: "Passed NCLEX-PN - 85 Questions",
    imageSrc: "/images/reviews/718993877_122103061719353800_1888763186096958052_n.jpg",
  },
  {
    id: 6,
    type: "text",
    quote: "The prioritization frameworks (like ABC and client stability) taught in the review sheets helped me narrow down answers. I got so many prioritization questions on my test!",
    name: "Jessica P., RN",
    status: "Passed in 85 Questions",
    stars: 5,
  },
  {
    id: 7,
    type: "text",
    quote: "I was struggling with pharmacology, but the clear classification guides and the overlap bridge therapy explanations made it easy. Passed today!",
    name: "David O., RN",
    status: "Passed on 1st Attempt",
    stars: 5,
  },
  {
    id: 8,
    type: "text",
    quote: "Best prep ever. The rationales don't just tell you why an answer is correct; they explain why every other option is wrong. So helpful for my critical thinking.",
    name: "Amara E., RN",
    status: "Passed on 1st Attempt",
    stars: 5,
  },
  {
    id: 9,
    type: "text",
    quote: "Thanks to the PN packages, I focused on safety, comfort, and coordinated care. The question bank interfaces match the real test environment perfectly.",
    name: "Carlos M., LPN",
    status: "Passed in 85 Questions",
    stars: 5,
  },
  {
    id: 10,
    type: "text",
    quote: "I passed in 85 questions. The Next Gen case studies in the diagnostic test were exactly what I needed to get comfortable with the new format.",
    name: "Linda T., RN",
    status: "NCLEX-RN Passed",
    stars: 5,
  },
  {
    id: 11,
    type: "text",
    quote: "I spent weeks studying other sources but got overwhelmed. NCLEX Prep Nation simplified my daily schedule. Highly recommended!",
    name: "Robert H., RN",
    status: "Passed in 85 Questions",
    stars: 5,
  },
  {
    id: 12,
    type: "text",
    quote: "The WhatsApp support is incredible. Whenever I had a question about a rationale, they answered with clear, simple terms. Made prep so personal!",
    name: "Priya S., RN",
    status: "Passed on 1st Attempt",
    stars: 5,
  },
  {
    id: 13,
    type: "text",
    quote: "Passed my exam last week! The cardiac tamponade and pericarditis priority rationales saved me. I had a very similar question on my actual exam!",
    name: "Emily W., RN",
    status: "Passed on 1st Attempt",
    stars: 5,
  },
  {
    id: 14,
    type: "text",
    quote: "English is my second language, and the clear medical diagrams made complex physiological adaptations so much easier to comprehend.",
    name: "Yusuf A., RN",
    status: "Passed - NCLEX-RN",
    stars: 5,
  },
  {
    id: 15,
    type: "text",
    quote: "SATA questions used to terrify me, but after practicing the select-all-that-apply strategies here, I felt completely in control during the real exam.",
    name: "Michelle D., LPN",
    status: "NCLEX-PN Passed",
    stars: 5,
  },
  {
    id: 16,
    type: "text",
    quote: "I loved the diagnostic breakdown. It saved me from wasting time on concepts I already knew and let me focus directly on my weaknesses.",
    name: "Tyler B., RN",
    status: "Passed in 85 Questions",
    stars: 5,
  },
  {
    id: 17,
    type: "text",
    quote: "Passed on my first attempt! The delegation and scope of practice guidelines for UAPs were extremely helpful for the leadership questions.",
    name: "Chloe J., RN",
    status: "Passed in 85 Questions",
    stars: 5,
  },
  {
    id: 18,
    type: "text",
    quote: "Honestly, the best investment I made. The visual layouts and charts for maternal-child nursing concepts were incredibly structured and easy to memorize.",
    name: "Fatima Z., RN",
    status: "NCLEX-RN Passed",
    stars: 5,
  },
  {
    id: 19,
    type: "text",
    quote: "I was extremely nervous, but the test-taking tips and structural logic in the explanations helped me eliminate wrong options confidently.",
    name: "Marcus T., RN",
    status: "Passed on 1st Attempt",
    stars: 5,
  },
  {
    id: 20,
    type: "text",
    quote: "As a repeat test taker, my confidence was low. The score upgrading program and custom study checks helped me identify my mistakes and pass.",
    name: "Rachel G., LPN",
    status: "Repeat Test Taker - Passed",
    stars: 5,
  },
  {
    id: 21,
    type: "text",
    quote: "Outstanding QBank. The compatibility and responsiveness on my iPad made it easy to study during my hospital breaks.",
    name: "Kenneth C., RN",
    status: "Passed NCLEX-RN",
    stars: 5,
  },
  {
    id: 22,
    type: "text",
    quote: "The comprehensive practice tests build your stamina. When I sat for the real exam, it just felt like another practice day at home.",
    name: "Samantha R., RN",
    status: "Passed in 85 Questions",
    stars: 5,
  },
];

export function TestimonialCarousel() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size for responsive cards scroll count
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto scroll effect from left to right
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [activeIdx, isMobile]);

  const totalSlides = isMobile ? reviewsData.length : Math.ceil(reviewsData.length / 3);

  const nextSlide = () => {
    setActiveIdx((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveIdx((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: activeIdx * containerWidth,
        behavior: "smooth",
      });
    }
  }, [activeIdx]);

  return (
    <div className="w-full relative py-6">
      {/* Scroll Viewport */}
      <div className="relative overflow-hidden w-full">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-none snap-x snap-mandatory w-full"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Group items based on device */}
          {isMobile ? (
            // Mobile: 1 card per viewport slide
            reviewsData.map((review) => (
              <div
                key={review.id}
                className="w-full shrink-0 px-4 snap-center py-2"
              >
                <ReviewCard
                  review={review}
                  onImageClick={(src) => setSelectedImage(src)}
                />
              </div>
            ))
          ) : (
            // Desktop: 3 cards per viewport slide
            Array.from({ length: totalSlides }).map((_, slideIdx) => {
              const startIdx = slideIdx * 3;
              const slideReviews = reviewsData.slice(startIdx, startIdx + 3);
              return (
                <div
                  key={slideIdx}
                  className="w-full shrink-0 grid grid-cols-3 gap-6 snap-center px-4 py-2"
                >
                  {slideReviews.map((review) => (
                    <ReviewCard
                      key={review.id}
                      review={review}
                      onImageClick={(src) => setSelectedImage(src)}
                    />
                  ))}
                  {/* Fill empty items if last slide has fewer than 3 reviews */}
                  {slideReviews.length < 3 &&
                    Array.from({ length: 3 - slideReviews.length }).map((_, emptyIdx) => (
                      <div key={`empty-${emptyIdx}`} className="invisible" />
                    ))}
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Manual Control Navigation Rows */}
      <div className="flex items-center justify-between mt-8 px-4">
        {/* Carousel indicator dots */}
        <div className="flex gap-2.5">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`h-2.5 transition-all duration-300 rounded-full cursor-pointer ${
                activeIdx === idx ? "bg-clinical w-6" : "bg-line hover:bg-slate-400 w-2.5"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Action Arrows */}
        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            className="h-10 w-10 border border-line hover:border-clinical hover:text-clinical bg-white flex items-center justify-center rounded-full text-navy cursor-pointer transition-colors shadow-xs"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={18} className="stroke-[2.5]" />
          </button>
          <button
            onClick={nextSlide}
            className="h-10 w-10 border border-line hover:border-clinical hover:text-clinical bg-white flex items-center justify-center rounded-full text-navy cursor-pointer transition-colors shadow-xs"
            aria-label="Next testimonials"
          >
            <ChevronRight size={18} className="stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* Screenshot Expand Modal Overlay */}
      {selectedImage && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-navy/90 p-4 animate-fadeIn">
          <div className="relative max-w-3xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-line bg-slate-50">
              <div className="flex items-center gap-2 text-clinical font-bold text-sm">
                <MessageSquare size={16} />
                <span>WhatsApp Chat Screenshot Review</span>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="h-8 w-8 hover:bg-slate-200 text-slate-500 hover:text-navy transition-colors flex items-center justify-center rounded-full cursor-pointer"
                aria-label="Close image details"
              >
                <X size={18} />
              </button>
            </div>
            {/* Image content scroll viewport */}
            <div className="p-4 bg-[#ece5dd] overflow-y-auto flex justify-center items-center flex-1">
              <img
                src={selectedImage}
                alt="WhatsApp Screenshot Zoom"
                className="max-h-[70vh] object-contain rounded border border-slate-300 shadow-sm"
              />
            </div>
            {/* Modal Footer */}
            <div className="p-4 border-t border-line text-center text-xs text-muted font-medium bg-slate-50">
              Verified NCLEX candidate conversation. Personal identifier details redacted for privacy.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

type CardProps = {
  review: Review;
  onImageClick: (src: string) => void;
};

function ReviewCard({ review, onImageClick }: CardProps) {
  if (review.type === "whatsapp_image" && review.imageSrc) {
    return (
      <Card className="flex flex-col justify-between h-[300px] border border-emerald-200 bg-white relative overflow-hidden group hover:border-emerald-500 hover:shadow-md transition-all duration-300">
        {/* Visual indicators for WhatsApp verified screenshot */}
        <div className="absolute top-0 inset-x-0 h-1 bg-emerald-500" />
        
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3.5">
              <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                <CheckCircle2 size={10} className="fill-emerald-700 text-white" />
                <span>WhatsApp Screenshot</span>
              </span>
              <span className="text-[10px] text-slate-400 font-semibold">Verified Review</span>
            </div>

            {/* Blurred image container with zoom trigger */}
            <div
              onClick={() => onImageClick(review.imageSrc!)}
              className="relative rounded-lg overflow-hidden border border-slate-100 bg-[#e5ddd5] aspect-[16/9] cursor-pointer group-hover:border-emerald-300 transition-all duration-300 flex items-center justify-center"
            >
              <img
                src={review.imageSrc}
                alt={`${review.name} chat review`}
                className="w-full h-full object-cover opacity-90 group-hover:scale-102 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/35 transition-colors flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-navy font-bold text-xs shadow-md border border-line">
                  <ZoomIn size={14} className="text-clinical" />
                  <span>Click to Expand Review</span>
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3.5 border-t border-slate-100">
            <h4 className="text-xs font-black text-navy">{review.name}</h4>
            <p className="text-[10px] text-teal font-extrabold uppercase tracking-widest mt-0.5">
              {review.status}
            </p>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 bg-white border border-line flex flex-col justify-between h-[300px] hover:border-clinical/30 hover:shadow-md transition-all duration-300">
      <div>
        <div className="flex gap-0.5 text-amber-500 mb-4">
          {Array.from({ length: review.stars || 5 }).map((_, i) => (
            <Star key={i} size={15} fill="currentColor" />
          ))}
        </div>
        <p className="text-xs sm:text-sm leading-6 text-navy italic font-medium">
          &ldquo;{review.quote}&rdquo;
        </p>
      </div>
      <div className="mt-6 pt-4 border-t border-line">
        <h4 className="text-xs font-black text-navy">{review.name}</h4>
        <p className="text-[10px] text-teal font-extrabold uppercase tracking-widest mt-0.5">
          {review.status}
        </p>
      </div>
    </Card>
  );
}
