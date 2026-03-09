import { Navbar } from '../components/Navbar';
import { ParallaxHero } from '../components/ParallaxHero';
import { AboutSection } from '../components/AboutSection';
import { ResumeSection } from '../components/ResumeSection';

export default function Home() {
  return (
    <>
      <ParallaxHero />
      <main className="relative z-20 bg-transparent backdrop-blur-sm">
        <AboutSection />
        <ResumeSection />
      </main>
    </>
  );
}