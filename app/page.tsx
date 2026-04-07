import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Frameworks } from "@/components/landing/Frameworks";
import { Dashboard } from "@/components/landing/Dashboard";
import { Results } from "@/components/landing/Results";
import { Process } from "@/components/landing/Process";
import { Benefits } from "@/components/landing/Benefits";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Frameworks />
        <Dashboard />
        <Results />
        <Process />
        <Benefits />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
