import Seo from '../components/Seo';
import complianceImage from '../assets/images/compliance/certified-detail.svg';
import Container from '../components/ui/Container';
import ImageFrame from '../components/ui/ImageFrame';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../components/ui/CTASection';

const badges = [
  { title: 'NCA5 Building Works', description: 'Registered for building works procurement and construction participation.' },
  { title: 'NCA5 Road Works', description: 'Registered for road works categories where broader project eligibility is required.' },
  { title: 'NCA5 Water Works', description: 'Registered for water works requirements in integrated project procurement.' },
  { title: 'NCA7 Electrical Works', description: 'Registered for electrical works coordination in project packages.' },
  { title: 'AGPO Registered Supplier', description: 'Supplier registration under Access to Government Procurement Opportunities.' },
  { title: 'KRA Tax Compliance', description: 'Tax compliance information maintained for transparent procurement and contracting.' },
  { title: 'Safety & Health', description: 'Safety and health commitments supporting responsible worksite practice.' },
  { title: 'Quality Control', description: 'Quality systems for materials, fabrication, installation checks, and handover records.' },
];

const procurementDocuments = [
  'NCA registration categories and project eligibility references.',
  'AGPO registered supplier details for government and institutional procurement.',
  'KRA tax compliance information for contracting due diligence.',
  'Safety and health certification records and site practice commitments.',
  'Quality control records for profiles, glass, accessories, fabrication, installation, and handover.',
  'Shop drawing, glass schedule, finish, hardware, and maintenance documentation where required.',
];

export default function Compliance() {
  return (
    <>
      <Seo
        title="Compliance & Procurement | Babuye Aluminium & Glass Systems Company"
        description="Babuye compliance and procurement readiness includes NCA5 Building Works, NCA5 Road Works, NCA5 Water Works, NCA7 Electrical Works, AGPO registered supplier status, KRA tax compliance, safety and health commitments, and quality control systems."
      />
      <section className="bg-white py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <SectionHeader title="Compliance and procurement readiness for transparent project delivery.">
            Babuye supports procurement processes with NCA categories, AGPO supplier status, KRA tax compliance information, safety and health commitments, and quality control systems.
          </SectionHeader>
          <ImageFrame className="aspect-[4/3]" src={complianceImage} alt="Compliance certificate and review visual" />
        </Container>
      </section>
      <section className="border-y border-navy/10 bg-aluminium/45 py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {badges.map((badge, index) => (
              <article className="border border-navy/10 bg-white p-6 shadow-soft" key={badge.title}>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/55">{String(index + 1).padStart(2, '0')}</div>
                <h2 className="mt-6 font-display text-3xl leading-tight text-navy">{badge.title}</h2>
                <p className="mt-5 text-sm leading-7 text-navy/75">{badge.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader title="Documentation that makes aluminium and glass decisions traceable." />
          <div className="grid gap-4 sm:grid-cols-2">
            {procurementDocuments.map((item) => (
              <div className="border border-navy/10 bg-white p-5 text-sm font-semibold uppercase leading-7 text-navy/78" key={item}>
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CTASection title="Use the compliance review to clarify system choice before procurement.">
        The earlier Babuye reviews documentation needs, the easier it is to align procurement, technical drawings, quality records, safety expectations, and delivery milestones.
      </CTASection>
    </>
  );
}
