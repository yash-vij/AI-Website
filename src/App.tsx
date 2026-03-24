import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Menu, X, Star, ArrowRight, ShieldCheck, Zap, Leaf, Instagram, Twitter, Youtube, Check } from 'lucide-react';

// --- Types ---
interface Product {
  id: string;
  name: string;
  price: number;
  flavor: string;
  image: string;
  badge?: string;
  rating: number;
  reviews: number;
}

// --- Mock Data ---
const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Elfbar BC5000',
    price: 19.99,
    flavor: 'Blue Razz Ice',
    image: 'https://images.unsplash.com/photo-1613506759364-df2f3f8ee02e?auto=format&fit=crop&q=80&w=800',
    badge: '5000 Puffs',
    rating: 4.9,
    reviews: 4240
  },
  {
    id: '2',
    name: 'iGet Legend',
    price: 24.99,
    flavor: 'Blackberry Ice',
    image: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?auto=format&fit=crop&q=80&w=800',
    badge: '4000 Puffs',
    rating: 4.8,
    reviews: 2850
  },
  {
    id: '3',
    name: 'iGet Bar',
    price: 22.99,
    flavor: 'Strawberry Kiwi',
    image: 'https://images.unsplash.com/photo-1589152121593-948a30bc633a?auto=format&fit=crop&q=80&w=800',
    badge: '3500 Puffs',
    rating: 5.0,
    reviews: 3100
  }
];

// --- Components ---

const AgeVerification = ({ onVerify }: { onVerify: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[100] bg-brand-black flex items-center justify-center p-6 text-center"
    >
      <div className="max-w-md w-full space-y-8">
        <h1 className="text-4xl md:text-6xl font-display uppercase tracking-tighter">PuffStuff</h1>
        <div className="space-y-4">
          <p className="text-xl font-medium">Are you of legal age to vape?</p>
          <p className="text-zinc-400 text-sm">By entering this site, you agree that you are 21+ (or the legal age in your jurisdiction) and agree to our Terms of Service.</p>
        </div>
        <div className="flex flex-col gap-3">
          <button 
            onClick={onVerify}
            className="w-full py-4 bg-brand-purple hover:bg-purple-600 transition-colors font-bold uppercase tracking-widest"
          >
            I am 21+ Enter
          </button>
          <button className="w-full py-4 border border-zinc-800 hover:bg-zinc-900 transition-colors font-bold uppercase tracking-widest text-zinc-500">
            Exit
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-brand-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button onClick={() => setIsMenuOpen(true)} className="lg:hidden">
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-display uppercase tracking-tighter">PuffStuff</h1>
          <div className="hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-zinc-400">
            <a href="#" className="text-white hover:text-brand-purple transition-colors">Elfbar</a>
            <a href="#" className="hover:text-brand-purple transition-colors">iGet Vapes</a>
            <a href="#" className="hover:text-brand-purple transition-colors">Best Sellers</a>
            <a href="#" className="hover:text-brand-purple transition-colors">Support</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="relative">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-brand-purple text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-brand-black p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <h1 className="text-2xl font-display uppercase tracking-tighter">PuffStuff</h1>
              <button onClick={() => setIsMenuOpen(false)}><X className="w-8 h-8" /></button>
            </div>
            <div className="flex flex-col gap-8 text-4xl font-display uppercase tracking-tighter">
              <a href="#" onClick={() => setIsMenuOpen(false)}>Elfbar</a>
              <a href="#" onClick={() => setIsMenuOpen(false)}>iGet Vapes</a>
              <a href="#" onClick={() => setIsMenuOpen(false)}>Best Sellers</a>
              <a href="#" onClick={() => setIsMenuOpen(false)}>Support</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1613506759364-df2f3f8ee02e?auto=format&fit=crop&q=80&w=1920" 
          alt="Elfbar Hero" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/50" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-purple/20 border border-brand-purple/30 rounded-full text-brand-purple text-xs font-bold uppercase tracking-widest mb-6">
            <Zap className="w-3 h-3 fill-current" />
            Elfbar & iGet Official Stockist
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display uppercase leading-[0.85] tracking-tighter mb-8">
            The Ultimate <br />
            <span className="text-brand-purple">Vape</span> <br />
            Experience.
          </h1>
          <p className="text-xl text-zinc-400 max-w-xl mb-10 leading-relaxed">
            Authentic Elfbar BC5000 and iGet Legend series. 5000+ Puffs. Dual Mesh Coils. Rechargeable. The smoothest hit in the game.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-10 py-5 bg-white text-brand-black font-bold uppercase tracking-widest hover:bg-brand-purple hover:text-white transition-all flex items-center justify-center gap-2 group">
              Shop Elfbar
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 border border-white/20 hover:bg-white/5 transition-all font-bold uppercase tracking-widest flex items-center justify-center">
              Shop iGet
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-6 right-6 flex justify-between items-end">
        <div className="hidden md:flex items-center gap-4">
          <div className="flex -space-x-2">
            {[1,2,3,4].map(i => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-black bg-zinc-800 flex items-center justify-center overflow-hidden">
                <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
              </div>
            ))}
          </div>
          <div className="text-sm">
            <div className="flex items-center gap-1 text-yellow-400">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
            </div>
            <p className="font-bold">50k+ Happy Puffers</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="w-px h-24 bg-gradient-to-t from-white to-transparent" />
          <p className="text-[10px] uppercase tracking-[0.3em] vertical-text transform rotate-180">Scroll to Explore</p>
        </div>
      </div>
    </section>
  );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group bg-brand-zinc border border-white/5 p-4 rounded-2xl relative overflow-hidden"
    >
      {product.badge && (
        <div className="absolute top-6 left-6 z-10 bg-white text-brand-black text-[10px] font-bold px-2 py-1 uppercase tracking-widest rounded-sm">
          {product.badge}
        </div>
      )}
      <div className="aspect-square mb-6 overflow-hidden rounded-xl bg-brand-black">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-display uppercase tracking-tight">{product.name}</h3>
            <p className="text-zinc-500 text-sm">{product.flavor}</p>
          </div>
          <p className="text-xl font-bold">${product.price}</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <div className="flex items-center gap-0.5 text-yellow-500">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className={`w-3 h-3 ${i <= Math.floor(product.rating) ? 'fill-current' : 'opacity-30'}`} />
            ))}
          </div>
          <span className="font-bold text-white">{product.rating}</span>
          <span>({product.reviews} reviews)</span>
        </div>
        <button className="w-full py-4 mt-4 bg-white text-brand-black font-bold uppercase tracking-widest text-xs hover:bg-brand-purple hover:text-white transition-all opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
          Quick Add
        </button>
      </div>
    </motion.div>
  );
};

const BestSellers = () => {
  return (
    <section className="py-24 bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl uppercase tracking-tighter mb-4">The Best <br /> Sellers</h2>
            <p className="text-zinc-400 max-w-md">Our community's favorites. These are the flavors that defined a movement.</p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-purple hover:text-white transition-colors">
            View All Products <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const items = [
    { icon: Zap, title: "Instant Hit", desc: "Proprietary mesh coil tech for zero-lag vapor delivery." },
    { icon: ShieldCheck, title: "Lab Tested", desc: "Every batch is tested for purity and safety in our US labs." },
    { icon: Leaf, title: "Eco-Friendly", desc: "Recycled aluminum bodies and a free recycling program." }
  ];

  return (
    <section className="py-24 bg-brand-zinc border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((item, i) => (
            <div key={i} className="space-y-4">
              <div className="w-12 h-12 bg-brand-purple/10 border border-brand-purple/20 rounded-xl flex items-center justify-center text-brand-purple">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display uppercase tracking-tight">{item.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Lifestyle = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-4xl md:text-6xl uppercase tracking-tighter mb-4">Join the <br /> Rebellion</h2>
        <p className="text-zinc-400">Tag us @PuffStuff for a chance to be featured.</p>
      </div>
      <div className="flex gap-4 animate-marquee whitespace-nowrap">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="w-72 h-96 flex-shrink-0 rounded-2xl overflow-hidden bg-brand-zinc">
            <img 
              src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&q=80&w=400&h=600`} 
              alt="Lifestyle" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {[1,2,3,4,5,6].map(i => (
          <div key={`dup-${i}`} className="w-72 h-96 flex-shrink-0 rounded-2xl overflow-hidden bg-brand-zinc">
            <img 
              src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&q=80&w=400&h=600`} 
              alt="Lifestyle" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-black pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-24">
          <div className="space-y-6">
            <h1 className="text-3xl font-display uppercase tracking-tighter">PuffStuff</h1>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Premium vapor products for the modern rebel. We believe in bold flavors, clean tech, and zero compromises.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-black transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-black transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-black transition-all"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-8">Shop</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-8">Support</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-8">Join the Drop</h4>
            <p className="text-zinc-500 text-sm mb-6">Get 15% off your first order and early access to new drops.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-1 bg-brand-zinc border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-brand-purple transition-colors"
              />
              <button className="px-6 py-3 bg-white text-brand-black font-bold uppercase tracking-widest text-xs hover:bg-brand-purple hover:text-white transition-all">
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5 text-[10px] uppercase tracking-[0.2em] text-zinc-600">
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Accessibility</a>
            <a href="#">Cookie Policy</a>
          </div>
          <p>© 2026 PuffStuff Inc. All Rights Reserved.</p>
        </div>
        
        <div className="mt-12 p-6 bg-brand-zinc/50 border border-white/5 rounded-xl text-[10px] text-zinc-500 leading-relaxed text-center">
          <p className="max-w-4xl mx-auto">
            WARNING: This product contains nicotine. Nicotine is an addictive chemical. PuffStuff products are intended for use by adult smokers and vapers of legal age. Not for use by pregnant or nursing women, or persons with risk of heart disease, high blood pressure, diabetes, or taking medicine for depression or asthma.
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <div className="min-h-screen bg-brand-black overflow-x-hidden">
      <AnimatePresence>
        {!isVerified && <AgeVerification onVerify={() => setIsVerified(true)} />}
      </AnimatePresence>

      <Navbar />
      
      <main>
        <Hero />
        
        {/* Trust Bar */}
        <div className="bg-white py-4 overflow-hidden">
          <div className="flex gap-12 animate-marquee-fast whitespace-nowrap text-brand-black font-display font-bold uppercase tracking-widest text-xs">
            {[1,2,3,4,5,6,7,8].map(i => (
              <div key={i} className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                Free Shipping Over $50
              </div>
            ))}
          </div>
        </div>

        <BestSellers />
        <Benefits />
        
        {/* Featured Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl uppercase tracking-tighter mb-8">The Pro <br /> Max Series</h2>
              <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
                Our most advanced device yet. Featuring a 1500mAh battery, dual mesh coils, and a digital display that shows exactly how many puffs you have left.
              </p>
              <ul className="space-y-4 mb-10">
                {['10,000 Puffs Guaranteed', 'Adjustable Airflow', 'USB-C Fast Charging', '20+ Exclusive Flavors'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest">
                    <div className="w-5 h-5 rounded-full bg-brand-purple flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="px-10 py-5 bg-brand-purple text-white font-bold uppercase tracking-widest hover:bg-white hover:text-brand-black transition-all">
                Shop Pro Max
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-brand-purple/20 blur-[120px] rounded-full" />
              <img 
                src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?auto=format&fit=crop&q=80&w=1000" 
                alt="Pro Max" 
                className="relative z-10 w-full rounded-3xl shadow-2xl shadow-brand-purple/20"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        <Lifestyle />
        
        {/* Final CTA */}
        <section className="py-24 bg-brand-purple relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl md:text-8xl font-display uppercase tracking-tighter mb-8 leading-none">Ready to <br /> Level Up?</h2>
            <p className="text-xl text-white/80 mb-12 max-w-xl mx-auto">Join 50,000+ others who made the switch to the cleanest hit in the game.</p>
            <button className="px-12 py-6 bg-white text-brand-black font-bold uppercase tracking-widest hover:bg-brand-black hover:text-white transition-all text-lg">
              Get Started Now
            </button>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-fast {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
