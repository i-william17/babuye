import { useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import ServiceCard from '../components/ui/ServiceCard';
import ContactCTA from '../components/sections/ContactCTA';
import SectionReveal from '../components/animations/SectionReveal';
import windowIcon from '../assets/icons/window.svg';
import doorIcon from '../assets/icons/door.svg';
import curtainWallIcon from '../assets/icons/curtain-wall.svg';
import skylightIcon from '../assets/icons/skylight.svg';
import balustradeIcon from '../assets/icons/balustrade.svg';
import complianceIcon from '../assets/icons/compliance.svg';

const services = [
  {
    slug: 'windows',
    title: 'Windows Systems',
    summary: 'Aluminium window systems designed around ventilation, daylight, thermal comfort, safety glass selection, hardware durability, finish quality, and facade alignment.',
    details: ['Sliding windows', 'Casement windows', 'Top-hung and awning windows', 'Tilt-and-turn windows', 'Fixed glazing', 'Louvered ventilation windows'],
    icon: windowIcon,
  },
  {
    slug: 'doors',
    title: 'Doors Systems',
    summary: 'Door packages for residential, commercial, institutional, hospitality, and retail applications where access, hardware, glass, and aluminium finish need to work as one system.',
    details: ['Sliding doors', 'Hinged aluminium doors', 'Folding and stacking doors', 'Frameless glass doors', 'Automatic and access-ready doors'],
    icon: doorIcon,
  },
  {
    slug: 'curtain-wall-solutions',
    title: 'Curtain Wall Solutions',
    summary: 'Facade systems for commercial and institutional envelopes, coordinated around mullions, transoms, glass type, sealants, waterproofing, anchoring, and interface details.',
    details: ['Stick curtain walling', 'Feature facades', 'Shopfront and lobby glazing', 'Structural and semi-structural glass appearance', 'Weathering and drainage details'],
    icon: curtainWallIcon,
  },
  {
    slug: 'interior-glass-partitions',
    title: 'Interior Glass Partitions',
    summary: 'Interior glass solutions for office, hospitality, healthcare, showroom, and residential environments requiring separation without losing visual openness.',
    details: ['Framed partitions', 'Frameless partitions', 'Acoustic and privacy-aware layouts', 'Meeting room fronts', 'Reception and showroom glass'],
    icon: complianceIcon,
  },
  {
    slug: 'balustrades',
    title: 'Balustrades',
    summary: 'Glass balustrade packages for stairs, balconies, terraces, atriums, and public edges where fixing, loading, glass type, and user exposure matter.',
    details: ['Stair balustrades', 'Balcony balustrades', 'Frameless glass rails', 'Handrail coordination', 'Exposed-edge safety review'],
    icon: balustradeIcon,
  },
  {
    slug: 'skylights',
    title: 'Skylights',
    summary: 'Overhead and roof glazing systems planned around daylighting, drainage, support framing, sealing, fall risk, glass performance, and maintenance access.',
    details: ['Roof skylights', 'Atrium glazing', 'Canopy glass', 'Drainage and waterproofing coordination', 'Laminated safety glass review'],
    icon: skylightIcon,
  },
  {
    slug: 'high-spec-specialized-solutions',
    title: 'High-Spec Specialized Solutions',
    summary: 'Specialized glass and aluminium solutions for buildings that require elevated protection, specification discipline, and documented technical review.',
    details: ['Fire-rated glass systems', 'Blast-resistant glass applications', 'Anti-burglary solutions', 'High-security glazing', 'Application-specific documentation'],
    icon: complianceIcon,
  },
  {
    slug: 'sun-shading-solutions',
    title: 'Sun Shading Solutions',
    summary: 'External and integrated shading solutions that improve comfort, control solar gain, protect openings, and support facade expression.',
    details: ['Sun shading fins and screens', 'Pergola systems', 'Awnings', 'Louvered shading', 'Facade shading coordination'],
    icon: curtainWallIcon,
  },
  {
    slug: 'bespoke-project-services',
    title: 'Bespoke Project Services',
    summary: 'Project-specific support where Babuye coordinates design intent, survey information, shop drawings, material selection, fabrication, delivery, and installation.',
    details: ['Site surveys', 'Technical review', 'Shop drawings', 'Material and finish guidance', 'Installation and handover support'],
    icon: windowIcon,
  },
];

export default function Services() {
  const { solutionSlug } = useParams();
  const selectedService = services.find((service) => service.slug === solutionSlug);
  const orderedServices = selectedService
    ? [selectedService, ...services.filter((service) => service.slug !== selectedService.slug)]
    : services;

  return (
    <>
      <Seo
        title="Solutions | Babuye Aluminium & Glass Systems Company"
        description="Explore Babuye aluminium and glass solutions: windows, doors, curtain walls, interior glass partitions, balustrades, skylights, fire-rated, blast-resistant, anti-burglary, sun shading, pergolas, awnings, and bespoke project services."
      />
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeader title="Solutions for openings, facades, interiors, daylighting, protection, and bespoke project delivery.">
            Babuye’s service categories are handled as technical packages covering design review, system selection, material guidance, fabrication planning, installation, quality control, and handover.
          </SectionHeader>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {orderedServices.map((service) => (
              <SectionReveal key={service.slug}>
                <ServiceCard service={service} />
              </SectionReveal>
            ))}
          </div>
        </Container>
      </section>
      <section className="border-y border-navy/10 bg-aluminium/45 py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader title="What Babuye does across every solution." />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'Clarifies system type, glass make-up, aluminium profile, finish, hardware, and performance expectations.',
              'Coordinates technical drawings, interface notes, procurement requirements, manufacturing sequence, and delivery planning.',
              'Reviews quality control points for profiles, accessories, glass, argon-filled units, site protection, installation, and handover.',
              'Supports architects, contractors, developers, homeowners, and procurement teams from concept to installed system.',
            ].map((item) => (
              <article className="border border-navy/10 bg-white p-5 text-sm leading-7 text-navy/78" key={item}>
                {item}
              </article>
            ))}
          </div>
        </Container>
      </section>
      <ContactCTA />
    </>
  );
}
