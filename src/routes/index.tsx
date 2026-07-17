import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Target, Heart, Brain, Star, Phone, Mail, Instagram, CheckCircle2, ChevronDown } from "lucide-react";
import heroImageAsset from "@/assets/marlene-photo.png.asset.json";
import corporateImageAsset from "@/assets/corporativo.png.asset.json";
import logoAsset from "@/assets/logo-cliente.png.asset.json";
import logoWhiteAsset from "@/assets/logo-branca.png.asset.json";
const heroImage = heroImageAsset.url;
const corporateImage = corporateImageAsset.url;
const logoImage = logoAsset.url;
const logoWhite = logoWhiteAsset.url;

export const Route = createFileRoute("/")({
  component: Index,
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
];

const faqs = [
  { q: "Qual é a diferença entre o Programa Reconstrução 40+ e a Jornada Essencial?", a: "O Programa Exclusivo de Reconstrução 40+ é um processo profundo de 10 semanas individuais, seletivo e estruturado pelo Método Identidade Estratégica™, voltado à reconstrução completa de identidade, direção e posicionamento profissional. A Jornada Essencial é um processo mais curto, de 5 semanas, indicado para quem busca clareza emocional e direção estratégica inicial, podendo evoluir posteriormente para o programa exclusivo." },
  { q: "Como funciona a Conversa de Alinhamento?", a: "É um encontro individual, sem custo, para entender o seu momento atual, seus objetivos e avaliar se há alinhamento para ingresso no Programa Exclusivo. Nesta conversa também são apresentados o formato completo e o investimento." },
  { q: "Posso fazer atendimentos enquanto estou em um programa?", a: "Sim. Os atendimentos individuais terapêuticos podem ser combinados aos programas estruturados como suporte complementar, sempre com abordagem personalizada de acordo com o seu momento." },
  { q: "Qual é o investimento dos programas?", a: "O investimento da Jornada Essencial é apresentado no primeiro contato. Já o do Programa Exclusivo de Reconstrução 40+ é apresentado exclusivamente na Conversa de Alinhamento, após entendermos o seu contexto e objetivos." },
  { q: "Como funciona o atendimento corporativo?", a: "Iniciamos com um diagnóstico dos fatores psicossociais da empresa, seguido pela construção de um plano de ação estratégico personalizado, com relatórios técnicos para PGR e auditorias, assessoria para RH e lideranças, e programas contínuos de saúde mental em conformidade com a NR-1." },
  { q: "Qual é a metodologia que você utiliza?", a: "Combino psicanálise clínica, terapia sistêmica, hipnoterapia, constelação familiar, contoterapia e ferramentas complementares de autoconhecimento. Nos programas de reconstrução, aplico o Método Identidade Estratégica™, uma abordagem autoral que integra profundidade emocional e estratégia profissional." },
];

const SectionEyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col items-center mb-4">
    <span className="block w-16 h-[2px] bg-accent mb-6" />
    <p className="eyebrow">{children}</p>
  </div>
);

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá Marlene! Meu nome é ${form.name}. Email: ${form.email}. WhatsApp: ${form.phone}. ${form.message ? "Mensagem: " + form.message : "Gostaria de receber uma proposta personalizada."}`;
    window.open(waLink(msg), "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/90 border-b border-border/40">
        <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoImage} alt="Marlene Corrêa Logo" className="h-12 w-auto" />
          </a>
          <ul className="hidden md:flex items-center gap-9">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-foreground/80 hover:text-primary transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="mx-auto max-w-7xl px-6 lg:px-10 pt-14 lg:pt-20 pb-24 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="eyebrow mb-6">Saúde Mental e Reconstrução Profissional</p>
          <h1 className="text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.05] mb-8">
            Saúde Mental e Reconstrução Profissional para Mulheres 40+
          </h1>
          <p className="eyebrow mb-6">
            Marlene Corrêa — Psicanalista Clínica e Mentora Estratégica
          </p>
          <p className="text-lg text-foreground/75 leading-relaxed max-w-xl mb-6">
            Profissional em saúde mental como psicanalista clínica e mentora estratégica, criadora do
            Programa Exclusivo de Reconstrução 40+, conduzo mulheres que desejam romper padrões,
            ressignificar sua história e reconstruir carreira com propósito, maturidade emocional e direção.
          </p>
          <div className="max-w-xl mb-10">
            <p className="text-foreground/85">Não é apenas sobre mudança profissional.</p>
            <p className="italic text-muted-foreground">
              É sobre reconstruir identidade e assumir a potência que a maturidade trouxe.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href={waLink("Olá Marlene! Gostaria de solicitar aplicação para o Programa Exclusivo de Reconstrução 40+.")} className="btn-primary" target="_blank" rel="noreferrer">
              Solicitar Aplicação
            </a>
            <a href="#programas" className="btn-outline">Conhecer Mais</a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-accent/10 -rotate-2" aria-hidden />
          <img
            src={heroImage}
            alt="Marlene Corrêa, psicanalista clínica"
            width={1200}
            height={1400}
            className="relative rounded-[1.75rem] shadow-[var(--shadow-soft)] object-cover w-full h-auto"
          />
        </div>
      </section>

      {/* SOBRE / EXPERTISE — left aligned, matches original */}
      <section id="sobre" className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="max-w-3xl">
          <span className="block w-16 h-[2px] bg-accent mb-6" />
          <p className="eyebrow mb-4">Marlene Corrêa — Psicanalista Clínica e Mentora</p>
          <h2 className="text-4xl md:text-5xl mb-8">Expertise & Experiência</h2>
          <div className="space-y-5 text-lg text-foreground/80 leading-relaxed">
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
        </div>
      </section>

      {/* PROGRAMAS */}
      <section id="programas" className="bg-[var(--color-surface)] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionEyebrow>Programas de Transformação</SectionEyebrow>
            <h2 className="text-4xl md:text-5xl mb-4">Programas de Transformação</h2>
            <p className="text-foreground/70">Processos estruturados e seletivos para sua reconstrução profissional e pessoal</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {programs.map((p) => {
              const Icon = p.icon;
              return (
                <article
                  key={p.title}
                  className={`relative flex flex-col p-8 lg:p-9 rounded-2xl border transition-all ${
                    p.featured
                      ? "bg-primary text-primary-foreground border-primary shadow-[var(--shadow-elegant)]"
                      : "bg-card border-border hover:border-accent/50"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${p.featured ? "bg-primary-foreground/10 text-accent" : "bg-accent/15 text-accent"}`}>
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
                        <span className={`mt-1.5 inline-block w-1.5 h-1.5 rounded-full flex-shrink-0 ${p.featured ? "bg-accent" : "bg-accent"}`} />
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
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionEyebrow>Depoimentos</SectionEyebrow>
            <h2 className="text-4xl md:text-5xl mb-3">Histórias de Transformação</h2>
            <p className="text-foreground/70">Veja como mulheres como você reconstruíram suas vidas e carreiras</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="p-8 lg:p-10 bg-card rounded-2xl border border-border/60 flex flex-col">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed italic mb-6 flex-1">"{t.text}"</p>
                <footer>
                  <div className="font-semibold text-primary">{t.name}</div>
                  <div className="text-[0.7rem] uppercase tracking-[0.2em] text-accent mt-1">{t.role}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS CORPORATIVOS */}
      <section id="servicos" className="bg-[var(--color-surface)] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 rotate-2" aria-hidden />
            <img
              src={corporateImage}
              alt="Saúde Mental Corporativa"
              width={1400}
              height={1000}
              loading="lazy"
              className="relative rounded-[1.75rem] shadow-[var(--shadow-elegant)] object-cover w-full"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="block w-16 h-[2px] bg-accent mb-6" />
            <p className="eyebrow mb-4">Saúde Mental Corporativa</p>
            <h2 className="text-4xl md:text-5xl mb-6">Programas Corporativos em Saúde Mental & NR-1</h2>
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
                  <CheckCircle2 size={18} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <a href={waLink("Olá Marlene! Gostaria de solicitar uma proposta para o programa corporativo.")} className="btn-primary" target="_blank" rel="noreferrer">
              Solicitar Proposta Corporativa
            </a>
          </div>
        </div>
      </section>

      {/* CONTATO / FORM — light background as in original */}
      <section id="contato" className="py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <SectionEyebrow>Contato</SectionEyebrow>
          <h2 className="text-4xl md:text-5xl mb-4">Comece Sua Transformação Hoje</h2>
          <p className="text-foreground/70 mb-12">
            Deixe seus dados e receba uma proposta personalizada para sua jornada de reconstrução.
          </p>

          <form onSubmit={submitForm} className="grid gap-5 text-left bg-card p-8 lg:p-10 rounded-2xl border border-border shadow-[var(--shadow-elegant)]">
            <label className="text-sm">
              <span className="block mb-2 text-foreground/80 font-medium">Nome Completo *</span>
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-input text-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition" />
            </label>
            <div className="grid md:grid-cols-2 gap-5">
              <label className="text-sm">
                <span className="block mb-2 text-foreground/80 font-medium">Email *</span>
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-input text-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition" />
              </label>
              <label className="text-sm">
                <span className="block mb-2 text-foreground/80 font-medium">WhatsApp *</span>
                <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
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
      <section id="faq" className="bg-[var(--color-surface)] py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="text-center mb-14">
            <SectionEyebrow>FAQ</SectionEyebrow>
            <h2 className="text-4xl md:text-5xl mb-3">Dúvidas Frequentes</h2>
            <p className="text-foreground/70">Respostas para as perguntas mais comuns sobre os programas e serviços</p>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={f.q} className="border border-border rounded-xl bg-card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between text-left px-6 py-5 hover:bg-muted/50 transition-colors"
                >
                  <span className="text-primary font-medium pr-6">{f.q}</span>
                  <ChevronDown size={20} className={`text-accent flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-foreground/75 leading-relaxed">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER — burgundy */}
      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid md:grid-cols-3 gap-12">
          <div>
            <img src={logoWhite} alt="Marlene Corrêa" className="h-16 w-auto mb-4" />
            <p className="text-sm text-primary-foreground/70 max-w-xs leading-relaxed mt-4">
              Psicanalista Clínica e Mentora Estratégica. Reconstrução 40+.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.24em] text-accent mb-5 font-semibold">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={waLink("Olá Marlene!")} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-primary-foreground/85 hover:text-accent transition-colors">
                  <Phone size={16} className="text-accent" />
                  (11) 97335-6733
                </a>
              </li>
              <li>
                <a href="mailto:macorrea.psi@gmail.com" className="flex items-center gap-3 text-primary-foreground/85 hover:text-accent transition-colors">
                  <Mail size={16} className="text-accent" />
                  macorrea.psi@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.24em] text-accent mb-5 font-semibold">Redes Sociais</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href={waLink("Olá Marlene!")} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors" aria-label="WhatsApp">
                <Phone size={16} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/15">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 text-center text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} Marlene Corrêa. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
