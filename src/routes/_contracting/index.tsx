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
          'I build and optimize websites, dashboards, and AI-powered tools. Custom web development, SEO, and automation solutions.',
      },
      { property: 'og:title', content: 'Jacob Maynard | Web Development & AI Solutions' },
      {
        property: 'og:description',
        content:
          'I build and optimize websites, dashboards, and AI-powered tools.',
      },
      { property: 'og:url', content: 'https://jacobmaynard.dev' },
    ],
    links: [
      { rel: 'canonical', href: 'https://jacobmaynard.dev' },
    ],
  }),
});

function ContractingPage() {
  return (
    <>
      {/* Dot grid + ambient glow blobs — contracting page only */}
      <div
        className="pointer-events-none fixed inset-0 overflow-hidden"
        aria-hidden="true"
        style={{ backgroundImage: 'var(--dot-grid)', backgroundSize: '24px 24px' }}
      >
        <div className="absolute -top-[20vh] -right-[15vw] size-[60vw] rounded-full bg-ring/[0.07] blur-[120px]" />
        <div className="absolute top-[50vh] -left-[15vw] size-[50vw] rounded-full bg-peach/[0.05] blur-[120px]" />
      </div>

      <div className="relative space-y-24 sm:space-y-32 mx-auto max-w-6xl px-4 sm:px-8">
        <ContractingHero />
        <CredibilityBar />
        <Services />
        <HowItWorks />
        <SelectedWork />
      </div>
      <div className="relative bg-secondary/20 mt-24 sm:mt-32 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <Testimonials />
        </div>
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-8 pt-24 sm:pt-32">
        <ContractingContact />
      </div>
    </>
  );
}
