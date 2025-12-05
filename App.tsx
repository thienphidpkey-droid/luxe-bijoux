import React, { useState } from 'react';
import { PRODUCTS, FEATURED_PRODUCTS, CUSTOMER_REVIEWS } from './constants';
import { Product } from './types';
import { ParallaxBackground } from './components/ParallaxBackground';
import { FadeIn } from './components/FadeIn';
import { VerticalShowcase } from './components/VerticalShowcase';
import { ProductSection } from './components/ProductSection';
import { FavoriteProducts } from './components/FavoriteProducts';
import { CustomerReviews } from './components/CustomerReviews';
import { ProductDetail } from './components/ProductDetail';
import { ChevronDown, ShoppingBag, Menu, Search, X } from 'lucide-react';

const Navbar: React.FC<{ onBackToHome?: () => void }> = ({ onBackToHome }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    onBackToHome?.(); // Go back to home first if viewing product detail
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsMobileMenuOpen(false);
      }
    }, 100);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 bg-gradient-to-b from-white via-white/80 to-transparent backdrop-blur-[1px] border-b border-luxury-platinum/20">
        <div
          className="text-2xl font-serif text-luxury-black tracking-widest cursor-pointer"
          onClick={onBackToHome}
        >
          LUXE <span className="text-luxury-silver font-light italic">BIJOUX</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.25em] text-gray-500 font-sans font-medium">
          <button onClick={onBackToHome} className="hover:text-luxury-rose-gold transition-colors">
            Trang chủ
          </button>
          <button onClick={() => scrollToSection('favorites')} className="hover:text-luxury-rose-gold transition-colors">
            Yêu thích
          </button>
          <button onClick={() => scrollToSection('necklaces-1')} className="hover:text-luxury-rose-gold transition-colors">
            Dây chuyền
          </button>
          <button onClick={() => scrollToSection('bracelets')} className="hover:text-luxury-rose-gold transition-colors">
            Vòng tay
          </button>
          <button onClick={() => scrollToSection('mens-rings')} className="hover:text-luxury-rose-gold transition-colors">
            Nhẫn nam
          </button>
          <button onClick={() => scrollToSection('womens-rings')} className="hover:text-luxury-rose-gold transition-colors">
            Nhẫn nữ
          </button>
          <button onClick={() => scrollToSection('earrings')} className="hover:text-luxury-rose-gold transition-colors">
            Bông tai
          </button>
          <button onClick={() => scrollToSection('reviews')} className="hover:text-luxury-rose-gold transition-colors">
            Đánh giá
          </button>
        </div>

        <div className="flex items-center gap-8 text-luxury-black/80">
          <Search className="w-4 h-4 cursor-pointer hover:text-luxury-slate transition-colors" />
          <ShoppingBag className="w-4 h-4 cursor-pointer hover:text-luxury-slate transition-colors" />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-[80px] left-0 right-0 z-40 bg-white border-b border-luxury-platinum/40 shadow-xl">
          <div className="flex flex-col gap-4 px-6 py-6 text-xs uppercase tracking-[0.25em] text-gray-600 font-medium">
            <button onClick={onBackToHome} className="text-left hover:text-luxury-rose-gold transition-colors">
              Trang chủ
            </button>
            <button onClick={() => scrollToSection('favorites')} className="text-left hover:text-luxury-rose-gold transition-colors">
              Yêu thích
            </button>
            <button onClick={() => scrollToSection('necklaces-1')} className="text-left hover:text-luxury-rose-gold transition-colors">
              Dây chuyền
            </button>
            <button onClick={() => scrollToSection('bracelets')} className="text-left hover:text-luxury-rose-gold transition-colors">
              Vòng tay
            </button>
            <button onClick={() => scrollToSection('mens-rings')} className="text-left hover:text-luxury-rose-gold transition-colors">
              Nhẫn nam
            </button>
            <button onClick={() => scrollToSection('womens-rings')} className="text-left hover:text-luxury-rose-gold transition-colors">
              Nhẫn nữ
            </button>
            <button onClick={() => scrollToSection('earrings')} className="text-left hover:text-luxury-rose-gold transition-colors">
              Bông tai
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-left hover:text-luxury-rose-gold transition-colors">
              Đánh giá
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const Hero: React.FC = () => (
  <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20">
    <div className="max-w-7xl mx-auto w-full z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column */}
        <FadeIn className="text-center lg:text-left">
          <div className="mb-6 inline-block">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-luxury-slate border-b border-luxury-silver/40 pb-3">
              Bộ Sưu Tập Mùa Đông 2024
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-serif text-luxury-black mb-8 leading-[0.9] tracking-tight">
            BẠC <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-luxury-rose-gold via-luxury-rose-gold-light to-luxury-silver italic">
              S925
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-sans font-light tracking-wide max-w-xl lg:mx-0 mx-auto mb-12 leading-relaxed">
            Trang sức bạc cao cấp S925. <br />
            <span className="text-luxury-black mt-2 block">Thiết kế hiện đại cho người Việt.</span>
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center lg:justify-start items-center">
            <button className="px-10 py-4 bg-luxury-black text-white text-xs font-bold uppercase tracking-[0.25em] hover:bg-luxury-slate transition-colors shadow-[0_10px_30px_rgba(0,0,0,0.1)] border-2 border-luxury-black">
              Xem bộ sưu tập
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-luxury-black/20 text-luxury-black text-xs font-bold uppercase tracking-[0.25em] hover:bg-luxury-black hover:text-white transition-all">
              Lookbook
            </button>
          </div>
        </FadeIn>

        {/* Right Column */}
        <FadeIn delay={200} className="flex justify-center lg:justify-end">
          <VerticalShowcase />
        </FadeIn>
      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
      <ChevronDown className="text-luxury-black w-5 h-5" />
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="bg-slate-50 py-24 px-6 border-t-2 border-luxury-platinum/40">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
      <div>
        <div className="text-2xl font-serif text-luxury-black tracking-widest mb-6">
          LUXE <span className="text-luxury-rose-gold italic">BIJOUX</span>
        </div>
        <p className="text-gray-500 text-xs tracking-widest uppercase max-w-sm leading-7">
          Trang sức bạc S925 cao cấp từ năm 2024. <br />
          Hà Nội • TP.HCM • Đà Nẵng
        </p>
      </div>
      <div className="flex flex-col md:items-end gap-6">
        <div className="flex gap-8 text-xs text-gray-400 uppercase tracking-[0.2em] font-medium">
          <a href="#" className="hover:text-luxury-black transition-colors">Tư vấn</a>
          <a href="#" className="hover:text-luxury-black transition-colors">Cửa hàng</a>
          <a href="#" className="hover:text-luxury-black transition-colors">Chính sách</a>
        </div>
        <p className="text-gray-400 text-[10px] tracking-wider">© 2024 Luxe Bijoux. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Get products by category
  const necklaces = PRODUCTS.filter(p => p.category === 'Necklaces');
  const bracelets = PRODUCTS.filter(p => p.category === 'Bracelets');
  const mensRings = PRODUCTS.filter(p => p.category === 'Mens-Rings');
  const womensRings = PRODUCTS.filter(p => p.category === 'Womens-Rings');
  const earrings = PRODUCTS.filter(p => p.category === 'Earrings');

  // Get featured products
  const favoriteProducts = PRODUCTS.filter(p => FEATURED_PRODUCTS.includes(p.id));

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setSelectedProduct(null);
  };

  const handleOrder = () => {
    alert(`Đặt hàng: ${selectedProduct?.name}\nGiá: ${selectedProduct?.price}\n\nCảm ơn bạn đã đặt hàng! Chúng tôi sẽ liên hệ với bạn sớm nhất.`);
  };

  // Show product detail if selected
  if (selectedProduct) {
    return (
      <ProductDetail
        product={selectedProduct}
        onBack={handleBackToHome}
        onOrder={handleOrder}
      />
    );
  }

  return (
    <div className="relative min-h-screen text-luxury-black font-sans selection:bg-luxury-silver selection:text-white">
      <style dangerouslySetInnerHTML={{
        __html: `
        html {
          scroll-behavior: smooth;
        }
      `}} />

      <ParallaxBackground />
      <Navbar onBackToHome={handleBackToHome} />

      <Hero />

      <main className="max-w-[1400px] mx-auto px-6 py-20 md:py-32">
        {/* Favorite Products Section */}
        <div id="favorites">
          <FavoriteProducts
            products={favoriteProducts}
            onProductClick={handleProductClick}
          />
        </div>

        {/* Necklaces Section #1 */}
        <ProductSection
          sectionId="necklaces-1"
          title="DÂY CHUYỀN"
          subtitle="Vẻ Đẹp Vượt Thời Gian"
          bannerImage="https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=1600&auto=format&fit=crop"
          verticalBannerImage="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600&auto=format&fit=crop"
          products={necklaces.slice(0, 6)}
          onViewAll={() => console.log('View all necklaces')}
          onProductClick={handleProductClick}
        />

        {/* Bracelets Section */}
        <ProductSection
          sectionId="bracelets"
          title="VÒNG TAY"
          subtitle="Phong Cách Tay"
          bannerImage="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1600&auto=format&fit=crop"
          verticalBannerImage="https://images.unsplash.com/photo-1602751584552-8ba420552259?q=80&w=600&auto=format&fit=crop"
          products={bracelets}
          onViewAll={() => console.log('View all bracelets')}
          onProductClick={handleProductClick}
        />

        {/* Men's Rings Section */}
        <ProductSection
          sectionId="mens-rings"
          title="NHẪN NAM"
          subtitle="Mạnh Mẽ & Cá Tính"
          bannerImage="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1600&auto=format&fit=crop"
          verticalBannerImage="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=600&auto=format&fit=crop"
          products={mensRings}
          onViewAll={() => console.log('View all men\'s rings')}
          onProductClick={handleProductClick}
        />

        {/* Customer Reviews */}
        <div id="reviews">
          <CustomerReviews reviews={CUSTOMER_REVIEWS} />
        </div>

        {/* Women's Rings Section */}
        <ProductSection
          sectionId="womens-rings"
          title="NHẪN NỮ"
          subtitle="Thanh Lịch & Quyến Rũ"
          bannerImage="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1600&auto=format&fit=crop"
          verticalBannerImage="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600&auto=format&fit=crop"
          products={womensRings}
          onViewAll={() => console.log('View all women\'s rings')}
          onProductClick={handleProductClick}
        />

        {/* Necklaces Section #2 */}
        <ProductSection
          sectionId="necklaces-2"
          title="DÂY CHUYỀN CAO CẤP"
          subtitle="Bộ Sưu Tập Độc Quyền"
          bannerImage="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1600&auto=format&fit=crop"
          verticalBannerImage="https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=600&auto=format&fit=crop"
          products={necklaces.slice(8, 14)}
          onViewAll={() => console.log('View all designer necklaces')}
          onProductClick={handleProductClick}
        />

        {/* Earrings Section */}
        <ProductSection
          sectionId="earrings"
          title="BÔNG TAI"
          subtitle="Rạng Rỡ & Duyên Dáng"
          bannerImage="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1600&auto=format&fit=crop"
          verticalBannerImage="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop"
          products={earrings}
          onViewAll={() => console.log('View all earrings')}
          onProductClick={handleProductClick}
        />
      </main>

      <Footer />
    </div>
  );
}