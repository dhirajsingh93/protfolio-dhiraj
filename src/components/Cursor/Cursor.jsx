import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import './NeonCursor.css';

const NeonCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
    }
  }, []);

  const handleMouseMove = useCallback((e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
    setIsVisible(true);
  }, []);

  const handleMouseDown = useCallback(() => setIsClicking(true), []);
  const handleMouseUp = useCallback(() => setIsClicking(false), []);

  const handleMouseOver = useCallback((e) => {
    const target = e.target;
    if (
      target &&
      target.closest &&
      target.closest('a, button, input, textarea, select, [role="button"], [data-hover="true"], label, .glass-btn, .molten-btn')
    ) {
      setIsHovering(true);
    }
  }, []);

  const handleMouseOut = useCallback((e) => {
    const target = e.target;
    if (
      target &&
      target.closest &&
      target.closest('a, button, input, textarea, select, [role="button"], [data-hover="true"], label, .glass-btn, .molten-btn')
    ) {
      setIsHovering(false);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isTouch) return;

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [
    isTouch,
    handleMouseMove,
    handleMouseDown,
    handleMouseUp,
    handleMouseOver,
    handleMouseOut,
    handleMouseLeave,
    handleMouseEnter,
  ]);

  if (isTouch || !isVisible) {
    return null;
  }

  return (
    <div className="neon-cursor-container" aria-hidden="true">
      {/* 1. Central Core Dot */}
      <motion.div
        className="cursor-main"
        animate={{
          x: position.x - 10,
          y: position.y - 10,
          scale: isClicking ? 0.75 : isHovering ? 1.35 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          damping: 24,
          stiffness: 450,
          mass: 0.3,
        }}
      />

      {/* 2. Trailing Reactive Ring */}
      <motion.div
        className="cursor-trail"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isClicking ? 1.25 : isHovering ? 1.6 : 1,
          borderColor: isHovering ? 'rgb(255, 175, 55)' : 'rgb(236, 101, 23)',
          borderWidth: isHovering ? '2.5px' : '2px',
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          damping: 26,
          stiffness: 220,
          mass: 0.6,
        }}
        initial={false}
      />

      {/* 3. Ambient Neon Glow */}
      <motion.div
        className="cursor-glow"
        animate={{
          x: position.x - 30,
          y: position.y - 30,
          scale: isClicking ? 1.4 : isHovering ? 2.2 : 1,
          opacity: isVisible ? (isHovering ? 0.85 : 0.45) : 0,
        }}
        transition={{
          type: 'spring',
          damping: 32,
          stiffness: 150,
          mass: 0.85,
        }}
        initial={false}
      />
    </div>
  );
};

export default NeonCursor;
