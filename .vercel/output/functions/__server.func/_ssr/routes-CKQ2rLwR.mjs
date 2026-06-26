import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as BatteryCharging, a as Star, b as Sparkles, c as Search, d as Package, f as Monitor, g as Check, h as ChevronDown, i as Truck, l as Repeat, m as Instagram, n as Wrench, o as Smartphone, p as MapPin, r as Users, s as ShieldCheck, t as Zap, u as Phone, v as Award, y as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CKQ2rLwR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_iphone_default = "/assets/hero-iphone-DIDb75_n.jpg";
var store_default = "/assets/store-L3tOGwlr.jpg";
var repair_default = "/assets/repair-DVGURULL.jpg";
var trade_default = "/assets/trade-DNS6GwBo.jpg";
var waLink = `https://wa.me/5512983201093?text=${encodeURIComponent("Olá, vim pelo site da JJ Eletrônicos Litoral e gostaria de comprar, trocar ou avaliar meu aparelho.")}`;
function WhatsAppFab() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: waLink,
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "Falar no WhatsApp",
		className: "fixed bottom-5 right-5 z-50 group",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute inset-0 rounded-full bg-[#25D366]/40 blur-xl animate-pulse",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] transition-transform duration-300 group-hover:scale-110",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 32 32",
				className: "h-7 w-7 fill-current",
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.11 17.58c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15s-.78.98-.96 1.18c-.18.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51l-.58-.01c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.13 4.54.72.31 1.28.5 1.71.64.72.23 1.37.2 1.89.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35zM16.02 4C9.39 4 4 9.4 4 16.04c0 2.13.56 4.2 1.6 6.03L4 28l6.1-1.59a11.97 11.97 0 0 0 5.92 1.55h.01c6.62 0 12.01-5.4 12.01-12.05A12 12 0 0 0 16.02 4zm7.05 19.06a9.94 9.94 0 0 1-7.05 2.93h-.01c-1.78 0-3.52-.48-5.05-1.38l-.36-.21-3.62.94.96-3.53-.23-.37a10.04 10.04 0 0 1-1.53-5.4c0-5.53 4.49-10.04 10.01-10.04a9.95 9.95 0 0 1 7.07 2.94 9.95 9.95 0 0 1 2.93 7.1c0 5.53-4.5 10.02-10.02 10.02z" })
			})
		})]
	});
}
function useReveal() {
	(0, import_react.useEffect)(() => {
		const els = document.querySelectorAll(".reveal");
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					e.target.classList.add("is-visible");
					io.unobserve(e.target);
				}
			});
		}, { threshold: .12 });
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, []);
}
function Landing() {
	useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Benefits, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TradeSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Availability, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Differentiators, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFab, {})
		]
	});
}
var NAV = [
	{
		label: "Início",
		href: "#inicio"
	},
	{
		label: "Aparelhos",
		href: "#aparelhos"
	},
	{
		label: "Trocas",
		href: "#trocas"
	},
	{
		label: "Assistência",
		href: "#assistencia"
	},
	{
		label: "Sobre",
		href: "#sobre"
	},
	{
		label: "Contato",
		href: "#contato"
	}
];
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-40 transition-all duration-500 ${scrolled ? "glass-dark" : "bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#inicio",
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-9 w-9 place-items-center rounded-md border border-gold/40 bg-graphite text-gold font-black tracking-tight",
						children: "JJ"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "hidden text-sm font-medium tracking-[0.18em] text-white/90 sm:block",
						children: ["ELETRÔNICOS ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gold",
							children: "LITORAL"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 lg:flex",
					children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: n.href,
						className: "text-sm text-white/75 transition-colors hover:text-gold",
						children: n.label
					}, n.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: waLink,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "btn-gold hidden px-5 py-2.5 text-sm md:inline-flex",
						children: "Falar no WhatsApp"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Abrir menu",
						onClick: () => setOpen((v) => !v),
						className: "grid h-10 w-10 place-items-center rounded-md border border-white/10 lg:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-px w-5 bg-white" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-px w-5 bg-white" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-px w-5 bg-white" })
							]
						})
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:hidden glass-dark border-t border-white/5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4",
				children: [NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: n.href,
					onClick: () => setOpen(false),
					className: "rounded-md px-3 py-3 text-white/85 hover:bg-white/5 hover:text-gold",
					children: n.label
				}, n.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: waLink,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "btn-gold mt-2 justify-center px-5 py-3 text-sm text-center",
					children: "Falar no WhatsApp"
				})]
			})
		})]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "inicio",
		className: "relative overflow-hidden pt-28 md:pt-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0 -z-10",
				style: { background: "radial-gradient(60% 50% at 70% 20%, rgba(212,175,55,0.18), transparent 60%), radial-gradient(40% 40% at 10% 80%, rgba(212,175,55,0.10), transparent 60%), #050505" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-x-0 top-0 -z-10 h-px",
				style: { background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 md:px-8 lg:grid-cols-2 lg:gap-16 lg:pb-32",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-fade-up",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full border border-gold/30 bg-graphite/60 px-4 py-1.5 text-xs font-medium tracking-wide text-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-gold" }), "Especialistas em iPhone no Litoral Norte"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[64px]",
							children: [
								"Seu próximo ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "gold-text",
									children: "iPhone"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								" começa aqui."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg",
							children: "Aparelhos lacrados, seminovos selecionados, assistência especializada e uma das melhores avaliações para o seu usado."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#aparelhos",
								className: "btn-gold inline-flex items-center gap-2 px-6 py-3.5 text-sm",
								children: ["Comprar iPhone ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: waLink,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "btn-outline-gold inline-flex items-center gap-2 px-6 py-3.5 text-sm",
								children: "Avaliar Meu Aparelho"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-10 grid max-w-lg grid-cols-2 gap-x-6 gap-y-3 text-sm text-white/80 sm:grid-cols-4 sm:gap-x-4",
							children: [
								"Produtos Originais",
								"Garantia",
								"Nota Fiscal",
								"Atendimento Especializado"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t })]
							}, t))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute -inset-10 -z-10 rounded-[40px] blur-3xl",
						style: { background: "radial-gradient(50% 50% at 50% 50%, rgba(212,175,55,0.35), transparent 70%)" }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-3xl border border-gold/20 bg-graphite shadow-[0_30px_80px_-30px_rgba(212,175,55,0.5)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: hero_iphone_default,
							alt: "iPhone premium em fundo escuro com reflexos dourados",
							width: 1280,
							height: 1280,
							className: "block h-full w-full object-cover animate-float-slow"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.2em] text-gold",
								children: "Linha Pro"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-white/90",
								children: "Lacrados • Seminovos Premium • Trocas"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5 text-gold" })]
						})]
					})]
				})]
			})
		]
	});
}
function SectionHeading({ eyebrow, title, subtitle, center = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `reveal mx-auto max-w-3xl ${center ? "text-center" : ""}`,
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-flex items-center gap-2 rounded-full border border-gold/25 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-gold",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl",
				children: title
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base leading-relaxed text-muted-foreground md:text-lg",
				children: subtitle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline mx-auto mt-8 w-32" })
		]
	});
}
var BENEFITS = [
	{
		icon: ShieldCheck,
		title: "Produtos Originais",
		desc: "Aparelhos de procedência e qualidade garantida."
	},
	{
		icon: Repeat,
		title: "Troca Inteligente",
		desc: "Seu usado entra como parte do pagamento."
	},
	{
		icon: Award,
		title: "Avaliação Justa",
		desc: "Receba uma das melhores avaliações da região."
	},
	{
		icon: Users,
		title: "Atendimento Diferenciado",
		desc: "Experiência personalizada do início ao fim."
	}
];
function Benefits() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Por que a JJ",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Por que escolher a ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "gold-text",
						children: "JJ Eletrônicos"
					}),
					"?"
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: BENEFITS.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-premium reveal p-6",
					style: { transitionDelay: `${i * 70}ms` },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-12 w-12 place-items-center rounded-xl border border-gold/30 bg-graphite text-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b.icon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-lg font-semibold text-white",
							children: b.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: b.desc
						})
					]
				}, b.title))
			})]
		})
	});
}
var SERVICES = [
	{
		icon: Smartphone,
		title: "Venda de iPhones Lacrados",
		desc: "Produtos novos com garantia."
	},
	{
		icon: Sparkles,
		title: "Seminovos Premium",
		desc: "Aparelhos selecionados e revisados."
	},
	{
		icon: Repeat,
		title: "Troca de Aparelhos",
		desc: "Facilidade para fazer upgrade."
	},
	{
		icon: Wrench,
		title: "Assistência Técnica",
		desc: "Reparos e manutenção especializada."
	},
	{
		icon: Monitor,
		title: "Troca de Tela",
		desc: "Serviço rápido e seguro."
	},
	{
		icon: BatteryCharging,
		title: "Troca de Bateria",
		desc: "Mais desempenho para seu aparelho."
	}
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "assistencia",
		className: "relative border-y border-white/5 bg-graphite/40 py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Serviços",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Soluções ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "gold-text",
						children: "completas"
					}),
					" para seu smartphone"
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: SERVICES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-premium reveal group relative overflow-hidden p-7",
					style: { transitionDelay: `${i * 60}ms` },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": true,
							className: "pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100",
							style: { background: "radial-gradient(closest-side, rgba(212,175,55,0.25), transparent)" }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-7 w-7 text-gold" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-6 text-xl font-semibold text-white",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: s.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-gold/80",
							children: ["Saiba mais ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
						})
					]
				}, s.title))
			})]
		})
	});
}
function TradeSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "trocas",
		className: "relative py-24 md:py-32",
		style: { background: "#111111" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex items-center gap-2 rounded-full border border-gold/25 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-gold",
						children: "Troca & Avaliação"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl",
						children: [
							"Seu usado vale ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gold-text",
								children: "dinheiro"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg",
						children: "Receba uma avaliação rápida, transparente e justa para utilizar seu aparelho como entrada na compra do próximo iPhone."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-8 space-y-4",
						children: [
							"Envie as informações do aparelho.",
							"Receba uma avaliação personalizada.",
							"Utilize seu aparelho como parte do pagamento."
						].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-4 rounded-2xl border border-white/5 bg-ink/60 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/40 bg-graphite text-sm font-semibold text-gold",
								children: i + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "pt-1.5 text-sm text-white/90 md:text-base",
								children: s
							})]
						}, s))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: waLink,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "btn-gold mt-8 inline-flex items-center gap-2 px-6 py-3.5 text-sm",
						children: ["Quero Avaliar Meu Celular ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "absolute -inset-8 -z-10 rounded-[36px] blur-3xl",
					style: { background: "radial-gradient(50% 50% at 50% 50%, rgba(212,175,55,0.3), transparent 70%)" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-3xl border border-gold/20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: trade_default,
						alt: "Troca de iPhone — aparelho novo e usado em destaque com reflexos dourados",
						width: 1280,
						height: 896,
						loading: "lazy",
						className: "block h-full w-full object-cover"
					})
				})]
			})]
		})
	});
}
var AVAILABILITY = [
	{
		icon: Truck,
		title: "Pronta Entrega",
		desc: "Diversos modelos disponíveis para retirada rápida.",
		bullets: [
			"Estoque rotativo",
			"Produtos selecionados",
			"Garantia"
		]
	},
	{
		icon: Sparkles,
		title: "Seminovos Premium",
		desc: "Aparelhos cuidadosamente avaliados e revisados.",
		bullets: [
			"Excelente estado",
			"Procedência garantida",
			"Melhor custo-benefício"
		]
	},
	{
		icon: Package,
		title: "Encomendas",
		desc: "Não encontrou o modelo? Localizamos o aparelho ideal para você.",
		bullets: [
			"Modelos específicos",
			"Capacidades diferenciadas",
			"Versões premium"
		]
	}
];
var WANTED = [
	"iPhones Lacrados",
	"iPhones Seminovos",
	"Modelos Pro e Pro Max",
	"Aparelhos para Troca",
	"Acessórios",
	"Assistência Técnica"
];
function Availability() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "aparelhos",
		className: "relative py-24 md:py-32",
		style: { background: "#0c0c0c" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Disponibilidade",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"O ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "gold-text",
							children: "iPhone"
						}),
						" que você procura pode estar disponível hoje."
					] }),
					subtitle: "Trabalhamos com aparelhos lacrados, seminovos premium e modelos sob encomenda. Entre em contato agora para consultar disponibilidade, cores, capacidades e condições especiais de troca."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-5 md:grid-cols-3",
					children: AVAILABILITY.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-premium reveal p-7",
						style: { transitionDelay: `${i * 80}ms` },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(a.icon, { className: "h-7 w-7 text-gold" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 text-xl font-semibold text-white",
								children: a.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: a.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-2",
								children: a.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2 text-sm text-white/85",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-gold" }),
										" ",
										b
									]
								}, b))
							})
						]
					}, a.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "reveal mt-12 overflow-hidden rounded-3xl border border-gold/25 p-8 md:p-12",
					style: { background: "linear-gradient(135deg, rgba(212,175,55,0.10), rgba(17,17,17,0.6)), #0a0a0a" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "text-2xl font-bold text-white md:text-3xl",
								children: [
									"Não encontrou o modelo que ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "gold-text",
										children: "procura"
									}),
									"?"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-xl text-muted-foreground",
								children: "Fale com nossa equipe e descubra quais aparelhos estão disponíveis hoje ou solicite uma cotação personalizada."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: waLink,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "btn-gold inline-flex items-center gap-2 px-5 py-3 text-sm",
									children: "Consultar Disponibilidade"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: waLink,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "btn-outline-gold inline-flex items-center gap-2 px-5 py-3 text-sm",
									children: ["Solicitar Cotação ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4" })]
								})]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-white/10 bg-ink/70 p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium uppercase tracking-[0.18em] text-gold",
								children: "O que você procura?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2",
								children: WANTED.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2 text-sm text-white/90",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-gold" }),
										" ",
										w
									]
								}, w))
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal mt-12 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm uppercase tracking-[0.2em] text-gold",
							children: "Atendimento rápido e personalizado"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-3 max-w-2xl text-muted-foreground",
							children: "Receba informações atualizadas sobre estoque, disponibilidade e condições de pagamento diretamente pelo WhatsApp."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: waLink,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "btn-gold mt-6 inline-flex items-center gap-2 px-6 py-3.5 text-sm",
							children: ["Ver Aparelhos Disponíveis ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					]
				})
			]
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "sobre",
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "reveal order-2 lg:order-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-3xl border border-gold/20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: store_default,
						alt: "Interior elegante da loja JJ Eletrônicos Litoral",
						width: 1280,
						height: 896,
						loading: "lazy",
						className: "block h-full w-full object-cover"
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal order-1 lg:order-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex items-center gap-2 rounded-full border border-gold/25 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-gold",
						children: "Sobre a empresa"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl",
						children: [
							"Especialistas em ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gold-text",
								children: "iPhone"
							}),
							" no Litoral Norte"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-base leading-relaxed text-muted-foreground md:text-lg",
						children: "A JJ Eletrônicos Litoral nasceu para oferecer uma experiência diferenciada para quem busca comprar, trocar ou consertar seu aparelho com segurança. Trabalhamos com produtos selecionados, atendimento próximo e transparência em cada negociação."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-7 flex flex-wrap gap-2",
						children: [
							"Atendimento personalizado",
							"Transparência",
							"Qualidade",
							"Agilidade",
							"Confiança"
						].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-gold/25 bg-graphite px-3.5 py-1.5 text-xs font-medium text-white/85",
							children: p
						}, p))
					})
				]
			})]
		})
	});
}
var DIFFS = [
	{
		icon: Users,
		label: "Atendimento Humanizado"
	},
	{
		icon: Sparkles,
		label: "Produtos Selecionados"
	},
	{
		icon: Award,
		label: "Avaliação Competitiva"
	},
	{
		icon: ShieldCheck,
		label: "Garantia e Nota Fiscal"
	},
	{
		icon: Wrench,
		label: "Assistência Especializada"
	},
	{
		icon: Zap,
		label: "Suporte Pós-Venda"
	}
];
function Differentiators() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative border-y border-white/5 bg-graphite/40 py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Diferenciais",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Mais do que ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "gold-text",
						children: "vender celulares"
					})] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: DIFFS.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-premium reveal flex items-center gap-4 p-5",
						style: { transitionDelay: `${i * 50}ms` },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-gold/30 bg-ink text-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d.icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base font-medium text-white",
								children: d.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "ml-auto h-5 w-5 text-gold/80" })
						]
					}, d.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal mt-14 grid gap-5 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-3xl border border-gold/20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: repair_default,
								alt: "Assistência técnica especializada",
								width: 1280,
								height: 896,
								loading: "lazy",
								className: "h-56 w-full object-cover sm:h-72"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-3xl border border-gold/20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: trade_default,
								alt: "Troca de aparelhos com avaliação justa",
								width: 1280,
								height: 896,
								loading: "lazy",
								className: "h-56 w-full object-cover sm:h-72"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-3xl border border-gold/20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: store_default,
								alt: "Loja JJ Eletrônicos Litoral",
								width: 1280,
								height: 896,
								loading: "lazy",
								className: "h-56 w-full object-cover sm:h-72"
							})
						})
					]
				})
			]
		})
	});
}
var REVIEWS = [
	{
		name: "Rafael M.",
		text: "Atendimento impecável. Comprei um iPhone lacrado e ainda usei meu antigo na troca com uma ótima avaliação."
	},
	{
		name: "Camila S.",
		text: "Fizeram troca de tela do meu iPhone em poucas horas. Trabalho perfeito, parece zero novamente."
	},
	{
		name: "Eduardo P.",
		text: "Profissionais sérios e transparentes. Recomendo para quem busca segurança em Caraguatatuba."
	}
];
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Prova social",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Quem compra ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "gold-text",
					children: "recomenda"
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-5 md:grid-cols-3",
				children: REVIEWS.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "card-premium reveal flex h-full flex-col p-7",
					style: { transitionDelay: `${i * 80}ms` },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-1 text-gold",
							children: Array.from({ length: 5 }).map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-gold" }, k))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "mt-5 text-base leading-relaxed text-white/90",
							children: [
								"“",
								r.text,
								"”"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-6 flex items-center gap-3 border-t border-white/5 pt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-9 w-9 place-items-center rounded-full bg-graphite text-sm font-semibold text-gold",
								children: r.name.charAt(0)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-white/85",
								children: r.name
							})]
						})
					]
				}, r.name))
			})]
		})
	});
}
var FAQS = [
	{
		q: "Vocês aceitam celular usado na troca?",
		a: "Sim. Aceitamos seu aparelho usado como parte do pagamento, com avaliação rápida e justa."
	},
	{
		q: "Como funciona a avaliação?",
		a: "Você nos envia as informações do aparelho pelo WhatsApp e em poucos minutos recebe uma proposta personalizada."
	},
	{
		q: "Os aparelhos possuem garantia?",
		a: "Sim. Todos os aparelhos saem com garantia, nota fiscal e procedência comprovada."
	},
	{
		q: "Trabalham com aparelhos lacrados?",
		a: "Sim. Trabalhamos com iPhones lacrados, seminovos premium e modelos sob encomenda."
	},
	{
		q: "Fazem assistência técnica?",
		a: "Sim. Oferecemos troca de tela, troca de bateria, reparos e manutenção especializada."
	},
	{
		q: "Atendem apenas Caraguatatuba?",
		a: "Estamos em Caraguatatuba, mas atendemos toda a região do Litoral Norte."
	}
];
function FAQ() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative border-t border-white/5 bg-graphite/40 py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-5 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "FAQ",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Dúvidas ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "gold-text",
					children: "frequentes"
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "reveal mt-12 divide-y divide-white/5 overflow-hidden rounded-2xl border border-white/10 bg-ink/60",
				children: FAQS.map((f, i) => {
					const isOpen = open === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setOpen(isOpen ? null : i),
						className: "flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-white/[0.03]",
						"aria-expanded": isOpen,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-base font-medium text-white",
							children: f.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${isOpen ? "rotate-180" : ""}` })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `grid overflow-hidden px-5 transition-[grid-template-rows,opacity,padding] duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "min-h-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-muted-foreground",
								children: f.a
							})
						})
					})] }, f.q);
				})
			})]
		})
	});
}
function FinalCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contato",
		className: "relative overflow-hidden py-28 md:py-36",
		style: { background: "#020202" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0",
			style: { background: "radial-gradient(45% 45% at 50% 30%, rgba(212,175,55,0.25), transparent 70%)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "reveal relative mx-auto max-w-3xl px-5 text-center md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl",
					children: [
						"Pronto para trocar, comprar ou consertar seu ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "gold-text",
							children: "aparelho"
						}),
						"?"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-5 max-w-xl text-base text-muted-foreground md:text-lg",
					children: "Fale agora com a JJ Eletrônicos Litoral e receba atendimento personalizado."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: waLink,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "btn-gold mt-9 inline-flex items-center gap-2 px-8 py-4 text-base",
					children: ["Chamar no WhatsApp ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5" })]
				})
			]
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-white/5 bg-ink py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3 md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-9 w-9 place-items-center rounded-md border border-gold/40 bg-graphite text-gold font-black",
							children: "JJ"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm font-medium tracking-[0.18em] text-white/90",
							children: ["ELETRÔNICOS ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold",
								children: "LITORAL"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xs text-sm text-muted-foreground",
						children: "Especialistas em iPhone no Litoral Norte. Vendas, trocas e assistência técnica com atendimento personalizado."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.18em] text-gold",
						children: "Navegação"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2 text-sm text-white/80",
						children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: n.href,
							className: "transition-colors hover:text-gold",
							children: n.label
						}) }, n.href))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.18em] text-gold",
						children: "Contato"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-3 text-sm text-white/85",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-gold" }), " Caraguatatuba / SP"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://wa.me/5512983201093",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "hover:text-gold",
									children: "(12) 98320-1093"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://wa.me/5513996472668",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "hover:text-gold",
									children: "(13) 99647-2668"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://instagram.com/jjeletronicoslitoral",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "hover:text-gold",
									children: "@jjeletronicoslitoral"
								})]
							})
						]
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline mx-auto mt-10 max-w-7xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mx-auto mt-6 max-w-7xl px-5 text-center text-xs text-white/50 md:px-8",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" JJ Eletrônicos Litoral. Todos os direitos reservados. ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					" Desenvolvido por ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://vexxa.com.br",
						children: "Vexxa Desenvolvimento"
					})
				]
			})
		]
	});
}
//#endregion
export { Landing as component };
