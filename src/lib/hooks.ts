"use client";
import { useEffect, useState } from "react";

export function useTypingAnimation(
  phrases: string[],
  speed = 100,
  deleteSpeed = 55,
  pause = 1900
) {
  const [display, setDisplay] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    if (waiting) return;
    const current = phrases[phraseIdx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, charIdx + 1);
          setDisplay(next);
          if (charIdx + 1 === current.length) {
            setWaiting(true);
            setTimeout(() => {
              setDeleting(true);
              setWaiting(false);
            }, pause);
          } else {
            setCharIdx((c) => c + 1);
          }
        } else {
          const next = current.slice(0, charIdx - 1);
          setDisplay(next);
          if (charIdx - 1 === 0) {
            setDeleting(false);
            setPhraseIdx((p) => (p + 1) % phrases.length);
            setCharIdx(0);
          } else {
            setCharIdx((c) => c - 1);
          }
        }
      },
      deleting ? deleteSpeed : speed
    );
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx, phrases, speed, deleteSpeed, pause, waiting]);

  return display;
}

export function useMouseParallax() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({
        x: (e.clientX / window.innerWidth - 0.5) * 28,
        y: (e.clientY / window.innerHeight - 0.5) * 28,
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return pos;
}
