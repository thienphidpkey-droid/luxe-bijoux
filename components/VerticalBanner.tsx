import React from 'react';
import { FadeIn } from './FadeIn';

interface VerticalBannerProps {
    imageUrl: string;
    title?: string;
    subtitle?: string;
}

export const VerticalBanner: React.FC<VerticalBannerProps> = ({
    imageUrl,
    title = 'COLLECTION',
    subtitle = 'Special Offer'
}) => {
    return (
        <FadeIn>
            <div className="relative h-full min-h-[550px] overflow-hidden border-2 border-luxury-platinum/40 group cursor-pointer">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    {/* Top Text */}
                    <div className="mb-auto pt-8">
                        <span className="text-xs uppercase tracking-[0.4em] text-white/80 font-light">
                            {subtitle}
                        </span>
                    </div>

                    {/* Center Title - Vertical */}
                    <div className="flex-grow flex items-center justify-center">
                        <h2
                            className="text-4xl md:text-5xl font-serif text-white tracking-wider"
                            style={{
                                writingMode: 'vertical-rl',
                                textOrientation: 'mixed'
                            }}
                        >
                            {title}
                        </h2>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mb-8">
                        <button className="text-xs uppercase tracking-[0.3em] text-white border border-white/40 px-6 py-3 hover:bg-white hover:text-luxury-black transition-all backdrop-blur-sm bg-white/10">
                            Xem thêm
                        </button>
                    </div>
                </div>

                {/* Decorative Border */}
                <div className="absolute inset-0 border-2 border-white/10 pointer-events-none" />
            </div>
        </FadeIn>
    );
};
