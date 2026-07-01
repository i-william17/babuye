import Container from '../ui/Container';
import CredentialCard from '../ui/CredentialCard';
import SectionHeader from '../ui/SectionHeader';

const credentials = [
  {
    title: 'NCA5 Building Works',
    description: 'Registered construction capability for building works packages.',
  },
  {
    title: 'NCA5 Road Works',
    description: 'NCA road works registration for broader project procurement eligibility.',
  },
  {
    title: 'NCA5 Water Works',
    description: 'Water works registration supporting integrated contractor requirements.',
  },
  {
    title: 'NCA7 Electrical Works',
    description: 'Electrical works registration for coordinated specialist interfaces.',
  },
  {
    title: 'AGPO Registered Supplier',
    description: 'Registered supplier status for Access to Government Procurement Opportunities.',
  },
  {
    title: 'KRA Tax Compliance',
    description: 'Tax compliance documentation for transparent procurement and contracting.',
  },
  {
    title: 'Safety & Health',
    description: 'Safety and health commitments embedded in site execution and staff practice.',
  },
  {
    title: 'Quality Control',
    description: 'Quality review across profiles, glass, fabrication, installation, and handover.',
  },
];

export default function CredentialsStrip() {
  return (
    <section className="border-y border-navy/10 bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeader
          title="Registered, compliant and quality-led project delivery."
          italicWords={['compliant', 'quality-led']}
          align="center"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {credentials.map((credential, index) => (
            <CredentialCard
              credential={credential}
              index={index}
              key={credential.title}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}