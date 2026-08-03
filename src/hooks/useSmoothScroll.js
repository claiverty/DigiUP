import { useEffect } from "react";

const navigationKeys = new Set([
  "ArrowDown",
  "ArrowUp",
  "End",
  "Home",
  "PageDown",
  "PageUp",
  " ",
]);

function hasScrollableParent(node) {
  let current = node instanceof Element ? node.parentElement : null;

  while (current && current !== document.body) {
    const styles = window.getComputedStyle(current);
    const canScroll = /(auto|scroll)/.test(styles.overflowY);

    if (canScroll && current.scrollHeight > current.clientHeight) return true;
    current = current.parentElement;
  }

  return false;
}

export default function useSmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const precisePointer = window.matchMedia("(pointer: fine)").matches;

    if (reducedMotion || !precisePointer) return undefined;

    let animationFrame = 0;
    let currentPosition = window.scrollY;
    let targetPosition = window.scrollY;
    let previousFrameTime = 0;

    const stopAnimation = () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      previousFrameTime = 0;
      currentPosition = window.scrollY;
      targetPosition = window.scrollY;
      document.documentElement.classList.remove("smooth-wheel-active");
    };

    const animateScroll = (frameTime) => {
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const elapsed = previousFrameTime
        ? Math.min(frameTime - previousFrameTime, 34)
        : 16;
      const easing = 1 - Math.exp(-elapsed / 215);

      previousFrameTime = frameTime;
      targetPosition = Math.min(Math.max(targetPosition, 0), maxScroll);
      currentPosition += (targetPosition - currentPosition) * easing;

      if (Math.abs(targetPosition - currentPosition) < 0.35) {
        window.scrollTo(0, targetPosition);
        stopAnimation();
        return;
      }

      window.scrollTo(0, currentPosition);
      animationFrame = requestAnimationFrame(animateScroll);
    };

    const handleWheel = (event) => {
      if (
        event.defaultPrevented ||
        event.ctrlKey ||
        event.metaKey ||
        Math.abs(event.deltaX) > Math.abs(event.deltaY) ||
        hasScrollableParent(event.target)
      ) {
        return;
      }

      event.preventDefault();

      const modeMultiplier = event.deltaMode === 1
        ? 32
        : event.deltaMode === 2
          ? window.innerHeight
          : 1;
      const rawDelta = event.deltaY * modeMultiplier;
      const controlledDelta = Math.sign(rawDelta) * Math.min(Math.abs(rawDelta), 140);

      if (!animationFrame) {
        currentPosition = window.scrollY;
        targetPosition = window.scrollY;
        document.documentElement.classList.add("smooth-wheel-active");
        animationFrame = requestAnimationFrame(animateScroll);
      }

      targetPosition += controlledDelta;
    };

    const handleNativeNavigation = (event) => {
      if (navigationKeys.has(event.key)) stopAnimation();
    };

    const handleAnchorNavigation = (event) => {
      if (event.target instanceof Element && event.target.closest('a[href*="#"]')) {
        stopAnimation();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleNativeNavigation);
    document.addEventListener("click", handleAnchorNavigation, true);

    return () => {
      stopAnimation();
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleNativeNavigation);
      document.removeEventListener("click", handleAnchorNavigation, true);
    };
  }, []);
}
