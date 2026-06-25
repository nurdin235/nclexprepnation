import type { FAQItem } from "@/types";

export type FAQTopic = {
  id: string;
  title: string;
  items: FAQItem[];
};

export const faqs: FAQItem[] = [
  {
    question: "Do you provide real or leaked NCLEX exam questions?",
    answer: "No. We provide 99.99% original, high-yield practice questions, Next Generation (NGN) case studies, visual rationales, and study materials written by nursing educators for preparation only.",
  },
  {
    question: "Do you offer direct certificates?",
    answer: "Yes, we do. NCLEX Prep Nation can provide direct preparation or completion certificates after reviewing your details and confirming the appropriate completion path. The certificate confirms preparation activity with us; it is not a nursing license or official board result.",
  },
  {
    question: "How do I request access to prep packages?",
    answer: "Because our preparation packages are customized and delivered manually, you must submit a request form on our site. A support coordinator will then contact you via WhatsApp or email to discuss package choices and provide payment details.",
  },
  {
    question: "Do you support both NCLEX-RN and NCLEX-PN?",
    answer: "Yes. The platform provides separate, structured preparation paths and resources tailored to the respective RN and PN test plans.",
  },
  {
    question: "What does target score upgrading mean?",
    answer: "It is an educational review and diagnostic coaching process. We analyze your performance on mock tests, identify recurring mistake patterns, and help you systematically improve your scores before test day.",
  },
  {
    question: "What is the preparation completion certificate?",
    answer: "It is a digital document from NCLEX Prep Nation verifying that you completed all diagnostics and review activities with a passing score. It is not an official nursing credential or license.",
  },
  {
    question: "Can I start if my exam date is very close?",
    answer: "Yes. If your date is close, we help you focus on high-yield practice, weak-area review, prioritization, and clinical judgment so your remaining time is used wisely.",
  },
  {
    question: "Can NCLEX Prep Nation help if I failed before?",
    answer: "Yes. Many repeat candidates need a clearer plan, better rationale review, and targeted support. We help you identify what went wrong and rebuild confidence with structured practice.",
  },
  {
    question: "How fast can I receive guidance after submitting a request?",
    answer: "Once you submit the form, the team can review your details and follow up through your selected contact method with package guidance and next steps.",
  },
  {
    question: "Will I know what to study each day?",
    answer: "Yes. Our support is designed to turn broad NCLEX topics into a practical study path, so you can move through questions, rationales, and review areas with more direction.",
  },
  {
    question: "Do your rationales explain why wrong answers are wrong?",
    answer: "Yes. Strong rationale review is one of the best ways to grow. Our materials help you understand correct answers, unsafe choices, priority clues, and common traps.",
  },
  {
    question: "Can I ask for help choosing the right package?",
    answer: "Yes. If you are unsure where to begin, submit the form or message us on WhatsApp and we will recommend a starting point based on your exam type, timing, and weak areas.",
  },
  {
    question: "What if I feel overwhelmed by NCLEX preparation?",
    answer: "That is common, and you do not have to prepare without direction. We help you break the work into smaller steps, focus on progress, and keep moving with a clearer plan.",
  }
];

export const faqTopics: FAQTopic[] = [
  {
    id: "general",
    title: "General & Brand Info",
    items: [
      {
        question: "What is NCLEX Prep Nation?",
        answer: "NCLEX Prep Nation is the official website of NCLEX Prep Nation, an independent educational preparation platform. We help nursing candidates prepare for the NCLEX-RN and NCLEX-PN exams using original study materials, practice questions, NGN-style case studies, diagnostic support, and guided exam preparation."
      },
      {
        question: "Is NCLEX Prep Nation an official NCLEX website?",
        answer: "No. NCLEX Prep Nation is the official website of NCLEX Prep Nation, which is an independent educational preparation platform. It is not the official NCLEX website and is not affiliated with, associated with, or endorsed by the National Council of State Boards of Nursing (NCSBN) or Pearson VUE."
      },
      {
        question: "Does NCLEX Prep Nation provide real NCLEX questions?",
        answer: "No. We do not provide, request, or use real or leaked NCLEX exam questions. All our practice questions, next-generation (NGN) case studies, and rationales are 100% original educational prep materials designed by nursing educators to help candidates build clinical judgment."
      },
      {
        question: "What materials are available?",
        answer: "We offer customized study packages containing comprehensive practice questions, detailed visual rationales, NGN-style case studies, diagnostic baseline tests, structured review guides, pharmacology review guides, and preparation progress tracking."
      },
      {
        question: "Who can use NCLEX Prep Nation?",
        answer: "Our platform is designed for nursing candidates in the United States, Canada, and international candidates preparing for the NCLEX-RN or NCLEX-PN licensure exams."
      },
      {
        question: "Do you support NCLEX-RN and NCLEX-PN?",
        answer: "Yes. We offer separate, customized preparation pathways tailored to the respective NCLEX-RN and NCLEX-PN test plans to match each candidate's needs."
      },
      {
        question: "How can I request access?",
        answer: "You can request access by submitting the access request form on our website. After review, a coordinator will reach out to you via WhatsApp or email to discuss details and provide access credentials."
      }
    ]
  },
  {
    id: "preparing",
    title: "Preparing with NCLEX Prep Nation",
    items: [
      {
        question: "Which exams does NCLEX Prep Nation support?",
        answer: "We offer separate, customized preparation pathways for both NCLEX-RN (Registered Nurse) and NCLEX-PN (Practical Nurse) candidates, aligned with the latest official exam structures."
      },
      {
        question: "How does the study schedule system work?",
        answer: "When you request access, we help you formulate a structured day-by-day plan (e.g., 7-day or 30-day reviews) customized around your exam date, focusing on daily practice and targeted clinical areas."
      },
      {
        question: "Do you provide study guides and PDFs?",
        answer: "Yes! In addition to our interactive question bank, we provide downloadable PDF summaries, pharmacology outlines, lab values tables, and priority checklists for offline study."
      },
      {
        question: "Is there personal study support?",
        answer: "Yes, candidates on our Guided and Premium plans get access to personal review support via WhatsApp. You can text us directly to clarify rationale concepts or ask questions about study strategies."
      }
    ]
  },
  {
    id: "qbank",
    title: "QBank & Question Mechanics",
    items: [
      {
        question: "Are these real or leaked NCLEX exam questions?",
        answer: "No. NCLEX Prep Nation provides 99.99% original, high-yield practice questions written by nursing educators. We do not provide, request, or host leaked exam questions, dumps, or actual test items."
      },
      {
        question: "Do you support Select All That Apply (SATA) questions?",
        answer: "Yes! Our question bank features a high percentage of realistic SATA (Select All That Apply) questions, designed to mimic the distribution and complexity you will experience on exam day."
      },
      {
        question: "What are visual rationales and medical diagrams?",
        answer: "For complex physiological, pediatric, or maternal-child questions, our rationales include dedicated medical diagrams and clinical flowcharts. Visual learners can easily review pathology, catheter positioning, or anatomical changes."
      },
      {
        question: "Do you support Next Generation NCLEX (NGN) format?",
        answer: "Yes. Our practice engine is built to simulate NGN case studies, stand-alone clinical judgment questions, and matching grids to help you practice recognizing cues and prioritizing client needs."
      }
    ]
  },
  {
    id: "certificates",
    title: "Course Certificates & Validation",
    items: [
      {
        question: "What is the Prep Nation Certificate of Completion?",
        answer: "It is an official document issued by NCLEX Prep Nation verifying that you have completed all assigned diagnostic modules, reviews, and test series on our platform."
      },
      {
        question: "Do you offer direct certificates?",
        answer: "Yes, we do. Direct preparation or completion certificates are available by request after your details and completion path are reviewed. This confirms preparation activity with NCLEX Prep Nation and does not replace a nursing license, official exam result, or board requirement."
      },
      {
        question: "Is this certificate an official license to practice nursing?",
        answer: "No. This is a certificate of preparation completion from our independent educational platform. It does not replace licensing board requirements, Pearson VUE registrations, or official exam results."
      },
      {
        question: "Who is eligible to receive a certificate?",
        answer: "Candidates who complete 100% of their selected prep package modules and score above 75% on their final comprehensive diagnostic readiness assessment can request their certificate."
      },
      {
        question: "Can I share my certificate on LinkedIn or with recruiters?",
        answer: "Yes! You can share your verified digital certificate of completion with prospective boards of nursing, healthcare employers, and recruiters to demonstrate your proactive preparation."
      }
    ]
  },
  {
    id: "scores",
    title: "Target Score Upgrading",
    items: [
      {
        question: "What is score upgrading support?",
        answer: "Score upgrading is our diagnostic coaching program. We review your mock exam statistics, identify recurring mistake patterns, and suggest specific study actions to elevate your score profile."
      },
      {
        question: "Does score upgrading change my actual official board exam score?",
        answer: "No. Score upgrading is strictly an educational tool to help you improve your knowledge and performance. Your official NCLEX score is determined solely by the Pearson VUE exam session."
      },
      {
        question: "How does the diagnostic baseline test work?",
        answer: "You begin with our free diagnostic test. Our platform analyzes your response patterns to create a comprehensive report showing which clinical topics (e.g. pharmacology, management of care) need the most attention."
      },
      {
        question: "How can I track my performance improvement?",
        answer: "You can track your improvement using our structured study guides, customized review logs, and progress checklists. The team can also help analyze your mock test results when you share them via WhatsApp or email."
      }
    ]
  },
  {
    id: "confidence",
    title: "Confidence & Study Momentum",
    items: [
      {
        question: "Can I start even if my exam date is close?",
        answer: "Yes. A close exam date means your plan should be focused, not random. We help you prioritize high-yield questions, safety concepts, rationales, and weak areas so your remaining study time has direction."
      },
      {
        question: "What if I failed the NCLEX before?",
        answer: "You can still rebuild. We help repeat candidates review missed patterns, improve clinical judgment, and practice with a clearer structure so the next attempt feels more controlled."
      },
      {
        question: "Will I know what to study first?",
        answer: "Yes. Based on your exam type, timeline, and current needs, we can guide you toward the best starting point instead of leaving you to guess from hundreds of topics."
      },
      {
        question: "How do the rationales help me improve faster?",
        answer: "Good rationales teach the thinking behind the answer. Our explanations help you recognize priority clues, rule out unsafe choices, and understand why the correct option fits the clinical situation."
      },
      {
        question: "Can I prepare while working or managing a busy schedule?",
        answer: "Yes. We can help you choose a realistic path that fits smaller study windows, daily question practice, and focused review instead of overwhelming all-day study blocks."
      },
      {
        question: "What if I am not sure whether I need RN or PN materials?",
        answer: "Tell us your target exam and current status in the request form. If you are unsure, we can help you confirm the best preparation route before you begin."
      },
      {
        question: "Can I contact the team when I feel stuck?",
        answer: "Yes. You can reach out through WhatsApp or email for guidance on packages, weak areas, study direction, and next steps when preparation starts to feel unclear."
      }
    ]
  },
  {
    id: "access",
    title: "Access Requests & Payment Discussion",
    items: [
      {
        question: "How do I get access to NCLEX Prep Nation packages?",
        answer: "Because access is provisioned manually to preserve system performance, you must submit an access request through our website. Our team will contact you via WhatsApp or email to deliver your materials and guide you on how to start."
      },
      {
        question: "Is there an online checkout or credit card processor on the site?",
        answer: "No. To maintain high security and keep pricing affordable, we process access requests manually. We coordinate directly with you via WhatsApp or email to provide payment details and send your study files."
      },
      {
        question: "What payment methods are supported?",
        answer: "We coordinate standard payment options directly with candidates over WhatsApp or email based on your location and preferences."
      },
      {
        question: "Can I try the platform before paying?",
        answer: "Yes! You can access our Free Diagnostic Test and review sample questions on our site without any credit card or prior payment commitment."
      },
      {
        question: "What is the refund policy for packages?",
        answer: "Because materials are accessible immediately upon account setup, packages are generally non-refundable. Please speak with your coordinator during your WhatsApp setup discussion if you have questions."
      }
    ]
  }
];
