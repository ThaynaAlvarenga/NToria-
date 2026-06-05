"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { AnimatedSection } from "../components/ui/AnimatedSection";

const WA_NUMBER = "5514988347041";

const contactInfo = [
  { Icon: Mail, label: "E-mail", value: "contato.ntoria@gmail.com", href: "mailto:contato.ntoria@gmail.com" },
  { Icon: Phone, label: "Telefone / WhatsApp", value: "(14) 98834-7041", href: `https://wa.me/${WA_NUMBER}` },
  { Icon: MapPin, label: "Localização", value: "São Paulo, SP — Brasil", href: null },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Vim pelo site da NToria e gostaria de um orçamento.%0A%0A` +
      `*Nome:* ${encodeURIComponent(form.name)}%0A` +
      `*Email:* ${encodeURIComponent(form.email)}%0A` +
      (form.phone ? `*Telefone:* ${encodeURIComponent(form.phone)}%0A` : "") +
      `%0A*Mensagem:*%0A${encodeURIComponent(form.message)}`;

    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank");
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    minHeight: 48,
    padding: "0.82rem 0.95rem",
    borderRadius: 14,
    border: "1px solid rgba(26,58,107,0.09)",
    background: "#fbfcff",
    color: "var(--color-primary)",
    outline: "none",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.82)",
    fontSize: "0.92rem",
  };

  return (
    <AnimatedSection id="contato" className="section" style={{ background: "var(--color-bg)", paddingTop: "clamp(5rem, 8vw, 6.2rem)", paddingBottom: "clamp(5rem, 8vw, 6.2rem)" }}>
      <div className="container">
        <div className="grid lg:grid-cols-[0.76fr_1.24fr] gap-7 lg:gap-9 items-start">
          <motion.div {...fadeUp(0)}>
            <span className="section-label">Vamos Conversar</span>
            <h2 style={{ color: "var(--color-primary)", lineHeight: 0.96, maxWidth: 420, letterSpacing: "-0.04em" }}>
              Faça seu <span className="text-gradient">Orçamento</span>
            </h2>
            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.76, marginTop: "0.85rem", maxWidth: 390, fontSize: "0.97rem" }}>
              Pronta para transformar sua presença digital? Entre em contato e vamos criar algo incrível juntas.
            </p>

            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", minHeight: 46, marginTop: "1.05rem", alignItems: "center", justifyContent: "center", gap: "0.5rem", borderRadius: 999, textDecoration: "none", background: "linear-gradient(135deg, #ff4f72 0%, #e8315a 100%)", color: "white", fontWeight: 700, boxShadow: "0 12px 24px rgba(232,49,90,0.16)", padding: "0 1.15rem" }}
            >
              <Phone size={15} /> Falar no WhatsApp
            </a>

            <div className="space-y-2.5" style={{ marginTop: "1.15rem", maxWidth: 420 }}>
              {contactInfo.map(({ Icon, label, value, href }, i) => {
                const inner = (
                  <div style={{ padding: "0.85rem 0.92rem", display: "flex", alignItems: "center", gap: "0.75rem", borderRadius: 18, background: "linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.84) 100%)", border: "1px solid rgba(26,58,107,0.07)", boxShadow: "0 10px 24px rgba(26,58,107,0.04)" }}>
                    <div style={{ width: 35, height: 35, borderRadius: 12, background: "#eef3fb", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={16} color="var(--color-primary)" />
                    </div>
                    <div>
                      <p style={{ fontSize: "0.64rem", color: "var(--color-text-faint)", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</p>
                      <p style={{ marginTop: "0.18rem", fontSize: "0.84rem", color: "var(--color-primary)", fontWeight: 600 }}>{value}</p>
                    </div>
                  </div>
                );
                return href ? <a key={i} href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>{inner}</a> : <div key={i}>{inner}</div>;
              })}
            </div>
          </motion.div>

          <motion.form
            {...fadeUp(0.08)}
            onSubmit={handleSubmit}
            style={{
              padding: "1.05rem",
              borderRadius: 24,
              background: "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.88) 100%)",
              border: "1px solid rgba(26,58,107,0.07)",
              boxShadow: "0 16px 34px rgba(26,58,107,0.06)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <label htmlFor="name" style={{ display: "block", fontSize: "0.74rem", fontWeight: 700, color: "var(--color-primary)", marginBottom: "0.36rem" }}>Nome *</label>
                <input id="name" name="name" required placeholder="Seu nome" value={form.name} onChange={handleChange} style={inputStyle} />
              </div>
              <div>
                <label htmlFor="email" style={{ display: "block", fontSize: "0.74rem", fontWeight: 700, color: "var(--color-primary)", marginBottom: "0.36rem" }}>E-mail *</label>
                <input id="email" type="email" name="email" required placeholder="seu@email.com" value={form.email} onChange={handleChange} style={inputStyle} />
              </div>
            </div>

            <div style={{ marginTop: "0.9rem" }}>
              <label htmlFor="phone" style={{ display: "block", fontSize: "0.74rem", fontWeight: 700, color: "var(--color-primary)", marginBottom: "0.36rem" }}>Telefone / WhatsApp</label>
              <input id="phone" name="phone" placeholder="(00) 00000-0000" value={form.phone} onChange={handleChange} style={inputStyle} />
            </div>

            <div style={{ marginTop: "0.9rem" }}>
              <label htmlFor="message" style={{ display: "block", fontSize: "0.74rem", fontWeight: 700, color: "var(--color-primary)", marginBottom: "0.36rem" }}>Mensagem *</label>
              <textarea id="message" name="message" required placeholder="Conte nos mais sobre seu projeto e objetivos..." value={form.message} onChange={handleChange} rows={4} style={{ ...inputStyle, resize: "vertical", minHeight: 124 }} />
            </div>

            <p style={{ marginTop: "0.78rem", fontSize: "0.72rem", lineHeight: 1.55, color: "var(--color-text-faint)" }}>
              Ao clicar em Enviar, o WhatsApp será aberto com sua mensagem já preenchida — é só confirmar o envio. ✅
            </p>

            <button
              type="submit"
              style={{ marginTop: "0.95rem", width: "100%", minHeight: 48, borderRadius: 999, border: "none", background: isSubmitted ? "linear-gradient(135deg, #43a047 0%, #2e7d32 100%)" : "linear-gradient(135deg, #ff4f72 0%, #e8315a 100%)", color: "white", fontWeight: 700, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.45rem", boxShadow: isSubmitted ? "0 12px 24px rgba(67,160,71,0.20)" : "0 12px 24px rgba(232,49,90,0.16)", cursor: "pointer" }}
            >
              {isSubmitted ? <><CheckCircle size={16} /> WhatsApp aberto — confirme o envio!</> : <><Send size={16} /> Enviar pelo WhatsApp</>}
            </button>
          </motion.form>
        </div>
      </div>
    </AnimatedSection>
  );
}