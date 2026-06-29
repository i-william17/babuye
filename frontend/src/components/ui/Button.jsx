import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

const variants = {
  primary: 'border-ink bg-ink text-cloud hover:bg-graphite hover:border-graphite',
  secondary: 'border-ink/25 bg-transparent text-ink hover:border-ink',
  light: 'border-cloud/45 bg-transparent text-cloud hover:border-cloud',
  ghost: 'border-transparent bg-transparent text-ink hover:border-ink/20',
};

export default function Button({ to, href, type = 'button', variant = 'primary', className, children, ...props }) {
  const classes = cn(
    'focus-ring inline-flex min-h-11 items-center justify-center gap-2 border px-6 py-3 text-xs font-semibold uppercase leading-none tracking-[0.18em] transition',
    variants[variant],
    className,
  );

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
}
