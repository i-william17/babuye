import Seo from '../components/Seo';
import ManufacturingPreview from '../components/sections/ManufacturingPreview';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';

const capabilityStats = [
  { value: '85,000㎡', label: 'Monthly capacity for aluminium and glass system production planning' },
  { value: '+35%', label: 'Delivery efficiency increase through integrated process control' },
  { value: '90%', label: 'Argon concentration capability for insulating glass performance' },
];

const manufacturingProcess = [
  {
    title: 'Project intake and technical review',
    description: 'Babuye reviews the brief, drawings, openings, site constraints, performance requirements, finishes, hardware, glass selection, and procurement documentation.',
  },
  {
    title: 'Showroom and display-area support',
    description: 'The showroom/display area helps clients, architects, and project teams compare systems, profiles, glass, finishes, accessories, and installed details before final commitment.',
  },
  {
    title: 'Digital planning and ERP integration',
    description: 'ERP integration connects project requirements to procurement, production planning, material tracking, delivery coordination, and installation support.',
  },
  {
    title: 'Industry 4.0 equipment control',
    description: 'Modern equipment and a Siemens PLC control system support repeatable production, reliable quality control, and improved efficiency across the manufacturing workflow.',
  },
  {
    title: 'Fabrication, assembly, and glass performance',
    description: 'Profiles, glass, argon-filled units, accessories, and hardware are coordinated through controlled fabrication and assembly checks, including argon concentration up to 90%.',
  },
  {
    title: 'Delivery, installation, and handover',
    description: 'Babuye coordinates packaging, transport, site installation, protection requirements, safety practice, and documentation for handover and maintenance awareness.',
  },
];

const technicalSupport = [
  'Technical support for architects during concept review, detail coordination, facade intent, opening strategy, and material selection.',
  'BIM models for AEC workflows where project teams need coordinated digital information for aluminium and glass systems.',
  'Technical software/tool capability badges: SketchUp, AutoCAD, and Revit.',
  'Project services covering surveys, shop drawings, fabrication coordination, installation planning, compliance records, and quality control.',
];

export default function Manufacturing() {
  return (
    <>
      <Seo
        title="Capabilities | Manufacturing, Industry 4.0 & BIM Support | Babuye"
        description="Babuye capabilities include integrated manufacturing, showroom support, Industry 4.0 equipment, ERP integration, Siemens PLC control, up to 85,000㎡ monthly capacity, 35% delivery efficiency improvement, argon concentration up to 90%, architect support, and BIM/AEC models."
      />
      <section className="border-b border-navy/10 bg-white py-20 sm:py-28">
        <Container>
          <SectionHeader title="Manufacturing and project capabilities built around capacity, control, and technical coordination.">
            Babuye’s integrated workflow connects design review, showroom validation, ERP-supported production, Industry 4.0 equipment, Siemens PLC control, quality checks, delivery planning, and installation support.
          </SectionHeader>
        </Container>
      </section>
      <ManufacturingPreview />
      <section className="border-y border-navy/10 bg-aluminium/45 py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {capabilityStats.map((stat) => (
              <article className="border border-navy/10 bg-white p-7 shadow-soft" key={stat.label}>
                <div className="font-display text-5xl text-navy">{stat.value}</div>
                <p className="mt-5 text-sm font-semibold uppercase leading-7 text-navy/72">{stat.label}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {manufacturingProcess.map((step, index) => (
              <article className="rounded-sm border border-navy/10 bg-white p-6 shadow-soft" key={step.title}>
                <span className="font-display text-3xl text-navy">{String(index + 1).padStart(2, '0')}</span>
                <h2 className="mt-5 font-display text-2xl text-navy">{step.title}</h2>
                <p className="mt-4 text-sm leading-7 text-navy/75">{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="border-t border-navy/10 bg-white py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader title="Technical support for architects, contractors, and AEC teams." />
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {technicalSupport.map((item) => (
                <article className="border border-navy/10 bg-aluminium/35 p-5 text-sm leading-7 text-navy/78" key={item}>
                  {item}
                </article>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {['SketchUp', 'AutoCAD', 'Revit', 'BIM Models', 'AEC Coordination'].map((tool) => (
                <span className="border border-navy/15 bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-navy" key={tool}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
