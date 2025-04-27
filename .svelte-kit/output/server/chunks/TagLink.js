import { S as element, E as bind_props, K as slot, T as attr_class, O as stringify, U as fallback, N as attr, V as attr_style } from "./index.js";
import { T as Tag } from "./minhaLista.js";
function Titulo($$payload, $$props) {
  let tag = $$props["tag"];
  element(
    $$payload,
    tag,
    () => {
      $$payload.out += `${attr_class(`titulo tag-${stringify(tag)}`, "svelte-11otyxf")}`;
    },
    () => {
      $$payload.out += `<!---->`;
      slot($$payload, $$props, "default", {});
      $$payload.out += `<!---->`;
    }
  );
  bind_props($$props, { tag });
}
function Card($$payload, $$props) {
  $$payload.out += `<div class="card svelte-jfu0oz"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
}
function TagLink($$payload, $$props) {
  let href = fallback($$props["href"], "");
  let desabilitada = fallback($$props["desabilitada"], false);
  $$payload.out += `<a${attr("href", href)}${attr_style("", { "pointer-events": desabilitada ? "none" : "" })}>`;
  Tag($$payload, {
    ativa: true,
    tamanho: "lg",
    desabilitada,
    children: ($$payload2) => {
      $$payload2.out += `<!---->`;
      slot($$payload2, $$props, "default", {});
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></a>`;
  bind_props($$props, { href, desabilitada });
}
export {
  Card as C,
  Titulo as T,
  TagLink as a
};
