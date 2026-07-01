import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Seo from '../components/Seo';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import HeroSection from '../components/sections/HeroSection';
import ServicesPreview from '../components/sections/ServicesPreview';
import CredentialsStrip from '../components/sections/CredentialsStrip';
import PartnerMarquee from '../components/sections/PartnerMarquee';
import ProjectsPreview from '../components/sections/ProjectsPreview';
import ManufacturingPreview from '../components/sections/ManufacturingPreview';
import SafetyPreview from '../components/sections/SafetyPreview';
import ProfileVideo from '../components/sections/ProfileVideo';
import ContactCTA from '../components/sections/ContactCTA';
import introVideo from '../assets/videos/five.mp4';

const valuePoints = [
  'Glass and aluminium-led solutions company for architectural facades, openings, interiors, and specialist project packages.',
  'Legal identity: Babuye Investment Limited, operating as Babuye Aluminium & Glass Systems Company.',
  'Value addition through technical review, showroom support, manufacturing coordination, quality control, and site-aware installation.',
];

function FullscreenVideoModal({ src, onClose }) {
  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[2147483647] flex min-h-[100svh] w-screen items-center justify-center overflow-hidden bg-black/95 px-3 py-5 sm:px-6 lg:px-10"
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={onClose}
        className="fixed right-4 top-4 z-[2147483647] flex h-11 w-11 items-center justify-center border border-white/30 bg-black/40 text-2xl leading-none text-white backdrop-blur transition hover:bg-white hover:text-black sm:right-6 sm:top-6 sm:h-12 sm:w-12"
        aria-label="Close video"
      >
        ×
      </button>

      <div className="relative z-[2147483646] flex w-full max-w-[1200px] items-center justify-center">
        <video
          className="block max-h-[82svh] w-full max-w-full bg-black object-contain sm:max-h-[86svh] lg:max-h-[88svh]"
          src={src}
          controls
          autoPlay
          playsInline
        />
      </div>
    </div>,
    document.body,
  );
}

export default function Home() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <Seo
        title="Babuye Aluminium & Glass Systems Company | Turning Vision into Reality"
        description="Babuye Aluminium & Glass Systems Company provides glass and aluminium solutions for windows, doors, curtain walls, partitions, skylights, balustrades, sun shading, manufacturing, compliance, and project delivery."
      />

      <HeroSection />

      <section className="border-b border-navy/10 bg-white pt-20 sm:pt-24">
        <Container className="space-y-12 pb-20 sm:pb-24">
          <SectionHeader
            title="A company built around turning design intent into installed aluminium and glass systems."
            italicWords={['design intent', 'aluminium', 'glass']}
            align="center"
            className="mx-auto"
          />

          <div className="grid gap-5 sm:grid-cols-3">
            {valuePoints.map((point, index) => (
              <article
                className="group relative overflow-hidden border border-navy/10 bg-aluminium/45 p-6 text-sm leading-7 text-navy transition duration-300 hover:-translate-y-1 hover:border-navy/30 hover:bg-white hover:shadow-soft"
                key={point}
              >
                <span className="mb-8 block font-mono text-xs font-bold uppercase tracking-[0.28em] text-navy/45">
                  0{index + 1}
                </span>

                <p className="relative z-10">{point}</p>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-navy transition-all duration-300 group-hover:w-full" />
              </article>
            ))}
          </div>
        </Container>

        <div className="w-full bg-[#202223] py-16 text-white sm:py-20 lg:py-24">
          <Container>
            <div className="mb-12 flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.34em] text-white">
              <span className="text-[10px] leading-none">◆</span>
              This is us
            </div>

            <div className="mb-12 max-w-5xl">
              <h3 className="font-display text-[clamp(2.8rem,5vw,5.8rem)] font-light leading-[0.95] tracking-[-0.065em] text-white">
                From <em className="italic">vision</em> to precision-built{' '}
                <em className="italic">glass</em> and{' '}
                <em className="italic">aluminium</em> systems.
              </h3>
            </div>

            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="group relative block aspect-video w-full overflow-hidden bg-black text-left"
              aria-label="Play Babuye introduction video"
            >
              <video
                className="h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                src={introVideo}
                preload="metadata"
                playsInline
                aria-hidden="true"
              />

              <div className="absolute inset-0 bg-black/25" />

              <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-white text-navy transition duration-300 group-hover:scale-110 group-hover:bg-[#002060] group-hover:text-white sm:h-24 sm:w-24">
                <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-current sm:border-y-[12px] sm:border-l-[18px]" />
              </div>

              <div className="absolute bottom-6 left-6 font-mono text-xs font-bold uppercase tracking-[0.28em] text-white">
                Play Intro
              </div>
            </button>
          </Container>
        </div>
      </section>

      {videoOpen && (
        <FullscreenVideoModal
          src={introVideo}
          onClose={() => setVideoOpen(false)}
        />
      )}

      <ServicesPreview />
      <CredentialsStrip />
      <PartnerMarquee />
      <ProjectsPreview />
      <ManufacturingPreview />
      {/* <ProfileVideo /> */}
      <SafetyPreview />
      <ContactCTA />
    </>
  );
}