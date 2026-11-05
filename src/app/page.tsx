import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Skills } from "@/components/sections/skills";
import { Testimonials } from "@/components/sections/testimonials";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { BackgroundAtmosphere } from "@/components/ui/background-atmosphere";

export default function Home() {
  return (
    <main id="top" className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <BackgroundAtmosphere />
      <div id="main-content">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Process />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
