import Container from '../ui/Container';
import ImageFrame from '../ui/ImageFrame';
import SectionHeader from '../ui/SectionHeader';
import safetyImage from '../../assets/images/safety/safety-glass.svg';

const principles = [
  'Safety and health certification awareness',
  'Responsible glass selection for exposed areas',
  'Environmental responsibility and waste-conscious practice',
  'Human rights and anti-corruption commitments',
  'Community initiatives tied to local development',
  'Continuous staff development target',
];

export default function SafetyPreview() {
  return (
    <section className="bg-navy py-24 text-white sm:py-32">
      <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <SectionHeader title="Safety and sustainability are part of how the package is planned." className="[&_h2]:text-white [&_p]:text-white/75">
            Babuye’s commitments cover workplace safety, responsible procurement, environmental practice, community responsibility, staff development, and ethical conduct.
          </SectionHeader>
          <ul className="mt-8 grid gap-3 text-sm leading-7 text-white/75 sm:grid-cols-2">
            {principles.map((principle) => (
              <li className="border border-white/14 p-4" key={principle}>{principle}</li>
            ))}
          </ul>
        </div>
        <ImageFrame className="aspect-[4/3] bg-white" src={safetyImage} alt="Safety glass shield visual" />
      </Container>
    </section>
  );
}
