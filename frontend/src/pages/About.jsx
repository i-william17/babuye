import Seo from '../components/Seo';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../components/ui/CTASection';
import PartnerMarquee from '../components/sections/PartnerMarquee';

const coreIdentity = [
  'Company name: Babuye Aluminium & Glass Systems Company.',
  'Legal name: Babuye Investment Limited.',
  'Tagline: Turning Vision into Reality.',
  'Positioning: a glass and aluminium-led solutions company for architectural systems and project delivery.',
];

const visionMission = [
  {
    title: 'Vision',
    description: 'To turn client, architect, and developer vision into reality through dependable aluminium and glass systems that raise the standard of the built environment.',
  },
  {
    title: 'Mission',
    description: 'To design, manufacture, procure, and install quality glass and aluminium solutions with technical discipline, safety awareness, ethical practice, and responsive project support.',
  },
];

const objectives = [
  'Deliver quality aluminium and glass systems for commercial, residential, hospitality, healthcare, institutional, and public-sector projects.',
  'Strengthen local manufacturing capacity through integrated processes, Industry 4.0 equipment, ERP control, and trained teams.',
  'Support architects, engineers, contractors, and clients with technical review, shop drawings, BIM-ready coordination, and material guidance.',
  'Maintain procurement readiness through NCA registrations, AGPO supplier status, KRA tax compliance, safety and health practice, and quality control systems.',
  'Build long-term value through reliable delivery, ethical business conduct, community initiatives, environmental responsibility, and continuous staff development.',
];

const marketRole = [
  {
    title: 'Core identity',
    description: 'Babuye operates as a specialist aluminium and glass systems company, combining design support, fabrication coordination, procurement documentation, and installation delivery.',
  },
  {
    title: 'Market role',
    description: 'The company supports developers, architects, contractors, institutions, hospitality operators, healthcare providers, residences, and government procurement channels.',
  },
  {
    title: 'Value proposition',
    description: 'Clients receive project-ready technical advice, compliant documentation, system selection support, coordinated manufacturing, quality checks, and clean architectural execution.',
  },
  {
    title: 'How we work',
    description: 'Babuye reviews the brief, coordinates technical requirements, aligns drawings and materials, manages fabrication, plans installation, checks quality, and supports handover.',
  },
];

export default function About({ section }) {
  return (
    <>
      <Seo
        title="Company | Babuye Aluminium & Glass Systems Company"
        description="Learn about Babuye Aluminium & Glass Systems Company, legally Babuye Investment Limited, including its vision, mission, business objectives, market role, value proposition, and partner ecosystem."
      />
      <section className="border-b border-navy/10 bg-white py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader title="Babuye Investment Limited trading as Babuye Aluminium & Glass Systems Company." />
          <div className="space-y-6 text-lg leading-9 text-navy/78">
            <p>
              Babuye is positioned as a glass and aluminium-led solutions company. The company turns architectural vision into buildable systems for windows, doors, curtain walling, interior glass, balustrades, skylights, sun shading, and specialized protective solutions.
            </p>
            <p>
              Its value addition sits in the complete project chain: consultation, technical support, showroom review, system selection, manufacturing planning, quality control, procurement documentation, installation, safety, and handover support.
            </p>
          </div>
        </Container>
      </section>
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {coreIdentity.map((item) => (
              <article className="border border-navy/10 bg-aluminium/45 p-5 text-sm font-semibold uppercase leading-7 text-navy" key={item}>
                {item}
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section id="vision" className="border-y border-navy/10 bg-aluminium/45 py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {visionMission.map((item) => (
              <article className="border border-navy/10 bg-white p-8 shadow-soft" key={item.title}>
                <h2 className="font-display text-4xl text-navy">{item.title}</h2>
                <p className="mt-6 text-base leading-8 text-navy/75">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section id="objectives" className="py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeader title="Business objectives anchored in quality, capacity, compliance, and long-term value." />
          <ol className="grid gap-4">
            {objectives.map((objective, index) => (
              <li className="grid grid-cols-[3rem_1fr] gap-4 border-t border-navy/10 pt-5" key={objective}>
                <span className="font-display text-2xl text-navy">{String(index + 1).padStart(2, '0')}</span>
                <span className="text-base leading-8 text-navy/78">{objective}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <section className="border-y border-navy/10 bg-white py-20 sm:py-24">
        <Container>
          <SectionHeader title="What Babuye brings to the market." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {marketRole.map((item) => (
              <article className="border border-navy/10 bg-aluminium/35 p-7" key={item.title}>
                <h2 className="font-display text-3xl text-navy">{item.title}</h2>
                <p className="mt-5 text-sm leading-7 text-navy/75">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      {section === 'partners' && <PartnerMarquee />}
      <CTASection title="Bring Babuye into the project before glazing decisions become site problems.">
        Early review gives the design team better control over system choice, openings, waterproofing, finishes, safety glass, procurement documentation, and manufacturing sequence.
      </CTASection>
    </>
  );
}
