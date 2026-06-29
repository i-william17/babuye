import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

export default function AnimatedLink({ to, className, children }) {
  return (
    <Link className={cn('focus-ring inline-flex border-b border-current pb-1 text-sm font-semibold uppercase transition hover:text-navy', className)} to={to}>
      {children}
    </Link>
  );
}
