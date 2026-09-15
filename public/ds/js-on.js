/* Roda no <head>, antes de o corpo pintar. Marca que o JS está vivo.
   Só com essa marca o CSS segura as animações de surgimento — assim, se
   este arquivo (ou o ds.js) não carregar, a página aparece inteira e
   estática em vez de ficar em branco esperando um observer que não veio. */
document.documentElement.classList.add("js-anim");
