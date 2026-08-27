"use client";

import gsap from "gsap";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

const SESSION_KEY = "nicholas-lee-signature-intro-v1";
const DRAWING_SPEED_MULTIPLIER = 1.5;

type Stroke = {
  d: string;
  id: string;
  width?: number;
  pace?: number;
  lift?: number;
};

// Every visible mark is an open centerline path, ordered as it would be written.
// The same geometry is both animated and left on screen as the finished signature.
const strokes: Stroke[] = [
  {
    id: "capital-n",
    width: 6.5,
    pace: 600,
    d: "M 238 517 C 211 529 211 507 219 486 C 236 440 294 385 354 342 C 397 312 445 287 465 288 C 489 289 481 309 464 336 C 421 405 346 509 287 616 C 337 536 394 461 449 407 C 491 366 535 333 551 340 C 570 349 528 411 497 454 C 460 507 429 555 427 575 C 424 590 433 594 445 588 C 469 578 497 555 522 535",
  },
  {
    id: "i-stem",
    width: 6.2,
    pace: 560,
    d: "M 522 535 C 533 522 543 507 551 499 C 555 495 557 496 554 504 C 549 515 539 529 533 539 C 526 550 520 556 528 558 C 541 560 561 549 580 537",
  },
  {
    id: "c",
    width: 6.2,
    pace: 520,
    d: "M 580 537 C 592 525 604 513 616 511 C 625 509 630 514 626 520 C 624 523 622 523 622 520 C 622 516 619 514 614 516 C 602 520 589 535 588 543 C 587 552 594 554 604 552 C 620 549 637 540 652 532",
  },
  {
    id: "h",
    width: 6.2,
    pace: 610,
    d: "M 652 532 C 674 509 696 482 715 455 C 733 430 746 407 751 401 C 756 395 757 402 753 411 C 743 433 718 467 690 496 C 677 511 666 527 657 543 C 672 529 687 515 700 508 C 711 502 717 507 713 518 C 709 530 699 541 700 547 C 701 555 715 552 735 540",
  },
  {
    id: "o",
    width: 6.2,
    pace: 510,
    d: "M 735 540 C 746 527 760 514 772 512 C 781 510 787 516 785 525 C 782 537 768 549 755 554 C 746 557 738 554 737 548 C 735 540 743 530 753 523 C 764 516 772 518 779 526 C 790 531 804 527 818 521",
  },
  {
    id: "l",
    width: 6.2,
    pace: 610,
    d: "M 818 521 C 836 494 856 468 877 444 C 900 417 921 396 930 397 C 941 398 932 418 923 431 C 905 457 873 486 838 510 C 825 520 817 535 816 544 C 815 553 822 557 831 554 C 846 550 864 541 878 533",
  },
  {
    id: "a",
    width: 6.2,
    pace: 520,
    d: "M 878 533 C 889 520 905 512 918 512 C 927 512 932 516 930 522 C 926 533 904 550 890 552 C 881 554 877 549 880 541 C 884 530 899 517 913 514 C 921 512 928 515 929 520 C 929 525 921 534 918 540 C 915 548 919 551 926 549 C 938 546 947 539 955 533",
  },
  {
    id: "s",
    width: 6.2,
    pace: 500,
    d: "M 955 533 C 967 527 978 518 983 509 C 986 504 988 506 985 514 C 982 522 978 529 976 535 C 973 543 975 551 967 554 C 959 557 950 552 952 545 C 954 538 965 536 980 537 C 1005 538 1031 535 1055 532",
  },
  {
    id: "i-dot",
    width: 7,
    pace: 250,
    lift: 0.32,
    d: "M 573 470 C 575 468 576 466 576 464",
  },
  {
    id: "capital-l",
    width: 6.5,
    pace: 610,
    lift: 0.4,
    d: "M 1119 424 C 1142 437 1180 439 1215 428 C 1236 394 1259 361 1282 334 C 1301 314 1322 301 1336 301 C 1353 301 1351 315 1344 331 C 1332 358 1304 386 1272 405 C 1254 416 1235 423 1215 428 C 1198 455 1179 484 1158 512 C 1139 538 1100 578 1072 580 C 1054 582 1046 572 1048 557 C 1051 534 1074 508 1104 500 C 1126 494 1143 501 1158 512 L 1191 541 C 1205 551 1226 548 1242 540",
  },
  {
    id: "first-e",
    width: 6.2,
    pace: 500,
    d: "M 1242 540 C 1256 534 1274 523 1281 513 C 1285 507 1283 503 1277 504 C 1263 506 1249 519 1244 531 C 1239 543 1248 549 1262 549 C 1282 549 1301 543 1318 535",
  },
  {
    id: "second-e",
    width: 6.2,
    pace: 560,
    d: "M 1318 535 C 1330 529 1343 521 1352 514 C 1359 508 1361 502 1356 502 C 1343 502 1327 516 1322 529 C 1318 542 1329 548 1346 548 C 1377 548 1416 541 1453 535 C 1503 527 1552 523 1574 535",
  },
  {
    id: "underline",
    width: 6.2,
    pace: 680,
    lift: 0.42,
    d: "M 458 710 C 568 666 707 646 842 632 C 972 619 1097 607 1209 602 C 1296 598 1376 602 1399 621",
  },
];

export default function IntroOverlay() {
  const [shouldPlay, setShouldPlay] = useState<boolean | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const penRef = useRef<SVGGElement>(null);
  const penLiftRef = useRef<SVGGElement>(null);
  const pathRefs = useRef<Array<SVGPathElement | null>>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const exitedRef = useRef(false);

  useEffect(() => {
    const checkSession = window.setTimeout(() => {
      try {
        setShouldPlay(sessionStorage.getItem(SESSION_KEY) !== "seen");
      } catch {
        setShouldPlay(true);
      }
    }, 0);

    return () => window.clearTimeout(checkSession);
  }, []);

  const finishIntro = useCallback((immediate = false) => {
    if (exitedRef.current) return;
    exitedRef.current = true;
    timelineRef.current?.kill();

    try {
      sessionStorage.setItem(SESSION_KEY, "seen");
    } catch {
      // Storage can be unavailable in privacy-restricted browsing contexts.
    }

    document.documentElement.classList.remove("intro-running");
    const overlay = overlayRef.current;
    const portfolio = document.querySelector<HTMLElement>("#portfolio-root");

    if (!overlay) return;
    if (immediate) {
      gsap.set(overlay, { autoAlpha: 0, pointerEvents: "none", yPercent: -100 });
      if (portfolio) gsap.set(portfolio, { clearProps: "transform,filter" });
      return;
    }

    const exit = gsap.timeline();
    if (portfolio) {
      exit.fromTo(
        portfolio,
        { scale: 0.985, filter: "blur(7px)" },
        { scale: 1, filter: "blur(0px)", duration: 1.05, ease: "power3.out" },
        0,
      );
    }
    exit
      .to(
        overlay,
        {
          yPercent: -100,
          duration: 1.05,
          ease: "power4.inOut",
        },
        0,
      )
      .set(overlay, { autoAlpha: 0, pointerEvents: "none" });
  }, []);

  useLayoutEffect(() => {
    if (shouldPlay === null) return;
    if (!shouldPlay) {
      finishIntro(true);
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      finishIntro(true);
      return;
    }

    const overlay = overlayRef.current;
    const pen = penRef.current;
    const penLift = penLiftRef.current;
    const paths = pathRefs.current.filter(Boolean) as SVGPathElement[];
    if (!overlay || !pen || !penLift || paths.length !== strokes.length) return;

    document.documentElement.classList.add("intro-running");
    try {
      sessionStorage.setItem(SESSION_KEY, "seen");
    } catch {
      // The animation still works if session storage is unavailable.
    }

    const context = gsap.context(() => {
      const lengths = paths.map((path) => path.getTotalLength());
      paths.forEach((path, index) => {
        const length = lengths[index];
        gsap.set(path, {
          strokeDasharray: `${length} ${length + 2}`,
          strokeDashoffset: length,
          opacity: 0,
        });
      });

      const setPen = (path: SVGPathElement, distance: number) => {
        const length = path.getTotalLength();
        const at = Math.max(0, Math.min(length, distance));
        const point = path.getPointAtLength(at);
        pen.setAttribute("transform", `translate(${point.x} ${point.y})`);
      };

      setPen(paths[0], 0);
      gsap.set(pen, { opacity: 0 });
      gsap.set(penLift, { x: 0, y: 0 });

      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        onComplete: () => finishIntro(false),
      });
      timelineRef.current = timeline;

      timeline
        .to(pen, { opacity: 1, duration: 0.4, ease: "power2.out" }, 0.28)
        .fromTo(
          ".intro-kicker",
          { opacity: 0, y: 7 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          0.12,
        );

      paths.forEach((path, index) => {
        const length = lengths[index];
        const config = strokes[index];

        if (index > 0) {
          const previous = paths[index - 1];
          const previousEnd = previous.getPointAtLength(lengths[index - 1]);
          const start = path.getPointAtLength(0);
          const travel = { progress: 0 };
          const travelDuration = config.lift ?? (Math.hypot(start.x - previousEnd.x, start.y - previousEnd.y) > 10 ? 0.2 : 0.04);

          if (travelDuration > 0.05) {
            timeline.to(penLift, { y: -12, duration: 0.1, ease: "power2.out" });
          }

          timeline.to(travel, {
            progress: 1,
            duration: travelDuration,
            ease: "power2.inOut",
            onUpdate: () => {
              const t = travel.progress;
              const arc = Math.sin(Math.PI * t) * Math.min(28, Math.max(7, Math.hypot(start.x - previousEnd.x, start.y - previousEnd.y) * 0.08));
              const x = gsap.utils.interpolate(previousEnd.x, start.x, t);
              const y = gsap.utils.interpolate(previousEnd.y, start.y, t) - arc;
              pen.setAttribute("transform", `translate(${x} ${y})`);
            },
          });

          if (travelDuration > 0.05) {
            timeline.to(penLift, { y: 0, duration: 0.1, ease: "power2.in" });
          }
        }

        const progress = { value: 0 };
        timeline.set(path, { opacity: 1 });
        timeline.to(progress, {
          value: 1,
          duration:
            Math.max(0.2, Math.min(1.75, length / (config.pace ?? 580))) /
            DRAWING_SPEED_MULTIPLIER,
          ease: "power1.inOut",
          onStart: () => setPen(path, 0),
          onUpdate: () => {
            path.style.strokeDashoffset = String(length * (1 - progress.value));
            setPen(path, length * progress.value);
          },
        });
      });

      timeline
        .to(penLift, { y: -18, duration: 0.18, ease: "power2.out" })
        .to(pen, { opacity: 0, duration: 0.35, ease: "power2.out" })
        .to({}, { duration: 0.72 });
    }, overlay);

    return () => {
      context.revert();
      document.documentElement.classList.remove("intro-running");
    };
  }, [finishIntro, shouldPlay]);

  return (
    <div
      id="signature-intro"
      ref={overlayRef}
      className="signature-intro fixed inset-0 z-9999 grid overflow-hidden bg-[#090909] text-white"
      aria-label="Nicholas Lee signature intro"
    >
      <div className="intro-kicker absolute left-5 top-5 z-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-white/48 sm:left-8 sm:top-7">
        <span className="inline-block size-1.5 rounded-full bg-[#d2ff53] shadow-[0_0_14px_#d2ff53]" />
        Creative developer
      </div>

      <svg
        ref={svgRef}
        className="signature-stage h-full w-full"
        viewBox="160 250 1460 520"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-labelledby="signature-title signature-description"
      >
        <title id="signature-title">Nicholas Lee</title>
        <desc id="signature-description">A handwritten signature drawn by a moving fountain pen.</desc>

        <g fill="none" stroke="#f5f2e9" strokeLinecap="round" strokeLinejoin="round">
          {strokes.map((stroke, index) => (
            <path
              key={stroke.id}
              ref={(node) => {
                pathRefs.current[index] = node;
              }}
              data-stroke={stroke.id}
              d={stroke.d}
              strokeWidth={stroke.width ?? 6.2}
            />
          ))}
        </g>

        <g id="writing-pen" ref={penRef} className="will-change-transform" opacity="0">
          <g ref={penLiftRef}>
            <g transform="rotate(-34)">
              <ellipse cx="93" cy="3" rx="65" ry="9" fill="#000" opacity=".32" filter="url(#penBlur)" />
              <path d="M 1 0 L 20 -15 L 43 -9 L 43 9 L 20 15 Z" fill="url(#nibGold)" stroke="#6e542a" strokeWidth="1.2" />
              <path d="M 1 0 L 25 0" fill="none" stroke="#59431f" strokeWidth="1.2" />
              <path d="M 17 -12 C 23 -5 23 5 17 12" fill="none" stroke="#f7dc91" strokeWidth="1" />
              <circle cx="25" cy="0" r="2.6" fill="#1b160d" />
              <path d="M 42 -10 L 57 -8 L 57 8 L 42 10 Z" fill="#d7c9a0" stroke="#594c32" strokeWidth="1" />
              <path d="M 55 -9 L 144 -7 Q 154 -7 158 0 Q 154 7 144 7 L 55 9 Z" fill="url(#penBody)" stroke="#282828" strokeWidth="1.4" />
              <path d="M 66 -5 L 144 -4" stroke="#ffffff" strokeWidth="1.1" opacity=".25" strokeLinecap="round" />
              <path d="M 119 -7 L 142 -17 C 147 -18 150 -16 151 -13 L 151 -7" fill="none" stroke="#c4a45a" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M 146 -7 Q 160 -6 164 0 Q 160 6 146 7 Z" fill="#171717" stroke="#3d3d3d" strokeWidth="1" />
            </g>
          </g>
        </g>

        <defs>
          <linearGradient id="nibGold" x1="0" y1="-1" x2="1" y2="1">
            <stop offset="0" stopColor="#fff2bd" />
            <stop offset=".42" stopColor="#c8a45d" />
            <stop offset=".7" stopColor="#f6dda0" />
            <stop offset="1" stopColor="#725326" />
          </linearGradient>
          <linearGradient id="penBody" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3b3b3b" />
            <stop offset=".45" stopColor="#0c0c0c" />
            <stop offset="1" stopColor="#252525" />
          </linearGradient>
          <filter id="penBlur" x="-30%" y="-200%" width="160%" height="500%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>
      </svg>

      <div className="intro-kicker absolute bottom-5 left-5 text-[9px] uppercase tracking-[0.24em] text-white/35 sm:bottom-7 sm:left-8">
        Digital experiences · Selected work
      </div>

      {shouldPlay && (
        <button
          type="button"
          onClick={() => finishIntro(false)}
          className="intro-kicker absolute bottom-5 right-5 rounded-full border border-white/15 px-4 py-2 text-[9px] uppercase tracking-[0.22em] text-white/45 transition hover:border-white/40 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:bottom-7 sm:right-8"
        >
          Skip intro
        </button>
      )}
    </div>
  );
}
