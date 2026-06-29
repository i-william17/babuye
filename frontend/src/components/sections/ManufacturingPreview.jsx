import Container from '../ui/Container';
import ImageFrame from '../ui/ImageFrame';
import SectionHeader from '../ui/SectionHeader';
import factoryImage from '../../assets/images/manufacturing/factory-floor.svg';

const manufacturingSteps = [
  {
    title: 'Design coordination',
    description: 'Project information is reviewed against openings, elevations, glass selection, waterproofing, hardware, and architectural intent.',
  },
  {
    title: 'ERP-linked fabrication planning',
    description: 'Orders move through ERP-supported planning so procurement, cutting, assembly, quality checks, delivery, and installation are traceable.',
  },
  {
    title: 'Industry 4.0 production control',
    description: 'Equipment with Siemens PLC control supports repeatable production, higher consistency, and improved delivery efficiency.',
  },
  {
    title: 'Quality control and handover',
    description: 'Profiles, glass, accessories, argon concentration, installation conditions, and handover records are checked against project requirements.',
  },
];

export default function ManufacturingPreview() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <ImageFrame className="aspect-[4/3]" src={factoryImage} alt="Babuye fabrication workflow visual" />
        <div>
          <SectionHeader title="Integrated manufacturing built for capacity, traceability, and architectural support.">
            Babuye combines showroom consultation, technical review, Industry 4.0 equipment, ERP integration, and project delivery planning.
          </SectionHeader>
          <ol className="mt-10 space-y-6">
            {manufacturingSteps.map((step, index) => (
              <li className="grid grid-cols-[3rem_1fr] gap-4 border-t border-navy/10 pt-5" key={step.title}>
                <span className="font-display text-2xl text-navy">{String(index + 1).padStart(2, '0')}</span>
                <span>
                  <strong className="block text-lg text-navy">{step.title}</strong>
                  <span className="mt-2 block text-sm leading-7 text-navy/75">{step.description}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
