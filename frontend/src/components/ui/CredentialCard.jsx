import Card from './Card';

export default function CredentialCard({ credential, index }) {
  return (
    <Card className="border-x-0 border-b-0 border-t-ink/20 px-0 py-7">
      <div className="text-xs uppercase tracking-[0.2em] text-steel">{String(index + 1).padStart(2, '0')}</div>
      <h3 className="mt-7 font-display text-3xl leading-tight text-ink">{credential.title}</h3>
      <p className="mt-5 text-base leading-8 text-graphite">{credential.description}</p>
    </Card>
  );
}
