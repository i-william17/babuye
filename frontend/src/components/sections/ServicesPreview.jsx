import SectionReveal from '../animations/SectionReveal';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import ServiceCard from '../ui/ServiceCard';
import Button from '../ui/Button';
import windowIcon from '../../assets/icons/window.svg';
import doorIcon from '../../assets/icons/door.svg';
import curtainWallIcon from '../../assets/icons/curtain-wall.svg';
import skylightIcon from '../../assets/icons/skylight.svg';

const services = [
  {
    slug: 'windows',
    title: 'Windows Systems',
    summary: 'Aluminium window systems for residential, commercial, healthcare, hospitality, and public-facing projects.',
    details: ['Sliding windows', 'Casement windows', 'Tilt-and-turn systems'],
    icon: windowIcon,
  },
  {
    slug: 'doors',
    title: 'Doors Systems',
    summary: 'Glazed and aluminium door packages coordinated around access, durability, hardware, and finish intent.',
    details: ['Sliding doors', 'Hinged doors', 'Frameless glass doors'],
    icon: doorIcon,
  },
  {
    slug: 'curtain-wall-solutions',
    title: 'Curtain Wall Solutions',
    summary: 'Architectural facade systems for towers, malls, offices, institutional buildings, and feature elevations.',
    details: ['Facade envelopes', 'Shop drawings', 'Waterproofing interfaces'],
    icon: curtainWallIcon,
  },
  {
    slug: 'skylights',
    title: 'Skylights & Overhead Glass',
    summary: 'Daylighting systems designed around glass type, drainage, support, sealing, access, and safety performance.',
    details: ['Roof glazing', 'Atrium daylighting', 'Weathering details'],
    icon: skylightIcon,
  },
];

export default function ServicesPreview({ limit = 4 }) {
  const visibleServices = services.slice(0, limit);

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_auto] lg:items-end">
          <SectionHeader title="Glass and aluminium solutions from system choice to installed finish.">
            Babuye packages each scope as a coordinated technical solution rather than a product-only supply.
          </SectionHeader>
          <Button to="/solutions" variant="secondary">All solutions</Button>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {visibleServices.map((service) => (
            <SectionReveal key={service.slug}>
              <ServiceCard service={service} />
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
