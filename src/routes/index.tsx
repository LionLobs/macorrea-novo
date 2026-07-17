import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Target, Heart, Brain, Star, Phone, Mail, Instagram, CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, Sparkles, Users, Award, Clock, Menu, X } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useCountUp, useReveal } from "@/hooks/useReveal";
const heroImage = "/marlene-photo.webp";
const corporateImage = "/corporativo.webp";
const logoImage = "/logo-cliente-trimmed.webp";
const logoWhite = "/logo-branca-trimmed.webp";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    links: [
      { rel: "preload", as: "image", href: "/marlene-photo.webp", fetchpriority: "high" },
      { rel: "preload", as: "image", href: "/logo-cliente-trimmed.webp", fetchpriority: "high" },
    ],
  }),
});

const WHATSAPP_BASE = "https://wa.me/5511973356733";
const waLink = (msg: string) => `${WHATSAPP_BASE}?text=${encodeURIComponent(msg)}`;

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#programas", label: "Programas" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

const programs = [
  {
    icon: Target,
    title: "Programa Exclusivo de Reconstrução 40+",
    subtitle: "Pelo Método Identidade Estratégica™",
    tag: "🔒 Sob Aplicação",
    description:
      "Um processo profundo, estruturado e seletivo para mulheres 40+ que desejam reconstruir identidade, direção e propósito com estratégia e maturidade emocional.",
    bullets: [
      "10 semanas individuais",
      "Diagnóstico emocional e identitário profundo",
      "Ressignificação de padrões inconscientes",
      "Reconstrução estratégica de identidade",
      "Plano de posicionamento profissional",
      "Suporte personalizado durante todo o processo",
    ],
    footnote:
      "Este programa é destinado a mulheres comprometidas com uma reconstrução real. O investimento é apresentado exclusivamente na Conversa de Alinhamento.",
    cta: "Solicitar Aplicação",
    ctaLink: waLink("Olá Marlene! Gostaria de solicitar aplicação para o Programa Exclusivo de Reconstrução 40+."),
    featured: true,
  },
  {
    icon: Heart,
    title: "Jornada Essencial de Reconstrução 40+",
    subtitle: "Processo estruturado de 5 semanas",
    tag: "Entrada Contínua",
    description:
      "Processo estruturado de 5 semanas para mulheres que precisam de clareza emocional e direção estratégica para iniciar sua reconstrução.",
    bullets: [
      "5 semanas estruturadas",
      "Clareza emocional",
      "Direção estratégica",
      "Possibilidade de evolução",
    ],
    footnote:
      "Participantes que desejarem evoluir para o Programa Exclusivo poderão ter parte do investimento considerado na continuidade do processo.",
    cta: "Iniciar Jornada Essencial",
    ctaLink: waLink("Olá Marlene! Gostaria de iniciar a Jornada Essencial de Reconstrução 40+. Como funciona?"),
    featured: false,
  },
  {
    icon: Brain,
    title: "Atendimentos Individuais Terapêuticos",
    subtitle: "Atuação Clínica Integrativa",
    tag: "Agenda Aberta",
    description:
      "Atuação clínica integrativa voltada ao cuidado contínuo da saúde mental e manejo de questões emocionais específicas. Atendo mulheres e homens em diferentes fases da vida, com abordagem personalizada.",
    bullets: [
      "Psicanálise Clínica",
      "Terapia Sistêmica",
      "Hipnoterapia",
      "Constelação Familiar",
      "Contoterapia",
      "Ferramentas complementares de autoconhecimento",
    ],
    footnote:
      "Indicado para acompanhamento contínuo em saúde mental, momentos de transição ou suporte complementar aos programas estruturados.",
    cta: "Agendar Atendimento Individual",
    ctaLink: waLink("Olá Marlene! Gostaria de agendar um atendimento individual terapêutico. Qual é a disponibilidade?"),
    featured: false,
  },
];

const testimonials = [
  { text: "As sessões de terapias energéticas e também as sessões terapêuticas com os movimentos sistêmicos foram um divisor de águas para meu autoconhecimento, crescimento pessoal e espiritual.", name: "Fernanda Parra", role: "Acompanhamento Terapêutico" },
  { text: "Foi excelente ter feito sessões de terapia com a Marlene, frente a uma mudança de país vêm alguns desafios emocionais como: estar longe da família, lidar e conviver com pessoas de cultura diferentes.", name: "Patrícia Kaltner", role: "Acompanhamento Terapêutico" },
  { text: "A Terapia Sistêmica mudou completamente minha vida. Tanto que escolhi fazer somente as sessões com a Marlene, e optei por não dar continuidade na terapia convencional. Tenho mexido em emoções que estão atreladas à minha criança interior e isso tem me ajudado a me curar.", name: "Ariane Cavalcante", role: "Acompanhamento Terapêutico" },
  { text: "Querida Marlene, como sua mentorada nesse meu processo de transição de carreira pude aprender a me planejar, a colocar foco e determinar as etapas para realmente fazer acontecer meus negócios. Eu realmente amadureci nesse período em que estivemos juntas.", name: "Karina Marquis", role: "Mentoria Transição de Carreira" },
  { text: "Fazer a terapia com a Marlene contribuiu na transformação da minha vida pessoal e profissional, trabalhando com diversas ferramentas me permitiu a abertura para a vida. Saí de um momento de doença, dor, medos, inseguranças para autoconhecimento, consciência e ao encontro do meu propósito, que me trilharam para a minha transição de carreira. É só gratidão, gratidão e gratidão!", name: "Rosana Mizutori", role: "Terapia e Mentoria em Transição de Carreira" },
];

const faqs = [
  { q: "Qual é a diferença entre o Programa Reconstrução 40+ e a Jornada Essencial?", a: "O Programa Reconstrução 40+ é um processo profundo de 10 semanas com o Método Identidade Estratégica™, voltado para mulheres que desejam uma transformação completa. A Jornada Essencial é um processo de 5 semanas focado em clareza emocional e direção estratégica, ideal para quem está iniciando sua reconstrução." },
  { q: "Como funciona a Conversa de Alinhamento?", a: "A Conversa de Alinhamento é uma etapa seletiva onde avaliamos juntas se o programa é adequado para o seu momento. É uma conversa franca sobre suas necessidades, objetivos e expectativas." },
  { q: "Posso fazer atendimentos enquanto estou em um programa?", a: "Sim, os atendimentos individuais podem complementar o programa, oferecendo suporte adicional durante o processo de transformação." },
  { q: "Qual é o investimento dos programas?", a: "O investimento é apresentado exclusivamente na Conversa de Alinhamento, pois cada processo é personalizado de acordo com as necessidades individuais." },
  { q: "Como funciona o atendimento corporativo?", a: "O atendimento corporativo inclui diagnóstico dos fatores psicossociais, plano de ação estratégico, relatórios técnicos e assessoria contínua para RH e lideranças, em conformidade com a NR-1." },
  { q: "Qual é a metodologia que você utiliza?", a: "Utilizo uma abordagem integrativa que combina Psicanálise Clínica, Terapia Sistêmica, Hipnoterapia e Constelação Familiar, aliada à minha experiência de mais de 20 anos no mercado corporativo." },
];

const SectionEyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col items-center mb-4">
    <span className="ornament text-[0.7rem] uppercase tracking-[0.28em] font-semibold">{children}</span>
  </div>
);

const marqueeItems = [
  "Reconstrução 40+",
  "Identidade Estratégica™",
  "Psicanálise Clínica",
  "Mentoria Executiva",
  "NR-1 · Saúde Mental",
  "Terapia Sistêmica",
  "Constelação Familiar",
  "Propósito & Direção",
];

const stats = [
  { icon: Clock, value: 20, suffix: "+", label: "Anos de experiência" },
  { icon: Users, value: 500, suffix: "+", label: "Mulheres atendidas" },
  { icon: Award, value: 15, suffix: "+", label: "Empresas assessoradas" },
  { icon: Sparkles, value: 98, suffix: "%", label: "Satisfação" },
];

function StatsBlock() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 lg:gap-10">
      {stats.map((s, i) => {
        const Icon = s.icon;
        return <StatCard key={s.label} Icon={Icon} value={s.value} suffix={s.suffix} label={s.label} start={visible} delay={i * 120} />;
      })}
    </div>
  );
}

function StatCard({ Icon, value, suffix, label, start, delay }: { Icon: typeof Clock; value: number; suffix: string; label: string; start: boolean; delay: number }) {
  const n = useCountUp(value, start);
  return (
    <div className="text-center reveal-up is-visible card-lift bg-card border border-border/60 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8" style={{ transitionDelay: `${delay}ms` }}>
      <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-accent/15 text-accent mx-auto flex items-center justify-center mb-2 sm:mb-4">
        <Icon size={18} strokeWidth={1.8} />
      </div>
      <div className="font-serif text-2xl sm:text-4xl lg:text-5xl text-primary tabular-nums">{n}{suffix}</div>
      <div className="text-[0.65rem] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.18em] text-muted-foreground mt-1 sm:mt-2">{label}</div>
    </div>
  );
}


function TestimonialCarousel() {
  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const perPage = isMobile ? 1 : 2;
  const totalPages = Math.ceil(testimonials.length / perPage);

  useEffect(() => {
    if (hovered || totalPages <= 1) return;
    const interval = setInterval(() => {
      setPage((p) => (p + 1) % totalPages);
    }, 6000);
    return () => clearInterval(interval);
  }, [hovered, totalPages]);

  const shift = page * 100;

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${shift}%)` }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="min-w-full md:min-w-[50%] p-1 sm:p-2"
            >
              <blockquote className="card-lift relative h-full p-6 sm:p-8 lg:p-10 bg-card rounded-2xl border border-border/60 flex flex-col">
                <span className="absolute top-4 right-6 font-serif text-6xl sm:text-7xl text-accent/25 leading-none select-none" aria-hidden>"</span>
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={16} className="fill-accent text-accent gold-glow-soft" />
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed italic mb-6 flex-1">"{t.text}"</p>
                <footer>
                  <div className="font-semibold text-primary">{t.name}</div>
                  <div className="text-[0.7rem] uppercase tracking-[0.2em] text-accent mt-1">{t.role}</div>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 mt-8">
        <button
          onClick={() => setPage((p) => (p - 1 + totalPages) % totalPages)}
          aria-label="Depoimentos anteriores"
          className="w-10 h-10 rounded-full border border-border/70 flex items-center justify-center text-primary hover:border-accent hover:text-accent hover:bg-accent/10 transition"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Ir para página ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === page ? "w-6 bg-accent" : "w-2 bg-accent/30 hover:bg-accent/60"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setPage((p) => (p + 1) % totalPages)}
          aria-label="Próximos depoimentos"
          className="w-10 h-10 rounded-full border border-border/70 flex items-center justify-center text-primary hover:border-accent hover:text-accent hover:bg-accent/10 transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá Marlene! Meu nome é ${form.name}. Email: ${form.email}. WhatsApp: ${form.phone}. ${form.message ? "Mensagem: " + form.message : "Gostaria de receber uma proposta personalizada."}`;
    window.open(waLink(msg), "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/90 border-b border-border/40">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 h-20 sm:h-24 lg:h-28 flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3 shrink-0 -mt-1">
            <img src={logoImage} alt="Marlene Corrêa Logo" width={480} height={140} fetchPriority="high" decoding="async" className="h-12 sm:h-16 lg:h-20 w-auto" />
          </a>
          <ul className="hidden md:flex items-center gap-6 lg:gap-9">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-foreground/80 hover:text-primary transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-border/60 text-primary"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu size={22} />
          </button>
        </nav>
        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="md:hidden fixed inset-0 z-[60] bg-background">
            <div className="flex items-center justify-between px-4 h-24 border-b border-border/40">
              <img src={logoImage} alt="Marlene Corrêa" width={480} height={140} decoding="async" className="h-12 w-auto" />
              <button
                className="inline-flex items-center justify-center w-11 h-11 rounded-lg border border-border/60 text-primary"
                onClick={() => setMobileOpen(false)}
                aria-label="Fechar menu"
              >
                <X size={22} />
              </button>
            </div>
            <ul className="flex flex-col px-6 py-8 gap-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 text-lg font-serif text-primary border-b border-border/40"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="px-6 mt-4">
              <a
                href={waLink("Olá Marlene!")}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full text-center block"
              >
                Fale no WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>


      {/* HERO */}
      <section id="top" className="relative overflow-hidden hero-glow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-10 sm:pt-14 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center relative z-10">
          <Reveal variant="left">
            <p className="eyebrow mb-4 sm:mb-6">Saúde Mental e Reconstrução Profissional</p>
            <h1 className="text-[2.15rem] sm:text-5xl lg:text-[4.25rem] leading-[1.08] mb-6 sm:mb-8">
              Saúde Mental e Reconstrução Profissional para Mulheres 40+
            </h1>
            <p className="eyebrow mb-4 sm:mb-6">
              Marlene Corrêa — Psicanalista Clínica e Mentora Estratégica
            </p>
            <p className="text-base sm:text-lg text-foreground/75 leading-relaxed max-w-xl mb-6">
              Profissional em saúde mental como psicanalista clínica e mentora estratégica, criadora do
              Programa Exclusivo de Reconstrução 40+, conduzo mulheres que desejam romper padrões,
              ressignificar sua história e reconstruir carreira com propósito, maturidade emocional e direção.
            </p>
            <div className="max-w-xl mb-8 sm:mb-10">
              <p className="text-foreground/85">Não é apenas sobre mudança profissional.</p>
              <p className="italic text-muted-foreground">
                É sobre reconstruir identidade e assumir a potência que a maturidade trouxe.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a href={waLink("Olá Marlene! Gostaria de solicitar aplicação para o Programa Exclusivo de Reconstrução 40+.")} className="btn-primary text-center" target="_blank" rel="noreferrer">
                Solicitar Aplicação
              </a>
              <a href="#programas" className="btn-outline text-center">Conhecer Mais</a>
            </div>
          </Reveal>
          <Reveal variant="right" delay={150} className="relative flex justify-center lg:justify-end">
            <img
              src={heroImage}
              alt="Marlene Corrêa, psicanalista clínica"
              width={1200}
              height={1400}
              fetchPriority="high"
              decoding="async"
              className="relative rounded-[1.25rem] shadow-[var(--shadow-soft)] object-cover w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[480px] h-auto"
            />
          </Reveal>
        </div>

        {/* Marquee de valores */}
        <div className="marquee border-y border-border/50 bg-card/50 py-4 sm:py-5 text-primary/70 font-serif italic text-base sm:text-lg">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((t, i) => (
              <span key={i} className="flex items-center gap-3">
                <Sparkles size={14} className="text-accent gold-glow" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE / EXPERTISE */}
      <section id="sobre" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
        <Reveal className="max-w-3xl">
          <span className="block w-16 h-[2px] bg-accent mb-6 shadow-[0_0_12px_var(--color-accent)]" />
          <p className="eyebrow mb-4">Marlene Corrêa — Psicanalista Clínica e Mentora</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8">Expertise & Experiência</h2>
          <div className="space-y-5 text-base sm:text-lg text-foreground/80 leading-relaxed">
            <p>
              Profissional em saúde mental como psicanalista clínica e mentora estratégica,
              criadora do <strong className="text-primary font-semibold">Programa Exclusivo de Reconstrução 40+</strong>.
            </p>
            <p>
              Conduzo mulheres que desejam romper padrões, ressignificar sua história e
              reconstruir carreira com propósito, maturidade emocional e direção.
            </p>
            <p>
              Com mais de <strong className="text-primary font-semibold">20 anos de experiência no mercado corporativo</strong>,
              incluindo atuação como gerente de serviços em empresa multinacional, uno conhecimento
              organizacional à prática clínica.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 sm:mt-16">
          <StatsBlock />
        </div>
      </section>


      {/* PROGRAMAS */}
      <section id="programas" className="bg-[var(--color-surface)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <SectionEyebrow>Programas de Transformação</SectionEyebrow>
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">Programas de Transformação</h2>
            <p className="text-foreground/70">Processos estruturados e seletivos para sua reconstrução profissional e pessoal</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">

            {programs.map((p, idx) => {
              const Icon = p.icon;
              return (
                <Reveal
                  key={p.title}
                  as="article"
                  variant="up"
                  delay={idx * 140}
                  className={`card-lift relative flex flex-col p-8 lg:p-9 rounded-2xl border ${
                    p.featured
                      ? "bg-primary text-primary-foreground border-primary shadow-[var(--shadow-elegant)]"
                      : "bg-card border-border hover:border-accent/50"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${p.featured ? "bg-primary-foreground/10 text-accent gold-glow" : "bg-accent/15 text-accent gold-glow-soft"}`}>
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3 className={`text-2xl mb-1 leading-snug ${p.featured ? "text-primary-foreground" : ""}`}>
                    {p.title}
                  </h3>
                  <p className={`text-sm mb-5 ${p.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {p.subtitle}
                  </p>
                  <span className={`self-start text-[0.68rem] uppercase tracking-[0.18em] font-semibold px-3 py-1.5 rounded-md mb-5 ${p.featured ? "bg-accent text-accent-foreground" : "bg-accent/15 text-accent"}`}>
                    {p.tag}
                  </span>
                  <p className={`mb-6 leading-relaxed text-[0.95rem] ${p.featured ? "text-primary-foreground/85" : "text-foreground/75"}`}>
                    {p.description}
                  </p>
                  <ul className="space-y-2.5 mb-6">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm items-start">
                        <span className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full flex-shrink-0 bg-accent" />
                        <span className={p.featured ? "text-primary-foreground/90" : "text-foreground/80"}>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <p className={`text-xs italic mb-8 leading-relaxed ${p.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                    {p.footnote}
                  </p>
                  <a
                    href={p.ctaLink}
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-auto ${p.featured ? "btn-primary" : "btn-outline"}`}
                  >
                    {p.cta}
                  </a>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <SectionEyebrow>Depoimentos</SectionEyebrow>
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-3">Histórias de Transformação</h2>
            <p className="text-foreground/70">Veja como mulheres como você reconstruíram suas vidas e carreiras</p>
          </div>
          <Reveal variant="up">
            <TestimonialCarousel />
          </Reveal>
        </div>
      </section>

      {/* SERVIÇOS CORPORATIVOS */}
      <section id="servicos" className="bg-[var(--color-surface)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="relative order-2 lg:order-1 flex justify-center">
            <div className="absolute -inset-2 rounded-[1.5rem] bg-primary/10 rotate-2" aria-hidden />
            <img
              src={corporateImage}
              alt="Saúde Mental Corporativa"
              width={1400}
              height={1000}
              loading="lazy"
              decoding="async"
              className="relative rounded-[1.25rem] shadow-[var(--shadow-elegant)] object-cover w-full max-w-[360px] sm:max-w-[460px] lg:max-w-[520px]"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="block w-16 h-[2px] bg-accent mb-6 shadow-[0_0_12px_var(--color-accent)]" />
            <p className="eyebrow mb-4">Saúde Mental Corporativa</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6">Programas Corporativos em Saúde Mental & NR-1</h2>
            <p className="text-foreground/75 leading-relaxed mb-4">
              Atuação estratégica para empresas com foco em prevenção de riscos psicossociais e implementação
              de programas contínuos de saúde mental em conformidade com o Ministério do Trabalho.
            </p>
            <p className="text-foreground/75 leading-relaxed mb-8">
              Com +20 anos de experiência no mercado corporativo, incluindo atuação como gerente de serviços
              no ramo de prestação de serviços em Recursos Humanos em empresa multinacional, uno conhecimento
              organizacional à prática clínica para oferecer soluções técnicas e humanizadas.
            </p>
            <h3 className="text-xl mb-4 text-primary">Inclui:</h3>
            <ul className="space-y-3 mb-10">
              {[
                "Diagnóstico dos fatores psicossociais",
                "Plano de ação estratégico",
                "Relatórios técnicos para PGR e auditorias",
                "Assessoria para RH e lideranças",
                "Programas personalizados de saúde mental",
              ].map((i) => (
                <li key={i} className="flex gap-3 text-foreground/80">
                  <CheckCircle2 size={18} className="text-accent mt-0.5 flex-shrink-0 gold-glow-soft" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <a href={waLink("Olá Marlene! Gostaria de solicitar uma proposta para o programa corporativo.")} className="btn-primary inline-block text-center" target="_blank" rel="noreferrer">
              Solicitar Proposta Corporativa
            </a>
          </div>
        </div>
      </section>


      {/* CONTATO / FORM — light background as in original */}
      <section id="contato" className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-10 text-center">
          <SectionEyebrow>Contato</SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">Comece Sua Transformação Hoje</h2>
          <p className="text-foreground/70 mb-10 sm:mb-12">
            Deixe seus dados e receba uma proposta personalizada para sua jornada de reconstrução.
          </p>

          <form onSubmit={submitForm} className="grid gap-5 text-left bg-card p-6 sm:p-8 lg:p-10 rounded-2xl border border-border shadow-[var(--shadow-elegant)]">
            <label className="text-sm">
              <span className="block mb-2 text-foreground/80 font-medium">Nome Completo *</span>
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-input text-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition" />
            </label>
            <div className="grid sm:grid-cols-2 gap-5">
              <label className="text-sm">
                <span className="block mb-2 text-foreground/80 font-medium">Email *</span>
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-input text-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition" />
              </label>
              <label className="text-sm">
                <span className="block mb-2 text-foreground/80 font-medium">WhatsApp *</span>
                <input required inputMode="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-input text-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition" />
              </label>
            </div>
            <label className="text-sm">
              <span className="block mb-2 text-foreground/80 font-medium">Mensagem (Opcional)</span>
              <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-input text-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition resize-none" />
            </label>
            <button type="submit" className="btn-primary w-full mt-2">
              Receber Proposta Personalizada
            </button>
            <p className="text-xs text-muted-foreground text-center">
              Seus dados são confidenciais e serão usados apenas para enviar sua proposta personalizada.
              Você receberá contato em até 24 horas.
            </p>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[var(--color-surface)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-10 sm:mb-14">
            <SectionEyebrow>FAQ</SectionEyebrow>
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-3">Dúvidas Frequentes</h2>
            <p className="text-foreground/70">Respostas para as perguntas mais comuns sobre os programas e serviços</p>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 60} className="border border-border rounded-xl bg-card overflow-hidden card-lift">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 sm:py-5 hover:bg-muted/50 transition-colors"
                >
                  <span className="text-primary font-medium text-sm sm:text-base">{f.q}</span>
                  <ChevronDown size={20} className={`text-accent flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-500 ease-out ${openFaq === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-6 text-foreground/75 leading-relaxed text-sm sm:text-base">{f.a}</div>
                  </div>
                </div>
              </Reveal>
            ))}

          </div>
        </div>
      </section>

      {/* FOOTER — burgundy */}
      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-12 sm:py-16 grid sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12">
          <div className="sm:col-span-2 md:col-span-1">
            <img src={logoWhite} alt="Marlene Corrêa" width={480} height={140} loading="lazy" decoding="async" className="h-12 sm:h-14 w-auto mb-4" />
            <p className="text-sm text-primary-foreground/70 max-w-xs leading-relaxed mt-4">
              Psicanalista Clínica e Mentora Estratégica. Reconstrução 40+.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.24em] text-accent mb-5 font-semibold">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://wa.me/5511973356733" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-primary-foreground/85 hover:text-accent transition-colors break-all">
                  <Phone size={16} className="text-accent shrink-0" />
                  (11) 97335-6733
                </a>
              </li>
              <li>
                <a href="mailto:macorrea.psi@gmail.com" className="flex items-center gap-3 text-primary-foreground/85 hover:text-accent transition-colors break-all">
                  <Mail size={16} className="text-accent shrink-0" />
                  macorrea.psi@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.24em] text-accent mb-5 font-semibold">Redes Sociais</h4>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/macorrea.psicoterapia" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://wa.me/5511973356733" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors" aria-label="WhatsApp">
                <Phone size={16} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/15">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-6 text-center text-xs text-primary-foreground/60">
            © 2026 Criado por <a href="https://instagram.com/lionlobs" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors underline underline-offset-2">@lionlobs</a>. Todos os direitos reservados.
          </div>
        </div>
      </footer>

    </div>
  );
}
