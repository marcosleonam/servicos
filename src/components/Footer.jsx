import { useState } from "react";
import { site } from "../config";
import { email, instagramHandle, instagramUrl, dominioAutorizado } from "../contato";

// O e-mail não é renderizado de saída: robô de spam varre a página atrás
// de endereço em texto puro. Fica atrás de um clique e só então é montado.
function Email() {
  const [aberto, setAberto] = useState(false);

  if (!aberto) {
    return (
      <button
        type="button"
        onClick={() => setAberto(true)}
        className="text-sm text-white/45 underline underline-offset-4 transition-colors hover:text-accent-soft focus-visible:text-accent-soft focus-visible:outline-none"
      >
        mostrar e-mail
      </button>
    );
  }

  const end = email();
  return (
    <a href={`mailto:${end}`} className="text-sm text-white/70 transition-colors hover:text-accent-soft">
      {end}
    </a>
  );
}

export default function Footer() {
  const autorizado = dominioAutorizado();
  return (
    <footer className="relative border-t border-line py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center">
        <span className="inline-flex items-center gap-2.5">
          <span className="marca-grade" aria-hidden="true">
            <i /><i /><i /><i />
          </span>
          <span className="display text-xl">{site.nome}</span>
        </span>
        <p className="text-sm text-white/45">{site.papel}</p>
        <Email />
        {autorizado && (
          <a
            href={instagramUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/45 transition-colors hover:text-accent-soft"
          >
            {instagramHandle()}
          </a>
        )}
        <a
          href="./design-system.html"
          className="etiqueta mt-2 text-[10px] text-white/25 transition-colors hover:text-accent-soft"
        >
          design system
        </a>
        <p className="etiqueta mt-2 text-[10px] text-white/20">
          © {new Date().getFullYear()} — todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
