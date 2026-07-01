import SectionHeader from '../ui/SectionHeader';

// Local image commented out for now
// import safetyImage from '../../assets/images/safety/safety-glass.svg';

const safetyImage =
  'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1800&q=85';

const principles = [
  'Safety and health certification awareness',
  'Responsible glass selection for exposed areas',
  'Environmental responsibility and waste-conscious practice',
  'Human rights and anti-corruption commitments',
  'Community initiatives tied to local development',
  'Continuous staff development target',
];

export default function SafetyPreview() {
  return (
    <section className="w-full bg-white py-20 text-black sm:py-24 lg:py-28">
      {/* Headline */}
      <div className="mx-auto max-w-6xl px-5 text-center sm:px-8 lg:px-12">
        <SectionHeader
          title="Safety and sustainability are part of how the package is planned."
          italicWords={['Safety', 'sustainability', 'package']}
          align="center"
        >
          Babuye’s commitments cover workplace safety, responsible procurement,
          environmental practice, community responsibility, staff development,
          and ethical conduct.
        </SectionHeader>
      </div>

      {/* Full-width content */}
      <div className="mt-16 grid w-full gap-0 lg:grid-cols-2">
        <div className="relative min-h-[26rem] w-full overflow-hidden bg-black sm:min-h-[34rem] lg:min-h-[42rem]">
          <img
            className="absolute inset-0 h-full w-full object-cover opacity-90 transition duration-700 hover:scale-105 hover:opacity-100"
            src={safetyImage}
            alt="Safety glass and site execution visual"
          />
          <div className="absolute inset-0 bg-black/15" />
        </div>

        <div className="grid w-full grid-cols-1 bg-[#002060] sm:grid-cols-2">
          {principles.map((principle, index) => (
            <div
              className="group flex min-h-[12rem] flex-col justify-between border border-white/10 p-5 text-white transition duration-300 hover:bg-black sm:min-h-[14rem] lg:min-h-0 lg:p-6"
              key={principle}
            >
              <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.24em] text-white/45">
                {String(index + 1).padStart(2, '0')}
              </p>

              <h3 className="mt-8 font-display text-[clamp(0.95rem,1.05vw,1.2rem)] font-medium uppercase leading-[1.2] tracking-[-0.025em] text-white">
                {principle}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}