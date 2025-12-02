import React, { useEffect, useState } from 'react';

export const ParallaxBackground: React.FC = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffset(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden bg-white">
            {/* Base Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-100 opacity-100" />
            
            {/* Moving Orbs - Parallax Effect - Cool Silver Tones */}
            <div 
                className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-slate-200/40 rounded-full blur-[120px] mix-blend-multiply transition-transform duration-75 ease-out"
                style={{ transform: `translateY(${offset * 0.2}px)` }}
            />
             <div 
                className="absolute top-[30%] right-[-10%] w-[50vw] h-[50vw] bg-gray-100/60 rounded-full blur-[100px] mix-blend-multiply transition-transform duration-75 ease-out"
                style={{ transform: `translateY(${offset * 0.1}px)` }}
            />
            <div 
                className="absolute bottom-[-10%] left-[20%] w-[70vw] h-[70vw] bg-luxury-platinum/30 rounded-full blur-[90px] mix-blend-multiply transition-transform duration-75 ease-out"
                style={{ transform: `translateY(${-offset * 0.1}px)` }}
            />

            {/* Grain/Noise Overlay */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
        </div>
    );
};