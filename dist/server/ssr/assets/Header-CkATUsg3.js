import { i as __toESM, t as require_react } from "./react-pLjWZzrh.js";
import { c as usePathname, t as require_jsx_runtime } from "../index.js";
import Link from "./link-BGQLaE96.js";
import Image from "./image-CmyB9NMA.js";
//#region components/site-data.ts
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var navigation = [
	{
		href: "/",
		label: "Início"
	},
	{
		href: "/instituto",
		label: "Instituto"
	},
	{
		href: "/formacao-psicanalitica",
		label: "Formação Psicanalítica"
	},
	{
		href: "/metodologia",
		label: "Metodologia"
	},
	{
		href: "/cursos",
		label: "Outros Cursos"
	},
	{
		href: "/contato",
		label: "Contato"
	}
];
var contact = {
	phoneLabel: "(21) 98847-9250",
	whatsapp: "https://wa.me/5521988479250?text=Ol%C3%A1%21%20Encontrei%20o%20site%20do%20Instituto%20de%20Forma%C3%A7%C3%A3o%20Psicanal%C3%ADtica%20Cida%20Freitas%20e%20gostaria%20de%20receber%20informa%C3%A7%C3%B5es%20sobre%20o%20Curso%20de%20Psican%C3%A1lise%20Cl%C3%ADnica.",
	email: "ifpsicanaliticacidafreitas56@gmail.com",
	instagram: "@ifpsicanaliticacidafreitas"
};
//#endregion
//#region components/Header.tsx
var import_jsx_runtime = require_jsx_runtime();
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const pathname = usePathname();
	(0, import_react.useEffect)(() => {
		const onEscape = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		const onScroll = () => setScrolled(window.scrollY > 24);
		window.addEventListener("keydown", onEscape);
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => {
			window.removeEventListener("keydown", onEscape);
			window.removeEventListener("scroll", onScroll);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `site-header ${scrolled ? "is-scrolled" : ""} ${open ? "menu-is-open" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "header-inner",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					className: "brand",
					href: "/",
					"aria-label": "Instituto de Formação Psicanalítica Cida Freitas - Início",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
						src: "/brand/instituto-fpcf-emblema.webp",
						alt: "",
						width: "58",
						height: "58",
						priority: true,
						unoptimized: true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Instituto FPCF" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Formação Psicanalítica" })] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "desktop-nav",
					"aria-label": "Navegação principal",
					children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						href: item.href,
						"aria-current": pathname === item.href ? "page" : void 0,
						children: item.label
					}, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					className: "button button-primary header-cta",
					href: "/inscricao",
					children: "Quero me inscrever"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "menu-button",
					type: "button",
					"aria-expanded": open,
					"aria-controls": "mobile-menu",
					"aria-label": open ? "Fechar menu" : "Abrir menu",
					onClick: () => setOpen((value) => !value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `mobile-menu ${open ? "is-open" : ""}`,
			id: "mobile-menu",
			"aria-hidden": !open,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Navegação mobile",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mobile-menu-kicker",
						children: "Instituto de Formação Psicanalítica Cida Freitas"
					}),
					navigation.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						onClick: () => setOpen(false),
						tabIndex: open ? 0 : -1,
						href: item.href,
						"aria-current": pathname === item.href ? "page" : void 0,
						children: item.label
					}, item.href)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						onClick: () => setOpen(false),
						tabIndex: open ? 0 : -1,
						className: "button button-primary",
						href: "/inscricao",
						children: "Quero me inscrever"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mobile-menu-meta",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Formação online · Rio de Janeiro/RJ" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: contact.whatsapp,
							target: "_blank",
							rel: "noopener noreferrer",
							tabIndex: open ? 0 : -1,
							children: ["WhatsApp ", contact.phoneLabel]
						})]
					})
				]
			})
		})]
	});
}
//#endregion
export { Header };
