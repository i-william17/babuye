import Container from './Container';
import Button from './Button';

export default function CTASection({ title, children }) {
  return (
    <section className="bg-ink py-24 text-cloud sm:py-32">
      <Container className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-4xl">
          <h2 className="font-display text-4xl leading-[1.02] sm:text-6xl">{title}</h2>
          {children && <p className="mt-5 text-base leading-8 text-cloud/75">{children}</p>}
        </div>
        <Button to="/contact" variant="light">
          Request review
        </Button>
      </Container>
    </section>
  );
}
