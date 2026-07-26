import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return undefined;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let frameId = null;

    const setPosition = (element, x, y) => {
      element.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const moveCursor = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      setPosition(dot, mouseX, mouseY);
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      setPosition(ring, ringX, ringY);
      frameId = requestAnimationFrame(animateRing);
    };

    const handlePointerOver = (event) => {
      const target = event.target.closest('a, button, .skill-card, .project-item, .project-card, .gallery-image');
      if (!target) return;
      ring.classList.add('cursor-ring--active');
    };

    const handlePointerOut = (event) => {
      const target = event.target.closest('a, button, .skill-card, .project-item, .project-card, .gallery-image');
      if (!target) return;
      ring.classList.remove('cursor-ring--active');
    };

    setPosition(dot, mouseX, mouseY);
    setPosition(ring, ringX, ringY);

    document.addEventListener('mousemove', moveCursor, { passive: true });
    document.addEventListener('mouseover', handlePointerOver);
    document.addEventListener('mouseout', handlePointerOut);
    frameId = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handlePointerOver);
      document.removeEventListener('mouseout', handlePointerOut);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
}
