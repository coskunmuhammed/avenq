'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from '@/components/ui/Container';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    },
    [mobileMenuOpen]
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  // Lock body scroll when mobile drawer is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Auto-close menu when navigating routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Docs', href: '/docs' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled || mobileMenuOpen
          ? 'bg-[#0B0B0B] border-b border-[var(--border-subtle)] py-4'
          : 'bg-[#0B0B0B]/90 backdrop-blur-md py-4 md:py-6'
      }`}
    >
      <Container size="normal" className="flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link
          href="/"
          aria-label="AVENQ Home"
          className="font-semibold text-lg tracking-[-0.04em] text-[var(--text-primary)] min-h-[44px] flex items-center select-none"
        >
          <span className="uppercase tracking-[0.2em] font-bold text-base text-[var(--text-primary)]">
            AVENQ
          </span>
        </Link>

        {/* Desktop Minimal Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-tight transition-colors duration-200 py-2 px-1 min-h-[44px] flex items-center relative ${
                  isActive
                    ? 'text-[var(--text-primary)] font-medium'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-1 left-0 right-0 h-[1px] bg-[var(--text-primary)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle Button (≥44px tap target) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] active:scale-95 focus:outline-none"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          <svg
            className="w-6 h-6 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            )}
          </svg>
        </button>
      </Container>

      {/* Mobile Drawer & Full Overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-x-0 top-[65px] bottom-0 bg-[#0B0B0B] border-b border-[var(--border-subtle)] px-6 py-8 flex flex-col gap-6 shadow-2xl z-50 overflow-y-auto animate-fadeIn"
          role="dialog"
          aria-label="Mobile Navigation"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xl tracking-tight transition-colors py-3 border-b border-[var(--border-subtle)] min-h-[48px] flex items-center ${
                  pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                    ? 'text-[var(--text-primary)] font-semibold'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-8 border-t border-[var(--border-subtle)] flex flex-col gap-2 font-mono text-xs text-[var(--text-tertiary)]">
            <p>AVENQ — Building Digital Businesses.</p>
            <p className="text-[var(--text-secondary)]">contact@avenq.pro</p>
          </div>
        </div>
      )}
    </header>
  );
};
