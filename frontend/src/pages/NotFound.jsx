import Seo from '../components/Seo';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | Babuye Aluminium & Glass Systems Company"
        description="The requested Babuye Aluminium & Glass Systems Company page could not be found."
        robots="noindex, follow"
      />
      <section className="min-h-[60vh] bg-white py-24">
        <Container>
          <h1 className="font-display text-5xl text-navy">This Babuye page could not be found.</h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-navy/75">
            Return to the main site to review company information, solutions, capabilities, projects, compliance, safety, and contact details.
          </p>
          <Button className="mt-8" to="/">Return home</Button>
        </Container>
      </section>
    </>
  );
}
