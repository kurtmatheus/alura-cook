import { E as bind_props, D as pop, A as push, F as escape_html, G as ensure_array_like, I as store_get, J as unsubscribe_stores, K as slot } from "../../chunks/index.js";
import "clsx";
import { T as Tag, m as minhaLista } from "../../chunks/minhaLista.js";
function Cabecalho($$payload) {
  $$payload.out += `<header class="svelte-l2hbut"><img src="/imagens/alura-cook-logo.svg" alt="Logo do Alura Cook"></header>`;
}
function MeuIngrediente($$payload, $$props) {
  push();
  let ingrediente = $$props["ingrediente"];
  $$payload.out += `<div class="meu-ingrediente-container svelte-1sgumbm">`;
  Tag($$payload, {
    ativa: true,
    children: ($$payload2) => {
      $$payload2.out += `<button class="close svelte-1sgumbm"></button> ${escape_html(ingrediente)}`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ingrediente });
  pop();
}
function MinhaLista($$payload) {
  var $$store_subs;
  const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$minhaLista", minhaLista));
  $$payload.out += `<section class="minha-lista svelte-1wl1ngf"><h2 class="svelte-1wl1ngf">Sua Lista:</h2> <ul class="meus-ingredientes svelte-1wl1ngf"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let ingrediente = each_array[$$index];
    $$payload.out += `<li>`;
    MeuIngrediente($$payload, { ingrediente });
    $$payload.out += `<!----></li>`;
  }
  $$payload.out += `<!--]--></ul></section>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
}
function Rodape($$payload) {
  $$payload.out += `<footer class="svelte-9n9hln"><img src="/icones/registered.png" alt="icone marga registrada" class="registered svelte-9n9hln"> Copyright Alura Cook – 2022</footer>`;
}
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out += `<div class="container-principal svelte-qxo4vf">`;
  Cabecalho($$payload);
  $$payload.out += `<!----> <div class="estilo-principal svelte-qxo4vf">`;
  if (store_get($$store_subs ??= {}, "$minhaLista", minhaLista).length !== 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="minha-lista-container svelte-qxo4vf">`;
    MinhaLista($$payload);
    $$payload.out += `<!----> <div class="divisoria svelte-qxo4vf"></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div> `;
  Rodape($$payload);
  $$payload.out += `<!----></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
