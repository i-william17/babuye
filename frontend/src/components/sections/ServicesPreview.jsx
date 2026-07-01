import { Link } from 'react-router-dom';
import SectionReveal from '../animations/SectionReveal';
import SectionHeader from '../ui/SectionHeader';

// Local images commented out for now
// import windowsBg from '../../assets/presentation/image12.jpg';
// import doorsBg from '../../assets/presentation/image17.jpg';
// import curtainWallBg from '../../assets/presentation/image29.jpg';
// import skylightBg from '../../assets/presentation/image34.jpg';

const services = [
  {
    slug: 'bespoke-project-services',
    title: 'Bespoke Project Services',
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
  },
  {
    slug: 'windows',
    title: 'Windows Systems',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=85',
  },
  {
    slug: 'doors',
    title: 'Doors Systems',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
  },
  {
    slug: 'interior-glass-partitions',
    title: 'Interior Glass Partitions',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85',
  },
  {
    slug: 'balustrades',
    title: 'Balustrades',
    image:
      'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=85',
  },
  {
    slug: 'curtain-wall-solutions',
    title: 'Curtain Wall Solutions',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
  },
  {
    slug: 'skylights',
    title: 'Skylights & Overhead Glass',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
  },
  {
    slug: 'high-spec-specialized-solutions',
    title: 'High-Spec Specialized Solutions',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85',
  },
  {
    slug: 'sun-shading-solutions',
    title: 'Sun Shading Solutions',
    image:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85',
  },
];

export default function ServicesPreview({ limit = services.length }) {
  const visibleServices = services.slice(0, limit);

  return (
    <section className="bg-white py-20 text-black sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1560px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl text-center">
          <SectionHeader
            title="Glass and aluminium solutions from system choice to installed finish."
            italicWords={['Glass', 'aluminium', 'installed finish']}
            align="center"
          >
            Babuye packages each scope as a coordinated technical solution rather
            than a product-only supply.
          </SectionHeader>

          <Link
            to="/solutions"
            className="mt-9 inline-flex border-b-2 border-black pb-2 text-sm font-medium tracking-[0.12em] text-black transition hover:border-[#002060] hover:text-[#002060]"
          >
            All solutions
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleServices.map((service) => (
            <SectionReveal key={service.slug}>
              <Link
                to={`/solutions/${service.slug}`}
                className="group relative block min-h-[18rem] overflow-hidden bg-black text-white sm:min-h-[22rem] lg:min-h-[24rem]"
                aria-label={service.title}
              >
                <img
                  className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
                  src={service.image}
                  alt=""
                  aria-hidden="true"
                />

                <div className="absolute inset-0 bg-black/35 transition duration-500 group-hover:bg-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between gap-6 p-7 lg:p-8">
                  <h3 className="max-w-xl font-display text-[clamp(1.45rem,2.1vw,2.65rem)] font-black uppercase leading-[1.05] tracking-[-0.04em] text-white">
                    {service.title}
                  </h3>

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-3xl leading-none text-black transition duration-300 group-hover:scale-110 group-hover:bg-[#002060] group-hover:text-white sm:h-16 sm:w-16">
                    ↘
                  </div>
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}