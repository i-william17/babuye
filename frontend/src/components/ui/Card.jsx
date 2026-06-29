import { cn } from '../../utils/cn';

export default function Card({ as: Component = 'article', className, children }) {
  return (
    <Component className={cn('border border-ink/10 bg-transparent p-6', className)}>
      {children}
    </Component>
  );
}
