import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ShieldCheck,
  Repeat,
  Star,
  Sparkles,
  Smartphone,
  Wrench,
  BatteryCharging,
  Monitor,
  Package,
  Truck,
  Search,
  ArrowRight,
  Check,
  ChevronDown,
  Instagram,
  Phone,
  MapPin,
  Award,
  Users,
  Zap,
} from "lucide-react";
import heroIphone from "@/assets/hero-iphone.jpg";
import storeImg from "@/assets/store.jpg";
import repairImg from "@/assets/repair.jpg";
import tradeImg from "@/assets/trade.jpg";
import { WhatsAppFab, waLink } from "@/components/landing/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JJ Eletrônicos Litoral | iPhones, Trocas e Assistência Técnica" },
      {
        name: "description",
        content:
          "Compre, troque ou conserte seu iPhone com a JJ Eletrônicos Litoral. Aparelhos lacrados, seminovos, avaliação justa do usado e assistência técnica especializada em Caraguatatuba e Litoral Norte.",
      },
      { property: "og:title", content: "JJ Eletrônicos Litoral | iPhones, Trocas e Assistência" },
      {
        property: "og:description",
        content:
          "Aparelhos lacrados, seminovos premium e assistência técnica especializada no Litoral Norte.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "JJ Eletrônicos Litoral",
          image: "/og.jpg",
          telephone: ["+5512983201093", "+5513996472668"],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Caraguatatuba",
            addressRegion: "SP",
            addressCountry: "BR",
          },
          sameAs: ["https://instagram.com/jjeletronicoslitoral"],
        }),
      },
    ],
  }),
  component: Landing,
});

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Landing() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <TradeSection />
        <Availability />
        <About />
        <Differentiators />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

/* ---------------- Header ---------------- */

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Aparelhos", href: "#aparelhos" },
  { label: "Trocas", href: "#trocas" },
  { label: "Assistência", href: "#assistencia" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? "glass-dark" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-md border border-gold/40 bg-graphite text-gold font-black tracking-tight">
            JJ
          </span>
          <span className="hidden text-sm font-medium tracking-[0.18em] text-white/90 sm:block">
            ELETRÔNICOS <span className="text-gold">LITORAL</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-white/75 transition-colors hover:text-gold"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold hidden px-5 py-2.5 text-sm md:inline-flex"
          >
            Falar no WhatsApp
          </a>
          <button
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md border border-white/10 lg:hidden"
          >
            <div className="space-y-1.5">
              <span className="block h-px w-5 bg-white" />
              <span className="block h-px w-5 bg-white" />
              <span className="block h-px w-5 bg-white" />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass-dark border-t border-white/5">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-white/85 hover:bg-white/5 hover:text-gold"
              >
                {n.label}
              </a>
            ))}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-2 justify-center px-5 py-3 text-sm text-center"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 md:pt-36">
      {/* Ambient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 70% 20%, rgba(212,175,55,0.18), transparent 60%), radial-gradient(40% 40% at 10% 80%, rgba(212,175,55,0.10), transparent 60%), #050505",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent)" }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 md:px-8 lg:grid-cols-2 lg:gap-16 lg:pb-32">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-graphite/60 px-4 py-1.5 text-xs font-medium tracking-wide text-gold">
            <Star className="h-3.5 w-3.5 fill-gold" />
            Especialistas em iPhone no Litoral Norte
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[64px]">
            Seu próximo <span className="gold-text">iPhone</span>
            <br /> começa aqui.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Aparelhos lacrados, seminovos selecionados, assistência especializada e uma das melhores
            avaliações para o seu usado.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#aparelhos" className="btn-gold inline-flex items-center gap-2 px-6 py-3.5 text-sm">
              Comprar iPhone <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold inline-flex items-center gap-2 px-6 py-3.5 text-sm"
            >
              Avaliar Meu Aparelho
            </a>
          </div>

          <ul className="mt-10 grid max-w-lg grid-cols-2 gap-x-6 gap-y-3 text-sm text-white/80 sm:grid-cols-4 sm:gap-x-4">
            {["Produtos Originais", "Garantia", "Nota Fiscal", "Atendimento Especializado"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-gold" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-10 -z-10 rounded-[40px] blur-3xl"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(212,175,55,0.35), transparent 70%)",
            }}
          />
          <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-graphite shadow-[0_30px_80px_-30px_rgba(212,175,55,0.5)]">
            <img
              src={heroIphone}
              alt="iPhone premium em fundo escuro com reflexos dourados"
              width={1280}
              height={1280}
              className="block h-full w-full object-cover animate-float-slow"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold">Linha Pro</p>
                <p className="text-sm text-white/90">Lacrados • Seminovos Premium • Trocas</p>
              </div>
              <Sparkles className="h-5 w-5 text-gold" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Benefits ---------------- */

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`reveal mx-auto max-w-3xl ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{subtitle}</p>
      )}
      <div className="hairline mx-auto mt-8 w-32" />
    </div>
  );
}

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: "Produtos Originais",
    desc: "Aparelhos de procedência e qualidade garantida.",
  },
  {
    icon: Repeat,
    title: "Troca Inteligente",
    desc: "Seu usado entra como parte do pagamento.",
  },
  {
    icon: Award,
    title: "Avaliação Justa",
    desc: "Receba uma das melhores avaliações da região.",
  },
  {
    icon: Users,
    title: "Atendimento Diferenciado",
    desc: "Experiência personalizada do início ao fim.",
  },
];

function Benefits() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Por que a JJ"
          title={<>Por que escolher a <span className="gold-text">JJ Eletrônicos</span>?</>}
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <div key={b.title} className="card-premium reveal p-6" style={{ transitionDelay: `${i * 70}ms` }}>
              <div className="grid h-12 w-12 place-items-center rounded-xl border border-gold/30 bg-graphite text-gold">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */

const SERVICES = [
  { icon: Smartphone, title: "Venda de iPhones Lacrados", desc: "Produtos novos com garantia." },
  { icon: Sparkles, title: "Seminovos Premium", desc: "Aparelhos selecionados e revisados." },
  { icon: Repeat, title: "Troca de Aparelhos", desc: "Facilidade para fazer upgrade." },
  { icon: Wrench, title: "Assistência Técnica", desc: "Reparos e manutenção especializada." },
  { icon: Monitor, title: "Troca de Tela", desc: "Serviço rápido e seguro." },
  { icon: BatteryCharging, title: "Troca de Bateria", desc: "Mais desempenho para seu aparelho." },
];

function Services() {
  return (
    <section id="assistencia" className="relative border-y border-white/5 bg-graphite/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Serviços"
          title={<>Soluções <span className="gold-text">completas</span> para seu smartphone</>}
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <div key={s.title} className="card-premium reveal group relative overflow-hidden p-7" style={{ transitionDelay: `${i * 60}ms` }}>
              <div
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(closest-side, rgba(212,175,55,0.25), transparent)" }}
              />
              <s.icon className="h-7 w-7 text-gold" />
              <h3 className="mt-6 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-gold/80">
                Saiba mais <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Trade Section ---------------- */

function TradeSection() {
  const steps = [
    "Envie as informações do aparelho.",
    "Receba uma avaliação personalizada.",
    "Utilize seu aparelho como parte do pagamento.",
  ];
  return (
    <section id="trocas" className="relative py-24 md:py-32" style={{ background: "#111111" }}>
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
            Troca & Avaliação
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Seu usado vale <span className="gold-text">dinheiro</span>.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Receba uma avaliação rápida, transparente e justa para utilizar seu aparelho como entrada
            na compra do próximo iPhone.
          </p>

          <ol className="mt-8 space-y-4">
            {steps.map((s, i) => (
              <li key={s} className="flex items-start gap-4 rounded-2xl border border-white/5 bg-ink/60 p-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/40 bg-graphite text-sm font-semibold text-gold">
                  {i + 1}
                </span>
                <p className="pt-1.5 text-sm text-white/90 md:text-base">{s}</p>
              </li>
            ))}
          </ol>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-8 inline-flex items-center gap-2 px-6 py-3.5 text-sm"
          >
            Quero Avaliar Meu Celular <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="reveal relative">
          <div
            aria-hidden
            className="absolute -inset-8 -z-10 rounded-[36px] blur-3xl"
            style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(212,175,55,0.3), transparent 70%)" }}
          />
          <div className="overflow-hidden rounded-3xl border border-gold/20">
            <img
              src={tradeImg}
              alt="Troca de iPhone — aparelho novo e usado em destaque com reflexos dourados"
              width={1280}
              height={896}
              loading="lazy"
              className="block h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Availability ---------------- */

const AVAILABILITY = [
  {
    icon: Truck,
    title: "Pronta Entrega",
    desc: "Diversos modelos disponíveis para retirada rápida.",
    bullets: ["Estoque rotativo", "Produtos selecionados", "Garantia"],
  },
  {
    icon: Sparkles,
    title: "Seminovos Premium",
    desc: "Aparelhos cuidadosamente avaliados e revisados.",
    bullets: ["Excelente estado", "Procedência garantida", "Melhor custo-benefício"],
  },
  {
    icon: Package,
    title: "Encomendas",
    desc: "Não encontrou o modelo? Localizamos o aparelho ideal para você.",
    bullets: ["Modelos específicos", "Capacidades diferenciadas", "Versões premium"],
  },
];

const WANTED = [
  "iPhones Lacrados",
  "iPhones Seminovos",
  "Modelos Pro e Pro Max",
  "Aparelhos para Troca",
  "Acessórios",
  "Assistência Técnica",
];

function Availability() {
  return (
    <section id="aparelhos" className="relative py-24 md:py-32" style={{ background: "#0c0c0c" }}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Disponibilidade"
          title={<>O <span className="gold-text">iPhone</span> que você procura pode estar disponível hoje.</>}
          subtitle="Trabalhamos com aparelhos lacrados, seminovos premium e modelos sob encomenda. Entre em contato agora para consultar disponibilidade, cores, capacidades e condições especiais de troca."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {AVAILABILITY.map((a, i) => (
            <div key={a.title} className="card-premium reveal p-7" style={{ transitionDelay: `${i * 80}ms` }}>
              <a.icon className="h-7 w-7 text-gold" />
              <h3 className="mt-6 text-xl font-semibold text-white">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
              <ul className="mt-5 space-y-2">
                {a.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-white/85">
                    <Check className="h-4 w-4 text-gold" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Featured center block */}
        <div
          className="reveal mt-12 overflow-hidden rounded-3xl border border-gold/25 p-8 md:p-12"
          style={{
            background:
              "linear-gradient(135deg, rgba(212,175,55,0.10), rgba(17,17,17,0.6)), #0a0a0a",
          }}
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h3 className="text-2xl font-bold text-white md:text-3xl">
                Não encontrou o modelo que <span className="gold-text">procura</span>?
              </h3>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Fale com nossa equipe e descubra quais aparelhos estão disponíveis hoje ou solicite
                uma cotação personalizada.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex items-center gap-2 px-5 py-3 text-sm">
                  Consultar Disponibilidade
                </a>
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-outline-gold inline-flex items-center gap-2 px-5 py-3 text-sm">
                  Solicitar Cotação <Search className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-ink/70 p-6">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">O que você procura?</p>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {WANTED.map((w) => (
                  <li key={w} className="flex items-center gap-2 text-sm text-white/90">
                    <Check className="h-4 w-4 text-gold" /> {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="reveal mt-12 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gold">Atendimento rápido e personalizado</p>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Receba informações atualizadas sobre estoque, disponibilidade e condições de pagamento
            diretamente pelo WhatsApp.
          </p>
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-gold mt-6 inline-flex items-center gap-2 px-6 py-3.5 text-sm">
            Ver Aparelhos Disponíveis <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */

function About() {
  const pills = ["Atendimento personalizado", "Transparência", "Qualidade", "Agilidade", "Confiança"];
  return (
    <section id="sobre" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
        <div className="reveal order-2 lg:order-1">
          <div className="overflow-hidden rounded-3xl border border-gold/20">
            <img
              src={storeImg}
              alt="Interior elegante da loja JJ Eletrônicos Litoral"
              width={1280}
              height={896}
              loading="lazy"
              className="block h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="reveal order-1 lg:order-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
            Sobre a empresa
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Especialistas em <span className="gold-text">iPhone</span> no Litoral Norte
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            A JJ Eletrônicos Litoral nasceu para oferecer uma experiência diferenciada para quem
            busca comprar, trocar ou consertar seu aparelho com segurança. Trabalhamos com produtos
            selecionados, atendimento próximo e transparência em cada negociação.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {pills.map((p) => (
              <span
                key={p}
                className="rounded-full border border-gold/25 bg-graphite px-3.5 py-1.5 text-xs font-medium text-white/85"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Differentiators ---------------- */

const DIFFS = [
  { icon: Users, label: "Atendimento Humanizado" },
  { icon: Sparkles, label: "Produtos Selecionados" },
  { icon: Award, label: "Avaliação Competitiva" },
  { icon: ShieldCheck, label: "Garantia e Nota Fiscal" },
  { icon: Wrench, label: "Assistência Especializada" },
  { icon: Zap, label: "Suporte Pós-Venda" },
];

function Differentiators() {
  return (
    <section className="relative border-y border-white/5 bg-graphite/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Diferenciais"
          title={<>Mais do que <span className="gold-text">vender celulares</span></>}
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFS.map((d, i) => (
            <div
              key={d.label}
              className="card-premium reveal flex items-center gap-4 p-5"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-gold/30 bg-ink text-gold">
                <d.icon className="h-5 w-5" />
              </div>
              <p className="text-base font-medium text-white">{d.label}</p>
              <Check className="ml-auto h-5 w-5 text-gold/80" />
            </div>
          ))}
        </div>

        <div className="reveal mt-14 grid gap-5 sm:grid-cols-3">
          <div className="overflow-hidden rounded-3xl border border-gold/20">
            <img src={repairImg} alt="Assistência técnica especializada" width={1280} height={896} loading="lazy" className="h-56 w-full object-cover sm:h-72" />
          </div>
          <div className="overflow-hidden rounded-3xl border border-gold/20">
            <img src={tradeImg} alt="Troca de aparelhos com avaliação justa" width={1280} height={896} loading="lazy" className="h-56 w-full object-cover sm:h-72" />
          </div>
          <div className="overflow-hidden rounded-3xl border border-gold/20">
            <img src={storeImg} alt="Loja JJ Eletrônicos Litoral" width={1280} height={896} loading="lazy" className="h-56 w-full object-cover sm:h-72" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */

const REVIEWS = [
  {
    name: "Rafael M.",
    text: "Atendimento impecável. Comprei um iPhone lacrado e ainda usei meu antigo na troca com uma ótima avaliação.",
  },
  {
    name: "Camila S.",
    text: "Fizeram troca de tela do meu iPhone em poucas horas. Trabalho perfeito, parece zero novamente.",
  },
  {
    name: "Eduardo P.",
    text: "Profissionais sérios e transparentes. Recomendo para quem busca segurança em Caraguatatuba.",
  },
];

function Testimonials() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Prova social"
          title={<>Quem compra <span className="gold-text">recomenda</span></>}
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <figure
              key={r.name}
              className="card-premium reveal flex h-full flex-col p-7"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-gold" />
                ))}
              </div>
              <blockquote className="mt-5 text-base leading-relaxed text-white/90">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-graphite text-sm font-semibold text-gold">
                  {r.name.charAt(0)}
                </div>
                <span className="text-sm text-white/85">{r.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

const FAQS = [
  { q: "Vocês aceitam celular usado na troca?", a: "Sim. Aceitamos seu aparelho usado como parte do pagamento, com avaliação rápida e justa." },
  { q: "Como funciona a avaliação?", a: "Você nos envia as informações do aparelho pelo WhatsApp e em poucos minutos recebe uma proposta personalizada." },
  { q: "Os aparelhos possuem garantia?", a: "Sim. Todos os aparelhos saem com garantia, nota fiscal e procedência comprovada." },
  { q: "Trabalham com aparelhos lacrados?", a: "Sim. Trabalhamos com iPhones lacrados, seminovos premium e modelos sob encomenda." },
  { q: "Fazem assistência técnica?", a: "Sim. Oferecemos troca de tela, troca de bateria, reparos e manutenção especializada." },
  { q: "Atendem apenas Caraguatatuba?", a: "Estamos em Caraguatatuba, mas atendemos toda a região do Litoral Norte." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative border-t border-white/5 bg-graphite/40 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={<>Dúvidas <span className="gold-text">frequentes</span></>}
        />
        <div className="reveal mt-12 divide-y divide-white/5 overflow-hidden rounded-2xl border border-white/10 bg-ink/60">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-white/[0.03]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-white">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden px-5 transition-[grid-template-rows,opacity,padding] duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0">
                    <p className="text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */

function FinalCTA() {
  return (
    <section id="contato" className="relative overflow-hidden py-28 md:py-36" style={{ background: "#020202" }}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(45% 45% at 50% 30%, rgba(212,175,55,0.25), transparent 70%)",
        }}
      />
      <div className="reveal relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Pronto para trocar, comprar ou consertar seu <span className="gold-text">aparelho</span>?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
          Fale agora com a JJ Eletrônicos Litoral e receba atendimento personalizado.
        </p>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold mt-9 inline-flex items-center gap-2 px-8 py-4 text-base"
        >
          Chamar no WhatsApp <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3 md:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-md border border-gold/40 bg-graphite text-gold font-black">
              JJ
            </span>
            <span className="text-sm font-medium tracking-[0.18em] text-white/90">
              ELETRÔNICOS <span className="text-gold">LITORAL</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Especialistas em iPhone no Litoral Norte. Vendas, trocas e assistência técnica com
            atendimento personalizado.
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">Navegação</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition-colors hover:text-gold">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">Contato</p>
          <ul className="mt-4 space-y-3 text-sm text-white/85">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold" /> Caraguatatuba / SP
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold" />
              <a href="https://wa.me/5512983201093" target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                (12) 98320-1093
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold" />
              <a href="https://wa.me/5513996472668" target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                (13) 99647-2668
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="h-4 w-4 text-gold" />
              <a
                href="https://instagram.com/jjeletronicoslitoral"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                @jjeletronicoslitoral
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="hairline mx-auto mt-10 max-w-7xl" />
      <p className="mx-auto mt-6 max-w-7xl px-5 text-center text-xs text-white/50 md:px-8">
        © {new Date().getFullYear()} JJ Eletrônicos Litoral. Todos os direitos reservados.
      </p>
    </footer>
  );
}
