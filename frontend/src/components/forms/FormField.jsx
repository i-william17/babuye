import { cn } from '../../utils/cn';

export default function FormField({ label, id, as: Component = 'input', className, ...props }) {
  return (
    <label className="block" htmlFor={id}>
      <span className="text-xs font-semibold uppercase text-steel">{label}</span>
      <Component
        className={cn('focus-ring mt-2 w-full border-0 border-b border-ink/25 bg-transparent px-0 py-3 text-base text-ink placeholder:text-steel/70', className)}
        id={id}
        {...props}
      />
    </label>
  );
}
