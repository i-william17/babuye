import Header from './Header';
import Footer from './Footer';
import PageShell from './PageShell';
import ReturnToTop from '../ui/ReturnToTop';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-cloud text-ink">
      <Header />
      <PageShell>{children}</PageShell>
      <Footer />
      <ReturnToTop />
    </div>
  );
}
