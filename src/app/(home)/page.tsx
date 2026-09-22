import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import ServicesOverview from "./components/ServicesOverview";
import  Video from "./components/video";
import GoogleReviews from "./components/GoogleReviews";
import FAQSection from "./components/faqs";
import FinalCta from "./components/FinalCta";
export const metadata: Metadata = {
  title: "Everything Auto | Reliable Auto Repair in Franklin Square, NY",
  description:
    "Everything Auto provides professional auto repair, maintenance, and diagnostics in Franklin Square, NY. Family-owned and trusted since 2008. Call (516) 775-9724 for expert service today!",
  keywords: [
    "auto repair Franklin Square NY",
    "car service Franklin Square",
    "brake repair Franklin Square",
    "engine diagnostics NY",
    "oil change Franklin Square",
    "car AC repair Franklin Square",
    "check engine light repair",
    "auto shop Franklin Square",
    "local mechanic Franklin Square",
    "wheel alignment Franklin Square",
    "tire balancing Franklin Square",
    "NY car inspection station",
    "vehicle maintenance Franklin Square",
    "automotive repair shop near me",
    "auto electrical repair NY",
    "car tune-up Franklin Square",
    "transmission repair Franklin Square",
    "suspension repair Franklin Square",
    "exhaust system repair NY",
    "battery replacement Franklin Square",
    "radiator repair Franklin Square",
    "auto diagnostics Franklin Square",
    "muffler repair Franklin Square",
    "car heating system repair",
    "fuel system cleaning NY",
    "check engine service Franklin Square",
    "timing belt replacement Franklin Square",
    "auto maintenance Franklin Square",
    "NY car care experts",
    "automotive service Franklin Square",
    "auto air conditioning service NY",
    "vehicle diagnostics Franklin Square",
    "affordable auto repair NY",
    "trusted car shop Franklin Square",
    "experienced mechanics Franklin Square",
    "auto body repair Franklin Square",
    "foreign car repair Franklin Square",
    "domestic vehicle repair NY",
    "professional auto technicians",
    "complete car service Franklin Square",
    "emission repair Franklin Square",
    "NY state vehicle inspection",
    "auto engine rebuild Franklin Square",
    "fuel injector cleaning NY",
    "brake pad replacement Franklin Square",
    "steering repair Franklin Square",
    "power window repair Franklin Square",
    "alternator repair Franklin Square",
    "auto cooling system repair",
    "hybrid vehicle repair Franklin Square",
    "SUV repair Franklin Square",
    "sedan repair NY",
    "truck maintenance Franklin Square",
    "car diagnostic testing Franklin Square",
    "car electrical issues Franklin Square",
    "ABS light repair Franklin Square",
    "auto repair experts Franklin Square",
    "Everything Auto Franklin Square",
    "family-owned auto shop NY",
    "auto tune up Franklin Square NY",
    "engine light diagnosis Franklin Square",
    "auto repair near Franklin Square",
    "local vehicle maintenance shop",
    "best mechanic Franklin Square",
    "5-star auto shop NY",
    "trusted auto specialists NY",
    "Everything Auto reviews Franklin Square",
    "affordable mechanic Franklin Square",
    "car exhaust replacement Franklin Square",
    "auto transmission flush NY",
    "brake system repair Franklin Square",
    "NY car AC recharge",
    "auto belt and hose repair NY",
    "mechanical repair Franklin Square",
    "reliable car repair Franklin Square",
    "quick oil change Franklin Square",
    "expert car diagnostics NY",
    "auto wheel balancing Franklin Square",
    "full service auto repair Franklin Square",
    "auto suspension diagnostics NY",
    "Everything Auto car service",
    "top-rated auto repair Franklin Square",
    "engine maintenance NY",
    "Franklin Square NY auto experts",
    "vehicle inspection Franklin Square",
    "auto exhaust diagnostics NY",
    "professional car repair Franklin Square",
    "auto shop with great reviews",
    "car repair services Franklin Square NY",
    "auto engine diagnostics Franklin Square",
    "tire rotation Franklin Square",
    "car repair and maintenance NY",
    "local car repair experts Franklin Square",
    "Everything Auto repair shop",
    "affordable car repair Franklin Square",
    "family auto repair NY",
    "auto tune-up shop Franklin Square",
    "trusted automotive center Franklin Square",
    "mechanic shop Franklin Square NY",
    "Everything Auto customer service",
    "vehicle repair Franklin Square NY",
    "Everything Auto Franklin Square reviews"
  ],
  openGraph: {
    title: "Everything Auto - Auto Repair in Franklin Square, NY",
    description:
      "Professional, honest, and affordable auto repair services in Franklin Square, NY. Family-owned since 2008. Call (516) 775-9724 today!",
    url: "https://everythingauto.com",
    siteName: "Everything Auto",
    images: [
      {
        url: "/every.png",
        width: 1200,
        height: 630,
        alt: "Everything Auto - Franklin Square NY",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://everythingauto.com"),
};

export default async function Home() {
  return (
    <>
      <HeroSection />
      <div className="section-bg">
        <ServicesOverview />
      </div>
      <GoogleReviews />
      <Video/>
      <FAQSection/>
      <FinalCta />
    </>
  );
}
