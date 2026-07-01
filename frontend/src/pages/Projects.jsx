import { useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import Container from '../components/ui/Container';
import ProjectCard from '../components/ui/ProjectCard';
import SectionHeader from '../components/ui/SectionHeader';
import ContactCTA from '../components/sections/ContactCTA';

// Local image paths commented out for now
// import facadeImage from '../assets/images/projects/civic-facade.svg';
// import retailImage from '../assets/images/projects/retail-front.svg';
// import villaImage from '../assets/images/projects/villa-glazing.svg';

const showroomImage =
  'https://images.unsplash.com/photo-1564540583246-934409427776?auto=format&fit=crop&w=1600&q=85';

const commercialImage =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85';

const healthcareImage =
  'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1600&q=85';

const retailImage =
  'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1600&q=85';

const hospitalityImage =
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85';

const villaImage =
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85';

const apartmentImage =
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85';

const projects = [
  {
    slug: 'babuye-showroom',
    title: 'The Babuye Showroom Project',
    category: 'Showroom',
    location: '4th Avenue Towers, 4th Ngong Avenue',
    summary:
      'A display-focused project presenting Babuye’s aluminium and glass systems, profile options, finish quality, sample assemblies, and technical review environment.',
    metrics: ['Showroom display', 'System samples', 'Client review'],
    image: showroomImage,
  },
  {
    slug: 'the-88-project',
    title: 'The 88 Project',
    category: 'Commercial',
    location: '4th Ngong Avenue, Bishops Road, Upper Hill',
    summary:
      'Commercial project reference for coordinated glazing, aluminium systems, facade planning, access details, and urban building delivery.',
    metrics: ['Upper Hill', 'Commercial glazing', 'Facade coordination'],
    image: commercialImage,
  },
  {
    slug: 'menelik-hospital',
    title: 'The Menelik Hospital',
    category: 'Healthcare',
    location: 'Hospital project',
    summary:
      'Healthcare glazing reference where safety, clean detailing, maintenance access, durable finishes, and user comfort are central to the package.',
    metrics: ['Healthcare', 'Safety glass', 'Durable systems'],
    image: healthcareImage,
  },
  {
    slug: 'westlands-mall',
    title: 'The Westlands Mall',
    category: 'Retail',
    location: 'Westlands Constituency, Nairobi',
    summary:
      'Retail environment reference for shopfronts, public-facing glass, access systems, facade expression, and robust aluminium detailing.',
    metrics: ['Retail front', 'Public access', 'Nairobi'],
    image: retailImage,
  },
  {
    slug: 'nomad-hotel',
    title: 'Nomad Hotel',
    category: 'Hospitality',
    location: 'Alexandria, Egypt',
    summary:
      'Regional hospitality reference requiring guest-facing glass quality, clean lines, durability, daylight, and coordinated architectural finish.',
    metrics: ['Hospitality', 'Regional project', 'Architectural glass'],
    image: hospitalityImage,
  },
  {
    slug: 'ruiru-residence',
    title: 'The Ruiru Residence',
    category: 'Residential',
    location: 'Ruiru',
    summary:
      'Residential aluminium and glass package for daylight, ventilation, privacy, doors, windows, and crisp modern lines.',
    metrics: ['Windows', 'Doors', 'Residential'],
    image: villaImage,
  },
  {
    slug: 'syokimau-project',
    title: 'The Syokimau Project',
    category: 'Residential',
    location: 'Syokimau',
    summary:
      'Residential project reference for coordinated window and door systems, installation planning, and finish consistency.',
    metrics: ['Residential', 'Opening systems', 'Installation'],
    image: villaImage,
  },
  {
    slug: 'pan-marine',
    title: 'Pan Marine',
    category: 'Commercial',
    location: 'Project reference',
    summary:
      'Commercial project reference for aluminium and glass systems requiring coordinated technical scope and reliable delivery.',
    metrics: ['Commercial', 'Glazing systems', 'Project delivery'],
    image: commercialImage,
  },
  {
    slug: 'masii-residence',
    title: 'The Masii Residence',
    category: 'Residential',
    location: 'Masii',
    summary:
      'Residential package reference for aluminium openings, glazing, ventilation, privacy, and practical handover requirements.',
    metrics: ['Residential', 'Aluminium openings', 'Glazing'],
    image: villaImage,
  },
  {
    slug: 'thika-apartments',
    title: 'The Thika Apartments',
    category: 'Residential',
    location: 'Thika',
    summary:
      'Apartment project reference for repeatable window and door systems, fabrication consistency, delivery sequencing, and installation control.',
    metrics: ['Apartments', 'Repeatable systems', 'Thika'],
    image: apartmentImage,
  },
  {
    slug: 'limuru-residence',
    title: 'The Limuru Residence',
    category: 'Residential',
    location: 'Limuru',
    summary:
      'Residential reference for glazing and aluminium systems shaped around climate, daylight, privacy, and clean architectural expression.',
    metrics: ['Residential', 'Daylight', 'Finish quality'],
    image: villaImage,
  },
  {
    slug: 'hospitality-project',
    title: 'The Hospitality Project',
    category: 'Hospitality',
    location: 'Hospitality reference',
    summary:
      'Hospitality package reference where guest experience, entrance quality, facade expression, safety, and maintenance are key considerations.',
    metrics: ['Hospitality', 'Guest-facing glass', 'Maintenance'],
    image: hospitalityImage,
  },
  {
    slug: 'kitusuru-project',
    title: 'The Kitusuru Project',
    category: 'Residential',
    location: 'Kitusuru, Nairobi',
    summary:
      'Nairobi residential reference for high-quality aluminium and glass systems, privacy-aware detailing, and architectural finish.',
    metrics: ['Kitusuru', 'Residential glazing', 'Nairobi'],
    image: villaImage,
  },
];

export default function Projects() {
  const { projectSlug } = useParams();

  const residentialSlugs = [
    'ruiru-residence',
    'syokimau-project',
    'masii-residence',
    'thika-apartments',
    'limuru-residence',
    'kitusuru-project',
  ];

  const hospitalitySlugs = ['nomad-hotel', 'hospitality-project'];

  const selectedProject = projects.find(
    (project) => project.slug === projectSlug,
  );

  const filteredProjects =
    projectSlug === 'residential'
      ? projects.filter((project) => residentialSlugs.includes(project.slug))
      : projectSlug === 'hospitality'
        ? projects.filter((project) => hospitalitySlugs.includes(project.slug))
        : selectedProject
          ? [
              selectedProject,
              ...projects.filter(
                (project) => project.slug !== selectedProject.slug,
              ),
            ]
          : projects;

  return (
    <>
      <Seo
        title="Projects | Babuye Aluminium & Glass Systems Company"
        description="Babuye project references include The Babuye Showroom Project, The 88 Project, Menelik Hospital, Westlands Mall, Nomad Hotel, Ruiru Residence, Syokimau Project, Pan Marine, Masii Residence, Thika Apartments, Limuru Residence, Hospitality Project, and Kitusuru Project."
      />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeader
            title="Project references across showroom, commercial, healthcare, retail, hospitality, and residential work."
            italicWords={[
              'showroom',
              'commercial',
              'healthcare',
              'retail',
              'hospitality',
              'residential',
            ]}
            align="center"
          >
            Babuye’s listed projects show the breadth of aluminium and glass
            applications across Nairobi, Kenya, and regional hospitality
            references.
          </SectionHeader>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}