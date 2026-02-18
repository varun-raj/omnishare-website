import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { AppleEcosystem } from '@/components/AppleEcosystem';
import { Providers } from '@/components/Providers';
import { Users } from '@/components/Users';
import { FAQ } from '@/components/FAQ';
import { AndroidCTA } from '@/components/AndroidCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AppleEcosystem />
      <Providers />
      <Users />
      <FAQ />
      <AndroidCTA />
    </>
  );
}
