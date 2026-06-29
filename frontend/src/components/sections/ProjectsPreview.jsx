import Container from '../ui/Container';
import ProjectCard from '../ui/ProjectCard';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import facadeImage from '../../assets/images/projects/civic-facade.svg';
import retailImage from '../../assets/images/projects/retail-front.svg';
import villaImage from '../../assets/images/projects/villa-glazing.svg';

const projects = [
  {
    title: 'The Babuye Showroom Project',
    category: 'Showroom',
    location: '4th Avenue Towers, 4th Ngong Avenue',
    summary: 'Display-area project presenting Babuye aluminium and glass systems, finishes, profiles, and project-ready detail standards.',
    metrics: ['Showroom display', 'System samples', 'Client review'],
    image: retailImage,
  },
  {
    title: 'The 88 Project',
    category: 'Commercial',
    location: 'Upper Hill',
    summary: 'A 4th Ngong Avenue and Bishops Road reference project for coordinated facade, access, and aluminium-glass package planning.',
    metrics: ['Facade package', 'Commercial glazing', 'Upper Hill'],
    image: facadeImage,
  },
  {
    title: 'The Ruiru Residence',
    category: 'Residential',
    location: 'Ruiru',
    summary: 'Residential glazing and aluminium systems shaped around daylight, privacy, ventilation, and clean architectural lines.',
    metrics: ['Residential glazing', 'Windows', 'Doors'],
    image: villaImage,
  },
];

export default function ProjectsPreview({ limit = 3 }) {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeader title="Selected projects across showroom, commercial, healthcare, hospitality, and residences.">
            The project list reflects Babuye’s market role across Nairobi, Kenya, and regional hospitality work.
          </SectionHeader>
          <Button to="/projects" variant="secondary">View projects</Button>
        </div>
        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          {projects.slice(0, limit).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
