import { createFileRoute } from '@tanstack/react-router';
import ContractingHero from '@/components/contracting/ContractingHero';
import Services from '@/components/contracting/Services';
import HowItWorks from '@/components/contracting/HowItWorks';
import SelectedWork from '@/components/contracting/SelectedWork';
import Testimonials from '@/components/contracting/Testimonials';
import CredibilityBar from '@/components/contracting/CredibilityBar';
import ContractingContact from '@/components/contracting/ContractingContact';

export const Route = createFileRoute('/_contracting/')({
  component: ContractingPage,
  head: () => ({
    meta: [
      { title: 'Jacob Maynard | Web Development & AI Solutions' },
      {
        name: 'description',
        content:
          'I build and optimize websites, dashboards, and AI-powered tools for small businesses. Get a free quote today.',
      },
      { property: 'og:title', content: 'Jacob Maynard | Web Development & AI Solutions' },
      {
        property: 'og:description',
        content:
          'I build and optimize websites, dashboards, and AI-powered tools for small businesses.',
      },
      { property: 'og:url', content: 'https://jacobmaynard.dev' },
    ],
  }),
});

function ContractingPage() {
  return (
    <div className="space-y-24 sm:space-y-32 mx-auto max-w-5xl px-4 sm:px-8">
      <ContractingHero />
      <CredibilityBar />
      <Services />
      <HowItWorks />
      <SelectedWork />
      <Testimonials />
      <ContractingContact />
    </div>
  );
}
