import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function renderTitle(title, italicWords = []) {
  if (typeof title !== 'string' || !italicWords.length) {
    return title;
  }

  const pattern = new RegExp(`(${italicWords.map(escapeRegex).join('|')})`, 'gi');
  const parts = title.split(pattern);

  return parts.map((part, index) => {
    const shouldItalicize = italicWords.some(
      (word) => word.toLowerCase() === part.toLowerCase(),
    );

    return shouldItalicize ? (
      <em key={`${part}-${index}`} className="font-serif italic tracking-[-0.04em] text-black">
        {part}
      </em>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    );
  });
}

export default function SectionHeader({
  eyebrow,
  title,
  children,
  align = 'center',
  className,
  italicWords = [],
  action,
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={cn(
        'mx-auto flex w-full flex-col',
        isCenter ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'mb-8 flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.34em] text-black sm:text-sm',
            isCenter ? 'justify-center' : 'justify-start',
          )}
        >
          <span className="text-[10px] leading-none">◆</span>
          {eyebrow}
        </p>
      )}

      <h2 className="max-w-[1050px] font-display text-[clamp(2.8rem,5vw,5.9rem)] font-light leading-[0.98] tracking-[-0.065em] text-[#002060]">
        {renderTitle(title, italicWords)}
      </h2>

      {children && (
        <p
          className={cn(
            'mt-8 max-w-2xl text-base font-light leading-8 text-black sm:text-lg lg:text-xl lg:leading-9',
            isCenter ? 'mx-auto' : '',
          )}
        >
          {children}
        </p>
      )}

      {action && (
        <Link
          to={action.to}
          className="mt-9 inline-flex items-center gap-3 bg-black px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.24em] text-white transition hover:bg-[#002060]"
        >
          <span aria-hidden="true">→</span>
          {action.label}
        </Link>
      )}
    </div>
  );
}