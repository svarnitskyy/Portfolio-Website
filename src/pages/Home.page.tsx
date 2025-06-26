import { AboutMe } from '@/components/AboutMe/AboutMe';
import { Experience } from '@/components/Experience/Experience';
import { Welcome } from '@/components/Welcome/Welcome';

export function HomePage() {
  return (
    <>
      <Welcome />
      <AboutMe />
      <Experience />
    </>
  );
}
