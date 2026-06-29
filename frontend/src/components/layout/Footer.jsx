import { Link } from 'react-router-dom';
import logoLight from '../../assets/logos/babuye-logo.png';
import Container from '../ui/Container';

const footerLinks = [
  { label: 'About', path: '/about' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Capabilities', path: '/capabilities' },
  { label: 'Compliance', path: '/compliance' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-navy py-14 text-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <img
              className="h-24 w-auto brightness-0 invert lg:h-28"
              src={logoLight}
              alt="Babuye"
            />

            <p className="mt-6 max-w-md text-sm leading-7 text-white/72">
              Babuye Aluminium & Glass Systems Company, legally Babuye
              Investment Limited, is a glass and aluminium-led solutions company
              turning architectural vision into durable built reality.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-3 text-sm text-white/75">
              {footerLinks.map((item) => (
                <li key={item.path}>
                  <Link className="transition hover:text-white" to={item.path}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <address className="space-y-3 text-sm not-italic text-white/75">
              <p>Contact person: Jamlick Mbauni</p>
              <p>P.O. Box 18256 - 00100</p>
              <p>
                <a className="transition hover:text-white" href="tel:+254723159404">
                  +254 723 159 404
                </a>
              </p>
              <p>
                <a className="transition hover:text-white" href="mailto:jamlick.n.m@gmail.com">
                  jamlick.n.m@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-white/14 pt-6 text-xs uppercase text-white/50">
          © {new Date().getFullYear()} Babuye Investment Limited. All rights
          reserved.
        </div>
      </Container>
    </footer>
  );
}