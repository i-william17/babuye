import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { useActiveRoute } from '../../hooks/useActiveRoute';
import logo from '../../assets/logos/babuye-logo.png';
import MobileMenu from './MobileMenu';
import Container from '../ui/Container';
import { cn } from '../../utils/cn';

const navItems = [
  {
    label: 'Company',
    children: [
      { label: 'About', path: '/about' },
      { label: 'Compliance', path: '/compliance' },
      { label: 'Safety & Sustainability', path: '/safety-sustainability' },
    ],
  },
  {
    label: 'Solutions',
    children: [
      { label: 'Windows', path: '/solutions/windows' },
      { label: 'Doors', path: '/solutions/doors' },
      { label: 'Curtain Wall Solutions', path: '/solutions/curtain-wall-solutions' },
      { label: 'Interior Glass Partitions', path: '/solutions/interior-glass-partitions' },
      { label: 'Balustrades', path: '/solutions/balustrades' },
      { label: 'Skylights', path: '/solutions/skylights' },
      { label: 'High-Spec Specialized Solutions', path: '/solutions/high-spec-specialized-solutions' },
      { label: 'Sun Shading Solutions', path: '/solutions/sun-shading-solutions' },
      { label: 'Bespoke Project Services', path: '/solutions/bespoke-project-services' },
    ],
  },
  {
    label: 'Capabilities',
    path: '/capabilities',
  },
  {
    label: 'Projects',
    path: '/projects',
  },
  { label: 'Contact', path: '/contact' },
];

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.5 21v-7.7h2.6l.4-3h-3V8.4c0-.9.3-1.5 1.6-1.5h1.6V4.2c-.8-.1-1.6-.2-2.4-.2-2.4 0-4.1 1.5-4.1 4.2v2.1H8v3h2.7V21h2.8Z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
    <circle cx="16.8" cy="7.2" r="1" fill="currentColor" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M6.8 9.4H3.9V21h2.9V9.4ZM5.3 4C4.3 4 3.6 4.7 3.6 5.6s.7 1.6 1.7 1.6S7 6.5 7 5.6 6.3 4 5.3 4Zm15.1 10.4c0-3.1-1.7-5.1-4.3-5.1-1.8 0-2.8 1-3.2 1.7V9.4H10V21h2.9v-6.2c0-1.6.9-2.7 2.3-2.7s2.2 1 2.2 2.8V21h3v-6.6Z" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.9 4.5h3.2l-7 8 8.2 10.9h-6.4l-5-6.6-5.8 6.6H2.9l7.5-8.6L2.5 4.5H9l4.5 6 5.4-6Zm-1.1 17h1.8L8 6.3H6.1l11.7 15.2Z" />
  </svg>
);

const socialLinks = [
  { label: 'Facebook', href: '#', icon: FacebookIcon },
  { label: 'Instagram', href: '#', icon: InstagramIcon },
  { label: 'LinkedIn', href: '#', icon: LinkedinIcon },
  { label: 'Twitter / X', href: '#', icon: TwitterIcon },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const direction = useScrollDirection();
  const isActiveRoute = useActiveRoute();

  const isItemActive = (item) => {
    if (item.path) {
      return isActiveRoute(item.path);
    }

    return item.children?.some((child) => isActiveRoute(child.path));
  };

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 border-b border-navy/10 bg-white/95 backdrop-blur transition-transform duration-300',
          direction === 'down' && '-translate-y-full',
        )}
      >
        <Container className="flex h-28 items-center justify-between lg:h-32">
          <Link className="focus-ring" to="/" aria-label="Babuye home">
            <img className="h-24 w-auto lg:h-28" src={logo} alt="Babuye" />
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            <nav className="items-center gap-7 lg:flex" aria-label="Primary navigation">
              {navItems.map((item) => (
                <div
                  className="relative"
                  key={item.label}
                  onMouseEnter={() => item.children && setOpenMenu(item.label)}
                  onMouseLeave={() => item.children && setOpenMenu(null)}
                  onFocus={() => item.children && setOpenMenu(item.label)}
                  onBlur={(event) => {
                    if (item.children && !event.currentTarget.contains(event.relatedTarget)) {
                      setOpenMenu(null);
                    }
                  }}
                >
                  {item.children ? (
                    <button
                      className={cn(
                        'focus-ring flex min-h-11 items-center gap-2 text-sm font-semibold uppercase text-navy/75 transition hover:text-navy',
                        isItemActive(item) && 'text-navy',
                      )}
                      type="button"
                      aria-expanded={openMenu === item.label}
                    >
                      {item.label}

                      {openMenu === item.label ? (
                        <ChevronUp className="h-4 w-4 stroke-[2.5]" aria-hidden="true" />
                      ) : (
                        <ChevronDown className="h-4 w-4 stroke-[2.5]" aria-hidden="true" />
                      )}
                    </button>
                  ) : (
                    <Link
                      className={cn(
                        'focus-ring flex min-h-11 items-center text-sm font-semibold uppercase text-navy/75 transition hover:text-navy',
                        isItemActive(item) && 'text-navy',
                      )}
                      to={item.path}
                    >
                      {item.label}
                    </Link>
                  )}

                  <AnimatePresence>
                    {item.children && openMenu === item.label && (
                      <motion.div
                        className={cn(
                          'absolute left-1/2 top-full mt-3 -translate-x-1/2 border border-navy/10 bg-white p-3 shadow-soft',
                          item.label === 'Solutions' ? 'w-[42rem]' : 'w-80',
                        )}
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ul
                          className={cn(
                            'gap-1',
                            item.label === 'Solutions' ? 'grid grid-cols-2' : 'space-y-1',
                          )}
                        >
                          {item.children.map((child) => (
                            <li key={child.path}>
                              <Link
                                className={cn(
                                  'block border border-transparent px-4 py-3 text-sm font-semibold text-navy/75 transition hover:border-aluminium hover:bg-aluminium/50 hover:text-navy',
                                  isActiveRoute(child.path) && 'border-aluminium bg-aluminium/70 text-navy',
                                )}
                                to={child.path}
                                onClick={() => setOpenMenu(null)}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-2 border-l border-navy/15 pl-5">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  className="focus-ring flex h-9 w-9 items-center justify-center text-navy/70 transition hover:text-navy"
                  href={href}
                  aria-label={label}
                  onClick={(event) => href === '#' && event.preventDefault()}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <button
            className="focus-ring min-h-11 px-3 text-sm font-semibold uppercase text-navy lg:hidden"
            type="button"
            onClick={() => setMenuOpen(true)}
          >
            Menu
          </button>
        </Container>
      </header>

      <MobileMenu navItems={navItems} open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}