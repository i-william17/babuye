import Seo from '../components/Seo';
import SafetyPreview from '../components/sections/SafetyPreview';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';

const commitments = [
  {
    title: 'Safety commitments',
    description: 'Babuye treats safety and health as a project requirement, including safe handling of glass, site protection, installation planning, exposed-edge review, and team awareness.',
  },
  {
    title: 'Quality control systems',
    description: 'Quality control covers profiles, accessories, glass make-up, argon-filled units, fabrication accuracy, installation condition, and handover records.',
  },
  {
    title: 'Environmental responsibility',
    description: 'Environmental responsibility is reflected through material-conscious planning, waste reduction awareness, durable systems, and responsible site conduct.',
  },
  {
    title: 'Community initiatives',
    description: 'The company’s community role is tied to local development, responsible opportunity creation, and project participation that benefits people beyond the contract.',
  },
  {
    title: 'Staff development target',
    description: 'Babuye targets continuous staff development across design coordination, manufacturing, installation, safety, quality control, and client service.',
  },
  {
    title: 'Human rights and anti-corruption',
    description: 'Ethical practice includes respect for human rights, anti-corruption commitments, transparent procurement conduct, and responsible business relationships.',
  },
];

export default function Safety() {
  return (
    <>
      <Seo
        title="Safety & Sustainability | Babuye Aluminium & Glass Systems Company"
        description="Babuye safety and sustainability commitments include safety and health practice, quality control, community initiatives, staff development, human rights, anti-corruption, and environmental responsibility."
      />
      <section className="border-b border-navy/10 bg-white py-20 sm:py-28">
        <Container>
          <SectionHeader title="Safety, sustainability, quality, and ethical practice built into the delivery process.">
            Babuye’s sustainability commitments connect workplace safety, responsible material use, community awareness, staff development, human rights, anti-corruption, environmental responsibility, and quality control.
          </SectionHeader>
        </Container>
      </section>
      <SafetyPreview />
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {commitments.map((commitment) => (
              <article className="rounded-sm border border-navy/10 bg-white p-6 shadow-soft" key={commitment.title}>
                <h2 className="font-display text-2xl text-navy">{commitment.title}</h2>
                <p className="mt-4 text-sm leading-7 text-navy/75">{commitment.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
