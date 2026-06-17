import type { FAQItem } from "@/types";

export type FAQTopic = {
  id: string;
  title: string;
  items: FAQItem[];
};

export const faqs: FAQItem[] = [
  {
    question: "Do you provide real or leaked NCLEX exam questions?",
    answer: "No. We provide 100% original, high-yield practice questions, Next Generation (NGN) case studies, visual rationales, and study materials written by nursing educators for preparation only.",
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
  }
];

export const faqTopics: FAQTopic[] = [
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
        answer: "No. NCLEX Prep Nation provides 100% original, high-yield practice questions written by nursing educators. We do not provide, request, or host leaked exam questions, dumps, or actual test items."
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
