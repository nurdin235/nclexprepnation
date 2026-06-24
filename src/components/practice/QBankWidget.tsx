"use client";

import { useState } from "react";
import { Check, X, ChevronLeft, ChevronRight, Lock } from "lucide-react";
import { Button } from "@/components/ui/Button";

type Option = {
  id: string;
  text: string;
  isCorrect: boolean;
};

type Question = {
  id: number;
  type: "single" | "sata";
  topic: string;
  difficulty: string;
  prompt: string;
  options: Option[];
  image?: string;
  rationale: string;
  correctExplanation: string;
  incorrectExplanation: string;
  educationalObjective: string;
};

const sampleQuestions: Question[] = [
  {
    id: 1,
    type: "sata",
    topic: "Orthopedics & Safety",
    difficulty: "Hard",
    prompt: "A client is admitted to the hospital with a fractured femur. Which of the following findings would suggest compartment syndrome? Select all that apply.",
    options: [
      { id: "A", text: "Severe pain that is not relieved by analgesics", isCorrect: true },
      { id: "B", text: "Paresthesia or numbness of the affected extremity", isCorrect: true },
      { id: "C", text: "Active pulses and capillary refill < 2 seconds", isCorrect: false },
      { id: "D", text: "Active range of motion in the toes", isCorrect: false },
      { id: "E", text: "Pallor or coldness of the skin on the affected extremity", isCorrect: true },
    ],
    image: "https://images.unsplash.com/photo-1582750433449-64c86b1fdf30?auto=format&fit=crop&w=600&q=80",
    rationale: "Compartment syndrome occurs when increased pressure within a confined muscle compartment compromises circulation and tissue perfusion. The classic '6 Ps' include severe pain disproportionate to the injury and unrelieved by analgesics (often the earliest sign), paresthesia (numbness/tingling), pallor (pale, cold skin), pulselessness (late sign), paralysis, and poikilothermia. In the early stages, distal pulses may still be palpable, and capillary refill can be normal.",
    correctExplanation: "Severe pain (unrelieved by meds), paresthesias, and cold/pale skin directly indicate arterial insufficiency and tissue ischemia inside the extremity compartment.",
    incorrectExplanation: "Active pulses and active toe movement indicate intact nerves and distal blood flow but do NOT rule out early compartment syndrome; they are normal findings.",
    educationalObjective: "Identify early clinical signs of compartment syndrome (severe unrelieved pain, paresthesias, pallor) to initiate emergency decompressive fasciotomy and prevent permanent nerve and muscle necrosis.",
  },
  {
    id: 2,
    type: "sata",
    topic: "Gastrointestinal & Nutrition",
    difficulty: "Medium",
    prompt: "The nurse is teaching a client about self-management of chronic constipation. Which of the following recommendations should the nurse include? Select all that apply.",
    options: [
      { id: "A", text: "Increase intake of high-fiber foods such as fruits and whole grains", isCorrect: true },
      { id: "B", text: "Maintain an active lifestyle with regular daily exercise", isCorrect: true },
      { id: "C", text: "Drink at least 2 to 3 liters of fluids daily", isCorrect: true },
      { id: "D", text: "Set aside a regular time for defecation daily", isCorrect: true },
      { id: "E", text: "Avoid caffeine-containing beverages", isCorrect: false },
    ],
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80",
    rationale: "Chronic constipation is managed effectively using lifestyle modifications. Non-pharmacological recommendations include: (1) consuming 20-35 g of dietary fiber daily (whole grains, bran, fresh fruits/vegetables) to increase stool bulk; (2) engaging in regular aerobic exercise (walking 30 minutes/day) to stimulate bowel motility; (3) drinking 2-3 liters of fluids daily to soften stool; (4) establishing a regular daily schedule for bowel elimination (e.g., 30 minutes after meals) to take advantage of gastrocolic reflexes.",
    correctExplanation: "Increasing fiber, drinking adequate fluids, regular walking, and maintaining a defecation schedule are core pillars of non-pharmacological bowel management.",
    incorrectExplanation: "While excessive caffeine can cause dehydration, moderate caffeine actually stimulates gastrointestinal motility and does not need to be strictly avoided.",
    educationalObjective: "Formulate a teaching plan for chronic constipation focusing on high-fiber diet, hydration, exercise, and regular bowel habits.",
  },
  {
    id: 3,
    type: "sata",
    topic: "Cardiovascular & Vascular",
    difficulty: "Medium",
    prompt: "The nurse is caring for a client with deep venous thrombosis (DVT) of the lower extremity. Which of the following findings would the nurse expect to observe? Select all that apply.",
    options: [
      { id: "A", text: "Dry, shiny, hairless skin on the affected extremity", isCorrect: false },
      { id: "B", text: "Warmth and redness of the affected extremity", isCorrect: true },
      { id: "C", text: "Reports of pain in the affected calf", isCorrect: true },
      { id: "D", text: "Edema of the affected extremity", isCorrect: true },
      { id: "E", text: "Cyanosis of the affected toes", isCorrect: false },
    ],
    image: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&w=600&q=80",
    rationale: "Deep venous thrombosis (DVT) is a vascular condition characterized by thrombus formation in a deep vein, most commonly in the unilateral lower extremity. Clot formation causes venous obstruction, leading to localized inflammation. Expected findings include unilateral edema (due to fluid collection behind the blocked vein), calf pain or tenderness, warmth, and erythema (redness) of the extremity.",
    correctExplanation: "Unilateral warmth, localized redness, edema, and calf pain are classic signs of impaired venous return and localized vein inflammation.",
    incorrectExplanation: "Dry, shiny, hairless skin and cyanosis of the toes are classic signs of peripheral arterial disease (PAD) or chronic arterial insufficiency, not DVT.",
    educationalObjective: "Differentiate between signs of deep venous thrombosis (warmth, redness, edema, pain) and peripheral arterial disease (hairless skin, cool temperature, decreased pulses).",
  },
  {
    id: 4,
    type: "sata",
    topic: "Infectious Disease & Immunity",
    difficulty: "Hard",
    prompt: "The nurse is talking with a client recently diagnosed with HIV infection about home and lifestyle alterations. Which of the following statements by the client would require follow-up? Select all that apply.",
    options: [
      { id: "A", text: "\"I should avoid eating raw or undercooked meats and eggs to prevent infections.\"", isCorrect: false },
      { id: "B", text: "\"I need to make sure my family members understand not to borrow my shaving razors.\"", isCorrect: false },
      { id: "C", text: "\"I do not need to use barrier methods of protection if my sexual partner is also HIV positive.\"", isCorrect: true },
      { id: "D", text: "\"I have started to use lambskin condoms during sexual intercourse because I have a latex allergy.\"", isCorrect: true },
      { id: "E", text: "\"I will use a needle exchange program and avoid sharing equipment I use for injecting recreational substances.\"", isCorrect: false },
    ],
    rationale: "HIV positive clients require comprehensive education on preventing opportunistic infections and transmission: (1) Re-infection with different drug-resistant HIV strains can occur, so barrier methods (latex/polyurethane condoms) are mandatory even if both partners are positive. (2) Lambskin condoms contain natural pores that allow the HIV virus to pass through; they do not prevent transmission. (3) Standard infection precautions include avoiding raw meat/eggs (preventing Salmonella/Toxoplasma) and sharing razors/needles.",
    correctExplanation: "Claims that barrier protection is unnecessary with positive partners or that lambskin condoms provide viral protection require immediate nurse correction.",
    incorrectExplanation: "Avoiding undercooked food, sharing razors, or sharing injection equipment are correct safety statements showing good patient understanding.",
    educationalObjective: "Educate HIV-infected clients on safe sex practices (using latex/polyurethane, avoiding lambskin) and avoiding super-infection or transmission.",
  },
  {
    id: 5,
    type: "single",
    topic: "Cardiovascular & Priority Care",
    difficulty: "Advanced",
    prompt: "The nurse is caring for a client who has acute pericarditis. Which of the following findings would be a priority to follow up?",
    options: [
      { id: "A", text: "Chest pain that is worse with deep inspiration", isCorrect: false },
      { id: "B", text: "Muffled heart tones and jugular venous distension", isCorrect: true },
      { id: "C", text: "Pericardial friction rub auscultated at the left sternal border", isCorrect: false },
      { id: "D", text: "Temperature of 100.7 F (38.2 C) and a nonproductive cough", isCorrect: false },
    ],
    rationale: "Acute pericarditis is inflammation of the pericardium. A critical complication of pericarditis is pericardial effusion, which can progress to cardiac tamponade (excessive fluid in the pericardial sac compressing the heart). Signs of cardiac tamponade include muffled or distant heart tones, jugular venous distension (JVD), hypotension, and pulsus paradoxus. Tamponade compromises cardiac output and is a life-threatening emergency requiring immediate pericardiocentesis.",
    correctExplanation: "Muffled heart tones, JVD, and low blood pressure (Beck's triad) indicate cardiac tamponade, requiring emergency fluid aspiration.",
    incorrectExplanation: "Pleuritic chest pain (worse on inspiration) and pericardial friction rubs are expected findings in acute pericarditis. Low-grade fever is also a common inflammatory sign.",
    educationalObjective: "Recognize clinical indicators of cardiac tamponade (muffled heart tones, jugular venous distension, hypotension) as priority findings in a client with pericarditis.",
  },
  {
    id: 6,
    type: "single",
    topic: "Renal & Urology",
    difficulty: "Hard",
    prompt: "The nurse is caring for a client who is receiving peritoneal dialysis. It would be a priority for the nurse to...",
    options: [
      { id: "A", text: "Place the client in the semi-Fowler position", isCorrect: false },
      { id: "B", text: "Record the characteristics of the dialysate output", isCorrect: false },
      { id: "C", text: "Use sterile technique when spiking and attaching the bag of dialysate", isCorrect: true },
      { id: "D", text: "Ensure that the drainage collection bag is below the level of the abdomen", isCorrect: false },
    ],
    rationale: "Peritoneal dialysis (PD) involves introducing dialysate into the peritoneal cavity via a catheter. The major risk associated with PD is peritonitis (inflammation of the peritoneum), commonly caused by contamination during bag connection. Therefore, utilizing strict sterile technique (wearing masks, sterile gloves, prepping connections) when spiking and attaching bags is the highest priority action to prevent infection. Signs of peritonitis include cloudy outflow, fever, and abdominal pain.",
    correctExplanation: "Meticulous sterile technique during tubing and dialysate connections directly prevents peritonitis, the most critical complication of PD.",
    incorrectExplanation: "Semi-Fowler positioning, output monitoring, and keeping the drainage bag low are correct standard interventions but secondary to preventing infection.",
    educationalObjective: "Prioritize infection prevention protocols (strict sterile connection technique) for a client receiving peritoneal dialysis to avoid peritonitis.",
  },
  {
    id: 7,
    type: "single",
    topic: "Pharmacology & Safety",
    difficulty: "Medium",
    prompt: "A client is prescribed 10 units of regular insulin and 20 units of NPH insulin subcutaneously before breakfast. Which action by the nurse is correct?",
    options: [
      { id: "A", text: "Draw up the NPH insulin first, then the regular insulin in the same syringe", isCorrect: false },
      { id: "B", text: "Draw up the regular insulin first, then the NPH insulin in the same syringe", isCorrect: true },
      { id: "C", text: "Prepare two separate injections and administer them at different sites", isCorrect: false },
      { id: "D", text: "Shake the NPH insulin vial vigorously before drawing up the dose", isCorrect: false },
    ],
    rationale: "When mixing regular (short-acting, clear) and NPH (intermediate-acting, cloudy) insulin in a single syringe, the regular insulin must be drawn first to prevent contamination of the regular vial with NPH insulin. The sequence is 'clear before cloudy' (Regular then NPH). Intermediate insulin should be rolled gently between the palms to mix, not shaken, to prevent air bubble formation.",
    correctExplanation: "Drawing Regular (clear) insulin first prevents cloudy NPH proteins from contaminating the clear vial, maintaining drug integrity.",
    incorrectExplanation: "Drawing NPH first is incorrect. Shaking the vial vigorously introduces bubbles, leading to inaccurate dosage measurement.",
    educationalObjective: "Master the safe sequence for mixing clear (Regular) and cloudy (NPH) insulins in a single syringe: draw clear first, cloudy second.",
  },
  {
    id: 8,
    type: "sata",
    topic: "Infection Control & Safety",
    difficulty: "Medium",
    prompt: "A client is admitted with suspected pulmonary tuberculosis. Which of the following precautions should the nurse implement? Select all that apply.",
    options: [
      { id: "A", text: "Place the client in a private room with negative air pressure", isCorrect: true },
      { id: "B", text: "Wear a surgical mask when entering the client's room", isCorrect: false },
      { id: "C", text: "Wear an N95 respirator when providing direct care", isCorrect: true },
      { id: "D", text: "Have the client wear a surgical mask when leaving the room for diagnostic tests", isCorrect: true },
      { id: "E", text: "Place a surgical mask on the client inside their room", isCorrect: false },
    ],
    rationale: "Pulmonary tuberculosis is transmitted via airborne droplets. Airborne precautions require: (1) private room with negative air pressure and at least 6-12 air exchanges per hour; (2) healthcare staff wearing a fit-tested N95 respirator; (3) placing a surgical mask on the client ONLY when they must leave the room for essential diagnostic tests. Inside the room, the client does not wear a mask, as negative pressure handles the air exhaust.",
    correctExplanation: "Negative pressure isolation, N95 respirators for staff, and surgical masks for the client during transport are standard airborne isolation guidelines.",
    incorrectExplanation: "Staff wearing a surgical mask is insufficient (N95 needed). Masking the client inside a negative pressure room is unnecessary and restricts airway comfort.",
    educationalObjective: "Apply airborne isolation precautions (negative pressure room, N95 respirator for staff, client surgical mask during transport) for tuberculosis clients.",
  },
  {
    id: 9,
    type: "sata",
    topic: "Delegation & Leadership",
    difficulty: "Medium",
    prompt: "The nurse is planning care for a client who had a total hip replacement 24 hours ago. Which of the following tasks can the nurse delegate to the unlicensed assistive personnel (UAP)? Select all that apply.",
    options: [
      { id: "A", text: "Assist the client with moving from the bed to a chair using an abduction pillow", isCorrect: true },
      { id: "B", text: "Measure and record the drainage from the suction device", isCorrect: false },
      { id: "C", text: "Apply moisture barrier ointment to the client's perineal skin after incontinent episodes", isCorrect: true },
      { id: "D", text: "Reinforce teaching about postoperative hip precautions", isCorrect: false },
      { id: "E", text: "Obtain and record vital signs", isCorrect: true },
    ],
    rationale: "The nurse delegating to unlicensed assistive personnel (UAP) must follow rules of safety. Tasks delegated must be standard, non-invasive, and require no clinical judgment: (1) assisting with transfer/ambulation after initial nurse assessment; (2) performing skin hygiene and applying barrier creams; (3) taking vital signs on stable clients. Assessing surgical drain output, teaching, or reinforcing clinical care cannot be delegated.",
    correctExplanation: "Ambulation assistance, perineal hygiene, and vital signs represent standard, non-invasive tasks suitable for UAP delegation.",
    incorrectExplanation: "Measuring surgical drainage (requires assessment) and reinforcing precautions (requires clinical teaching) are nursing responsibilities.",
    educationalObjective: "Delegate tasks safely to UAP by ensuring they do not require clinical assessment, judgment, specialized teaching, or sterile technique.",
  },
  {
    id: 10,
    type: "single",
    topic: "Pharmacology & Hematology",
    difficulty: "Advanced",
    prompt: "A client who is receiving a continuous intravenous heparin infusion is prescribed oral warfarin. The client asks the nurse why both medications are being given at the same time. Which explanation by the nurse is correct?",
    options: [
      { id: "A", text: "\"Giving both medications together dissolves blood clots more rapidly than one alone.\"", isCorrect: false },
      { id: "B", text: "\"Heparin is given to prevent new clots from forming, while warfarin dissolves existing clots.\"", isCorrect: false },
      { id: "C", text: "\"Warfarin takes several days to reach therapeutic levels, so heparin is continued until that occurs.\"", isCorrect: true },
      { id: "D", text: "\"Heparin enhances the absorption and therapeutic effectiveness of warfarin.\"", isCorrect: false },
    ],
    rationale: "Warfarin has a delayed onset of action (typically 3 to 5 days) because it takes time to deplete clotting factors. Continuous intravenous heparin provides immediate anticoagulation to prevent clot expansion. Therefore, they are administered concurrently (bridge therapy) until the client's INR (International Normalized Ratio) reaches the therapeutic range (usually 2.0 to 3.0), at which point heparin can be discontinued. Anticoagulants prevent clot formation but do not dissolve existing clots.",
    correctExplanation: "Warfarin has a slow onset of action (3-5 days); heparin must be continued as an immediate-acting bridge until the INR becomes therapeutic.",
    incorrectExplanation: "Anticoagulants do not dissolve existing clots (that is the role of thrombolytics like tPA). Heparin does not enhance warfarin's absorption.",
    educationalObjective: "Explain the rationale for overlap bridge therapy with heparin and warfarin, referencing warfarin's delayed therapeutic onset.",
  },
];

export function QBankWidget() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQuestion = sampleQuestions[currentIdx];

  const handleOptionSelect = (optionId: string) => {
    if (isSubmitted) return;

    if (currentQuestion.type === "single") {
      setSelectedOptions([optionId]);
    } else {
      // sata (select all that apply) - toggling checkboxes
      if (selectedOptions.includes(optionId)) {
        setSelectedOptions(selectedOptions.filter((id) => id !== optionId));
      } else {
        setSelectedOptions([...selectedOptions, optionId]);
      }
    }
  };

  const handleSubmit = () => {
    if (selectedOptions.length === 0) return;
    setIsSubmitted(true);
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentIdx < sampleQuestions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOptions([]);
      setIsSubmitted(false);
      setShowExplanation(false);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
      setSelectedOptions([]);
      setIsSubmitted(false);
      setShowExplanation(false);
    }
  };

  const isQuestionCorrect = () => {
    // For single choice
    if (currentQuestion.type === "single") {
      const correctOption = currentQuestion.options.find((o) => o.isCorrect);
      return selectedOptions[0] === correctOption?.id;
    }
    // For SATA
    return currentQuestion.options.every((option) => {
      const isChecked = selectedOptions.includes(option.id);
      return isChecked === option.isCorrect;
    });
  };

  return (
    <div className="w-full max-w-[1140px] mx-auto bg-[#f0f7fc] border border-clinical/20 rounded-xl p-4 sm:p-6 md:p-8 shadow-sm">
      {/* 1. Header Row of Circle Numeric Tabs */}
      <div className="flex flex-wrap items-center justify-between border-b border-line pb-4 gap-4">
        <div className="flex flex-wrap items-center gap-2">
          {sampleQuestions.map((q, idx) => (
            <button
              key={q.id}
              onClick={() => {
                setCurrentIdx(idx);
                setSelectedOptions([]);
                setIsSubmitted(false);
                setShowExplanation(false);
              }}
              className={`qbank-tab-circle h-9 w-9 rounded-full flex items-center justify-center font-bold text-xs border ${
                currentIdx === idx
                  ? "bg-navy text-white border-navy"
                  : "bg-white text-navy border-line hover:border-clinical hover:text-clinical"
              }`}
            >
              {q.id}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs bg-navy/5 text-navy font-bold uppercase tracking-wider px-2.5 py-1 rounded border border-navy/10">
            {currentQuestion.topic}
          </span>
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
            currentQuestion.difficulty === "Easy"
              ? "bg-emerald-100 text-emerald-800"
              : currentQuestion.difficulty === "Medium"
              ? "bg-amber-100 text-amber-800"
              : "bg-red-100 text-red-800"
          }`}>
            {currentQuestion.difficulty}
          </span>
        </div>
      </div>

      {/* 2. Question Area */}
      <div className="mt-6">
        <div className="bg-white rounded-lg border border-line p-5 sm:p-6">
          <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-clinical bg-clinical/10 px-2 py-0.5 rounded mb-3">
            Question {currentQuestion.id} {currentQuestion.type === "sata" ? "(Select all that apply)" : ""}
          </span>
          <p className="text-base text-navy font-bold leading-7">
            {currentQuestion.prompt}
          </p>

          {/* Option rows list */}
          <div className="mt-6 space-y-3">
            {currentQuestion.options.map((option) => {
              const isChecked = selectedOptions.includes(option.id);
              return (
                <div
                  key={option.id}
                  onClick={() => handleOptionSelect(option.id)}
                  className={`qbank-option-row flex items-start gap-3.5 border rounded-lg p-4 cursor-pointer hover:bg-soft/50 ${
                    isChecked
                      ? "bg-soft border-clinical font-semibold"
                      : "bg-white border-line"
                  }`}
                >
                  <input
                    type={currentQuestion.type === "single" ? "radio" : "checkbox"}
                    checked={isChecked}
                    readOnly
                    name={`q-${currentQuestion.id}`}
                    className={`mt-1 shrink-0 h-4.5 w-4.5 text-clinical border-line focus:ring-clinical focus:ring-2 ${
                      currentQuestion.type === "single" ? "rounded-full" : "rounded"
                    }`}
                  />
                  <span className="text-sm text-navy leading-6">
                    <span className="font-bold text-clinical mr-1.5">{option.id}.</span>
                    {option.text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Submit action button */}
          {!isSubmitted && (
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleSubmit}
                disabled={selectedOptions.length === 0}
                className="min-h-11 px-6 rounded-md bg-[#dc2626] text-white hover:bg-red-700 font-bold text-sm transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 3. Explanation Area (reveals on Submit) */}
      {showExplanation && (
        <div className="mt-6 bg-white rounded-lg border border-line p-5 sm:p-6 animate-fadeIn">
          <div className="flex items-center gap-2 border-b border-line pb-4 mb-4">
            <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-white font-bold text-xs ${
              isQuestionCorrect() ? "bg-emerald-600" : "bg-red-600"
            }`}>
              {isQuestionCorrect() ? <Check size={14} /> : <X size={14} />}
            </span>
            <h3 className="font-bold text-navy text-lg">
              {isQuestionCorrect() ? "Correct Answer" : "Incorrect Answer"}
            </h3>
          </div>

          <div className="space-y-6">
            {/* Diagram illustration if available */}
            {currentQuestion.image && (
              <div className="flex justify-center border border-line rounded bg-soft/30 p-2 max-w-lg mx-auto overflow-hidden">
                <img
                  src={currentQuestion.image}
                  alt={`${currentQuestion.topic} Diagram`}
                  className="max-h-72 object-contain"
                />
              </div>
            )}

            {/* Rationale text paragraphs */}
            <div>
              <h4 className="text-sm font-extrabold uppercase tracking-widest text-clinical mb-2">
                Clinical Rationale
              </h4>
              <p className="text-sm leading-6 text-navy">
                {currentQuestion.rationale}
              </p>
            </div>

            {/* Answers details */}
            <div className="grid gap-4 sm:grid-cols-2 bg-soft/50 border border-line p-4 rounded">
              <div>
                <h5 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  Key Correct Takeaway
                </h5>
                <p className="text-xs leading-5 text-navy">{currentQuestion.correctExplanation}</p>
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />
                  Key Incorrect Takeaway
                </h5>
                <p className="text-xs leading-5 text-muted">{currentQuestion.incorrectExplanation}</p>
              </div>
            </div>

            {/* Educational Objective Banner */}
            <div className="border-l-4 border-teal bg-teal/5 p-4 rounded-r">
              <h4 className="text-xs font-bold text-teal uppercase tracking-wider mb-1">
                Educational Objective
              </h4>
              <p className="text-xs leading-5 text-navy font-medium">
                {currentQuestion.educationalObjective}
              </p>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between border-t border-line pt-5 mt-6">
              <button
                onClick={handlePrev}
                disabled={currentIdx === 0}
                className="inline-flex items-center gap-1 px-4 py-2 border border-line text-xs font-bold rounded bg-slate-50 text-navy hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={14} />
                Previous Question
              </button>
              
              <button
                onClick={handleNext}
                disabled={currentIdx === sampleQuestions.length - 1}
                className="inline-flex items-center gap-1 px-4 py-2 border border-[#f5c400] text-xs font-bold rounded bg-gold text-navy hover:bg-gold-hover disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next Question
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Bottom Locked Premium Note */}
      <div className="mt-8 border-t border-line pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <Lock className="text-clinical shrink-0 mt-0.5" size={20} />
          <div>
            <h4 className="text-sm font-bold text-navy">
              Want more practice questions and clinical rationales?
            </h4>
            <p className="text-xs text-muted mt-1 max-w-xl">
              Unlock our complete question library containing thousands of NCLEX-RN/PN exam prep simulations and detailed clinical rationales.
            </p>
          </div>
        </div>
        <Button href="/request-access?package=premium" variant="gold" className="text-xs py-2 min-h-10">
          Request Premium QBank
        </Button>
      </div>
    </div>
  );
}
