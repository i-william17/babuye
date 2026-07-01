import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import logoLight from '../../assets/logos/babuye-logo.png';
import { cn } from '../../utils/cn';

export default function MobileMenu({ navItems, open, onClose }) {
  const [openPanel, setOpenPanel] = useState(null);

  useLockBodyScroll(open);

  return (
    <div className={cn('fixed inset-0 z-50 lg:hidden', open ? 'pointer-events-auto' : 'pointer-events-none')} aria-hidden={!open}>
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              className="absolute inset-0 bg-navy/45"
              type="button"
              onClick={onClose}
              aria-label="Close navigation overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.aside
              className="absolute right-0 top-0 flex h-full w-[min(88vw,440px)] flex-col overflow-y-auto bg-navy p-6 text-white"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between">
                <Link className="focus-ring" to="/" onClick={onClose} aria-label="Babuye home">
                  <img className="h-24 w-auto max-w-[14rem] object-contain brightness-0 invert" src={logoLight} alt="Babuye" />
                </Link>
                <button className="focus-ring min-h-11 px-3 text-sm uppercase" type="button" onClick={onClose}>
                  Close
                </button>
              </div>
              <nav className="mt-10" aria-label="Mobile navigation">
                <ul className="space-y-1">
                  {navItems.map((item) => (
                    <li className="border-b border-white/14" key={item.label}>
                      {item.children ? (
                        <>
                          <button
                            className="flex w-full items-center justify-between py-4 text-left font-display text-3xl"
                            type="button"
                            onClick={() => setOpenPanel(openPanel === item.label ? null : item.label)}
                            aria-expanded={openPanel === item.label}
                          >
                            {item.label}
                            <span className={cn('text-sm transition-transform', openPanel === item.label && 'rotate-180')}>v</span>
                          </button>
                          <AnimatePresence initial={false}>
                            {openPanel === item.label && (
                              <motion.ul
                                className="pb-4"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                              >
                                {item.children.map((child) => (
                                  <li key={child.path}>
                                    <Link className="block py-2 text-sm font-semibold uppercase tracking-[0.12em] text-white/75" to={child.path} onClick={onClose}>
                                      {child.label}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link className="block py-4 font-display text-3xl" to={item.path} onClick={onClose}>
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-auto border-t border-white/14 pt-6 text-sm leading-7 text-white/72">
                <p>Babuye Aluminium & Glass Systems Company. Turning Vision into Reality.</p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
