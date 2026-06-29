import { cn } from '../../utils/cn';

export default function ImageFrame({ src, alt, className, imgClassName }) {
  return (
    <figure className={cn('relative overflow-hidden bg-ink', className)}>
      <img className={cn('h-full w-full object-cover', imgClassName)} src={src} alt={alt} loading="lazy" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ink/10" />
    </figure>
  );
}
