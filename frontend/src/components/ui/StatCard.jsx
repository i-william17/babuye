import Card from './Card';

export default function StatCard({ value, label }) {
  return (
    <Card className="border-cloud/20 bg-ink/35 p-5 text-cloud backdrop-blur">
      <div className="font-display text-4xl">{value}</div>
      <div className="mt-3 text-xs uppercase leading-6 tracking-[0.18em] text-cloud/70">{label}</div>
    </Card>
  );
}
