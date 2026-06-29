import Card from './Card';
import Button from './Button';

export default function ServiceCard({ service }) {
  return (
    <Card className="flex h-full flex-col border-x-0 border-b-0 border-t-ink/20 px-0 py-8">
      <img className="h-12 w-12" src={service.icon} alt="" aria-hidden="true" />
      <h3 className="mt-10 font-display text-3xl leading-tight text-ink">{service.title}</h3>
      <p className="mt-5 flex-1 text-base leading-8 text-graphite">{service.summary}</p>
      <ul className="mt-8 space-y-2 border-t border-ink/10 pt-6 text-sm leading-7 text-steel">
        {service.details.map((detail) => (
          <li key={detail}>- {detail}</li>
        ))}
      </ul>
      <Button className="mt-8 self-start" to="/contact" variant="secondary">
        Discuss scope
      </Button>
    </Card>
  );
}
