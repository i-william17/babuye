import { Link } from 'react-router-dom';
import SectionHeader from '../ui/SectionHeader';

const manufacturingSteps = [
  {
    title: 'Design coordination',
    description:
      'Project information is reviewed against openings, elevations, glass selection, waterproofing, hardware, and architectural intent.',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=85',
  },
  {
    title: 'ERP-linked fabrication planning',
    description:
      'Orders move through ERP-supported planning so procurement, cutting, assembly, quality checks, delivery, and installation are traceable.',
    image:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1800&q=85',
  },
  {
    title: 'Industry 4.0 production control',
    description:
      'Equipment with Siemens PLC control supports repeatable production, higher consistency, and improved delivery efficiency.',
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1800&q=85',
  },
  {
    title: 'Quality control and handover',
    description:
      'Profiles, glass, accessories, argon concentration, installation conditions, and handover records are checked against project requirements.',
    image:
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1800&q=85',
  },
];

export default function ManufacturingPreview() {
  return (
    <section className="w-full bg-white py-20 text-black sm:py-24 lg:py-28">
      {/* Headline */}
      <div className="mx-auto max-w-6xl px-5 text-center sm:px-8 lg:px-12">
        <SectionHeader
          title="Integrated manufacturing built for capacity, traceability, and architectural support."
          italicWords={[
            'manufacturing',
            'capacity',
            'traceability',
            'architectural support',
          ]}
          align="center"
        >
          Babuye combines showroom consultation, technical review, Industry 4.0
          equipment, ERP integration, and project delivery planning.
        </SectionHeader>

        <Link
          to="/capabilities"
          className="mt-9 inline-flex border-b-2 border-black pb-2 text-sm font-medium tracking-[0.12em] text-black transition hover:border-[#002060] hover:text-[#002060]"
        >
          View capabilities
        </Link>
      </div>

      {/* Full-width alternating steps */}
      <div className="mt-20 w-full">
        {manufacturingSteps.map((step, index) => {
          const isEven = index % 2 === 0;

          return (
            <article
              key={step.title}
              className="grid w-full lg:min-h-[34rem] lg:grid-cols-2"
            >
              {/* Text */}
              <div
                className={`flex items-center px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-16 ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div className="max-w-2xl">
                  <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.3em] text-black/45">
                    {String(index + 1).padStart(2, '0')}
                  </p>

                  <h3 className="font-display text-[clamp(2rem,3.8vw,4.5rem)] font-medium uppercase leading-[1.02] tracking-[-0.055em] text-black">
                    {step.title}
                  </h3>

                  <p className="mt-6 text-base font-light leading-8 text-black/70 sm:text-lg sm:leading-9">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Image */}
              <div
                className={`relative min-h-[24rem] overflow-hidden bg-black sm:min-h-[30rem] lg:min-h-full ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <img
                  className="absolute inset-0 h-full w-full object-cover opacity-90 transition duration-700 hover:scale-105 hover:opacity-100"
                  src={step.image}
                  alt={step.title}
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}