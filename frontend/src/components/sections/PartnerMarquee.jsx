import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';

const partnerBrands = [
  'Schuco',
  'Reynaers Aluminium',
  'Technal',
  'AluK',
  'Guardian Glass',
  'Saint-Gobain Glass',
  'DormaKaba',
  'Hafele',
  'Kin Long',
  'Roto',
  'SketchUp',
  'AutoCAD',
  'Revit',
];

export default function PartnerMarquee() {
  const marqueeItems = [...partnerBrands, ...partnerBrands];

  return (
    <section className="border-y border-navy/10 bg-aluminium/55 py-20">
      <Container>
        <SectionHeader title="Partner brands and technical tools supporting the project ecosystem.">
          Brand and software references from the profile are presented as a continuous review strip for procurement and design-team recognition.
        </SectionHeader>
      </Container>
      <div className="mt-10 overflow-hidden">
        <div className="babuye-marquee flex w-max gap-4 px-4 hover:[animation-play-state:paused]">
          {marqueeItems.map((brand, index) => (
            <div className="flex h-24 min-w-48 items-center justify-center border border-navy/12 bg-white px-7 text-center font-display text-xl text-navy shadow-soft" key={`${brand}-${index}`}>
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
