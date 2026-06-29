import heroVideo from '../../assets/videos/four.mp4';

export default function HeroSection() {
  const outlinedWordStyle = {
    WebkitTextStroke: '5px #FFFFFF',
    paintOrder: 'stroke fill',
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-navy text-white">
      {/* Video Background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/25 to-black/65" />

      {/* Soft blur/film layer */}
      <div className="absolute inset-0 backdrop-blur-[1px]" />

      {/* Main centered headline */}
      <div className="absolute left-1/2 top-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 px-4 text-center sm:px-8 lg:px-12">
        <h1 className="mx-auto inline-block max-w-none origin-center scale-x-[0.72] whitespace-nowrap font-display text-[clamp(2.3rem,8vw,8.5rem)] font-light leading-none tracking-[-0.085em] text-white sm:scale-x-[0.82] sm:text-[clamp(3rem,8vw,8.5rem)] md:scale-x-90 md:text-[clamp(4rem,7.5vw,8.5rem)] lg:scale-x-100 lg:text-[clamp(5.6rem,6.4vw,8.5rem)] xl:text-[clamp(6rem,6vw,8.8rem)]">
          Turning{' '}
          <span
            className="italic text-[#002060]"
            style={outlinedWordStyle}
          >
            Vision
          </span>{' '}
          into{' '}
          <span
            className="italic text-[#002060]"
            style={outlinedWordStyle}
          >
            Reality.
          </span>
        </h1>
      </div>

      {/* Bottom content line */}
      <div className="absolute bottom-20 left-0 right-0 z-10 px-5 sm:px-8 md:bottom-24 md:px-10 lg:bottom-28 lg:px-16 xl:bottom-32">
        <div className="mx-auto grid max-w-[1380px] gap-10 border-t border-white/25 pt-7 md:grid-cols-[1fr_460px] md:items-start lg:gap-16 lg:pt-8">
          <div className="flex items-center justify-center gap-3 md:justify-center">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.34em] text-white lg:text-sm">
              Glass & Aluminium Systems Company
            </p>
          </div>

          <p className="mx-auto max-w-sm text-center text-lg font-light leading-7 text-white md:mx-0 md:text-left lg:max-w-[460px] lg:text-xl lg:leading-8">
            Babuye is a glass and aluminium-led solutions company with a
            practical, site-driven approach to façade and fenestration delivery,
            supporting project conceptualization, pricing, implementation,
            quality control and handover.
          </p>
        </div>
      </div>
    </section>
  );
}