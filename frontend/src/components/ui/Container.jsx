import { cn } from '../../utils/cn';

export default function Container({ as: Component = 'div', className, children }) {
  return (
    <Component className={cn('mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-10', className)}>
      {children}
    </Component>
  );
}
