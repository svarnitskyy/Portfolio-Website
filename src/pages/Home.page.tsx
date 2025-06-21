import { AboutMe } from '@/components/AboutMe/AboutMe';
import { Welcome } from '@/components/Welcome/Welcome';

export function HomePage() {
  return (
    <>
      <Welcome />
      <AboutMe />
    </>
  );
}
