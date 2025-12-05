import React from 'react';
import { Product } from '../types';
import { ArrowLeft, ShoppingBag, Heart, Share2, Package, Shield, Truck, X } from 'lucide-react';

interface ProductDetailProps {
    product: Product;
    onBack: () => void;
    onOrder: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onOrder }) => {
    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                onClick={onBack}
            />

            {/* Modal Popup */}
            <div className="fixed inset-4 md:inset-8 lg:inset-16 bg-white z-50 overflow-y-auto border-2 border-luxury-platinum/40 shadow-2xl">
                {/* Header with Close Button */}
                <div className="sticky top-0 bg-white border-b border-luxury-platinum/40 z-10">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
                        <button
                            onClick={onBack}
                            className="flex items-center gap-2 text-luxury-black hover:text-luxury-rose-gold transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                            <span className="text-xs md:text-sm uppercase tracking-wider">Quay lại</span>
                        </button>
                        <div className="flex items-center gap-3 md:gap-4">
                            <button className="p-2 hover:bg-luxury-rose-gold-light/20 rounded-full transition-colors">
                                <Heart className="w-4 h-4 md:w-5 md:h-5 text-luxury-rose-gold" />
                            </button>
                            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                                <Share2 className="w-4 h-4 md:w-5 md:h-5" />
                            </button>
                            <button
                                onClick={onBack}
                                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                            >
                                <X className="w-4 h-4 md:w-5 md:h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                        {/* Image */}
                        <div className="relative">
                            <div className="border-2 border-luxury-platinum/40 rounded-sm overflow-hidden bg-white shadow-lg">
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="text-xs uppercase tracking-wider text-white bg-gradient-to-r from-luxury-rose-gold to-luxury-rose-gold-dark px-3 md:px-4 py-1 md:py-2">
                                        {product.category}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Info */}
                        <div>
                            <div className="mb-6">
                                <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-3">
                                    <span className="bg-gradient-to-r from-luxury-rose-gold to-luxury-rose-gold-dark bg-clip-text text-transparent">
                                        {product.name}
                                    </span>
                                </h1>
                                <p className="text-base md:text-lg text-gray-600 font-light mb-4">
                                    {product.shortDescription}
                                </p>

                                {/* Price */}
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-2xl md:text-3xl font-bold text-luxury-rose-gold">
                                        {product.price}
                                    </span>
                                    <span className="text-lg md:text-xl text-gray-400 line-through">
                                        {product.originalPrice}
                                    </span>
                                    <span className="text-xs bg-gradient-to-r from-luxury-rose-gold to-luxury-rose-gold-dark text-white px-2 py-1 rounded-sm">
                                        GIẢM GIÁ
                                    </span>
                                </div>

                                {/* Description */}
                                <div className="border-t border-b border-luxury-platinum/40 py-4 mb-6">
                                    <h3 className="text-xs uppercase tracking-wider text-luxury-slate mb-2">
                                        Mô tả sản phẩm
                                    </h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        {product.fullDescription}
                                    </p>
                                </div>

                                {/* Features */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                                    <div className="flex items-start gap-2 p-3 border border-luxury-platinum/30 rounded-sm hover:border-luxury-rose-gold-light transition-colors">
                                        <Package className="w-4 h-4 text-luxury-rose-gold flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="text-[10px] font-bold uppercase tracking-wider mb-0.5">Giao hàng nhanh</h4>
                                            <p className="text-[10px] text-gray-600">Miễn phí ship toàn quốc</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2 p-3 border border-luxury-platinum/30 rounded-sm hover:border-luxury-rose-gold-light transition-colors">
                                        <Shield className="w-4 h-4 text-luxury-rose-gold flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="text-[10px] font-bold uppercase tracking-wider mb-0.5">Bảo hành</h4>
                                            <p className="text-[10px] text-gray-600">12 tháng đổi trả</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2 p-3 border border-luxury-platinum/30 rounded-sm hover:border-luxury-rose-gold-light transition-colors">
                                        <Truck className="w-4 h-4 text-luxury-rose-gold flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="text-[10px] font-bold uppercase tracking-wider mb-0.5">Chất lượng</h4>
                                            <p className="text-[10px] text-gray-600">Bạc S925 chính hãng</p>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <button
                                        onClick={onOrder}
                                        className="flex-1 bg-gradient-to-r from-luxury-rose-gold to-luxury-rose-gold-dark text-white py-3 px-6 text-xs font-bold uppercase tracking-wider hover:from-luxury-rose-gold-dark hover:to-luxury-rose-gold transition-all border-2 border-luxury-rose-gold flex items-center justify-center gap-2 shadow-lg shadow-luxury-rose-gold/30"
                                    >
                                        <ShoppingBag className="w-4 h-4" />
                                        Đặt hàng ngay
                                    </button>
                                    <button
                                        className="flex-1 bg-transparent border-2 border-luxury-rose-gold text-luxury-rose-gold py-3 px-6 text-xs font-bold uppercase tracking-wider hover:bg-luxury-rose-gold hover:text-white transition-all"
                                    >
                                        Liên hệ tư vấn
                                    </button>
                                </div>

                                {/* Contact Info */}
                                <div className="mt-6 p-4 bg-gradient-to-br from-luxury-rose-gold-light/10 to-transparent border border-luxury-rose-gold-light/30 rounded-sm">
                                    <h3 className="text-xs uppercase tracking-wider text-luxury-rose-gold-dark mb-2">
                                        Thông tin liên hệ
                                    </h3>
                                    <div className="space-y-1 text-xs text-gray-700">
                                        <p>📞 Hotline: <span className="font-bold text-luxury-rose-gold">1900 xxxx</span></p>
                                        <p>📧 Email: <span className="font-bold">contact@luxebijoux.vn</span></p>
                                        <p>🏪 Showroom: Hà Nội • TP.HCM • Đà Nẵng</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
