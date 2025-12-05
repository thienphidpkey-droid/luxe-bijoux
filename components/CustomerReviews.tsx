import React, { useState } from 'react';
import { CustomerReview } from '../constants';
import { FadeIn } from './FadeIn';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface CustomerReviewsProps {
    reviews: CustomerReview[];
}

export const CustomerReviews: React.FC<CustomerReviewsProps> = ({ reviews }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextReview = () => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    const currentReview = reviews[currentIndex];

    return (
        <section className="py-12 md:py-16 bg-slate-50/50 border-y border-luxury-platinum/40">
            <div className="max-w-4xl mx-auto px-4 md:px-6">{/* Reduced max-w from 6xl to 4xl */}
                <FadeIn>
                    <div className="text-center mb-8 md:mb-12">{/* Reduced mb from 16 */}
                        <span className="text-xs uppercase tracking-[0.4em] text-luxury-slate mb-3 block">
                            Đánh Giá Khách Hàng
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif text-luxury-black">{/* Reduced from 4xl/5xl */}
                            Khoảnh Khắc <span className="text-luxury-rose-gold italic">Đáng Nhớ</span>
                        </h2>
                    </div>
                </FadeIn>

                <FadeIn delay={200}>
                    <div className="relative">
                        {/* Review Card - Smaller padding and text */}
                        <div className="bg-white border-2 border-luxury-platinum/30 p-4 md:p-8 shadow-lg">{/* Reduced p from 8/12 */}
                            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">{/* Reduced gap */}
                                {/* Avatar - Smaller */}
                                <div className="flex-shrink-0">
                                    <img
                                        src={currentReview.avatar}
                                        alt={currentReview.name}
                                        className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-luxury-rose-gold/30"
                                    />
                                </div>

                                {/* Review Content */}
                                <div className="flex-grow">
                                    {/* Stars - Smaller */}
                                    <div className="flex gap-1 mb-3">
                                        {[...Array(currentReview.rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-4 h-4 fill-luxury-rose-gold text-luxury-rose-gold"
                                            />
                                        ))}
                                    </div>

                                    {/* Review Text - Smaller */}
                                    <p className="text-sm md:text-base text-gray-700 font-light leading-relaxed mb-4 italic">{/* Reduced from lg/xl */}
                                        "{currentReview.review}"
                                    </p>

                                    {/* Reviewer Info - Smaller */}
                                    <div className="border-t border-luxury-platinum/30 pt-3">
                                        <p className="font-serif text-base text-luxury-black mb-1">{/* Reduced from lg */}
                                            {currentReview.name}
                                        </p>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider">
                                            {currentReview.location} • {currentReview.date}
                                        </p>
                                        <p className="text-xs text-luxury-slate mt-1 tracking-wide">
                                            Sản phẩm: {currentReview.product}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Buttons - Smaller, with rose gold */}
                        <div className="flex justify-center gap-3 mt-6">
                            <button
                                onClick={prevReview}
                                className="p-2 md:p-3 border border-luxury-rose-gold/40 hover:bg-luxury-rose-gold hover:text-white transition-all"
                                aria-label="Previous review"
                            >
                                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                            </button>
                            <button
                                onClick={nextReview}
                                className="p-2 md:p-3 border border-luxury-rose-gold/40 hover:bg-luxury-rose-gold hover:text-white transition-all"
                                aria-label="Next review"
                            >
                                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                            </button>
                        </div>

                        {/* Dots Indicator - Rose gold */}
                        <div className="flex justify-center gap-2 mt-4">
                            {reviews.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                            ? 'bg-luxury-rose-gold w-8'
                                            : 'bg-luxury-platinum/40'
                                        }`}
                                    aria-label={`Go to review ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};
