import { useMemo } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';

let partnerLogoContext = null;

try {
  partnerLogoContext = require.context('../../assets/partners', false, /\.(png|jpe?g|svg|webp)$/i);
} catch {
  partnerLogoContext = null;
}

const partners = partnerLogoContext
  ? partnerLogoContext.keys().sort().map((key) => ({
    name: key.replace('./', '').replace(/\.(png|jpe?g|svg|webp)$/i, ''),
    logo: partnerLogoContext(key),
  }))
  : [];

function wrap(min, max, value) {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
}

function PartnerItem({ partner }) {
  return (
    <div className="flex h-32 min-w-[18rem] items-center justify-center px-8 transition duration-300 hover:-translate-y-1 sm:min-w-[20rem] md:min-w-[22rem] lg:h-36 lg:min-w-[25rem] xl:min-w-[28rem]">
      <img
        className="max-h-24 w-auto max-w-[16rem] object-contain mix-blend-multiply sm:max-h-28 sm:max-w-[18rem] lg:max-h-32 lg:max-w-[22rem]"
        src={partner.logo}
        alt={partner.name}
        loading="lazy"
      />
    </div>
  );
}

function PartnerRow({ partners, direction = 'left', baseVelocity = 0.25 }) {
  const shouldReduceMotion = useReducedMotion();
  const baseX = useMotionValue(direction === 'right' ? -50 : 0);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const smoothVelocity = useSpring(scrollVelocity, {
    stiffness: 70,
    damping: 35,
    mass: 0.5,
  });

  const velocityBoost = useTransform(smoothVelocity, (value) => {
    return Math.min(Math.abs(value) / 1000, 1.8);
  });

  useAnimationFrame((_, delta) => {
    if (shouldReduceMotion) return;

    const directionMultiplier = direction === 'right' ? 1 : -1;
    const boost = 1 + velocityBoost.get();
    const moveBy = directionMultiplier * baseVelocity * boost * (delta / 1000);

    baseX.set(wrap(-50, 0, baseX.get() + moveBy));
  });

  const repeatedPartners = useMemo(
    () => [...partners, ...partners, ...partners],
    [partners],
  );

  return (
    <div
      className="relative flex w-full overflow-hidden"
      style={{
        maskImage:
          'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}
    >
      <motion.div
        className="flex min-w-max items-center gap-8 sm:gap-10 lg:gap-14"
        style={{ x: useTransform(baseX, (value) => `${value}%`) }}
      >
        {repeatedPartners.map((partner, index) => (
          <PartnerItem key={`${partner.name}-${index}`} partner={partner} />
        ))}
      </motion.div>
    </div>
  );
}

export default function PartnerMarquee({ partners: partnerItems = partners }) {
  const expandedPartners = useMemo(() => {
    if (partnerItems.length >= 12) return partnerItems;

    const repeatCount = Math.ceil(12 / Math.max(partnerItems.length, 1));
    return Array.from({ length: repeatCount }, () => partnerItems).flat();
  }, [partnerItems]);

  const secondRow = useMemo(
    () => [...expandedPartners].reverse(),
    [expandedPartners],
  );

  const thirdRow = useMemo(
    () => [...expandedPartners.slice(3), ...expandedPartners.slice(0, 3)],
    [expandedPartners],
  );

  return (
    <section className="relative w-full overflow-hidden border-y border-navy/10 bg-white text-navy">
      <div className="relative z-20 bg-[#002060] px-5 py-7 text-white sm:px-8 sm:py-8 lg:px-12 lg:py-9">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-4xl text-balance text-lg font-light leading-tight tracking-[-0.02em] sm:text-xl md:text-2xl lg:text-[1.65rem]">
            Glass, aluminium, and steel product partnerships for innovative and
            sustainable building solutions.
          </p>

          <a
            href="/solutions"
            className="inline-flex h-12 w-full shrink-0 items-center justify-center border border-white/35 px-6 text-center text-xs font-bold uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-white hover:text-[#002060] sm:w-auto sm:min-w-[13rem]"
          >
            Explore Solutions
          </a>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-white py-20 md:py-24 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,32,96,0.045),transparent_34%)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto mb-16 max-w-6xl px-5 text-center">
          <p className="mb-8 flex items-center justify-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.34em] text-black sm:text-sm">
            <span className="text-[10px] leading-none">◆</span>
            Our Partner Brands
          </p>

          <h2 className="mx-auto max-w-6xl text-balance font-display text-[clamp(2.8rem,5vw,5.9rem)] font-light leading-[0.98] tracking-[-0.065em] text-[#002060]">
            Partner brands powering{' '}
            <em className="italic text-black">glass</em>,{' '}
            <em className="italic text-black">aluminium</em> and{' '}
            <em className="italic text-black">steel</em> building solutions.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base font-light leading-8 text-black sm:text-lg lg:text-xl lg:leading-9">
            We partner with leading aluminium, glass and steel product companies
            in the development of innovative and sustainable building solutions.
          </p>
        </div>

        <div className="relative space-y-10 md:space-y-12">
          <PartnerRow
            partners={expandedPartners}
            direction="left"
            baseVelocity={0.28}
          />
          <PartnerRow
            partners={secondRow}
            direction="right"
            baseVelocity={0.22}
          />
          <PartnerRow
            partners={thirdRow}
            direction="left"
            baseVelocity={0.18}
          />
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
