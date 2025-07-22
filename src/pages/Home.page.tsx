import { AboutMe } from '@/components/AboutMe/AboutMe';
import { Experience } from '@/components/Experience/Experience';
import { Footer } from '@/components/Footer/Footer';
import { Skills } from '@/components/Skills/Skills';
import { Welcome } from '@/components/Welcome/Welcome';

export function HomePage() {
  return (
    <>
      <Welcome />
      <AboutMe />
      <Experience />
      <Skills />
      <Footer />
    </>
  );
}
