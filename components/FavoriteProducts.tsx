import React from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { FadeIn } from './FadeIn';
import { Heart } from 'lucide-react';

interface FavoriteProductsProps {
    products: Product[];
    onProductClick?: (product: Product) => void;
}

export const FavoriteProducts: React.FC<FavoriteProductsProps> = ({ products, onProductClick }) => {
    return (
        <section className="py-20 md:py-32 border-y border-luxury-platinum/40">
            <div className="max-w-[1400px] mx-auto px-6">
                <FadeIn>
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Heart className="w-6 h-6 text-luxury-rose-gold fill-luxury-rose-gold" />
                            <span className="text-xs uppercase tracking-[0.4em] text-luxury-slate">
                                Sản Phẩm Được Chọn Lọc
                            </span>
                            <Heart className="w-6 h-6 text-luxury-rose-gold fill-luxury-rose-gold" />
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-luxury-black mb-6">
                            Yêu Thích <span className="text-luxury-rose-gold italic">Nhất</span>
                        </h2>
                        <p className="text-gray-500 text-sm md:text-base font-light max-w-2xl mx-auto">
                            Những món trang sức được yêu thích nhất từ khách hàng toàn quốc
                        </p>
                    </div>
                </FadeIn>

                {/* Featured Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
                    {products.map((product, index) => (
                        <FadeIn key={product.id} delay={index * 100}>
                            <div className="relative group">
                                {/* Favorite Badge with Rose Gold */}
                                <div className="absolute -top-4 -right-4 z-10 bg-gradient-to-br from-luxury-rose-gold to-luxury-rose-gold-dark text-white p-3 rounded-full shadow-lg border-2 border-luxury-rose-gold-light">
                                    <Heart className="w-5 h-5 fill-white" />
                                </div>

                                {/* Enhanced Border Glow with Rose Gold */}
                                <div className="absolute inset-0 bg-gradient-to-br from-luxury-rose-gold-light/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -m-[2px] rounded shadow-[0_0_30px_rgba(183,110,121,0.4)]" />

                                <ProductCard
                                    product={product}
                                    onClick={() => onProductClick?.(product)}
                                />
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};
