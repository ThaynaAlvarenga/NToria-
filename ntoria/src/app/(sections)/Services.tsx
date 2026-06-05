"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Palette, BarChart3, Camera, MapPin } from "lucide-react";
import { AnimatedSection } from "../components/ui/AnimatedSection";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const featured = {
  Icon: Globe,
  title: "Web Design & Desenvolvimento",
  desc: "Sites profissionais, responsivos e personalizados para empresas e profissionais. Performance máxima em todos os dispositivos, com foco em conversão e SEO.",
  tags: ["Design Responsivo", "SEO Otimizado", "Alta Performance", "CMS integrado"],
};

const services = [
  {
    Icon: Palette,
    title: "Identidade Visual",
    desc: "Logotipos e elementos visuais que fortalecem a marca e criam reconhecimento imediato.",
    tags: ["Logotipo", "Paleta de Cores", "Manual da Marca"],
    color: "linear-gradient(135deg, #ff6b8a 0%, #e8315a 100%)",
  },
  {
    Icon: BarChart3,
    title: "Redes Sociais",
    desc: "Planejamento, publicação e análise de conteúdos para fortalecer sua presença digital.",
    tags: ["Calendário Editorial", "Análise de Métricas", "Crescimento Orgânico"],
    color: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)",
  },
  {
    Icon: Camera,
    title: "Conteúdo & Captação",
    desc: "Produção de fotos, vídeos e materiais estratégicos para campanhas de alto impacto.",
    tags: ["Fotografia", "Produção de vídeos", "Direção Criativa"],
    color: "linear-gradient(135deg, #ffb357 0%, #ff8c1a 100%)",
  },
  {
    Icon: MapPin,
    title: "Google Business",
    desc: "Configuração e otimização do perfil da empresa no Google para ampliar sua visibilidade local.",
    tags: ["SEO Local", "Avaliações", "Análise de insights"],
    color: "linear-gradient(135deg, #34d399 0%, #059669 100%)",
  },
];

export function Services() {
  return (
    <AnimatedSection id="servicos" className="section" style={{ background: "var(--color-bg)", paddingTop: "5.8rem", paddingBottom: "5.8rem" }}>
      <div className="container">
        <motion.div {...fadeUp(0)} style={{ maxWidth: 500, marginBottom: "1.7rem" }}>
          <span className="section-label">O Que Fazemos</span>
          <h2 style={{ color: "var(--color-primary)", lineHeight: 0.98 }}>
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p style={{ marginTop: "0.8rem", color: "var(--color-text-muted)", lineHeight: 1.7, maxWidth: 430 }}>
            Soluções completas para impulsionar sua marca no ambiente digital.
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.08)} style={{ borderRadius: 22, padding: "1.15rem 1.2rem", background: "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.78) 100%)", border: "1px solid rgba(26,58,107,0.08)", boxShadow: "0 14px 34px rgba(26,58,107,0.07)", display: "grid", gap: "1rem", alignItems: "center" }}>
          <div className="grid lg:grid-cols-[1fr_auto] gap-5 items-center">
            <div className="flex items-start gap-3">
              <div style={{ width: 42, height: 42, borderRadius: 14, background: "linear-gradient(135deg, #5b95df 0%, #1a3a6b 100%)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 24px rgba(26,58,107,0.18)", flexShrink: 0 }}>
                <featured.Icon size={18} color="white" />
              </div>
              <div>
                <h3 style={{ fontSize: "1.18rem", color: "var(--color-primary)", fontWeight: 800 }}>{featured.title}</h3>
                <p style={{ marginTop: "0.45rem", color: "var(--color-text-muted)", lineHeight: 1.72, maxWidth: 700 }}>{featured.desc}</p>
                <div className="flex flex-wrap gap-2" style={{ marginTop: "0.85rem" }}>
                  {featured.tags.map((tag) => (
                    <span key={tag} style={{ padding: "0.36rem 0.62rem", borderRadius: 999, background: "#f4f7fd", border: "1px solid rgba(26,58,107,0.07)", color: "var(--color-primary)", fontSize: "0.72rem", fontWeight: 600 }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <a href="#contato" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.45rem", minHeight: 44, padding: "0 1rem", borderRadius: 999, textDecoration: "none", background: "linear-gradient(135deg, #ff4f72 0%, #e8315a 100%)", color: "white", fontWeight: 700, boxShadow: "0 10px 22px rgba(232,49,90,0.18)", whiteSpace: "nowrap" }}>
              Solicitar <ArrowRight size={15} />
            </a>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4" style={{ marginTop: "1rem" }}>
          {services.map((service, i) => (
            <motion.article key={service.title} {...fadeUp(0.12 + i * 0.04)} style={{ height: "100%", borderRadius: 22, padding: "1rem", background: "linear-gradient(180deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.78) 100%)", border: "1px solid rgba(26,58,107,0.08)", boxShadow: "0 14px 30px rgba(26,58,107,0.06)", display: "flex", flexDirection: "column" }}>
              <div style={{ width: 38, height: 38, borderRadius: 13, background: service.color, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 24px rgba(26,58,107,0.12)", marginBottom: "0.9rem" }}>
                <service.Icon size={17} color="white" />
              </div>
              <h3 style={{ fontSize: "1rem", color: "var(--color-primary)", fontWeight: 800, minHeight: 42 }}>{service.title}</h3>
              <p style={{ marginTop: "0.45rem", color: "var(--color-text-muted)", lineHeight: 1.68, flexGrow: 1 }}>{service.desc}</p>
              <div className="flex flex-wrap gap-2" style={{ marginTop: "0.8rem" }}>
                {service.tags.map((tag) => (
                  <span key={tag} style={{ padding: "0.34rem 0.58rem", borderRadius: 999, background: "#f7f9fe", border: "1px solid rgba(26,58,107,0.07)", color: "var(--color-primary)", fontSize: "0.7rem", fontWeight: 600 }}>{tag}</span>
                ))}
              </div>
              <a href="#contato" style={{ marginTop: "0.95rem", display: "inline-flex", alignItems: "center", gap: "0.35rem", textDecoration: "none", color: "var(--color-primary)", fontWeight: 700, fontSize: "0.85rem" }}>
                Saiba mais <ArrowRight size={14} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
