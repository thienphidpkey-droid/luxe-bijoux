import React from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { CategoryBanner } from './CategoryBanner';
import { VerticalBanner } from './VerticalBanner';
import { FadeIn } from './FadeIn';
import { ArrowRight } from 'lucide-react';

interface ProductSectionProps {
    title: string;
    subtitle?: string;
    bannerImage: string;
    verticalBannerImage?: string;
    products: Product[];
    sectionId?: string;
    onViewAll?: () => void;
    onProductClick?: (product: Product) => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
    title,
    subtitle,
    bannerImage,
    verticalBannerImage,
    products,
    sectionId,
    onViewAll,
    onProductClick
}) => {
    // Get first 8 products for display (4 products x 2 rows)
    const displayProducts = products.slice(0, 8);

    return (
        <section className="mb-2">{/* Minimal spacing ~8px */}
            {/* Category Banner */}
            <FadeIn>
                <CategoryBanner
                    title={title}
                    subtitle={subtitle}
                    imageUrl={bannerImage}
                    id={sectionId}
                />
            </FadeIn>

            {/* Products Grid with Vertical Banner */}
            {/* Desktop: 5 columns total (1 banner + 4 products) | Mobile: 2-3 columns */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                {/* Vertical Banner - Hidden on mobile, takes 1 column and spans exactly 2 rows on desktop */}
                {verticalBannerImage && (
                    <div className="hidden lg:block lg:row-span-2">
                        <VerticalBanner
                            imageUrl={verticalBannerImage}
                            title={title}
                            subtitle="Special Collection"
                        />
                    </div>
                )}

                {/* Products Grid - 2 cols mobile, 3 cols tablet, 4 cols desktop (8 products = 4x2) */}
                {displayProducts.map((product, index) => (
                    <FadeIn key={product.id} delay={index * 80}>
                        <ProductCard
                            product={product}
                            onClick={() => onProductClick?.(product)}
                        />
                    </FadeIn>
                ))}
            </div>

            {/* View All Button - Smaller and closer to products */}
            <FadeIn delay={400}>
                <div className="mt-6 flex justify-center">{/* Reduced from mt-16 */}
                    <button
                        onClick={onViewAll}
                        className="group flex items-center gap-2 px-6 py-2 bg-transparent border border-luxury-rose-gold/40 text-luxury-rose-gold text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-luxury-rose-gold hover:text-white hover:border-luxury-rose-gold transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-luxury-rose-gold/20"
                    >
                        Xem tất cả {title}
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </FadeIn>
        </section>
    );
};
