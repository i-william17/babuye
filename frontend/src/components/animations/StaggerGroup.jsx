import SectionReveal from './SectionReveal';
import { cn } from '../../utils/cn';

export default function StaggerGroup({ items, renderItem, className }) {
  return (
    <div className={cn('grid gap-5', className)}>
      {items.map((item, index) => (
        <SectionReveal
          key={item.title || item.label || index}
          className="h-full"
          transition={{ duration: 0.52, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
        >
          {renderItem(item, index)}
        </SectionReveal>
      ))}
    </div>
  );
}
