import Seo from '../components/Seo';
import ContactForm from '../components/forms/ContactForm';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact | Babuye Aluminium & Glass Systems Company"
        description="Contact Jamlick Mbauni at Babuye Aluminium & Glass Systems Company. P.O. Box 18256 - 00100, telephone +254 723 159 404, email jamlick.n.m@gmail.com."
      />
      <section className="bg-white py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeader title="Request a technical review or project conversation.">
              Send the rough scope, drawings, procurement requirement, location, timeline, or site constraints for Babuye’s aluminium and glass systems team.
            </SectionHeader>
            <dl className="mt-10 space-y-5 text-sm leading-7">
              <div>
                <dt className="font-semibold uppercase text-navy/60">Contact person</dt>
                <dd>Jamlick Mbauni</dd>
              </div>
              <div>
                <dt className="font-semibold uppercase text-navy/60">Postal address</dt>
                <dd>P.O. Box 18256 - 00100</dd>
              </div>
              <div>
                <dt className="font-semibold uppercase text-navy/60">Telephone</dt>
                <dd><a href="tel:+254723159404">+254 723 159 404</a></dd>
              </div>
              <div>
                <dt className="font-semibold uppercase text-navy/60">Email</dt>
                <dd><a href="mailto:jamlick.n.m@gmail.com">jamlick.n.m@gmail.com</a></dd>
              </div>
            </dl>
          </div>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
