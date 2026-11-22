import {
  FC,
  TouchEvent,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  ChevronLeft,
  ChevronRight,
  IconProps,
  Pause,
  Play,
} from "react-feather";

export type EngineeringSlide = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags?: string[];
};

export type EngineeringCategory = {
  id: number;
  title: string;
  subtitle: string;
  Icon?: FC<IconProps>;
  slides: EngineeringSlide[];
};

export type EngineeringProps = {
  categories: EngineeringCategory[];
};

const AUTOPLAY_MS = 6000;
const SWIPE_THRESHOLD = 50;

const pad = (n: number) => String(n).padStart(2, "0");

type SlideState = {
  index: number;
  prev: number | null;
  dir: 1 | -1;
  // Bumped on every change so keyed animations restart cleanly.
  stamp: number;
};

const Engineering = ({ categories }: EngineeringProps) => {
  const [activeCat, setActiveCat] = useState(0);
  const [slide, setSlide] = useState<SlideState>({
    index: 0,
    prev: null,
    dir: 1,
    stamp: 0,
  });
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);

  const category = categories[activeCat];
  const slides = category?.slides ?? [];
  const count = slides.length;

  /* ---------- side menu sliding indicator ---------- */
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicator, setIndicator] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  const measureIndicator = useCallback(() => {
    const el = itemRefs.current[activeCat];
    if (!el) return;
    setIndicator({
      top: el.offsetTop,
      left: el.offsetLeft,
      width: el.offsetWidth,
      height: el.offsetHeight,
    });
  }, [activeCat]);

  useLayoutEffect(() => {
    measureIndicator();
    window.addEventListener("resize", measureIndicator);
    return () => window.removeEventListener("resize", measureIndicator);
  }, [measureIndicator]);

  /* ---------- gallery navigation ---------- */
  const goTo = useCallback(
    (target: number, dir?: 1 | -1) => {
      if (count < 2) return;
      setSlide((s) => {
        const next = (target + count) % count;
        if (next === s.index) return s;
        return {
          index: next,
          prev: s.index,
          dir: dir ?? (next > s.index ? 1 : -1),
          stamp: s.stamp + 1,
        };
      });
    },
    [count],
  );

  const next = useCallback(() => goTo(slide.index + 1, 1), [goTo, slide.index]);
  const prev = useCallback(
    () => goTo(slide.index - 1, -1),
    [goTo, slide.index],
  );

  const selectCategory = (i: number) => {
    if (i === activeCat) return;
    // keeps the tapped tab visible in the horizontal (mobile) menu
    itemRefs.current[i]?.scrollIntoView({
      block: "nearest",
      inline: "nearest",
      behavior: "smooth",
    });
    setActiveCat(i);
    setSlide((s) => ({ index: 0, prev: null, dir: 1, stamp: s.stamp + 1 }));
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const touchX = useRef<number | null>(null);
  const onTouchStart = (e: TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: TouchEvent) => {
    if (touchX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchX.current;
    if (diff <= -SWIPE_THRESHOLD) next();
    else if (diff >= SWIPE_THRESHOLD) prev();
    touchX.current = null;
  };

  const autoplayRunning = !paused && !hovering && count > 1;
  const current = slides[slide.index];
  const outgoing =
    slide.prev !== null && slide.prev !== slide.index
      ? slides[slide.prev]
      : undefined;

  if (!category) return null;

  return (
    <section className="animate-eng-fade-up">
      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        {/* ---------------- Side menu ---------------- */}
        <aside className="lg:w-72 shrink-0">
          <div className="rounded-lg bg-[rgba(0,0,0,0.6)] backdrop-blur-sm border border-white/10 shadow-[0px_0px_20px_4px_rgba(0,0,0,0.6)] p-3">
            <p className="hidden lg:block px-3 pt-2 pb-4 text-xs uppercase tracking-[0.3em] text-white/50">
              Disciplines
            </p>
            <ul className="relative flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible eng-no-scrollbar">
              {/* sliding active indicator */}
              <span
                aria-hidden
                className="absolute rounded-md bg-[rgba(var(--primary-rgb),0.14)] border border-[rgba(var(--primary-rgb),0.35)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none"
                style={indicator}
              >
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-3/5 w-1 rounded-r-[2px] bg-primary shadow-[0_0_10px_rgba(var(--primary-rgb),0.8)]" />
              </span>

              {categories.map((cat, i) => {
                const active = i === activeCat;
                const Icon = cat.Icon;
                return (
                  <li key={cat.id} className="shrink-0">
                    <button
                      ref={(el) => {
                        itemRefs.current[i] = el;
                      }}
                      type="button"
                      onClick={() => selectCategory(i)}
                      aria-current={active}
                      className="group relative z-[1] flex w-full items-center gap-3 rounded-md px-4 py-3 text-left cursor-pointer"
                    >
                      <span
                        className={
                          "text-sm font-bold tabular-nums transition-colors duration-300 " +
                          (active
                            ? "text-primary"
                            : "text-white/40 group-hover:text-white/70")
                        }
                      >
                        {pad(i + 1)}
                      </span>
                      {Icon && (
                        <Icon
                          size={20}
                          className={
                            "shrink-0 transition-all duration-300 " +
                            (active
                              ? "text-primary scale-110"
                              : "text-white/70 group-hover:text-white group-hover:rotate-12")
                          }
                        />
                      )}
                      <span className="flex flex-col min-w-0 transition-transform duration-300 group-hover:translate-x-1">
                        <span
                          className={
                            "uppercase font-bold whitespace-nowrap text-shadow-[0px_1px_5px_rgb(0,0,0)] transition-colors duration-300 " +
                            (active
                              ? "text-primary"
                              : "text-white group-hover:text-primary")
                          }
                        >
                          {cat.title}
                        </span>
                        <span className="hidden lg:block text-xs text-white/50 truncate">
                          {cat.slides.length} projects · {cat.subtitle}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* ---------------- Gallery ---------------- */}
        <div key={category.id} className="flex-1 min-w-0 animate-eng-fade-up">
          <div className="flex items-baseline justify-between gap-4 mb-4">
            <div className="min-w-0">
              <h2 className="text-2xl text-white uppercase font-bold text-shadow-[0px_1px_5px_rgb(0,0,0)] truncate">
                {category.title}
              </h2>
              <p className="text-white/70 font-light text-shadow-[0px_1px_5px_rgb(0,0,0)]">
                {category.subtitle}
              </p>
            </div>
            {count > 0 && (
              <p className="shrink-0 text-white text-shadow-[0px_1px_5px_rgb(0,0,0)] tabular-nums">
                <span className="text-3xl font-bold text-primary">
                  {pad(slide.index + 1)}
                </span>
                <span className="text-white/50"> / {pad(count)}</span>
              </p>
            )}
          </div>

          {count === 0 ? (
            <p className="text-white/70">No projects in this category yet.</p>
          ) : (
            <>
              {/* Stage */}
              <div
                className="group relative h-[clamp(320px,58vh,620px)] overflow-hidden rounded-lg bg-black shadow-[0px_0px_20px_4px_rgb(0,0,0)] select-none"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
              >
                {outgoing && (
                  <SlideView
                    key={`out-${slide.stamp}`}
                    slide={outgoing}
                    className={
                      "pointer-events-none " +
                      (slide.dir === 1
                        ? "animate-eng-slide-out-next"
                        : "animate-eng-slide-out-prev")
                    }
                  />
                )}
                {current && (
                  <SlideView
                    key={`in-${slide.stamp}`}
                    slide={current}
                    animateCaption
                    className={
                      slide.prev === null
                        ? "animate-eng-fade-in"
                        : slide.dir === 1
                          ? "animate-eng-slide-in-next"
                          : "animate-eng-slide-in-prev"
                    }
                  />
                )}

                {/* Controls */}
                {count > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={prev}
                      aria-label="Previous slide"
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 border border-white/20 text-white backdrop-blur-sm cursor-pointer opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
                    >
                      <ChevronLeft />
                    </button>
                    <button
                      type="button"
                      onClick={next}
                      aria-label="Next slide"
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 border border-white/20 text-white backdrop-blur-sm cursor-pointer opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
                    >
                      <ChevronRight />
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaused((p) => !p)}
                      aria-label={paused ? "Play slideshow" : "Pause slideshow"}
                      className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 border border-white/20 text-white backdrop-blur-sm cursor-pointer hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
                    >
                      {paused ? <Play size={16} /> : <Pause size={16} />}
                    </button>

                    {/* Autoplay progress */}
                    <div className="absolute bottom-0 left-0 right-0 z-10 h-1 bg-white/15">
                      <div
                        key={`progress-${slide.stamp}`}
                        className="h-full origin-left bg-primary shadow-[0_0_8px_rgba(var(--primary-rgb),0.9)] animate-eng-progress"
                        style={{
                          animationDuration: `${AUTOPLAY_MS}ms`,
                          animationPlayState: autoplayRunning
                            ? "running"
                            : "paused",
                        }}
                        onAnimationEnd={next}
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              <div className="mt-5 flex gap-3 overflow-x-auto pt-2 pb-3 px-1 eng-no-scrollbar">
                {slides.map((s, i) => {
                  const active = i === slide.index;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => goTo(i)}
                      aria-label={`Show ${s.title}`}
                      style={{ animationDelay: `${i * 70}ms` }}
                      className={
                        "relative shrink-0 h-20 w-32 overflow-hidden rounded-md cursor-pointer animate-eng-fade-up transition-all duration-300 shadow-[0px_6px_5px_0px_rgba(0,0,0,0.6)] " +
                        (active
                          ? "ring-2 ring-primary -translate-y-1 scale-105"
                          : "grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:-translate-y-1")
                      }
                    >
                      <img
                        src={s.image}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                      <span
                        className={
                          "absolute inset-x-0 bottom-0 px-2 py-1 text-[10px] uppercase font-bold text-white text-left truncate bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 " +
                          (active ? "opacity-100" : "opacity-0")
                        }
                      >
                        {s.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

type SlideViewProps = {
  slide: EngineeringSlide;
  className?: string;
  animateCaption?: boolean;
};

const SlideView = ({
  slide,
  className = "",
  animateCaption,
}: SlideViewProps) => (
  <div className={"absolute inset-0 " + className}>
    {/* blurred ambient fill */}
    <img
      src={slide.image}
      alt=""
      aria-hidden
      className="absolute inset-0 h-full w-full object-cover scale-125 blur-2xl opacity-60"
    />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_30%,rgba(0,0,0,0.7)_100%)]" />

    {/* main photo with slow ken-burns zoom */}
    <img
      src={slide.image}
      alt={slide.title}
      className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] animate-eng-kenburns"
    />

    {/* caption */}
    <div
      className={
        "absolute left-4 right-4 bottom-6 sm:left-6 sm:right-auto sm:max-w-md rounded-lg bg-black/55 backdrop-blur-md border border-white/10 border-l-4 border-l-primary p-5 " +
        (animateCaption ? "animate-eng-caption" : "")
      }
    >
      <h3 className="text-xl text-white uppercase font-bold text-shadow-[0px_1px_5px_rgb(0,0,0)]">
        {slide.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-white/85 font-light">
        {slide.description}
      </p>
      {slide.tags && slide.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {slide.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[rgba(var(--primary-rgb),0.5)] bg-[rgba(var(--primary-rgb),0.1)] px-2.5 py-0.5 text-[11px] uppercase tracking-wider text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default Engineering;
