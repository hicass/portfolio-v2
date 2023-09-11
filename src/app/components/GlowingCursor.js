import { useState, useEffect } from 'react'

export default function GlowingCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
        setPosition({ x: e.pageX - window.scrollX, y: e.pageY - window.scrollY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className='glowing-cursor'
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    ></div>
  );
}
