import { AboutMe } from '@/components/AboutMe/AboutMe';
import { Experience } from '@/components/Experience/Experience';
import { Skills } from '@/components/Skills/Skills';
import { Welcome } from '@/components/Welcome/Welcome';

export function HomePage() {
  return (
    <>
      <Welcome />
      <AboutMe />
      <Experience />
      <Skills />
    </>
  );
}
