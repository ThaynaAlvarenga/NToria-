"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#inicio",   label: "Início"    },
  { href: "#sobre",    label: "Sobre Nós" },
  { href: "#servicos", label: "Serviços"  },
  { href: "#contato",  label: "Contato"   },
];

/* Ícone SVG da logo — losango com "N" */
function NtoriaIcon({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 36 36"
      fill="none" xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="nt-grad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1a3a6b" />
          <stop offset="100%" stopColor="#e8315a" />
        </linearGradient>
      </defs>
      {/* Losango arredondado */}
      <rect
        x="4" y="4" width="28" height="28" rx="8"
        transform="rotate(45 18 18)"
        fill="url(#nt-grad)"
      />
      {/* Letra N estilizada */}
      <path
        d="M12 24V12l12 12V12"
        stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [isMobileMenuOpen, setMobileMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: isScrolled ? "rgba(255,255,255,0.93)" : "transparent",
        backdropFilter: isScrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(16px)" : "none",
        boxShadow: isScrolled ? "0 1px 0 rgba(15,24,40,0.08)" : "none",
        transition: "background 0.3s, box-shadow 0.3s",
      }}
    >
      <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 clamp(1rem,4vw,3rem)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "70px" }}>

          {/* ── Logo: ícone + texto ── */}
          <a
            href="#inicio"
            style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}
          >
            <NtoriaIcon size={34} />
            <span
              style={{
                fontSize: "1.35rem",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                background: "linear-gradient(135deg, #1a3a6b 0%, #e8315a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              NToria
            </span>
          </a>

          {/* ── Links desktop ── */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "0.9rem", fontWeight: 500,
                  color: "var(--color-text-muted)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-primary)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)")}
              >
                {link.label}
              </a>
            ))}

            {/* Botão Orçamento com sombra rosa */}
            <a
              href="#contato"
              style={{
                display: "inline-flex", alignItems: "center",
                padding: "0.55rem 1.4rem",
                borderRadius: "9999px",
                background: "var(--color-accent)",
                color: "white",
                fontSize: "0.875rem", fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(232,49,90,0.35)",
                transition: "background 0.2s, box-shadow 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--color-accent-hover)";
                el.style.boxShadow = "0 6px 20px rgba(232,49,90,0.45)";
                el.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--color-accent)";
                el.style.boxShadow = "0 4px 14px rgba(232,49,90,0.35)";
                el.style.transform = "translateY(0)";
              }}
            >
              Orçamento
            </a>
          </div>

          {/* ── Hamburger ── */}
          <button
            onClick={() => setMobileMenu(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
            className="md:hidden p-2 rounded-lg"
            style={{ color: "var(--color-text)" }}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Menu mobile ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: "rgba(255,255,255,0.97)",
              backdropFilter: "blur(16px)",
              borderTop: "1px solid var(--color-border)",
              overflow: "hidden",
            }}
          >
            <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "1.25rem clamp(1rem,4vw,3rem)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenu(false)}
                    style={{
                      padding: "0.6rem 0", fontSize: "1rem", fontWeight: 500,
                      color: "var(--color-text-muted)", textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contato"
                  onClick={() => setMobileMenu(false)}
                  className="btn btn-primary mt-3 justify-center"
                  style={{ textDecoration: "none" }}
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}