"use client";

import { motion } from "framer-motion";
import { Globe, TrendingUp, Users, Zap, Sparkles, ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "../components/ui/AnimatedSection";

const stats = [
  { Icon: Globe, value: "50+", label: "Sites Entregues", gradient: "linear-gradient(135deg, #60a5fa 0%, #1a3a6b 100%)", shadow: "rgba(26,58,107,0.20)" },
  { Icon: TrendingUp, value: "100%", label: "Foco em Resultados", gradient: "linear-gradient(135deg, #ff6b8a 0%, #e8315a 100%)", shadow: "rgba(232,49,90,0.20)" },
  { Icon: Users, value: "30+", label: "Clientes Atendidos", gradient: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)", shadow: "rgba(124,58,237,0.20)" },
  { Icon: Zap, value: "2x", label: "Crescimento Médio", gradient: "linear-gradient(135deg, #34d399 0%, #059669 100%)", shadow: "rgba(5,150,105,0.20)" },
];

const members = [
  { initial: "N", name: "Nathália Camargo Braga", role: "Marketing Digital · Co-fundadora", gradient: "linear-gradient(135deg, #ff6b8a 0%, #e8315a 100%)", shadow: "rgba(232,49,90,0.18)" },
  { initial: "T", name: "Thayná Nunes de Alvarenga", role: "Desenvolvedora · Co-fundadora", gradient: "linear-gradient(135deg, #60a5fa 0%, #1a3a6b 100%)", shadow: "rgba(26,58,107,0.18)" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export function About() {
  return (
    <AnimatedSection
      id="sobre"
      className="section"
      style={{ background: "var(--color-bg)", paddingTop: "clamp(5rem, 8vw, 6.5rem)", paddingBottom: "clamp(5rem, 8vw, 6.5rem)" }}
    >
      <div className="container">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-10 lg:gap-14 items-center">
          <motion.div {...fadeUp(0)}>
            <span className="section-label">Sobre Nós</span>
            <h2 style={{ color: "var(--color-primary)", maxWidth: 520, lineHeight: 0.95, letterSpacing: "-0.04em" }}>
              Inovação e estratégia <span className="text-gradient">unidas</span>
            </h2>
            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.82, marginTop: "1.05rem", maxWidth: 510, fontSize: "0.99rem" }}>
              A <strong style={{ color: "var(--color-text)" }}>NToria</strong> nasceu da união de conhecimentos complementares e da paixão por inovação. Somos duas profissionais determinadas a transformar a presença digital de empresas e profissionais.
            </p>
            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.82, marginTop: "0.8rem", maxWidth: 510, fontSize: "0.99rem" }}>
              Combinamos tecnologia de ponta com estratégias de marketing inteligentes para criar soluções que geram resultados reais, posicionamento consistente e marcas mais memoráveis.
            </p>
          </motion.div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3.5">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  {...fadeUp(0.08 + i * 0.04)}
                  style={{
                    padding: "1rem 1rem 0.95rem",
                    minHeight: 120,
                    borderRadius: 20,
                    background: "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.82) 100%)",
                    border: "1px solid rgba(26,58,107,0.07)",
                    boxShadow: "0 12px 28px rgba(26,58,107,0.045)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div style={{ width: 36, height: 36, borderRadius: 12, background: s.gradient, boxShadow: `0 8px 18px ${s.shadow}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.75rem" }}>
                    <s.Icon size={16} color="white" strokeWidth={1.8} />
                  </div>
                  <p style={{ fontSize: "1.72rem", fontWeight: 900, lineHeight: 1, color: "var(--color-primary)", marginBottom: "0.28rem", letterSpacing: "-0.03em" }}>{s.value}</p>
                  <p style={{ fontSize: "0.77rem", color: "var(--color-text-muted)", lineHeight: 1.35 }}>{s.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid md:grid-cols-[1.08fr_0.92fr] gap-3.5 items-stretch">
              <motion.div
                {...fadeUp(0.22)}
                style={{
                  borderRadius: 22,
                  padding: "1.1rem 1.15rem",
                  background: "linear-gradient(135deg, #1d4b92 0%, #2d5fb5 100%)",
                  color: "white",
                  minHeight: 136,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 16px 36px rgba(26,58,107,0.15)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "absolute", top: -40, right: -30, width: 120, height: 120, borderRadius: "50%", background: "rgba(255,255,255,0.08)" }} />
                <div style={{ position: "relative" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.55rem" }}>
                    <div style={{ width: 30, height: 30, borderRadius: 11, background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.14)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Sparkles size={14} color="white" strokeWidth={2} />
                    </div>
                    <p style={{ fontSize: "0.66rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.86 }}>
                      Nosso diferencial
                    </p>
                  </div>
                  <p style={{ fontSize: "0.87rem", lineHeight: 1.7, opacity: 0.97, maxWidth: 360 }}>
                    Atendimento próximo, estratégia personalizada e execução pensada para gerar posicionamento, presença e conversão com consistência.
                  </p>
                </div>
                <span style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: "0.34rem", fontSize: "0.76rem", fontWeight: 700, opacity: 0.94, marginTop: "0.9rem" }}>
                  Soluções sob medida <ArrowUpRight size={14} />
                </span>
              </motion.div>

              <div className="space-y-3">
                {members.map((m, i) => (
                  <motion.div
                    key={m.name}
                    {...fadeUp(0.28 + i * 0.05)}
                    style={{
                      padding: "0.9rem 0.95rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.76rem",
                      minHeight: 62,
                      borderRadius: 20,
                      background: "linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.84) 100%)",
                      border: "1px solid rgba(26,58,107,0.07)",
                      boxShadow: "0 12px 26px rgba(26,58,107,0.045)",
                    }}
                  >
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: m.gradient, boxShadow: `0 8px 18px ${m.shadow}`, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "0.95rem", fontWeight: 900, flexShrink: 0 }}>
                      {m.initial}
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--color-text)", lineHeight: 1.16 }}>{m.name}</p>
                      <p style={{ fontSize: "0.72rem", color: "var(--color-accent)", marginTop: "0.14rem", fontWeight: 600, lineHeight: 1.16 }}>{m.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}