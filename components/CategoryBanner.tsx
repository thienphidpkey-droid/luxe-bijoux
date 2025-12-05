import React from 'react';

interface CategoryBannerProps {
    title: string;
    subtitle?: string;
    imageUrl: string;
    id?: string;
}

export const CategoryBanner: React.FC<CategoryBannerProps> = ({
    title,
    subtitle,
    imageUrl,
    id
}) => {
    return (
        <div
            id={id}
            className="relative w-full h-[300px] md:h-[400px] overflow-hidden border border-luxury-platinum/40 group">{/* Reduced height for mobile */}
            {/* Background Image - Fixed attachment only on desktop */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundAttachment: window.innerWidth >= 768 ? 'fixed' : 'scroll' // Fix parallax on desktop only
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />

            {/* Glassmorphism Content Container - Smaller padding on mobile */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="backdrop-blur-sm bg-white/10 border border-white/20 px-6 py-4 md:px-12 md:py-8 shadow-2xl">{/* Reduced mobile padding */}
                    {subtitle && (
                        <p className="text-xs uppercase tracking-[0.35em] text-white/90 mb-2 text-center font-light">
                            {subtitle}
                        </p>
                    )}
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white text-center tracking-tight">{/* Reduced mobile size */}
                        {title}
                    </h2>
                </div>
            </div>

            {/* Bottom Border Accent - Rose gold */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-luxury-rose-gold to-transparent" />
        </div>
    );
};
