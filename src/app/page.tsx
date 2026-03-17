import ScrollProgress from "@/components/ScrollProgress";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CoreCritique from "@/components/CoreCritique";
import PlatformView from "@/components/PlatformView";
import MessagingGaps from "@/components/MessagingGaps";
import Opportunities from "@/components/Opportunities";
import Takeaway from "@/components/Takeaway";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <CoreCritique />
        <PlatformView />
        <MessagingGaps />
        <Opportunities />
        <Takeaway />
      </main>
      <Footer />
    </>
  );
}
