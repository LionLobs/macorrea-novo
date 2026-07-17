import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImage from "@/assets/hero-marlene.jpg";
import corporateImage from "@/assets/corporate.jpg";

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
    ctaLink: waLink(
      "Olá Marlene! Gostaria de solicitar aplicação para o Programa Exclusivo de Reconstrução 40+."
    ),
    featured: true,
  },
  {
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
    ctaLink: waLink(
      "Olá Marlene! Gostaria de iniciar a Jornada Essencial de Reconstrução 40+. Como funciona?"
    ),
    featured: false,
  },
  {
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
    ctaLink: waLink(
      "Olá Marlene! Gostaria de agendar um atendimento individual terapêutico. Qual é a disponibilidade?"
    ),
    featured: false,
  },
];

const testimonials = [
  {
    text: "As sessões de terapias energéticas e também as sessões terapêuticas com os movimentos sistêmicos foram um divisor de águas para meu autoconhecimento, crescimento pessoal e espiritual.",
    name: "Fernanda Parra",
    role: "Acompanhamento Terapêutico",
  },
  {
    text: "Foi excelente ter feito sessões de terapia com a Marlene, frente a uma mudança de país vêm alguns desafios emocionais como: estar longe da família, lidar e conviver com pessoas de cultura diferentes.",
    name: "Patrícia Kaltner",
    role: "Acompanhamento Terapêutico",
  },
  {
    text: "A Terapia Sistêmica mudou completamente minha vida. Tanto que escolhi fazer somente as sessões com a Marlene, e optei por não dar continuidade na terapia convencional. Tenho mexido em emoções que estão atreladas à minha criança interior e isso tem me ajudado a me curar.",
    name: "Ariane Cavalcante",
    role: "Acompanhamento Terapêutico",
  },
  {
    text: "Querida Marlene, como sua mentorada nesse meu processo de transição de carreira pude aprender a me planejar, a colocar foco e determinar as etapas para realmente fazer acontecer meus negócios. Eu realmente amadureci nesse período em que estivemos juntas.",
    name: "Karina Marquis",
    role: "Mentoria Transição de Carreira",
  },
];

const faqs = [
  {
    q: "Qual é a diferença entre o Programa Reconstrução 40+ e a Jornada Essencial?",
    a: "O Programa Exclusivo de Reconstrução 40+ é um processo profundo de 10 semanas individuais, seletivo e estruturado pelo Método Identidade Estratégica™, voltado à reconstrução completa de identidade, direção e posicionamento profissional. A Jornada Essencial é um processo mais curto, de 5 semanas, indicado para quem busca clareza emocional e direção estratégica inicial, podendo evoluir posteriormente para o programa exclusivo.",
  },
  {
    q: "Como funciona a Conversa de Alinhamento?",
    a: "É um encontro individual, sem custo, para entender o seu momento atual, seus objetivos e avaliar se há alinhamento para ingresso no Programa Exclusivo. Nesta conversa também são apresentados o formato completo e o investimento.",
  },
  {
    q: "Posso fazer atendimentos enquanto estou em um programa?",
    a: "Sim. Os atendimentos individuais terapêuticos podem ser combinados aos programas estruturados como suporte complementar, sempre com abordagem personalizada de acordo com o seu momento.",
  },
  {
    q: "Qual é o investimento dos programas?",
    a: "O investimento da Jornada Essencial é apresentado no primeiro contato. Já o do Programa Exclusivo de Reconstrução 40+ é apresentado exclusivamente na Conversa de Alinhamento, após entendermos o seu contexto e objetivos.",
  },
  {
    q: "Como funciona o atendimento corporativo?",
    a: "Iniciamos com um diagnóstico dos fatores psicossociais da empresa, seguido pela construção de um plano de ação estratégico personalizado, com relatórios técnicos para PGR e auditorias, assessoria para RH e lideranças, e programas contínuos de saúde mental em conformidade com a NR-1.",
  },
];

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá Marlene! Meu nome é ${form.name}. Email: ${form.email}. WhatsApp: ${form.phone}. ${form.message ? "Mensagem: " + form.message : "Gostaria de receber uma proposta personalizada."}`;
    window.open(waLink(msg), "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border/60">
        <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-serif text-2xl text-primary">Ma Corrêa</span>
            <span className="hidden sm:inline text-[10px] uppercase tracking-[0.28em] text-accent">Psicanalista</span>
          </a>
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-foreground/75 hover:text-primary transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={waLink("Olá Marlene! Gostaria de conversar sobre os programas.")}
            className="hidden md:inline-flex text-xs uppercase tracking-[0.18em] font-semibold text-primary hover:text-accent transition-colors"
          >
            Fale comigo
          </a>
        </nav>
      </header>

      <section id="top" className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-24 pb-24 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="eyebrow mb-6">Saúde Mental e Reconstrução Profissional</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-8">
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
            <p className="text-foreground/80">Não é apenas sobre mudança profissional.</p>
            <p className="italic text-muted-foreground">
              É sobre reconstruir identidade e assumir a potência que a maturidade trouxe.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={waLink("Olá Marlene! Gostaria de solicitar aplicação para o Programa Exclusivo de Reconstrução 40+.")}
              className="btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Solicitar Aplicação
            </a>
            <a href="#programas" className="btn-outline">Conhecer Mais</a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-accent/10 -rotate-2" aria-hidden />
          <img
            src={heroImage}
            alt="Marlene Corrêa, psicanalista clínica"
            width={1200}
            height={1400}
            className="relative rounded-[1.75rem] shadow-[var(--shadow-soft)] object-cover w-full h-auto"
          />
        </div>
      </section>

      <section id="sobre" className="bg-[var(--color-surface)] py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
          <p className="eyebrow mb-4">Expertise & Experiência</p>
          <h2 className="text-4xl md:text-5xl mb-8">
            Conhecimento clínico aliado a mais de 20 anos no mercado corporativo
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left mt-14">
            {[
              { k: "20+", v: "anos de experiência no mercado corporativo, incluindo gerência de serviços em multinacional." },
              { k: "10 sem.", v: "de processo estruturado no Programa Exclusivo de Reconstrução 40+." },
              { k: "NR-1", v: "conformidade em programas corporativos de saúde mental e prevenção de riscos psicossociais." },
            ].map((s) => (
              <div key={s.k} className="p-8 bg-card rounded-2xl border border-border/60">
                <div className="font-serif text-4xl text-accent mb-3">{s.k}</div>
                <p className="text-foreground/75 leading-relaxed">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="programas" className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-4">Programas de Transformação</p>
          <h2 className="text-4xl md:text-5xl mb-4">Processos estruturados e seletivos</h2>
          <p className="text-foreground/70">para sua reconstrução profissional e pessoal</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((p) => (
            <article
              key={p.title}
              className={`relative flex flex-col p-8 lg:p-10 rounded-2xl border transition-all ${
                p.featured
                  ? "bg-primary text-primary-foreground border-primary shadow-[var(--shadow-elegant)] lg:-translate-y-2"
                  : "bg-card border-border hover:border-accent/60"
              }`}
            >
              <span
                className={`self-start text-[0.7rem] uppercase tracking-[0.18em] font-semibold px-3 py-1.5 rounded-full mb-6 ${
                  p.featured ? "bg-accent text-accent-foreground" : "bg-accent/15 text-accent"
                }`}
              >
                {p.tag}
              </span>
              <h3 className={p.featured ? "text-2xl mb-2 text-primary-foreground" : "text-2xl mb-2"}>
                {p.title}
              </h3>
              <p className={`text-sm mb-6 italic ${p.featured ? "text-primary-foreground/75" : "text-accent"}`}>
                {p.subtitle}
              </p>
              <p className={`mb-6 leading-relaxed ${p.featured ? "text-primary-foreground/85" : "text-foreground/75"}`}>
                {p.description}
              </p>
              <ul className="space-y-2.5 mb-6">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm">
                    <span className="text-accent">✦</span>
                    <span className={p.featured ? "text-primary-foreground/90" : "text-foreground/80"}>{b}</span>
                  </li>
                ))}
              </ul>
              <p className={`text-xs italic mb-8 ${p.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
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
          ))}
        </div>
      </section>

      <section id="depoimentos" className="bg-[var(--color-surface)] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow mb-4">Histórias de Transformação</p>
            <h2 className="text-4xl md:text-5xl">
              Veja como mulheres como você reconstruíram suas vidas e carreiras
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="p-8 lg:p-10 bg-card rounded-2xl border border-border/60 flex flex-col"
              >
                <span className="font-serif text-6xl text-accent leading-none mb-4">“</span>
                <p className="text-foreground/80 leading-relaxed mb-6 flex-1">{t.text}</p>
                <footer>
                  <div className="font-serif text-xl text-primary">{t.name}</div>
                  <div className="text-xs uppercase tracking-[0.18em] text-accent mt-1">{t.role}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="servicos" className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-6 rounded-[2rem] bg-primary/10 rotate-2" aria-hidden />
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
          <ul className="grid sm:grid-cols-2 gap-3 mb-10">
            {[
              "Diagnóstico dos fatores psicossociais",
              "Plano de ação estratégico",
              "Relatórios técnicos para PGR e auditorias",
              "Assessoria para RH e lideranças",
              "Programas personalizados de saúde mental",
            ].map((i) => (
              <li key={i} className="flex gap-3 text-sm text-foreground/80">
                <span className="text-accent">✦</span>{i}
              </li>
            ))}
          </ul>
          <a
            href={waLink("Olá Marlene! Gostaria de solicitar uma proposta para o programa corporativo.")}
            className="btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Solicitar Proposta Corporativa
          </a>
        </div>
      </section>

      <section id="contato" className="bg-primary text-primary-foreground py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <p className="eyebrow mb-4">Vamos Conversar</p>
          <h2 className="text-4xl md:text-5xl mb-4 text-primary-foreground">
            Comece Sua Transformação Hoje
          </h2>
          <p className="text-primary-foreground/80 mb-12">
            Deixe seus dados e receba uma proposta personalizada para sua jornada de reconstrução.
          </p>

          <form onSubmit={submitForm} className="grid gap-5 text-left bg-background/5 backdrop-blur-sm p-8 lg:p-10 rounded-2xl border border-primary-foreground/10">
            <div className="grid md:grid-cols-2 gap-5">
              <label className="text-sm">
                <span className="block mb-2 text-primary-foreground/85">Nome Completo *</span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/40 focus:outline-none focus:border-accent"
                />
              </label>
              <label className="text-sm">
                <span className="block mb-2 text-primary-foreground/85">Email *</span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/40 focus:outline-none focus:border-accent"
                />
              </label>
            </div>
            <label className="text-sm">
              <span className="block mb-2 text-primary-foreground/85">WhatsApp *</span>
              <input
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/40 focus:outline-none focus:border-accent"
              />
            </label>
            <label className="text-sm">
              <span className="block mb-2 text-primary-foreground/85">Mensagem (Opcional)</span>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/40 focus:outline-none focus:border-accent resize-none"
              />
            </label>
            <button type="submit" className="btn-primary mt-2 justify-self-center">
              Receber Proposta Personalizada
            </button>
            <p className="text-xs text-primary-foreground/60 text-center">
              Seus dados são confidenciais e serão usados apenas para enviar sua proposta personalizada.
              Você receberá contato em até 24 horas.
            </p>
          </form>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 lg:px-10 py-24">
        <div className="text-center mb-14">
          <p className="eyebrow mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl mb-4">Dúvidas Frequentes</h2>
          <p className="text-foreground/70">
            Respostas para as perguntas mais comuns sobre os programas e serviços
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="border border-border rounded-xl bg-card overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between text-left px-6 py-5 hover:bg-muted/50 transition-colors"
              >
                <span className="font-serif text-lg text-primary pr-6">{f.q}</span>
                <span className={`text-accent text-2xl transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-6 text-foreground/75 leading-relaxed">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-[var(--color-surface)] border-t border-border py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-3 gap-10 items-start">
          <div>
            <div className="font-serif text-2xl text-primary mb-2">Marlene Corrêa</div>
            <p className="text-xs uppercase tracking-[0.24em] text-accent mb-4">Psicanalista Clínica</p>
            <p className="text-sm text-foreground/70 max-w-xs">
              Saúde mental e reconstrução profissional pelo Método Identidade Estratégica™.
            </p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-primary mb-4 font-sans font-semibold">Navegação</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-foreground/70 hover:text-primary">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-primary mb-4 font-sans font-semibold">Contato</h4>
            <a
              href={waLink("Olá Marlene!")}
              className="block text-sm text-foreground/80 hover:text-accent mb-2"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp: (11) 97335-6733
            </a>
            <p className="text-xs text-muted-foreground mt-6">
              © {new Date().getFullYear()} Marlene Corrêa. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
