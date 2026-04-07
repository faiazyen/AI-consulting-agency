import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Frameworks } from "@/components/landing/Frameworks";
import { Dashboard } from "@/components/landing/Dashboard";
import { Results } from "@/components/landing/Results";
import { Process } from "@/components/landing/Process";
import { Benefits } from "@/components/landing/Benefits";
import { FAQ } from "@/components/landing/FAQ";
import { BookConsultation } from "@/components/landing/BookConsultation";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Header />
      {/* Hero is pulled up -72px behind the sticky header; subsequent sections need pt to compensate */}
      <main className="pt-0">
        <Hero />
        <Frameworks />
        <Dashboard />
        <Results />
        <Process />
        <Benefits />
        <FAQ />
        <BookConsultation />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
