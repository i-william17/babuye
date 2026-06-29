import posterImage from '../../assets/images/hero/facade-system.svg';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';

export default function ProfileVideo() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <SectionHeader title="Babuye profile film.">
          A focused profile space for the company story, showroom, manufacturing capability, project delivery process, and safety commitments.
        </SectionHeader>
        <div className="relative overflow-hidden border border-navy/10 bg-navy shadow-soft">
          <video className="aspect-video w-full object-cover" controls poster={posterImage} preload="metadata">
            <source src="/assets/videos/babuye-profile.mp4" type="video/mp4" />
          </video>
        </div>
      </Container>
    </section>
  );
}
