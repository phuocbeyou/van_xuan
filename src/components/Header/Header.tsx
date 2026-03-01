import { useEffect, useRef, memo, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import Logo from '../Logo/Logo';
import './Header.css';

const Header = memo(() => {
  const headerRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = 0;
    let ticking = false;

    const handleScroll = () => {
      lastScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (headerRef.current) {
            if (lastScrollY > 50) {
              headerRef.current.classList.add('scrolled');
            } else {
              headerRef.current.classList.remove('scrolled');
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.nav-menu') && !target.closest('.mobile-toggle')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header ref={headerRef} className="header">
      <div className="container header-container">
        <div className="logo">
          <a href="/">
            <Logo />
          </a>
        </div>

        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          {/* Close button inside mobile menu */}
          <button className="nav-close" onClick={() => setIsMenuOpen(false)}>
            <X size={28} />
          </button>
          <ul>
            <li><a href="#hero" onClick={() => setIsMenuOpen(false)}>Tổng quan</a></li>
            <li><a href="#location" onClick={() => setIsMenuOpen(false)}>Vị trí</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>Tiện ích</a></li>
            <li><a href="#masterplan" onClick={() => setIsMenuOpen(false)}>Mặt bằng</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Chính sách</a></li>
          </ul>
        </nav>

        {/* Overlay behind mobile menu */}
        {isMenuOpen && <div className="nav-overlay" onClick={() => setIsMenuOpen(false)} />}

        <div className="header-actions">
          <a href="tel:0838585939" className="phone-link">
            <Phone size={20} />
            <span>0838585939</span>
          </a>
          <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu size={28} />
          </button>
        </div>
      </div>
    </header>
  );
});

export default Header;
