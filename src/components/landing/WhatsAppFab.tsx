const WA_NUMBER = "5512983201093";
const WA_MESSAGE = encodeURIComponent(
  "Olá, vim pelo site da JJ Eletrônicos Litoral e gostaria de comprar, trocar ou avaliar meu aparelho.",
);

export const waLink = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export function WhatsAppFab() {
  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 blur-xl animate-pulse" aria-hidden />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] transition-transform duration-300 group-hover:scale-110">
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden>
          <path d="M19.11 17.58c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15s-.78.98-.96 1.18c-.18.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51l-.58-.01c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.13 4.54.72.31 1.28.5 1.71.64.72.23 1.37.2 1.89.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35zM16.02 4C9.39 4 4 9.4 4 16.04c0 2.13.56 4.2 1.6 6.03L4 28l6.1-1.59a11.97 11.97 0 0 0 5.92 1.55h.01c6.62 0 12.01-5.4 12.01-12.05A12 12 0 0 0 16.02 4zm7.05 19.06a9.94 9.94 0 0 1-7.05 2.93h-.01c-1.78 0-3.52-.48-5.05-1.38l-.36-.21-3.62.94.96-3.53-.23-.37a10.04 10.04 0 0 1-1.53-5.4c0-5.53 4.49-10.04 10.01-10.04a9.95 9.95 0 0 1 7.07 2.94 9.95 9.95 0 0 1 2.93 7.1c0 5.53-4.5 10.02-10.02 10.02z" />
        </svg>
      </span>
    </a>
  );
}
