import ScrollProgress from "@/components/ScrollProgress";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StripeEconomy from "@/components/StripeEconomy";
import CoreCritique from "@/components/CoreCritique";
import LetterVsHomepage from "@/components/LetterVsHomepage";
import PlatformView from "@/components/PlatformView";
import WhatPeopleDontKnow from "@/components/WhatPeopleDontKnow";
import MessagingGaps from "@/components/MessagingGaps";
import AgenticLevels from "@/components/AgenticLevels";
import Opportunities from "@/components/Opportunities";
import Takeaway from "@/components/Takeaway";
import AboutTrace from "@/components/AboutTrace";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <StripeEconomy />
        <CoreCritique />
        <LetterVsHomepage />
        <PlatformView />
        <WhatPeopleDontKnow />
        <MessagingGaps />
        <AgenticLevels />
        <Opportunities />
        <Takeaway />
        <AboutTrace />
      </main>
      <Footer />
    </>
  );
}
