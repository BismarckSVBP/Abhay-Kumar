
import { Header } from '@/components/Header';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ExpertiseSection } from '@/components/ExpertiseSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { CodingProfilesSection } from '@/components/CodingProfilesSection';
import { ResumeSection } from '@/components/ResumeSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/context/ThemeContext';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Header />
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ExpertiseSection />
          <ProjectsSection />
          <CodingProfilesSection />
          <ResumeSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;