import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useLenis } from 'lenis/react';

const ScrollProgressIndicator = () => {
  const scrollBarRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const lenis = useLenis();

  const scrollToPosition = useCallback(
    (clientY: number) => {
      if (!trackRef.current) return;

      const track = trackRef.current;
      const rect = track.getBoundingClientRect();
      const relativeY = clientY - rect.top;
      const percentage = Math.max(0, Math.min(1, relativeY / rect.height));

      const { scrollHeight, clientHeight } = document.documentElement;
      const scrollableHeight = scrollHeight - clientHeight;
      const targetScroll = percentage * scrollableHeight;

      // Use Lenis scrollTo with faster lerp for responsive but slightly smooth feel
      if (lenis) {
        lenis.scrollTo(targetScroll, { lerp: 0.3, duration: 0.3 });
      } else {
        window.scrollTo({ top: targetScroll, behavior: 'auto' });
      }
    },
    [lenis],
  );

  useEffect(() => {
    const handleScroll = () => {
      if (scrollBarRef.current) {
        const { scrollHeight, clientHeight } = document.documentElement;
        const scrollableHeight = scrollHeight - clientHeight;
        const scrollY = window.scrollY;
        const scrollProgress = (scrollY / scrollableHeight) * 100;

        scrollBarRef.current.style.transform = `translateY(-${100 - scrollProgress}%)`;
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        e.preventDefault();
        scrollToPosition(e.clientY);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.body.style.userSelect = '';
    };

    if (isDragging) {
      document.body.style.userSelect = 'none';
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, scrollToPosition]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    scrollToPosition(e.clientY);
  };

  return (
    <div
      ref={trackRef}
      onMouseDown={handleMouseDown}
      className={`bg-accent fixed top-[50svh] right-[2%] z-10 hidden h-75 w-1.5 -translate-y-1/2 overflow-hidden rounded-full transition-all hover:w-3 sm:block ${
        isDragging ? 'w-3' : ''
      }`}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      <div
        className={`bg-primary pointer-events-none h-full w-full rounded-full ${isDragging ? 'opacity-80' : ''}`}
        ref={scrollBarRef}
      ></div>
    </div>
  );
};

export default ScrollProgressIndicator;
