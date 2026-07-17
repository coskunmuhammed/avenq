import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] pt-16 md:pt-20 pb-16">
      <Container size="normal">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[var(--border-subtle)]">
          {/* Brand & Positioning Column */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <Link href="/" aria-label="AVENQ Home" className="font-semibold text-lg tracking-[0.2em] uppercase text-[var(--text-primary)] inline-block">
              AVENQ
            </Link>
            <Typography variant="body" muted className="max-w-xs leading-relaxed text-sm">
              Software built to endure. Products, platforms, and technology infrastructure.
            </Typography>
            <div className="mt-2 flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)]">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>avenq.pro status: operational</span>
            </div>
          </div>

          {/* Platforms & Resources Column */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <Typography variant="mono" className="text-[var(--text-tertiary)]">
              Platforms
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
              <li>
                <Link href="/products" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                  Ecosystem Overview
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                  Public Documentation
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
                <Link href="/principles" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                  Principles
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

          {/* Connect Column (Verified Profiles Only) */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <Typography variant="mono" className="text-[var(--text-tertiary)]">
              Connect
            </Typography>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a
                  href="https://instagram.com/avenq.pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="AVENQ on Instagram"
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Instagram</span>
                  <span className="font-mono text-xs text-[var(--text-tertiary)]">@avenq.pro</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/coskunmuhammed/avenq"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="AVENQ on GitHub"
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>GitHub</span>
                  <span className="font-mono text-xs text-[var(--text-tertiary)]">AVENQ</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@avenq.pro"
                  aria-label="Email AVENQ Engineering"
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Email</span>
                  <span className="font-mono text-xs text-[var(--text-tertiary)]">contact@avenq.pro</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Ecosystem Bottom Bar & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[var(--text-tertiary)]">
          <div className="flex items-center gap-6">
            <p>© {new Date().getFullYear()} AVENQ. All rights reserved.</p>
            <Link href="/privacy" className="hover:text-[var(--text-secondary)] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[var(--text-secondary)] transition-colors">
              Terms
            </Link>
          </div>
          <p className="text-[var(--text-secondary)] tracking-wide">
            Built in Türkiye. Designed for the world.
          </p>
        </div>
      </Container>
    </footer>
  );
};
