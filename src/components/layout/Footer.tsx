import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] pt-20 pb-16">
      <Container size="normal">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[var(--border-subtle)]">
          {/* Brand & Positioning Column */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link href="/" className="font-semibold text-lg tracking-[0.15em] text-[var(--text-primary)]">
              AVENQ
            </Link>
            <Typography variant="body" muted className="max-w-xs">
              Building Digital Businesses.
            </Typography>
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)]">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>avenq.pro status: operational</span>
            </div>
          </div>

          {/* Products Column */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <Typography variant="mono" className="text-[var(--text-tertiary)]">
              Products
            </Typography>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link href="/products#satkirala" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                  Satkirala
                </Link>
              </li>
              <li>
                <Link href="/products#qrmenu" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                  QR Menu
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <Typography variant="mono" className="text-[var(--text-tertiary)]">
              Company
            </Typography>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link href="/about" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <Typography variant="mono" className="text-[var(--text-tertiary)]">
              Legal
            </Typography>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link href="/privacy" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Ecosystem Bottom Bar & Origin Lock */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-tertiary)]">
          <p>© {new Date().getFullYear()} AVENQ. All rights reserved.</p>
          <p className="text-[var(--text-secondary)] tracking-wide">
            Built in Türkiye. Designed for the world.
          </p>
        </div>
      </Container>
    </footer>
  );
};
