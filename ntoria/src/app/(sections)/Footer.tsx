"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram as Instagram, FaWhatsapp as Whatsapp, FaLinkedinIn as Linkedin } from "react-icons/fa";

const WA_NUMBER = "5514988347041";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
];

const socials = [
  { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { Icon: Whatsapp, href: `https://wa.me/${WA_NUMBER}`, label: "WhatsApp" },
  { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

const contactItems = [
  { Icon: MapPin, text: "São Paulo, SP — Brasil", href: null },
  { Icon: Mail, text: "contato.ntoria@gmail.com", href: "mailto:contato.ntoria@gmail.com" },
  { Icon: Phone, text: "(14) 98834-7041", href: `https://wa.me/${WA_NUMBER}` },
];

function NtoriaIcon({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="nt-footer-grad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1a3a6b" />
          <stop offset="100%" stopColor="#e8315a" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="28" height="28" rx="8" transform="rotate(45 18 18)" fill="url(#nt-footer-grad)" />
      <path d="M12 24V12l12 12V12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--color-primary)" }}>
      <div className="container" style={{ paddingTop: "2.25rem", paddingBottom: "1.7rem" }}>
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.95fr] gap-8 lg:gap-8 items-start">
          <div>
            <a href="#inicio" style={{ display: "flex", alignItems: "center", gap: "0.55rem", textDecoration: "none", marginBottom: "0.9rem" }}>
              <NtoriaIcon size={34} />
              <span
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  background: "linear-gradient(135deg, #ffffff 0%, #ffd2dd 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                NToria
              </span>
            </a>

            <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(255,255,255,0.68)", maxWidth: 300, marginBottom: "1rem" }}>
              Transformando ideias em presença digital de alto impacto. Tecnologia, estratégia e criatividade para o seu negócio crescer.
            </p>

            <div style={{ display: "flex", gap: "0.55rem", flexWrap: "wrap" }}>
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{ width: 34, height: 34, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.10)", color: "white", textDecoration: "none" }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.42)", marginBottom: "0.85rem" }}>
              Links Rápidos
            </p>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.48rem" }}>
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.76)", textDecoration: "none" }}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.42)", marginBottom: "0.85rem" }}>
              Contato
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {contactItems.map(({ Icon, text, href }) => {
                const inner = (
                  <div style={{ display: "flex", alignItems: "center", gap: "0.55rem" }}>
                    <div style={{ width: 26, height: 26, borderRadius: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={12} color="rgba(255,255,255,0.86)" />
                    </div>
                    <span style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.35, overflowWrap: "anywhere" }}>{text}</span>
                  </div>
                );
                return href ? <a key={text} href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>{inner}</a> : <div key={text}>{inner}</div>;
              })}
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="container" style={{ paddingTop: "0.85rem", paddingBottom: "0.85rem" }}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2" style={{ textAlign: "center" }}>
            <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.42)" }}>© {year} NToria. Todos os direitos reservados.</p>
            <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.42)" }}>CNPJ: 54.845.676/0001-05</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
