"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, TrendingUp, Users, Eye, ArrowUpRight, Star } from "lucide-react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      let cur = 0;
      const step = target / 45;
      const timer = setInterval(() => {
        cur += step;
        if (cur >= target) {
          el.textContent = target + suffix;
          clearInterval(timer);
          return;
        }
        el.textContent = Math.floor(cur) + suffix;
      }, 28);
      observer.disconnect();
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

function MiniBarChart() {
  const bars = [35, 52, 41, 68, 58, 78, 65, 90, 82, 100, 88, 110];
  const max = Math.max(...bars);
  const H = 64;

  return (
    <svg width="100%" height={H} viewBox="0 0 240 64" fill="none" preserveAspectRatio="none">
      {bars.map((v, i) => {
        const barH = (v / max) * (H - 8);
        const y = H - barH;
        const x = i * 19 + 4;
        const isAccent = i >= bars.length - 2;
        return (
          <motion.rect
            key={i}
            x={x}
            y={y}
            width="11"
            height={barH}
            rx="5.5"
            fill={isAccent ? "#e8315a" : "#b8c7e6"}
            initial={{ height: 0, y: H }}
            animate={{ height: barH, y }}
            transition={{ duration: 0.55, delay: 0.45 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
          />
        );
      })}
    </svg>
  );
}

const stats = [
  { value: 50, suffix: "+", label: "Clientes" },
  { value: 150, suffix: "+", label: "Projetos" },
  { value: 5, suffix: "+", label: "Anos" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export function Hero() {
  return (
    <section id="inicio" style={{ position: "relative", overflow: "hidden", paddingTop: "clamp(6rem, 10vw, 8.5rem)", paddingBottom: "clamp(4.6rem, 8vw, 6.6rem)", background: "var(--color-bg)" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(26,58,107,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(26,58,107,0.045) 1px, transparent 1px)", backgroundSize: "48px 48px", maskImage: "radial-gradient(circle at center, black 52%, transparent 92%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 80, left: -120, width: 380, height: 380, background: "radial-gradient(circle, rgba(232,49,90,0.10) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 140, right: -120, width: 440, height: 440, background: "radial-gradient(circle, rgba(45,95,181,0.12) 0%, transparent 72%)", pointerEvents: "none" }} />

      <div className="container">
        <div className="grid lg:grid-cols-[0.98fr_1.08fr] gap-10 lg:gap-14 items-center">
          <div>
            <motion.div {...fadeUp(0)}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", padding: "0.45rem 0.75rem", borderRadius: 999, background: "rgba(232,49,90,0.08)", color: "#e8315a", fontSize: "0.72rem", fontWeight: 700, marginBottom: "1rem" }}>
                <Sparkles size={14} /> Marketing Digital & Tecnologia
              </span>
            </motion.div>

            <motion.h1 {...fadeUp(0.08)} style={{ fontSize: "clamp(2.5rem, 7vw, 5.25rem)", lineHeight: 0.94, letterSpacing: "-0.058em", color: "var(--color-primary)", maxWidth: 650 }}>
              Transforme sua <br />
              <span className="text-gradient">Presença Digital</span>
            </motion.h1>

            <motion.p {...fadeUp(0.16)} style={{ marginTop: "1.15rem", fontSize: "clamp(1rem, 1.5vw, 1.125rem)", color: "var(--color-text-muted)", lineHeight: 1.82, maxWidth: 560 }}>
              Soluções web e marketing digital que constroem marcas sólidas e criam conexões genuínas com os clientes certos.
            </motion.p>

            <motion.div {...fadeUp(0.22)} className="flex flex-col sm:flex-row gap-3" style={{ marginTop: "1.65rem" }}>
              <a href="#contato" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.45rem", minHeight: 47, padding: "0 1.2rem", borderRadius: 999, textDecoration: "none", background: "linear-gradient(135deg, #ff4f72 0%, #e8315a 100%)", color: "white", fontWeight: 700, boxShadow: "0 12px 28px rgba(232,49,90,0.22)" }}>
                Começar Agora <ArrowUpRight size={16} />
              </a>
              <a href="#servicos" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: 47, padding: "0 1.15rem", borderRadius: 999, textDecoration: "none", border: "1px solid rgba(26,58,107,0.14)", color: "var(--color-primary)", fontWeight: 600, background: "rgba(255,255,255,0.76)", boxShadow: "0 8px 18px rgba(26,58,107,0.04)" }}>
                Conhecer Mais
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.28)} className="grid grid-cols-3" style={{ marginTop: "1.95rem", maxWidth: 320, gap: "0.85rem" }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <p style={{ fontSize: "1.78rem", fontWeight: 800, color: "var(--color-primary)", lineHeight: 1, letterSpacing: "-0.03em" }}><AnimatedCounter target={s.value} suffix={s.suffix} /></p>
                  <p style={{ marginTop: "0.3rem", fontSize: "0.8rem", color: "var(--color-text-muted)" }}>{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div {...fadeUp(0.18)} style={{ position: "relative" }}>
            <div style={{ position: "absolute", inset: 22, borderRadius: 34, background: "rgba(45,95,181,0.10)", filter: "blur(34px)", transform: "translateY(18px)" }} />
            <div style={{ position: "relative", borderRadius: 32, padding: "1.2rem", background: "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(249,251,255,0.9) 100%)", backdropFilter: "blur(14px)", border: "1px solid rgba(26,58,107,0.07)", boxShadow: "0 24px 68px rgba(26,58,107,0.11)" }}>
              <div className="flex items-center justify-between gap-3" style={{ marginBottom: "0.95rem" }}>
                <div>
                  <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", fontWeight: 700 }}>Visão Geral</p>
                  <h3 style={{ fontSize: "1.1rem", color: "var(--color-primary)", marginTop: "0.15rem" }}>Últimos 12 meses</h3>
                </div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", padding: "0.4rem 0.7rem", borderRadius: 999, background: "rgba(67,122,34,0.10)", color: "#437a22", fontSize: "0.72rem", fontWeight: 700, whiteSpace: "nowrap" }}>
                  <span style={{ width: 7, height: 7, borderRadius: 999, background: "#6daa45" }} /> Ao vivo
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-3" style={{ marginBottom: "0.95rem" }}>
                {[
                  { Icon: Eye, label: "Alcance", value: "48,2 mil", delta: "+24%", color: "var(--color-primary)" },
                  { Icon: Users, label: "Novos leads", value: "1.340", delta: "+18%", color: "var(--color-accent)" },
                  { Icon: TrendingUp, label: "ROI", value: "3,8x", delta: "+41%", color: "#437a22" },
                ].map(({ Icon, label, value, delta, color }) => (
                  <div key={label} style={{ padding: "0.95rem", borderRadius: 18, background: "rgba(255,255,255,0.86)", border: "1px solid rgba(26,58,107,0.07)", boxShadow: "0 8px 18px rgba(26,58,107,0.045)" }}>
                    <div className="flex items-center justify-between" style={{ marginBottom: "0.55rem" }}>
                      <div style={{ width: 28, height: 28, borderRadius: 9, background: "rgba(26,58,107,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Icon size={15} color={color} />
                      </div>
                      <span style={{ fontSize: "0.72rem", fontWeight: 700, color }}>{delta}</span>
                    </div>
                    <p style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--color-primary)", lineHeight: 1 }}>{value}</p>
                    <p style={{ marginTop: "0.2rem", fontSize: "0.76rem", color: "var(--color-text-muted)" }}>{label}</p>
                  </div>
                ))}
              </div>

              <div style={{ padding: "0.95rem 1rem", borderRadius: 20, background: "rgba(255,255,255,0.92)", border: "1px solid rgba(26,58,107,0.07)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.78)" }}>
                <div className="flex items-center justify-between gap-3" style={{ marginBottom: "0.7rem" }}>
                  <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--color-text-muted)" }}>Crescimento mensal</p>
                  <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "#e8315a" }}>+110% ↑</p>
                </div>
                <MiniBarChart />
              </div>

              <div className="grid grid-cols-3 gap-3" style={{ marginTop: "0.95rem" }}>
                {[
                  { name: "Instagram", followers: "12,4 mil", color: "#e8315a" },
                  { name: "Google", followers: "4,8 mil", color: "#1a3a6b" },
                  { name: "Facebook", followers: "8,1 mil", color: "#2d5fb5" },
                ].map(({ name, followers, color }) => (
                  <div key={name} style={{ padding: "0.85rem", borderRadius: 18, background: "rgba(255,255,255,0.88)", border: "1px solid rgba(26,58,107,0.07)" }}>
                    <div style={{ width: 7, height: 7, borderRadius: 999, background: color, marginBottom: "0.45rem" }} />
                    <p style={{ fontSize: "0.72rem", color: "var(--color-text-muted)" }}>{name}</p>
                    <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--color-primary)", marginTop: "0.15rem" }}>{followers}</p>
                  </div>
                ))}
              </div>

              <div className="hidden sm:block" style={{ position: "absolute", top: -14, left: 20 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.45rem 0.7rem", borderRadius: 999, background: "white", color: "var(--color-primary)", fontSize: "0.72rem", fontWeight: 700, boxShadow: "0 10px 22px rgba(26,58,107,0.10)" }}>
                  <Star size={13} /> Design de sites
                </span>
              </div>
              <div className="hidden sm:flex" style={{ position: "absolute", right: 18, bottom: -14 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.45rem 0.72rem", borderRadius: 999, background: "linear-gradient(135deg, #ff4f72 0%, #e8315a 100%)", color: "white", fontSize: "0.72rem", fontWeight: 700, boxShadow: "0 10px 22px rgba(232,49,90,0.18)" }}>
                  <TrendingUp size={13} /> Marketing Digital
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="hidden md:flex" style={{ justifyContent: "center", marginTop: "2.35rem" }}>
          <a href="#sobre" aria-label="Ir para Sobre" style={{ color: "var(--color-text-faint)" }}><ArrowDown size={18} /></a>
        </div>
      </div>
    </section>
  );
}