import type { Metadata } from "next";
import FAQPageContent from "./components/FAQPageContent";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Everything Auto Franklin Square, NY",
  description:
    "Answers to common questions about auto repair, pricing, warranties, and our process at Everything Auto in Franklin Square, NY. Call (516) 775-9724 for expert service.",
  alternates: {
    canonical: "/faqs",
  },
  openGraph: {
    title: "Frequently Asked Questions | Everything Auto Franklin Square, NY",
    description:
      "Answers to common questions about auto repair, pricing, warranties, and our process at Everything Auto in Franklin Square, NY.",
    url: "/faqs",
  },
};

export default function FAQPage() {
  return <FAQPageContent />;
}
