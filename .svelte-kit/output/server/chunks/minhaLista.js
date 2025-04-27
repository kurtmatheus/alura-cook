import { U as fallback, T as attr_class, K as slot, E as bind_props, O as stringify } from "./index.js";
import { w as writable } from "./index2.js";
function Tag($$payload, $$props) {
  let ativa = fallback($$props["ativa"], false);
  let tamanho = fallback($$props["tamanho"], "md");
  let desabilitada = fallback($$props["desabilitada"], false);
  $$payload.out += `<div${attr_class(`tag ${stringify(tamanho)}`, "svelte-pqfvts", { "ativa": ativa, "desabilitada": desabilitada })}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ativa, tamanho, desabilitada });
}
const { set, subscribe, update } = writable([]);
const minhaLista = {
  set,
  subscribe,
  adicionarIngrediente(ingrediente) {
    update((valorAtual) => [...valorAtual, ingrediente]);
  },
  removerIngrediente(ingrediente) {
    update((valorAtual) => valorAtual.filter(
      (i) => i !== ingrediente
    ));
  }
};
export {
  Tag as T,
  minhaLista as m
};
