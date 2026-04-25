import { useEffect, useMemo, useState } from "react";

const PHRASES = [
  "Software Engineer",
  "Performance Engineer",
  "Systems Programmer",
  "AI Engineer",
  "Web Developer",
  "Founding Engineer",
  "Product Minded",
] as const;

type Phase = "typing" | "holding" | "deleting";

export default function Phrases({ startDelay = 0 }: { startDelay?: number }) {
  const phrases = PHRASES;

  const [started, setStarted] = useState(startDelay === 0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (started || startDelay === 0) return;
    const id = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(id);
  }, [startDelay, started]);

  const currentPhrase = phrases[currentIndex] ?? "";
  const displayText = useMemo(
    () => currentPhrase.slice(0, subIndex),
    [currentPhrase, subIndex],
  );

  useEffect(() => {
    const TYPE_MS = 80;
    const DELETE_MS = 40;
    const HOLD_MS = 1400;
    const BETWEEN_MS = 250;

    let delay = TYPE_MS;

    if (phase === "typing") {
      if (subIndex >= currentPhrase.length) {
        delay = HOLD_MS;
      } else {
        delay = TYPE_MS;
      }
    }

    if (phase === "deleting") {
      delay = subIndex === 0 ? BETWEEN_MS : DELETE_MS;
    }

    if (phase === "holding") {
      delay = HOLD_MS;
    }

    if (!started) return;

    const timeout = setTimeout(() => {
      if (phase === "typing") {
        if (subIndex < currentPhrase.length) {
          setSubIndex((value) => value + 1);
          return;
        }
        setPhase("deleting");
        return;
      }

      if (phase === "deleting") {
        if (subIndex > 0) {
          setSubIndex((value) => value - 1);
          return;
        }
        setCurrentIndex((value) => (value + 1) % phrases.length);
        setPhase("typing");
        return;
      }

      // holding
      setPhase("deleting");
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentPhrase, phase, phrases.length, subIndex, started]);

  // Cursor blink
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="relative flex justify-center text-3xl opacity-80 sm:text-4xl lg:text-5xl">
      <div className="relative">
        <span className="min-h-1lh">{displayText || "\u200B"}</span>
        <span
          aria-hidden="true"
          className={`absolute ${showCursor ? "opacity-100" : "opacity-0"} ml-0.5`}
        >
          |
        </span>
      </div>
    </div>
  );
}
