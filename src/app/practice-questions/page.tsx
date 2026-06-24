import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/metadata";

import { PracticeQuestionsClient } from "./PracticeQuestionsClient";

const description =
  "Practice NCLEX-style questions by topic, review rationales, and build confidence with NGN-style case studies for NCLEX-RN and NCLEX-PN preparation.";

export const metadata = createPageMetadata({
  title: "NCLEX Practice Questions With Rationales",
  description,
  path: "/practice-questions",
  keywords: [
    "NCLEX practice questions",
    "NCLEX questions with rationales",
    "NGN-style NCLEX case study practice",
  ],
});

export default function PracticeQuestionsPage() {
  return (
    <>
      <WebPageJsonLd
        description={description}
        path="/practice-questions"
        title="NCLEX Practice Questions"
      />
      <PracticeQuestionsClient />
    </>
  );
}
